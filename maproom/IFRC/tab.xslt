<xsl:stylesheet version="2.0"
            xmlns="http://www.w3.org/1999/xhtml"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	    xmlns:maproomregistry="http://iridl.ldeo.columbia.edu/maproom/maproomregistry.owl#"
            xmlns:maproom="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"
	    xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"
            xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	    xmlns:iriterms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#">
<xsl:output method="xhtml" indent="yes" encoding="utf-8"/>

<xsl:variable name="language" select="//@xml:lang"/>
<xsl:variable name="tabs" select="document('tabs.xml')"/> <!-- WHERE ALL THE RDF IS STORED -->

    <xsl:template match="@*|node()"> <!-- COPY CONTENTS OF XHTML FILE AS IS -->
      <xsl:copy>
           <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="*[@class='rightcol tabbedentries']"> <!-- EXPAND THE CONTENT IN THE TABBEDENTRIES SECTION -->
      <!-- FIND THE PAGE WE ARE ON ( WHICH IS ALSO THE SECTION) AND SET UP NAVIGATION -->
      <xsl:variable name="pageloc" select="./@about" />
      <div class="rightcol">
      <div class="ui-tabs">
         <ul class="ui-tabs-nav">
            <xsl:for-each select="*[attribute::rel='maproom:tabterm']">
                 <xsl:variable name="hr" select="@href"/>
                 <li><a href="#tabs-{position()}">
                     <xsl:value-of select="$tabs//rdf:RDF/rdf:Description[@rdf:about=$hr]/rdf:label[@xml:lang=$language]"/>
                 </a></li>
            </xsl:for-each>
         </ul>

      <!-- <div>
      <xsl:value-of select="$pageloc" />
      </div> -->

      <!-- BEGIN FILLING OUT THE INDIVIDUAL MAPPAGE INFORMATION, BY LOOKING AT EACH TABTERM AND FINDING THE 
      MATCHING MAPPAGES IN THE TABS.XML RDF FILE -->

         <xsl:choose>
         <xsl:when test="*[attribute::rel='maproom:tabterm']">
         <xsl:for-each select="*[attribute::rel='maproom:tabterm']"> <!-- FOR EACH TABTERM -->
            <xsl:sort select="."/>
            <xsl:variable name="hr" select="@href"/> <!-- GET THE HREF FOR THE TABTERM -->
            <div id="tabs-{position()}" class="ui-tabs-panel">
            <!-- THE LABEL OF EACH TABTERM GROUP -->
            <xsl:variable name="group" select="$tabs//rdf:RDF/rdf:Description[@rdf:about=$hr]/rdf:label[@xml:lang=$language]"/> 
            <div class="itemGroup"><xsl:value-of select="$group" disable-output-escaping="no" /></div>
                    <!-- THIS SHOULD PROBABLY BE MORE RESTRICTIVE, RIGHT NOW IT CHECKS TO SEE IF MAPPAGE'S ABOUT CONTAINS THE INDEX PAGE THAT WE ARE PROCESSING -->
                    <xsl:for-each select="$tabs/rdf:RDF/rdf:Description[contains(@rdf:about,$pageloc)]"> 
                    <xsl:sort select="@rdf:about"/>
                      <xsl:if test="maproomregistry:tablabel = $group"> <!-- MAKE SURE THE MAPPAGE IS IN THE CURRENT TABTERM GROUP -->
                        <xsl:variable name="link">
                          <xsl:choose> <!-- IF THE MAPPAGE HAS A LANGUAGE EXTENSION, WE NEED TO REMOVE IT TO MAKE THE LINK CANONICAL -->
                            <xsl:when test="contains(substring-after(@rdf:about,$pageloc),concat('.',$language))">
                              <xsl:value-of select="substring-before(substring-after(@rdf:about,$pageloc),concat('.',$language))"/>
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="substring-after(@rdf:about,$pageloc)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </xsl:variable>
                        <!-- EACH LEAF MAPPAGE MUST HAVE A TITLE, DESCRIPTION, AND ICON -->
                        <div class="item"><div class="itemTitle"><a class="titleLink" href="{$link}">
                        <xsl:value-of select="iriterms:title"/>
                        </a></div>
                        <div class="itemIcon"><a href="{$link}"><img class="itemImage" src="{iriterms:icon/@rdf:resource}"/></a></div>
                        <div class="itemDescription">
                        <xsl:value-of select="iriterms:description" disable-output-escaping="no"/></div>
                        <div class="itemFooter"></div>
                        </div>
                      </xsl:if>
                    </xsl:for-each>
            </div>
         </xsl:for-each>
         </xsl:when>
         <xsl:otherwise>
         <xsl:comment>WHEN THERE IS NO TABTERM</xsl:comment>
            <div id="tabs" class="ui-tabs-panel">
                    <!-- <div>
                    <xsl:value-of select="$pageloc"/>
                    <xsl:value-of select="$tabs/rdf:RDF/rdf:Description[substring-after(@rdf:about,$pageloc)='']/vocab:section/@rdf:resource[1]" disable-output-escaping="yes" />
                    </div> -->
                    <!-- FIND THE SUB-SECTION URLS -->
                    <xsl:for-each select="$tabs/rdf:RDF/rdf:Description[substring-after(@rdf:about,$pageloc)='']/vocab:section/@rdf:resource[1]" >
                      <xsl:variable name="subsection" select="." />
                      <xsl:if test="not(contains($subsection,'xhtml'))" ><!-- FILTER OUT THE XHMTL PAGES -->
                        <xsl:if test="ends-with($subsection,'.html') or ends-with($subsection,$language)"> <!-- FILTER PAGES THAT HAVE LANG EXTENSIONS THAT DON'T MATCH THE CURRENT PAGE'S -->
                        <xsl:variable name="link">
                          <xsl:choose><!-- DETERMINE IF LINK HAS A LANGUAGE EXTENSION -->
                            <xsl:when test="contains(substring-after($subsection,$pageloc),concat('.',$language))">
                              <xsl:value-of select="substring-before(substring-after($subsection,$pageloc),concat('.',$language))"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="substring-after($subsection,$pageloc)"/> <!-- IF NO LANG EXTENSION -->
                            </xsl:otherwise>
                          </xsl:choose>
                        </xsl:variable>
                        <div class="item"><div class="itemTitle"><a class="titleLink" href="{$link}">
                        <xsl:value-of select="$tabs/rdf:RDF/rdf:Description[@rdf:about=$subsection]/iriterms:title"/> <!-- SUBSECTION TITLE -->
                        </a></div>
                        <xsl:choose><!-- CHECK FOR ICON; IF NONE, USE IRI LOGO -->
                          <xsl:when test="$tabs/rdf:RDF/rdf:Description[@rdf:about=$subsection]/iriterms:icon">
                            <div class="itemIcon"><a href="{$link}"><img class="itemImage" src="{$tabs/rdf:RDF/rdf:Description[@rdf:about=$subsection]/iriterms:icon/@rdf:resource}"/></a></div>
                          </xsl:when>
                          <xsl:otherwise>
                            <div class="itemIcon"><a href="{$link}"><img class="itemImage" src="icons/iri.png"/></a></div>
                          </xsl:otherwise>
                        </xsl:choose>
                        <div class="itemDescription">
                        <xsl:value-of select="$tabs/rdf:RDF/rdf:Description[@rdf:about=$subsection]/iriterms:description" disable-output-escaping="no"/></div> <!-- SUBSECTION DESCRIPTION -->
                        <div class="itemFooter"></div>
                        </div>
                  </xsl:if>
                  </xsl:if>
                  </xsl:for-each>
            </div>
         <!-- </xsl:for-each> -->
         </xsl:otherwise>
         </xsl:choose>
    </div>
    </div>
    </xsl:template>
    
</xsl:stylesheet>



