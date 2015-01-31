PLAT ?= $(shell miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)
#RULESET ?= owl2-rl-conf
RULESET ?= owl-max-optimized

BUILD = ___build

VER = $(shell git-generate-version-info maproom tag)
VER_ID = $(shell git-generate-version-info maproom id)
TARBALL = $(VER)
# rapper namespaces
rapperns = -f 'xmlns:terms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"' -f 'xmlns:reg="http://iridl.ldeo.columbia.edu/maproom/maproomregistry.owl#"' -f 'xmlns:map="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"' -f 'xmlns:owl="http://www.w3.org/2002/07/owl#"' -f 'xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"' 
# maproom source and build
mapsrc = $(shell perl maproomtools/findsrc.pl src maproom) maproom/Imports/moremetadata.owl localconfig/ui.owl
maplocalsrc = $(shell cd maproom ; perl ../maproomtools/findsrc.pl src) Imports/moremetadata.owl ../localconfig/ui.owl
maphtmlbld = $(shell perl maproomtools/findsrc.pl bld maproom)
# dldoc source and build
# source files
dldocsrc = $(shell perl maproomtools/findsrc.pl src dldoc) localconfig/ui.owl
# sources files without the /dldoc
dldoclocalsrc = $(shell cd dldoc; perl ../maproomtools/findsrc.pl src) ../localconfig/ui.owl
# html files built from xhtml
dldochtmlbld = $(shell perl maproomtools/findsrc.pl bld dldoc/docfind) $(shell perl maproomtools/findsrc.pl bld dldoc/dochelp) 
jointhtmlbld = $(subst .xhtml,.html, $(shell ls dldoc/index.xhtml*))
# dlcopy: html files built and source files not build from
dlout = $(shell perl maproomtools/findsrc.pl out)
# dlcopy: html files built and source files not build from
dllocalout = $(shell cd dldoc; perl ../maproomtools/findsrc.pl out)
# dlcopy: img files
dlimgs = $(shell find -L dldoc -name '*png') $(shell find -L dldoc -name '*jpg') $(shell find -L dldoc -name '*gif')
# dlcopy: css files
dlcss = $(shell find -L dldoc -name '*css')

# present directory used as server top for all but dldoc
#  dldoc is server top for its files

topdir = $(shell pwd)
.PHONY: clean distclean tarball install build

build: build.tag
build.tag: maproom/version.xml localmaproom.conf maproom/maproomtop.owl $(maphtmlbld) dldoc/topindex.owl $(dldochtmlbld) $(jointdochtmlbld)
	touch build.tag

localmaproom.conf:	localmaproom.conf.tpost config.lua
	@echo "Generating local apache configuration file localmaproom.conf"
	miconf -c config.lua -p '[.]tpost$$' -r .

# really depends on maproom/newmaproomcache/owlimMaxRepository.nt
# but tabs.nt is made at same time and we need it explicitly in this Makefile
maproom/maproomtop.owl:	Makefile config.lua maproom/tabs.nt
	cd maproom; ../maproomtools/gen_maproomtop.pl $(RULESET) file://$(topdir)/maproomfilelist.owl;

maproom/tabs.nt: 	Makefile config.lua maproomfilelist.owl maproomtools/ingridregistry.owl maproomtools/tabconstruct.serql
#	cd maproom; ../maproomtools/runnewmaproom.pl $(RULESET);
		@echo collecting maproom info
		cd maproom; rm -rf newmaproomcache; mkdir newmaproomcache ; rdfcache -ruleset=$(RULESET)  -cache=newmaproomcache -construct=../maproomtools/tabconstruct.serql -constructoutput=./tabs.nt  file://$(topdir)/maproomtools/ingridregistry.owl file://$(topdir)/maproomfilelist.owl > newmaproomcache/rdfcachelog.txt
	sort maproom/tabs.nt > maproom/hold.nt
	mv maproom/hold.nt maproom/tabs.nt

maproomfilelist.owl:	maproomtools/sperl.pl $(mapsrc)
#	cd maproom; ../maproomtools/gen_registry.pl;
	perl maproomtools/sperl.pl $(mapsrc) > $@

# dldoc targets -- essentially the same as the dldoc Makefile,
# except the tabs.xml is merged with the maproom

dldoc/tabs.nt:	dldoc/filelist.owl maproomtools/ingridregistry.owl maproomtools/tabconstruct.serql
		@echo collecting dldoc info
		cd dldoc; rm -rf doccache; mkdir doccache ; rdfcache -ruleset=$(RULESET)  -cache=doccache -construct=../maproomtools/tabconstruct.serql -constructoutput=./tabs.nt  file://$(topdir)/maproomtools/ingridregistry.owl file://$(topdir)/dldoc/filelist.owl > doccache/rdflogfile
	sort dldoc/tabs.nt > dldoc/hold.nt
	mv dldoc/hold.nt dldoc/tabs.nt

