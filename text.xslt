<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:iriterms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <xsl:output method="text"/>
 <xsl:strip-space elements="*"/>

 <xsl:template match="rdf:Description">
 <xsl:text>

</xsl:text><xsl:value-of select="./iriterms:title" />
<xsl:text>
</xsl:text>
<xsl:value-of select="./iriterms:description" />
It is <xsl:for-each select="./iriterms:is"><xsl:value-of select="." />,  </xsl:for-each>
 </xsl:template>
</xsl:stylesheet>