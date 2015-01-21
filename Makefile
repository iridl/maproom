PLAT ?= $(shell miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)
#RULESET ?= owl2-rl-conf
RULESET ?= owl-max-optimized

BUILD = ___build

VER = $(shell git-generate-version-info maproom tag)
VER_ID = $(shell git-generate-version-info maproom id)
TARBALL = $(VER)
maphtmlbld = $(shell perl maproomtools/findsrc.pl bld maproom)
mapsrc = $(shell perl maproomtools/findsrc.pl src maproom)

.PHONY: clean distclean tarball install build

build: build.tag
build.tag: maproom/version.xml localmaproom.conf maproom/maproomtop.owl $(maphtmlbld)
	touch build.tag

localmaproom.conf:	localmaproom.conf.tpost config.lua
	@echo "Generating local apache configuration file localmaproom.conf"
	miconf -c config.lua -p '[.]tpost$$' -r .

# really depends on maproom/newmaproomcache/owlimMaxRepository.nt
# but tabs.xml is made at same time and we need it explicitly in this file
maproom/maproomtop.owl:	Makefile config.lua maproom/tabs.xml
	cd maproom; ../maproomtools/gen_maproomtop.pl $(RULESET);

maproom/tabs.xml: 	Makefile config.lua maproom/maproomregistry.owl
	cd maproom; ../maproomtools/runnewmaproom.pl $(RULESET);

maproom/maproomregistry.owl:	$(mapsrc)
	cd maproom; ../maproomtools/gen_registry.pl;

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
		rdfcache -cache=maproom/newmaproomcache -construct=textconstruct.serql -constructoutput=./text.nt file:///`pwd`/maproom/maproomregistry.owl

facetsearch:	facetcache/owlimMaxRepository.nt

facetcache/owlimMaxRepository.nt:	maproom/maproomtop.owl
		rm -rf facetcache
		rdfcache -cache=facetcache http://iridl.ldeo.columbia.edu/maproom/maproomtop.owl
tabs.xml:	maproom/tabs.xml
		cp maproom/tabs.xml tabs.xml

%.html.en:	%.xhtml.en tabs.xml maproomtools/tab.xslt
	saxon_transform $< maproomtools/tab.xslt topdir="`pwd`" metadata="`pwd`/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

%.html.es:	%.xhtml.es tabs.xml maproomtools/tab.xslt
	saxon_transform $< maproomtools/tab.xslt topdir="`pwd`"  metadata="`pwd`/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

%.html.fr:	%.xhtml.fr tabs.xml maproomtools/tab.xslt
	saxon_transform $< maproomtools/tab.xslt topdir="`pwd`"  metadata="`pwd`/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

%.html.ru:	%.xhtml.ru tabs.xml maproomtools/tab.xslt
	saxon_transform $< maproomtools/tab.xslt topdir="`pwd`"  metadata="`pwd`/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

%.html.id:	%.xhtml.id tabs.xml maproomtools/tab.xslt
	saxon_transform $< maproomtools/tab.xslt topdir="`pwd`"  metadata="`pwd`/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@

%.html:	%.xhtml tabs.xml maproomtools/tab.xslt
	saxon_transform $< maproomtools/tab.xslt topdir="`pwd`"  metadata="`pwd`/tabs.xml" | sed -e '1 N;s/[\n]* *SYSTEM[^>]*//' > $@
