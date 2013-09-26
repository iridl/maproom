PLAT ?= $(shell miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)

BUILD = ___build

VER = $(shell git-generate-version-info maproom tag)
VER_ID = $(shell git-generate-version-info maproom id)
TARBALL = $(VER)

.PHONY: clean distclean tarball install build

build: build.tag
build.tag: maproom/version.xml
	cd maproom; ../maproomtools/build_maproom.pl;
	echo "Generating local apache configuration file localmaproom.conf. . ."; miconf -c config.lua -p '[.]tpost$$' -r .
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
	cp .htaccess $(BUILD)
	touch utbuild.tag
	
maproom/version.xml: .git
	git-generate-version-info maproom xml >$@

clean:
	rm -f build.tag utbuild.tag 
	rm -rf $(BUILD)

distclean: clean

install: utbuild.tag
	install -d $(PREFIX)
	tar cf - -C $(BUILD) . | tar xf - -C $(PREFIX)

tarball: utbuild.tag
	install -d $(TARBALL)
	tar cf - -C $(BUILD) . | tar xf - -C $(TARBALL)
	tar cvfz $(TARBALL).tgz $(TARBALL)
	rm -r $(TARBALL)
