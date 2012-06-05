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
<xsl:variable name="tabs" select="document('tabs.xml')"/>
<xsl:key name="tablabels" match="rdf:RDF/rdf:Description/maproomregistry:tablabel[$language=@xml:lang]" use="."/>

    <xsl:template match="@*|node()">
      <xsl:copy>
           <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="*[@class='rightcol tabbedentries']">
      <xsl:comment> FIND THE PAGE WE ARE ON ( WHICH IS ALSO THE SECTION) AND SET UP NAVIGATION </xsl:comment>
      <xsl:variable name="pageloc" select="*[attribute::rel='maproom:pageloc']/@href" />
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

      <xsl:comment> BEGIN FILLING OUT THE INDIVIDUAL MAPPAGE INFORMATION, BY LOOKING AT EACH TABTERM AND FINDING THE 
      MATCHING MAPPAGES IN THE TABS.XML RDF FILE </xsl:comment>

         <xsl:choose>
         <xsl:when test="*[attribute::rel='maproom:tabterm']">
         <xsl:for-each select="*[attribute::rel='maproom:tabterm']">
            <xsl:sort select="."/>
            <xsl:variable name="hr" select="@href"/>
            <div id="tabs-{position()}" class="ui-tabs-panel">
            <xsl:variable name="group" select="$tabs//rdf:RDF/rdf:Description[@rdf:about=$hr]/rdf:label[@xml:lang=$language]"/>
            <div class="itemGroup"><xsl:value-of select="$group" disable-output-escaping="no" /></div>
                    <xsl:for-each select="$tabs/rdf:RDF/rdf:Description[contains(@rdf:about,$pageloc)]">
                    <xsl:sort select="@rdf:about"/>
                    <!-- <div> -->
                    <!-- <xsl:value-of select="$hr"/>
                    <xsl:value-of select="$group"/> -->
                    <!-- <xsl:value-of select="."/> -->
                    <!-- <xsl:value-of select="maproomregistry:tablabel"/> -->
                    <!-- <xsl:value-of select="maproomregistry:tablabel" disable-output-escaping="no"/>
                    </div> -->
                      <xsl:if test="maproomregistry:tablabel = $group">
                        <xsl:variable name="link">
                          <xsl:choose>
                            <xsl:when test="contains(substring-after(@rdf:about,$pageloc),concat('.',$language))">
                              <xsl:value-of select="substring-before(substring-after(@rdf:about,$pageloc),concat('.',$language))"/>
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="substring-after(@rdf:about,$pageloc)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </xsl:variable>
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
         <xsl:for-each select="*[attribute::rel='maproom:pageloc']">
            <xsl:variable name="hr" select="@href"/>
            <div id="tabs-{position()}" class="ui-tabs-panel">
            <xsl:variable name="group" select="$tabs//rdf:RDF/rdf:Description[@rdf:about=$hr]/rdf:label[@xml:lang=$language]"/>
            <div class="itemGroup"><xsl:value-of select="$group"/></div>
                    <!-- <div>
                    <xsl:value-of select="$group"/>
                    <xsl:value-of select="$hr"/>
                    <xsl:value-of select="$tabs/rdf:RDF/rdf:Description[contains(@rdf:about,$pageloc)]"/>
                    </div> -->
                    <xsl:for-each select="$tabs/rdf:RDF/rdf:Description[contains(@rdf:about,$pageloc)]">
                    <xsl:sort select="@rdf:about"/>
                      <!-- <div>
                      <xsl:value-of select="maproomregistry:tablabel"/>
                      </div> -->
                      <xsl:if test="iriterms:title"><!-- IF TEST FOR TITLE, WHEN THERE ARE NO TABTERMS -->
                        <xsl:variable name="link">
                          <xsl:choose>
                            <xsl:when test="contains(substring-after(@rdf:about,$pageloc),concat('.',$language))">
                              <xsl:value-of select="substring-before(substring-after(@rdf:about,$pageloc),concat('.',$language))"/>
                            </xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="substring-after(@rdf:about,$pageloc)"/>
                            </xsl:otherwise>
                          </xsl:choose>
                        </xsl:variable>
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
         </xsl:otherwise>
         </xsl:choose>
    </div>
    </div>
    </xsl:template>
    
</xsl:stylesheet>



