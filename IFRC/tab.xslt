<xsl:stylesheet version="1.0"
            xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	    xmlns:maproomregistry="http://iri.columbia.edu/~jdcorral/ingrid/maproom/maproomregistry.owl#"
            xmlns:maproom="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"
	    xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"
	    xmlns:iriterms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#">
<xsl:output method="html" indent="yes" encoding="utf-8"/>

<xsl:variable name="language" select="//@xml:lang"/>
<xsl:variable name="tabs" select="document('tabs.xml')"/>
<xsl:key name="tablabels" match="rdf:RDF/rdf:Description/maproomregistry:tablabel[$language=@xml:lang]" use="."/>


    <xsl:template match="@*|node()">
      <xsl:copy>
           <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="*[@class='rightcol tabbedentries']">
      <xsl:variable name="root" select="substring-after($tabs/rdf:RDF/rdf:Description/@rdf:about[1],'maproom/')"/>
      <div class="rightcol">
      <div class="ui-tabs">
         <ul class="ui-tabs-nav">
            <xsl:choose>
            <xsl:when test="*[attribute::rel]">
            <xsl:for-each select="*[attribute::rel]">
                 <xsl:variable name="hr" select="@href"/>
                 <li><a href="#tabs-{position()}">
                     <xsl:value-of select="$tabs//rdf:RDF/rdf:Description[@rdf:about=$hr]/rdf:label[@xml:lang=$language]"/>
                 </a></li>
            </xsl:for-each>
            </xsl:when>
            <xsl:otherwise>
            <xsl:for-each select="$tabs/rdf:RDF/rdf:Description/maproomregistry:tablabel[generate-id() = generate-id(key('tablabels',.)[1])]">
            <xsl:sort select="."/>
                 <li><a href="#tabs-{position()}">
                     <xsl:value-of select="."/>
                 </a></li>
            </xsl:for-each>
            </xsl:otherwise>
            </xsl:choose>
         </ul>

         <xsl:choose>
         <xsl:when test="*[attribute::rel]">
         <xsl:for-each select="*[attribute::rel]">
            <xsl:variable name="hr" select="@href"/>
            <div id="tabs-{position()}" class="ui-tabs-panel">
            <xsl:variable name="group" select="$tabs//rdf:RDF/rdf:Description[@rdf:about=$hr]/rdf:label[@xml:lang=$language]"/>
            <div class="itemGroup"><xsl:value-of select="$group"/></div>
                    <xsl:for-each select="$tabs/rdf:RDF/rdf:Description">
                    <xsl:sort select="@rdf:about"/>
                      <xsl:if test="./maproomregistry:tablabel = $group">
                        <div class="item"><div class="itemTitle"><a class="titleLink" href="{substring-before(substring-after(@rdf:about,$root),concat('.',$language))}">
                        <xsl:value-of select="iriterms:title"/>
                        </a></div>
                        <div class="itemIcon"><a href="{substring-before(substring-after(@rdf:about,$root),concat('.',$language))}"><img class="itemImage" src="{iriterms:icon/@rdf:resource}"/></a></div>
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
         <xsl:for-each select="$tabs//rdf:RDF/rdf:Description/maproomregistry:tablabel[generate-id() = generate-id(key('tablabels',.)[1])]">
            <xsl:sort select="."/>
            <div id="tabs-{position()}" class="ui-tabs-panel">
            <xsl:variable name="group" select="."/>
            <div class="itemGroup"><xsl:value-of select="$group" disable-output-escaping="no" /></div>
                    <xsl:for-each select="/rdf:RDF/rdf:Description">
                    <xsl:sort select="@rdf:about"/>
                      <xsl:if test="./maproomregistry:tablabel = $group">
                        <div class="item"><div class="itemTitle"><a class="titleLink" href="{substring-before(substring-after(@rdf:about,$root),concat('.',$language))}">
                        <xsl:value-of select="iriterms:title"/>
                        </a></div>
                        <div class="itemIcon"><a href="{substring-before(substring-after(@rdf:about,$root),concat('.',$language))}"><img class="itemImage" src="{iriterms:icon/@rdf:resource}"/></a></div>
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
