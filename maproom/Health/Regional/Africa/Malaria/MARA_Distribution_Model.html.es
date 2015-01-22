<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:wms="http://www.opengis.net/wms#"
      xmlns:iridl="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#"
      xmlns:maproom="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"
      xmlns:term="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
      xmlns:xs="http://www.w3.org/2001/XMLSchema#"
      version="XHTML+RDFa 1.0"
      >
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MARA Modelo de Distribución de Idoneidad Climática para la Transmisión de Malaria</title>
<script type="text/javascript" src="../../../../../uicore/uicore.js"></script>
<link rel="stylesheet" type="text/css" href="../../../../../uicore/uicore.css" />
<link class="altLanguage" rel="alternate" hreflang="en" href="MARA_Distribution_Model.html?Set-Language=en" />
<link class="altLanguage" rel="alternate" hreflang="fr" href="MARA_Distribution_Model.html?Set-Language=fr" />
<link rel="canonical" href="MARA_Distribution_Model.html" />
<link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
<link class="carryLanguage" rel="home alternate" type="application/json" href="/maproom/navmenu.json" />
<meta property="maproom:Entry_Id" content="Health_Regional_Africa_Malaria_Historical_MARA_Distribution_Model" />
<meta property="maproom:Sort_Id" content="e12" />
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_Africa_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#maproom_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Precipitation"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Rate"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Atmosphere"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Malaria"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/irigaz.owl#Africa_3327_1"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#health"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_Africa_Malaria_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#temperature"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#static"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#precipitation_rate"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#monthly"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climatology"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Endemic_Malaria"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Historical_Analysis"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Africa"/>
<link rel="term:icon" href="http://iridl.ldeo.columbia.edu/home/.grover/.EMILY/.Analyses/.MARA/.CSMT/.fuzzy_suit/X+Y+fig:+colors+grey+verythin+solid+states_gaz+black+thinnish+countries_gaz+coasts_gaz+lakes+:fig//plotaxislength+432+psdef//XOVY+null+psdef//color_smoothing+null+psdef//plotborder+72+psdef+//plotaxislength+150+psdef//plotborder+0+psdef//color_smoothing+1+psdef+.gif" />
</head>
<body xml:lang="es">
<form name="pageform" id="pageform">
<input class="carryup carryLanguage" name="Set-Language" type="hidden" />
<input class="dlimg" name="bbox" type="hidden" />
<input class="dlimg dlauximg" name="plotaxislength" type="hidden" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList">
                <legend>Clima y Salud</legend>
                      <a rev="section" class="navlink carryup" href="/maproom/Health/Regional/Africa/Malaria/Historical.html">Analisis Historico de Malaria</a>
            </fieldset>
            <fieldset class="navitem" id="chooseSection">
                <legend about="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Historical_Analysis"><span property="term:label">Malaria Endémica</span></legend>
            </fieldset>
 </div>
<div class="ui-tabs">
    <ul class="ui-tabs-nav">
      <li><a href="#tabs-1" >Descripción</a></li>
      <li><a href="#tabs-2" >Documentación de la Base de Datos</a></li>
      <li><a class="carry" href="http://iridl.ldeo.columbia.edu/home/.grover/.EMILY/.Analyses/.MARA/.CSMT/.fuzzy_suit/">Base de Datos</a></li>
      <li><a href="#tabs-4" >Instructiónes</a></li>
      <li><a href="#tabs-5" >Contáctenos</a></li>
    </ul>
<fieldset class="dlimage" id="content" about="">
<a rel="iridl:hasFigure" href="http://iridl.ldeo.columbia.edu/home/.grover/.EMILY/.Analyses/.MARA/.CSMT/.fuzzy_suit/X+Y+fig:+colors+grey+verythin+solid+states_gaz+black+thinnish+countries_gaz+coasts_gaz+lakes+:fig//plotaxislength+432+psdef//XOVY+null+psdef//color_smoothing+null+psdef//plotborder+72+psdef/"></a>
<img class="dlimg" src="http://iridl.ldeo.columbia.edu/home/.grover/.EMILY/.Analyses/.MARA/.CSMT/.fuzzy_suit/X+Y+fig:+colors+grey+verythin+solid+states_gaz+black+thinnish+countries_gaz+coasts_gaz+lakes+:fig//plotaxislength+432+psdef//XOVY+null+psdef//color_smoothing+null+psdef//plotborder+72+psdef+.gif" border="0" alt="image" />
<img class="dlauximg" src="http://iridl.ldeo.columbia.edu/home/.grover/.EMILY/.Analyses/.MARA/.CSMT/.fuzzy_suit/X+Y+fig:+colors+grey+verythin+solid+states_gaz+black+thinnish+countries_gaz+coasts_gaz+lakes+:fig+.auxfig//plotaxislength+432+psdef//XOVY+null+psdef//color_smoothing+null+psdef//plotborder+72+psdef+.gif" border="0" width="454" height="56" />
</fieldset>
 <div id="tabs-1" class="ui-tabs-panel" about="">
  <h2 align="center" property="term:title">MARA Modelo de Distribución de Idoneidad Climática para la Transmisión de Malaria</h2>
  <p align="left" property="term:description">El Modelo de distribución MARA es un mapa estático que ilustra la idoneidad climática para la transmisión de malaria. Promedios climatológicos de precipitación y temperatura son utilizados en un modelo de lógica difusa desarrollada por científicos asociados con el grupo de Mapeo de Riesgo de Malaria en África (MARA) (después de Craig et al. 1999).</p>
