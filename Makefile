PLAT ?= $(shell miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)
#RULESET ?= owl2-rl-conf
RULESET ?= owl-max-optimized

BUILD = ___build

VER = $(shell git-generate-version-info maproom tag)
VER_ID = $(shell git-generate-version-info maproom id)
TARBALL = $(VER)

.PHONY: clean distclean tarball install build

build: build.tag
build.tag: maproom/version.xml
	cd maproom; ../maproomtools/build_maproom.pl $(RULESET);
	@echo "Generating local apache configuration file localmaproom.conf"
	miconf -c config.lua -p '[.]tpost$$' -r .
	touch build.tag

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
