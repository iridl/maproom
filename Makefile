PLAT ?= $(shell miconf/scripts/miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)

BUILD = ___build

INSTALL = install
TAR = tar
GIT = git
MV = mv

VER = $(shell miconf/scripts/git-generate-version-info maproom tag)
VER_ID = $(shell miconf/scripts/git-generate-version-info maproom id)
TARBALL = $(VER)

.PHONY: clean distclean tarball install build

build: build.tag
build.tag: maproom/version.xml
	cd maproom; \
	   ../maproomtools/build_maproom.pl;
	touch build.tag

utbuild.tag: build.tag
	$(INSTALL) -d $(BUILD)
	$(INSTALL) -d $(BUILD)/maproom
	$(TAR) cf - -C maproom . | $(TAR) xf - -C $(BUILD)/maproom
	cd maproom; \
	   ../miconf/scripts/git-update-timestamp '$(VER_ID)' '*' $(abspath $(BUILD)/maproom)
	cd $(BUILD)/maproom; \
	   rm -f *.xml *.xslt *.serql *.nt; \
	   rm -rf newmaproomcache logs;
	$(INSTALL) -d $(BUILD)/uicore
	$(TAR) cf - -C uicore --exclude=.git . | $(TAR) xf - -C $(BUILD)/uicore
	$(INSTALL) -d $(BUILD)/pure
	$(TAR) cf - -C pure --exclude=.git . | $(TAR) xf - -C $(BUILD)/pure
	touch utbuild.tag
	
maproom/version.xml: .git
	miconf/scripts/git-generate-version-info maproom xml >$@

clean:
	$(GIT) clean -f -e *.tgz -x -d

distclean: clean

install: utbuild.tag
	$(INSTALL) -d $(PREFIX)
	$(TAR) cf - -C $(BUILD) . | $(TAR) xf - -C $(PREFIX)

tarball: utbuild.tag
	$(INSTALL) -d $(TARBALL)
	$(TAR) cf - -C $(BUILD) . | $(TAR) xf - -C $(TARBALL)
	$(TAR) cvfz $(TARBALL).tgz $(TARBALL)
	$(RM) -r $(TARBALL)
