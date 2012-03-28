<xsl:stylesheet version="1.0"
            xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	    xmlns:maproomregistry="http://iri.columbia.edu/~jdcorral/ingrid/maproom/maproomregistry.owl#"
	    xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"
	    xmlns:iriterms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
            exclude-result-prefixes="rdf vocab iriterms maproomregistry">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:strip-space elements="*"/>

<xsl:variable name="root" select="substring-after(rdf:RDF/rdf:Description/@rdf:about[1],'maproom/')"/>
<xsl:variable name="language" select="document('IFRCstub.xhtml')//@xml:lang"/>
<xsl:key name="tablabels" match="rdf:RDF/rdf:Description/maproomregistry:tablabel[@xml:lang=document('IFRCstub.xhtml')//@xml:lang]" use="."/>

    <xsl:template match="/">
      <div class="rightcol">
      <div class="ui-tabs">
         <ul class="ui-tabs-nav">
            <xsl:for-each select="//rdf:RDF/rdf:Description/maproomregistry:tablabel[generate-id() = generate-id(key('tablabels',.)[1])]">
            <xsl:sort select="."/>
                 <li><a href="#tabs-{position()}">
                     <xsl:value-of select="."/>
                 </a></li>
            </xsl:for-each>
         </ul>

         <xsl:for-each select="//rdf:RDF/rdf:Description/maproomregistry:tablabel[generate-id() = generate-id(key('tablabels',.)[1])]">
            <xsl:sort select="."/>
            <div id="tabs-{position()}" class="ui-tabs-panel">
            <xsl:variable name="group" select="."/>
            <div class="itemGroup"><xsl:value-of select="$group"/></div>
                    <xsl:for-each select="/rdf:RDF/rdf:Description">
                    <xsl:sort select="@rdf:about"/>
                      <xsl:if test="./maproomregistry:tablabel = $group">
                        <div class="item"><div class="itemTitle"><a class="titleLink" href="{substring-after(@rdf:about,$root)}">
                        <xsl:value-of select="iriterms:title"/>
                        </a></div>
                        <div class="itemIcon"><a href="{substring-after(@rdf:about,$root)}"><img class="itemImage" src="{iriterms:icon/@rdf:resource}"/></a></div>
                        <div class="itemDescription">
                        <xsl:value-of select="iriterms:description"/></div>
                        <div class="itemFooter"></div>
                        </div>
                      </xsl:if>
                    </xsl:for-each>
            </div>
         </xsl:for-each>
    </div>
    </div>
    </xsl:template>
    
</xsl:stylesheet>
