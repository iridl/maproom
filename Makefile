PLAT ?= $(shell miconf/scripts/miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)

BUILD = ___build

INSTALL = install
TAR = tar
MV = mv

VER = $(shell miconf/scripts/git-generate-version-info maproom tag)
TARBALL = $(VER)

.PHONY: build clean distclean tarball install

build: version.xml
	$(INSTALL) -d $(BUILD)
	$(INSTALL) -d $(BUILD)/maproom
	$(TAR) cf - -C maproom . | $(TAR) xf - -C $(BUILD)/maproom
	cd maproom; \
	   ../miconf/scripts/git-update-timestamp HEAD '*' $(abspath $(BUILD)/maproom)
	cd $(BUILD)/maproom; \
	   ../../maproomtools/build_maproom.pl; \
	   rm -f *.xml *.xslt *.serql *.nt; \
	   rm -rf newmaproomcache logs; \
	   cp ../../version.xml .
	$(INSTALL) -d $(BUILD)/uicore
	$(TAR) cf - -C uicore --exclude=.git . | $(TAR) xf - -C $(BUILD)/uicore
	$(INSTALL) -d $(BUILD)/pure
	$(TAR) cf - -C pure --exclude=.git . | $(TAR) xf - -C $(BUILD)/pure
	

version.xml: .git
	miconf/scripts/git-generate-version-info maproom xml >$@

clean:
	$(RM) -f version.xml
	$(RM) -rf $(BUILD)

distclean: clean

#install:
#	$(MAKE) PREFIX=$(abspath $(BUILD)) $(MARGS) TARGET=install
#	$(INSTALL) -d $(PREFIX)
#	$(INSTALL) -d $(BUILD)/lib
#	$(INSTALL) -m 0644 libs/*.jar $(BUILD)/lib
#	$(TAR) cf - -C $(BUILD) . | $(TAR) xf - -C $(PREFIX)
#
#tarball:
#	$(MAKE) PREFIX=$(abspath $(TARBALL)) $(MARGS) install
#	$(TAR) cvfz $(VER).tgz $(TARBALL)
#	$(RM) -r $(TARBALL)
#