<p align="left">
Este mapa es basado en un modelo <i><u>teórico</u></i>  con datos de clima disponibles a largo plazo. Aunque este es razonablemente preciso, <i><u>no se basa en datos de malaria actuales</u></i> y puede no reflejar el estado real de malaria. Este muestra la idoneidad teórica de las condiciones climáticas locales y por lo tanto la distribución potencial de transmisión estable de malaria en el año promedio.
Por favor note que las condiciones climáticas, y por lo tanto la transmisión de malaria, varía considerablemente de un año a otro. Actividades de control de malaria pueden también alterar dramáticamente la situación de la transmisión de malaria.</p>
<p>
Donde el clima es “idóneo” (rojo=1), la malaria es probablemente endémica (hipo-, meso-. hiper u holo-endémicos).  Áreas “idóneas” pueden tener poco o no tener malaria debido al control de malaria. Donde el clima  es “inadecuado” (blanco=0), la malaria es probablemente epidémica o ausente. Algunas áreas “inadecuadas” pueden tener actualmente malaria endémica debido a la presencia de agua superficial en áreas donde hay poca o nada de lluvia.
En las zonas marginalmente idóneas (0.1 - 0.9) la transmisión puede ocurrir a niveles estables, pero con bajos niveles (por ejemplo, el África Oriental), o en ciclos fuertemente estacionales con una gran variación interanual (por ejemplo, el Occidente &amp; y el Sur de África).[Cortesía de la página web de <a href="http://www.mara.org.za/">Mapeo de Riesgo de Malaria en África</a> (MARA)]</p>
<h4>References:</h4>
<p>Craig, M. H., R. W. Snow, and D. le Seur. (1999). <a href="http://portal.iri.columbia.edu/portal/server.pt/gateway/PTARGS_0_2_3830_0_0_18/Craig%201999%20TIP.pdf">A climate-based distribution model of malaria transmission in Sub-Saharan Africa</a>. Parasitology Today, 15(3), 105-111.
</p> 
</div>
<div id="tabs-2" class="ui-tabs-panel">
<h2  align="center">Documentación de la Base de Datos</h2>
<h4>Precipitación Climatológica</h4>
<dl class="datasetdocumentation">
<dt>Datos</dt><dd>Precipitación mensual sobre áreas de superficie terrestre con una malla de resolución de 0.5° x 0.5° lat/lon</dd>
<dt>Periódo Base para la Climatología</dt><dd>1971-2000</dd>
<dt>Fuente de Datos</dt><dd>University of East Anglia (<a href="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS2p0/.dataset_documentation.html">UEA CRU TS 2.0</a>)</dd>
</dl>
<h4>Temperatura Climatológica</h4>
<dl class="datasetdocumentation">
<dt>Datos</dt><dd>Temperatura mensual sobre áreas de superficie terrestre con una malla de resolución de 0.5° x 0.5° lat/lon</dd>
<dt>Periódo Base para la Climatología</dt><dd>1971-2000</dd>
<dt>Fuente de Datos</dt><dd>University of East Anglia (<a href="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS2p0/.dataset_documentation.html">UEA CRU TS 2.0</a>)</dd>
</dl>
</div>
<div class="ui-tabs-panel-hidden">
<h2 align="center">Base de Datos</h2>
<p>
<a href="http://iridl.ldeo.columbia.edu/home/.grover/.EMILY/.Analyses/.MARA/.CSMT/.fuzzy_suit/">Acceder a la base de datos usada para crear este mapa.</a>
</p>
</div>
<div id="tabs-4"  class="ui-tabs-panel">
<h2  align="center">Instructiónes</h2>
<div class="buttonInstructions"></div>
</div>
<div id="tabs-5"  class="ui-tabs-panel">
<h2  align="center">Servicios de Asistencia</h2>
<p>
Contacte <a href="mailto:help@iri.columbia.edu?subject=Maproom">help@iri.columbia.edu</a> con cualquier pregunta técnica o problema con este Cuarto de Mapas, por ejemplo, los pronósticos no se muestran o actualizan adecuadamente.
 </p>
</div>
</div>
<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
 </body>
 </html>