dldoc/filelist.owl:	$(dldocsrc) maproomtools/sperl.pl Makefile
	perl maproomtools/sperl.pl $(dldoclocalsrc) > $@

dldoc/topindex.owl:	$(dlout) maproomtools/sperl.pl
	perl maproomtools/sperl.pl $(dllocalout) > $@

# merged maproom and dldoc install to BUILD dirs
utbuild.tag: build.tag
	install -d $(BUILD)
	install -d $(BUILD)/maproom
	tar cf - -C maproom . | tar xf - -C $(BUILD)/maproom
	cd maproom; git-update-timestamp '$(VER_ID)' '*' $(abspath $(BUILD)/maproom)
	cd $(BUILD)/maproom; rm -f tabs.xml top.xml *.xslt *.serql *.nt; rm -rf newmaproomcache logs;
	install -d $(BUILD)/dldoc
	tar cf - $(dlout) $(dlimgs) $(dlcss) dldoc/topindex.owl | tar xvf - -C $(BUILD)
	install -d $(BUILD)/localconfig
	tar cf - -C localconfig --exclude=.git . | tar xf - -C $(BUILD)/localconfig
	install -d $(BUILD)/uicore
	tar cf - -C uicore --exclude=.git . | tar xf - -C $(BUILD)/uicore
	install -d $(BUILD)/pure
	tar cf - -C pure --exclude=.git . | tar xf - -C $(BUILD)/pure
	install -d $(BUILD)/jsonld.js
	tar cf - -C jsonld.js --exclude=.git . | tar xf - -C $(BUILD)/jsonld.js
	ln -s jsonld.js/js $(BUILD)/jsonld
	cp .htaccess $(BUILD)
	touch utbuild.tag

maproom/version.xml: .git
	git-generate-version-info maproom xml >$@

clean:
	rm -f build.tag utbuild.tag tabs.nt tabs.xml maproom/tabs.nt maproom/tabs.xml dldoc/tabs.nt dldoc/tabs.xml maproomfilelist.owl dldoc/filelist.owl
	rm -rf $(BUILD)
	rm -f $(maphtmlbld)
	rm -f $(dldochtmlbld)
	rm -f $(jointhtmlbld)
	rm -rf maproom/newmaproomcache

distclean: clean

install: utbuild.tag
	install -d $(PREFIX)
	tar cf - -C $(BUILD) . | tar xf - -C $(PREFIX)

tarball: utbuild.tag
	install -d $(TARBALL)
	tar cf - -C $(BUILD) . | tar xf - -C $(TARBALL)
	tar cvfz $(TARBALL).tgz $(TARBALL)
	rm -r $(TARBALL)

text.txt:	text.xml text.xslt
		saxon_transform $< text.xslt > $@

text.nt:	maproom/newmaproomcache/owlimMaxRepository.nt textconstruct.serql
		rdfcache -ruleset=$(RULESET)  -cache=maproom/newmaproomcache -construct=textconstruct.serql -constructoutput=./text.nt file://`pwd`/maproomfilelist.owl

facetsearch:	facetcache/owlimMaxRepository.nt

facetcache/owlimMaxRepository.nt:	maproom/maproomtop.owl
		rm -rf facetcache
		rdfcache -ruleset=$(RULESET)  -cache=facetcache http://iridl.ldeo.columbia.edu/maproom/maproomtop.owl
tabs.nt:	maproom/tabs.nt dldoc/tabs.nt
	sort maproom/tabs.nt dldoc/tabs.nt > tabs.nt

%.xml:	%.nt
		rapper -i ntriples -o rdfxml-abbrev -f 'xmlns:terms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"' -f 'xmlns:reg="http://iridl.ldeo.columbia.edu/maproom/maproomregistry.owl#"' -f 'xmlns:map="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"' -f 'xmlns:owl="http://www.w3.org/2002/07/owl#"' -f 'xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"' -f 'xmlns:twitter="http://dev.twitter.com/cards#"' $<   > $@

$(maphtmlbld):	$(subst .html,.xhtml, $@) maproom/tabs.xml maproomtools/tab.xslt
	saxon_transform $(subst .html,.xhtml, $@) maproomtools/tab.xslt topdir="$(topdir)"  metadata="$(topdir)/maproom/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

$(dldochtmlbld):	$(subst .html,.xhtml, $@) dldoc/tabs.xml maproomtools/tab.xslt
	saxon_transform $(subst .html,.xhtml, $@) maproomtools/tab.xslt topdir="$(topdir)/dldoc"  metadata="$(topdir)/dldoc/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

$(jointhtmlbld):	$(subst .html,.xhtml, $@) tabs.xml maproomtools/tab.xslt
	saxon_transform $(subst .html,.xhtml, $@) maproomtools/tab.xslt topdir="$(topdir)/dldoc"  alttopdir="$(topdir)"  metadata="$(topdir)/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@
