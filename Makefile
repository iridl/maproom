PLAT ?= $(shell miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)
#RULESET ?= owl2-rl-conf
RULESET ?= owl-max-optimized

BUILD = ___build

VER = $(shell git-generate-version-info maproom tag)
VER_ID = $(shell git-generate-version-info maproom id)
TARBALL = $(VER)
# maproom source and build
mapsrc = $(shell perl maproomtools/findsrc.pl src maproom)
maphtmlbld = $(shell perl maproomtools/findsrc.pl bld maproom)
# dldoc source and build
dldocsrc = $(shell perl maproomtools/findsrc.pl src dldoc)
dldoclocalsrc = $(shell cd dldoc; perl ../maproomtools/findsrc.pl src)
dldochtmlbld = $(shell perl maproomtools/findsrc.pl bld dldoc)

topdir = $(shell pwd)

.PHONY: clean distclean tarball install build

build: build.tag
build.tag: maproom/version.xml localmaproom.conf maproom/maproomtop.owl $(maphtmlbld) dldoc/topindex.owl $(dldochtmlbld)
	touch build.tag

builddl.tag: dldoc/topindex.owl $(dldochtmlbld)
	touch builddl.tag

localmaproom.conf:	localmaproom.conf.tpost config.lua
	@echo "Generating local apache configuration file localmaproom.conf"
	miconf -c config.lua -p '[.]tpost$$' -r .

# really depends on maproom/newmaproomcache/owlimMaxRepository.nt
# but tabs.nt is made at same time and we need it explicitly in this file
maproom/maproomtop.owl:	Makefile config.lua maproom/tabs.xml
	cd maproom; ../maproomtools/gen_maproomtop.pl $(RULESET);

maproom/tabs.nt: 	Makefile config.lua maproom/maproomregistry.owl
	cd maproom; ../maproomtools/runnewmaproom.pl $(RULESET);

maproom/maproomregistry.owl:	$(mapsrc)
	cd maproom; ../maproomtools/gen_registry.pl;

# dldoc targets -- essentially the same as the dldoc Makefile,
# except the tabs.xml is merged with the maproom

dldoc/tabs.nt:	dldoc/filelist.owl maproomtools/ingridregistry.owl
		@echo collecting dldoc info
		cd dldoc; rm -rf doccache; rdfcache -cache=doccache -construct=tabconstruct.serql -constructoutput=./tabs.nt  file://$(topdir)/maproomtools/ingridregistry.owl file://$(topdir)/dldoc/filelist.owl > rdflogfile

dldoc/filelist.owl:	$(dldocsrc) maproomtools/sperl.pl Makefile
	perl maproomtools/sperl.pl $(dldoclocalsrc) > $@

# maproom targets
utbuild.tag: build.tag
	install -d $(BUILD)
	install -d $(BUILD)/maproom
	tar cf - -C maproom . | tar xf - -C $(BUILD)/maproom
	cd maproom; git-update-timestamp '$(VER_ID)' '*' $(abspath $(BUILD)/maproom)
	cd $(BUILD)/maproom; rm -f tabs.xml top.xml *.xslt *.serql *.nt; rm -rf newmaproomcache logs;
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
	rm -f build.tag utbuild.tag 
	rm -rf $(BUILD)
	rm $(maphtmlbld)
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

text.xml:	text.nt
		rapper -i ntriples -o rdfxml-abbrev -f 'xmlns:iriterms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"' text.nt > text.xml

text.nt:	maproom/newmaproomcache/owlimMaxRepository.nt textconstruct.serql
		rdfcache -cache=maproom/newmaproomcache -construct=textconstruct.serql -constructoutput=./text.nt file://`pwd`/maproom/maproomregistry.owl

facetsearch:	facetcache/owlimMaxRepository.nt

facetcache/owlimMaxRepository.nt:	maproom/maproomtop.owl
		rm -rf facetcache
		rdfcache -cache=facetcache http://iridl.ldeo.columbia.edu/maproom/maproomtop.owl
tabs.nt:	maproom/tabs.nt dldoc/tabs.nt
	cat maproom/tabs.nt dldoc/tabs.nt > tabs.nt

tabs.xml:	tabs.nt
		rapper -i ntriples -o rdfxml-abbrev -f 'xmlns:terms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"' -f 'xmlns:reg="http://iridl.ldeo.columbia.edu/maproom/maproomregistry.owl#"' -f 'xmlns:map="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"' -f 'xmlns:owl="http://www.w3.org/2002/07/owl#"' -f 'xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"' tabs.nt > tabs.xml

$(maphtmlbld):	$(subst .html,.xhtml, $@) tabs.xml maproomtools/tab.xslt
	saxon_transform $(subst .html,.xhtml, $@) maproomtools/tab.xslt topdir="$(topdir)"  metadata="$(topdir)/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

$(dldochtmlbld):	$(subst .html,.xhtml, $@) tabs.xml maproomtools/tab.xslt
	saxon_transform $(subst .html,.xhtml, $@) maproomtools/tab.xslt topdir="$(topdir)/dldoc"  alttopdir="$(topdir)"  metadata="$(topdir)/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@
