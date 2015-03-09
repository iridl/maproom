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
# to add additional metadata to a build, add an owl file in maproom/Imports
mapsrc = $(shell perl maproomtools/findsrc.pl src maproom) $(shell find maproom -path 'maproom/Imports*' -name '*.owl') localconfig/ui.owl
maplocalsrc = $(shell cd maproom ; perl ../maproomtools/findsrc.pl src) $(shell find Imports  -name '*.owl') ../localconfig/ui.owl
maphtmlbld = $(shell perl maproomtools/findsrc.pl bld maproom)
maphtmlsrc = $(shell perl maproomtools/findsrc.pl srchtml maproom)
# dldoc source and build
# source files
dldocsrc = dldoc/index.xhtml $(shell perl maproomtools/findsrc.pl src dldoc) localconfig/ui.owl
# sources files without the /dldoc
dldoclocalsrc = index.xhtml $(shell cd dldoc; perl ../maproomtools/findsrc.pl src) ../localconfig/ui.owl
# html files built from xhtml
dldochtmlbld = $(shell perl maproomtools/findsrc.pl bld dldoc/docfind) $(shell perl maproomtools/findsrc.pl bld dldoc/dochelp) 
# html files not built from xhtml
dldochtmlsrc = $(shell perl maproomtools/findsrc.pl srchtml dldoc) 
# built using joint dldoc/maproom metdata
jointhtmlbld = dldoc/index.html
# dlcopy: html files built and source files not build from
dlout = dldoc/index.html $(shell perl maproomtools/findsrc.pl out dldoc)
# dlcopy: html files built and source files not build from
dllocalout = index.html $(shell cd dldoc; perl ../maproomtools/findsrc.pl out)
# dlcopy: img files
dlimgs = $(shell find -L dldoc -name '*png') $(shell find -L dldoc -name '*jpg') $(shell find -L dldoc -name '*gif')
# dlcopy: css files
dlcss = $(shell find -L dldoc -name '*css')
# dldoc files that are postprocessed by saxon (utbuild.tag)
builddirdocsrc = $(subst dldoc,$(BUILD)/dldoc,$(dldochtmlsrc))
# dldoc files that are processed by saxon (build.tag) and copied on utbuild.tag
builddirdocbld = $(subst dldoc,$(BUILD)/dldoc,$(dldochtmlbld)) $(subst dldoc,$(BUILD)/dldoc,$(jointhtmlbld))
# maproom files that are postprocessed by saxon (utbuild.tag)
builddirmapsrc = $(subst maproom,$(BUILD)/maproom,$(maphtmlsrc))
# dldoc files that are processed by saxon (build.tag) and copied on utbuild.tag
builddirmapbld = $(subst maproom,$(BUILD)/maproom,$(maphtmlbld))

# present directory used as server top for all but dldoc
#  dldoc is server top for its files

topdir = $(shell pwd)
.PHONY: clean distclean tarball install build builddirs

build: build.tag
build.tag: maproom/version.xml localmaproom.conf maproom/maproomtop.owl $(maphtmlbld) dldoc/topindex.owl $(dldochtmlbld) $(jointdochtmlbld)
	touch build.tag

localmaproom.conf:	localmaproom.conf.tpost config.lua
	@echo "Generating local apache configuration file localmaproom.conf"
	miconf -c config.lua -p '[.]tpost$$' -r .

localmaproombuild.conf:	localmaproombuild.conf.tpost config.lua
	@echo "Generating local apache configuration file localmaproom.conf"
	miconf -c config.lua -p '[.]tpost$$' -r .

# index.xhtml in top directory of maproom overrides dldoc/index.xhtml
dldoc/index.xhtml:	index.xhtml
	cp index.xhtml dldoc/
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

# copy to $BUILD with xslt processing
# tabs.xml is what is actually delaying the copy until after the pages are built
# because I cannot generate the particular file prereq
$(builddirdocsrc):	dldoc/tabs.xml | $(BUILD)
	mkdir -p $(@D)
#	cp $(subst $(BUILD)/,,$@) $@
	saxon_transform -s:$(subst $(BUILD)/dldoc,dldoc,$@) -xsl:maproomtools/tab.xslt topdir="$(topdir)/dldoc"  metadata="$(topdir)/dldoc/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

# tabs.xml is what is actually delaying the copy until after the pages are built
# because I cannot generate the particular file prereq
$(builddirmapsrc):	maproom/tabs.xml | $(BUILD)
	mkdir -p $(@D)
#	cp $(subst $(BUILD)/,,$@) $@
	saxon_transform -s:$(subst $(BUILD)/,,$@) -xsl:maproomtools/tab.xslt topdir="$(topdir)"  metadata="$(topdir)/maproom/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

# copy to BUILD without xslt processing
# build.tag is what is actually delaying the copy until after the pages are built
# because I cannot generate the particular file prereq
$(builddirdocbld) $(builddirmapbld):	$(BUILD) build.tag
	mkdir -p $(@D)
	cp $(subst $(BUILD)/,,$@) $@

# merged maproom and dldoc install to BUILD dirs

$(BUILD):	.htaccess
	install -d $@
	install -d $(BUILD)/dldoc
	install -d $(BUILD)/localconfig
	install -d $(BUILD)/maproom
	install -d $(BUILD)/uicore
	install -d $(BUILD)/pure
	install -d $(BUILD)/jsonld.js
	cd $(BUILD) ; ln -sf jsonld.js jsonld
	cp .htaccess $(BUILD)

utbuild.tag: build.tag localmaproombuild.conf $(builddirdocbld) $(builddirdocsrc) $(builddirmapbld) $(builddirmapsrc) | $(BUILD)
	(cd maproom ; find . -type f ! -name '*.html*' ! -name '*.xhtml*' ) |  tar cf - -C maproom  --files-from=- --exclude=.git  | tar xf - -C $(BUILD)/maproom
	cd maproom; git-update-timestamp '$(VER_ID)' '*' $(abspath $(BUILD)/maproom)
	cd $(BUILD)/maproom; rm -f tabs.xml top.xml *.xhtml *.xslt *.serql *.nt; rm -rf newmaproomcache logs;
	tar cf - $(dlimgs) $(dlcss) dldoc/topindex.owl | tar xvf - -C $(BUILD)
	tar cf - -C localconfig --exclude=.git . | tar xf - -C $(BUILD)/localconfig
	tar cf - -C uicore --exclude=.git . | tar xf - -C $(BUILD)/uicore
	tar cf - -C pure --exclude=.git . | tar xf - -C $(BUILD)/pure
	tar cf - -C jsonld.js --exclude=.git . | tar xf - -C $(BUILD)/jsonld.js
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

$(maphtmlbld):	maproom/tabs.xml maproomtools/tab.xslt
	saxon_transform -s:$(subst .html,.xhtml,$@) -xsl:maproomtools/tab.xslt topdir="$(topdir)"  metadata="$(topdir)/maproom/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

$(dldochtmlbld):	dldoc/tabs.xml maproomtools/tab.xslt
	saxon_transform -s:$(subst .html,.xhtml,$@) -xsl:maproomtools/tab.xslt topdir="$(topdir)/dldoc"  metadata="$(topdir)/dldoc/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

$(jointhtmlbld):	tabs.xml maproomtools/tab.xslt
	saxon_transform -s:$(subst .html,.xhtml,$@) -xsl:maproomtools/tab.xslt topdir="$(topdir)/dldoc"  alttopdir="$(topdir)"  metadata="$(topdir)/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@
