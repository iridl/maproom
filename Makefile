PLAT ?= $(shell miconf/scripts/miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)

BUILD = ___build

INSTALL = install
TAR = tar
MV = mv

VER = $(shell miconf/scripts/git-generate-version-info maproom tag)
VER_ID = $(shell miconf/scripts/git-generate-version-info maproom id)
TARBALL = $(VER)

.PHONY: srcclean clean distclean tarball install srcbuild build

build: build.tag

build.tag: version.xml
	$(INSTALL) -d $(BUILD)
	$(INSTALL) -d $(BUILD)/maproom
	$(TAR) cf - -C maproom . | $(TAR) xf - -C $(BUILD)/maproom
	cd maproom; \
	   ../miconf/scripts/git-update-timestamp '$(VER_ID)' '*' $(abspath $(BUILD)/maproom)
	cd $(BUILD)/maproom; \
	   ../../maproomtools/build_maproom.pl; \
	   rm -f *.xml *.xslt *.serql *.nt; \
	   rm -rf newmaproomcache logs; \
	   cp ../../version.xml .
	$(INSTALL) -d $(BUILD)/uicore
	$(TAR) cf - -C uicore --exclude=.git . | $(TAR) xf - -C $(BUILD)/uicore
	$(INSTALL) -d $(BUILD)/pure
	$(TAR) cf - -C pure --exclude=.git . | $(TAR) xf - -C $(BUILD)/pure
	touch build.tag
	
srcbuild: version.xml
	cd maproom; \
	   ../maproomtools/build_maproom.pl; \
	   cp ../version.xml .

srcclean:
	git clean -f -d -- maproom
	

version.xml: .git
	miconf/scripts/git-generate-version-info maproom xml >$@

clean:
	$(RM) -f version.xml build.tag
	$(RM) -rf $(BUILD)

distclean: clean

install: build
	$(INSTALL) -d $(PREFIX)
	$(TAR) cf - -C $(BUILD) . | $(TAR) xf - -C $(PREFIX)

tarball: build
	$(INSTALL) -d $(TARBALL)
	$(TAR) cf - -C $(BUILD) . | $(TAR) xf - -C $(TARBALL)
	$(TAR) cvfz $(TARBALL).tgz $(TARBALL)
	$(RM) -r $(TARBALL)
