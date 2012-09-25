PLAT ?= $(shell miconf/scripts/miconf-platform)
ARCH ?= $(shell arch)
PREFIX ?= /usr/local/$(VER)

BUILD_DIR = ___build

INSTALL = install
TAR = tar
MV = mv

VER = $(shell miconf/scripts/git-generate-version-info maproom tag)
TARBALL = $(VER)

.PHONY: build clean distclean tarball install

build: version.xml
	$(INSTALL) -d $(BUILD_DIR)
	$(TAR) cf - -C maproom . | $(TAR) xf - -C $(BUILD_DIR)
	(cd maproom; ../miconf/scripts/git-update-timestamp HEAD '*' $(abspath $(BUILD_DIR)); )
	(cd $(BUILD_DIR); ../maproomtools/build_maproom.pl; cp ../version.xml .; )
	(cd $(BUILD_DIR); rm -f top.xml tabs.xml tab.xslt maproomtop.owl maproomregistry.owl maproom_section_index.serql canonical_imports.serql tabs.nt top.nt; rm -rf newmaproomcache logs;)
	

version.xml: .git
	miconf/scripts/git-generate-version-info maproom xml >$@

clean:
	$(RM) -f version.xml
	$(RM) -rf $(BUILD_DIR)

distclean: clean

#install:
#	$(MAKE) PREFIX=$(abspath $(BUILD_DIR)) $(MARGS) TARGET=install
#	$(INSTALL) -d $(PREFIX)
#	$(INSTALL) -d $(BUILD_DIR)/lib
#	$(INSTALL) -m 0644 libs/*.jar $(BUILD_DIR)/lib
#	$(TAR) cf - -C $(BUILD_DIR) . | $(TAR) xf - -C $(PREFIX)
#
#tarball:
#	$(MAKE) PREFIX=$(abspath $(TARBALL)) $(MARGS) install
#	$(TAR) cvfz $(VER).tgz $(TARBALL)
#	$(RM) -r $(TARBALL)
#
