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
<meta name="viewport" content="width=device-width; initial-scale=1.0;" />
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta property="maproom:Sort_Id" content="b05" />
<title>IFRC PIC: How well can we predict seasonal climate?</title>
<link rel="stylesheet" type="text/css" href="../../../uicore/uicore.css" />
<link rel="stylesheet" type="text/css" href="../ifrc.css" />
<link class="altLanguage" rel="alternate" hreflang="en" href="seasonalforecastskill.html?Set-Language=en" />
<link rel="canonical" href="seasonalforecastskill.html" />
<link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
<link class="carryLanguage" rel="home alternate" type="application/json" href="/maproom/navmenu.json" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/maproom/IFRC/#ThreeMonthForecasts" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Hazards" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#forecast" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#maproom_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Gridded"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#IFRC_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Global"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Atmosphere"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#seasonal"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#deg2.5x2.5"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Probability"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Precipitation"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#verification"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#IRI"/>
<link rel="term:icon" href="skillmap-small.jpg" />
<script type="text/javascript" src="../../../uicore/uicore.js"></script>
</head>
<body>
<form name="pageform" id="pageform" class="carryLanguage carryup carry share">
<input class="carryLanguage carryup carry" name="Set-Language" type="hidden" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList"> 
                <legend>Federación Internacional</legend> 
                      <a rev="section" class="navlink carryup" href="/maproom/IFRC/">Predicciones en Contexto</a>
            </fieldset> 
            <fieldset class="navitem" id="chooseSection"> 
                <legend about="http://iridl.ldeo.columbia.edu/maproom/IFRC/#ThreeMonthForecasts"><span property="term:label">Pronóstico para los Próximos 3 Meses</span></legend>
            </fieldset> 
 </div>
<div class="ui-tabs">
    <ul class="ui-tabs-nav">
<div id="ifrcdiv">
</div>
      <li><a href="#tabs-1" >Descripción</a></li>
      <li><a href="#tabs-2" >Más Información</a></li>
      <li><a href="#tabs-3" >Instructiónes</a></li>
      <li><a href="#tabs-4" >Dataset de Documentación</a></li>
      <li><a href="#tabs-5" >Contáctenos</a></li>
    </ul>
<fieldset class="dlimage" id="content" about="">
<img class="dlimg" src="skillmapes.jpg" border="0" alt="image" />
</fieldset>
 <div id="tabs-1" class="ui-tabs-panel" about="">
<h2 align="center"  property="term:title" >¿Qué tan bien podemos predecir el clima estacional? </h2>
<p align="left" property="term:description">Este mapa muestra dónde los pronósticos del IRI para 3 meses son constantemente buenos para predecir precipitación estacional en al menos una estación del año.</p>
<p align="left">Los patrones específicos de precipitación que puede ser predecido con tres meses de anticipación son más fuertes en las regiones tropicales, que puede ver en este mapa.
Si se encuentra en el área roja o en la amarilla, le recomendamos observar los pronósticos estacionales todo el año para los niveles de confidencia actuales de la lluvia pronosticada.</p>
</div>
<div id="tabs-2"  class="ui-tabs-panel">
<h2  align="center">Explicación</h2>
<ul>
<li>Las áreas rojas muestran dónde los pronósticos pueden ser generalmente previsibles, y así es posible para nosotros indicar una alta confianza por los pronósticos de temporadas inusualmente húmedas o secas en estos lugares.  Los pronósticos estacionales en las áreas rojas pueden ser los más útiles para advertencias tempranas. </li>
<li>Las áreas amarillas indican dónde los pronósticos tienen cierta previsibilidad.  Estas también son áreas que valen la pena monitorizar, aunque sólo ocasionalmente indicaremos alta confianza por estos pronósticos.  </li>
<li>Los lugares grises son lugares con poca o nada de previsibilidad.  Cualquier pronóstico de precipitación inusitada en estas áreas usualmente sólo mostrará baja confianza y las oportunidades de advertencia temprana probablemente serían limitadas.</li>
</ul>
<p> Las categorías del mapa se calculan de la siguiente manera:</p>
<p>Asuma un simple modelo, en el que llegará al equilibrio por muchos años si ignora el pronóstico y se prepara uniformemente para una precipitación por debajo de la normal, normal y por arriba de la normal. Si no ignora el pronóstico e invierte en recursos de preparación de acuerdo con las probabilidades de pronóstico de cada categoría, con base en este modelo simplificado, usted</p>
<ul>
<li>Tendría un retorno del 10% en las áreas de “buena previsibilidad”.</li>
<li>Tendría un retorno del 5 al 10% en las áreas de “cierta previsibilidad”.</li>
<li>Tendría un retorno menor que el 5% en las áreas de “poca o nada de previsibilidad”.</li>
</ul>
<p>Estas categorías se basan en la Tasa de Interés Efectiva que se deriva de la Puntuación de Probabilidad.  Puede encontrar información detallada de estas puntuaciones de previsibilidad en las <a href="http://iri.columbia.edu/climate/forecast/verification">páginas Web</a> de Verificación de Pronóstico Estacional de IRI. </p>
</div>
<div id="tabs-3"  class="ui-tabs-panel">
<h2  align="center">Cómo navegar por los mapas</h2>
<p><i>Cambiar a otro mapa:</i>
Seleccione el menú desplegable que se encuentra en la parte superior de esta página, a la derecha del encabezado azul “Pronósticos en contexto”.</p>
<p><i>Regresar a la página del menú: </i>
Haga clic en el enlace azul titulado “Pronósticos en contexto” que se encuentra en la esquina superior izquierda de la página.</p>
</div>
<div id="tabs-4" class="ui-tabs-panel">
<h2  align="center">Dataset Documentation</h2>
<p></p>
</div>
<div id="tabs-5"  class="ui-tabs-panel">
<h2  align="center">Servicios de Asistencia</h2>
<p>
Contacte con <a href="mailto:ifrc@iri.columbia.edu">ifrc@iri.columbia.edu</a> si usted es un humanitario que toma las decisiones con preguntas sobre la información en esta Sala de Mapas, o el clima y otras preguntas relacionadas con el clima.  Por lo general, responden en un día laborable.</p>
<p>
En contacto con <a href="mailto:help@iri.columbia.edu?subject=Precipitation Forecast in Context Map Tool">help@iri.columbia.edu</a> con cualquier pregunta técnica o problemas con esta Sala de Mapas, por ejemplo, las previsiones no mostrar o actualizar correctamente.
 </p>
</div>
</div>
<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
 </body>
 </html>
