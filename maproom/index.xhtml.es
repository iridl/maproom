<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:wms="http://www.opengis.net/wms#"
      xmlns:iridl="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#"
      xmlns:maproom="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"
      xmlns:term="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
      xmlns:xs="http://www.w3.org/2001/XMLSchema#"
      version="XHTML+RDFa 1.0"
 xml:lang="es"
      >
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>IRI Map Room</title>
<link rel="stylesheet" type="text/css" href="../uicore/uicore.css" />
<link rel="stylesheet" type="text/css" href="/localconfig/ui.css" />
<link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
<link class="carryLanguage" rel="home alternate" type="application/json" href="/maproom/navmenu.json" />
<link class="altLanguage" rel="alternate" hreflang="en" href="index.html?Set-Language=en" />
<link class="altLanguage" rel="alternate" hreflang="fr" href="index.html?Set-Language=fr" />
<link class="altLanguage" rel="alternate" hreflang="id" href="index.html?Set-Language=id" />
<link class="altLanguage" rel="alternate" hreflang="ru" href="index.html?Set-Language=ru" />
<link rel="canonical" href="index.html" />
<script type="text/javascript" src="../uicore/uicore.js"></script>
<script type="text/javascript" src="/localconfig/ui.js"></script>
</head>
<body>

<form name="pageform" id="pageform">
<input class="carryLanguage" name="Set-Language" type="hidden" />
<input class="titleLink itemImage" name="bbox" type="hidden" />
</form>
<div class="controlBar">
           <fieldset class="navitem">
                <legend>IRI/LDEO</legend> 
                      <a rev="section" class="navlink carryup carryLanguage" href="/">Climate Data Library</a>
            </fieldset> 
           <fieldset class="navitem"> 
                <legend>Data Library</legend> 
                     <span class="navtext">Maproom</span>

            </fieldset> 
            <fieldset class="navitem"> 
                <legend>Región</legend>
            <a class="carryLanguage" rel="iridl:hasJSON" href="/maproom/globalregions.json"></a>
		<select class="RegionMenu" name="bbox">
		<option value="">Global</option>
		<optgroup class="template" label="Región">
		<option class="irigaz:hasPart irigaz:id@value term:label"></option>
		</optgroup>
		</select>
            </fieldset>
 </div>
<div>
 <div id="content" class="searchDescription">
<h2 property="term:title">IRI Clima y la Sociedad Maproom</h2>
<p align="left" property="term:description">
El clima y la sociedad maproom es una colección de mapas y otras figuras que vigilar el clima y las condiciones sociales en la actualidad y en El pasado reciente. Los mapas y las cifras pueden ser manipuladas y están vinculados a los datos originales. Incluso si usted está interesado principalmente en datos en lugar de cifras, este es un buen lugar para ver qué conjuntos de datos son particularmente útiles para vigilar las condiciones actuales.</p>
</div>

<div class="rightcol tabbedentries" about="/maproom/" >
</div>

</div>
<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend>

</fieldset>
<fieldset class="navitem langgroup" id="contactus"></fieldset>
</div>
 </body>

 </html>
