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
<title>Promedio por Región del Índice WASP</title>
<script type="text/javascript" src="../../../../../../uicore/uicore.js"></script>
<script type="text/javascript" src="/localconfig/ui.js"></script>
<link rel="stylesheet" type="text/css" href="../../../../../../uicore/uicore.css" />
<link rel="stylesheet" type="text/css" href="/localconfig/ui.css" />
<link class="altLanguage" rel="alternate" hreflang="en" href="index.html?Set-Language=en" />
<link class="altLanguage" rel="alternate" hreflang="fr" href="index.html?Set-Language=fr" />
<link rel="canonical" href="index.html" />
<link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
<link class="carryLanguage" rel="home alternate" type="application/json" href="/maproom/navmenu.json" />
<link rel="term:icon" href="http://iri.columbia.edu/~mbell/icons/Health-Regional-Africa-MDG-icon.jpg" />
<meta property="maproom:Entry_Id" content="Health_Regional_Africa_Malaria_MDG" />
<meta property="maproom:Sort_Id" content="e09" />
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_Africa_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#maproom_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Africa"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#spatial_average_resolution"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#anomaly"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Malaria"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#health"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_Africa_Malaria_term"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/irigaz.owl#Africa_3327_1"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#standardized"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#spatial_average"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#monthly"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#interactive"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#WASP"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Precipitation"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Epidemic_Malaria"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Atmosphere"/>
<style>
.dlcontrol.country {display: none !important;}
</style>
</head>
<body xml:lang="es">
<form name="pageform" id="pageform">
<input class="carryup carryLanguage" name="Set-Language" type="hidden" />
<input class="dlimg" name="plotaxislength" type="hidden" />
<input class="dlimg share" name="country" type="hidden" data-default="Algeria" />
<input class="dlimg share" name="Baseline" type="hidden" />
<input class="dlimg share" name="baseyear" type="hidden" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList">
                <legend>Clima y Salud</legend>
                      <a rev="section" class="navlink carryup" href="/maproom/Health/Regional/Africa/Malaria/Historical.html">Malaria</a>
            </fieldset>
            <fieldset class="navitem" id="chooseSection">
                <legend about="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Epidemic_Malaria"><span property="term:label">Malaria Epidémica</span></legend>
            </fieldset>
<fieldset class="navitem">
	  <legend>Región</legend>
	  <a rel="iridl:hasJSON" href="http://iridl.ldeo.columbia.edu/expert/home/.mbell/.MDG/.Africa/.queriesCMAPlatest/.countryquery/.cntry_name/info.json"></a>
	  <select class="pageformcopy" name="country">
	  <optgroup class="template" label="Country">
	  <option class="iridl:values country"></option>
	  </optgroup>
	  </select>
	  </fieldset>
            <fieldset class="navitem">
                <legend>Años de Referencia</legend><input class="pageformcopy" name="baseyear" type="text" value="1979" size="9" maxlength="" />
            </fieldset>
 </div>
<div class="ui-tabs">
    <ul class="ui-tabs-nav">
      <li><a href="#tabs-1" >Descripción</a></li>
      <li><a href="#tabs-2" >Documentación de la Base de Datos</a></li>
      <li><a class="carry" href="http://iridl.ldeo.columbia.edu/expert/home/.mbell/.MDG/.Africa/.queriesCMAPlatest/caCMAP-latest_WASP12//fullname/%2812-Month%20WASP%29def/tag://fullname/%2812-Month%20WASP%29:tag//long_name/%2812-Month%20WASP%29def/cabaseline//fullname/%28Baseline%29def/tag://fullname/%28Baseline%29:tag//long_name/%28Baseline%29def/%7BWASP/Baseline%7Dds/nip/">Base de Datos</a></li>
      <li><a href="#tabs-4" >Instructiónes</a></li>
      <li><a href="#tabs-5" >Contáctenos</a></li>
    </ul>
<fieldset class="dlimage" id="content" about="">
<a rel="iridl:hasFigure" href="http://iridl.ldeo.columbia.edu/expert/home/.mbell/.MDG/.Africa/.queriesCMAPlatest/a:/.caCMAP-latest_WASP12/tag:/%28fullname%29%2812-Month%20WASP%29:tag//plotfirst/-3.5/def//plotlast/3.5/def//long_name/%2812-Month%20WASP%29def/SOURCES/.IRI/.Analyses/.MDG/.Africa/.queriesCMAPlatest/.cabaseline_full/%281979%29//baseyear/parameter/dup/%28%20%29rsearch/%7Bpop/pop/pop/BaseYears/exch/mark/exch/interp/counttomark/array/astore/nip/%7Bs==%7Dforall/VALUES%7D%7Bpop/BaseYears/exch/VALUES%7Difelse%5BBaseYears%5Daverage//fullname/%28BaseLine%29def/tag:/%28fullname%29%28BaseLine%29:tag//long_name/%28BaseLine%29def/:a:/.caCMAP-latest_WASP12/tag:/%28fullname%29%2812-Month%20WASP%29:tag//plotfirst/-3.5/def//plotlast/3.5/def//long_name/%2812-Month%20WASP%29def/SOURCES/.IRI/.Analyses/.MDG/.Africa/.queriesCMAPlatest/.cabaseline_full//baseyear/get_parameter/dup/%28%20%29rsearch/%7Bpop/pop/pop/BaseYears/exch/mark/exch/interp/counttomark/array/astore/nip/%7Bs==%7Dforall/VALUES%7D%7Bpop/BaseYears/exch/VALUES%7Difelse%5BBaseYears%5Daverage//fullname/%28BaseLine%29def/tag:/%28fullname%29%28BaseLine%29:tag//long_name/%28BaseLine%29def/maskgt/SOURCES/.IRI/.Analyses/.MDG/.Africa/.queriesCMAPlatest/.cabaseline_full//baseyear/get_parameter/dup/%28%20%29rsearch/%7Bpop/pop/pop/BaseYears/exch/mark/exch/interp/counttomark/array/astore/nip/%7Bs==%7Dforall/VALUES%7D%7Bpop/BaseYears/exch/VALUES%7Difelse%5BBaseYears%5Daverage//fullname/%28BaseLine%29def/tag:/%28fullname%29%28BaseLine%29:tag//long_name/%28BaseLine%29def/:a/T/fig-/green/deltabars/brown/deltabars/|/black/thin/line/black/medium/line/-fig//framelabel/%28%25s%5Bcountry%5D%20precipitation%20relative%20to%20years%20%29//baseyear/get_parameter/%28%20starting%20%25=%5BBaseline%5D%29append/append/psdef//country//Algeria/plotvalue//Baseline/0.5/plotvalue//plotaxislength/432/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//XOVY/null/psdef/"></a>
<img class="dlimg" src="http://iridl.ldeo.columbia.edu/expert/home/.mbell/.MDG/.Africa/.queriesCMAPlatest/a:/.caCMAP-latest_WASP12/tag:/%28fullname%29%2812-Month%20WASP%29:tag//plotfirst/-3.5/def//plotlast/3.5/def//long_name/%2812-Month%20WASP%29def/SOURCES/.IRI/.Analyses/.MDG/.Africa/.queriesCMAPlatest/.cabaseline_full/%281979%29//baseyear/parameter/dup/%28%20%29rsearch/%7Bpop/pop/pop/BaseYears/exch/mark/exch/interp/counttomark/array/astore/nip/%7Bs==%7Dforall/VALUES%7D%7Bpop/BaseYears/exch/VALUES%7Difelse%5BBaseYears%5Daverage//fullname/%28BaseLine%29def/tag:/%28fullname%29%28BaseLine%29:tag//long_name/%28BaseLine%29def/:a:/.caCMAP-latest_WASP12/tag:/%28fullname%29%2812-Month%20WASP%29:tag//plotfirst/-3.5/def//plotlast/3.5/def//long_name/%2812-Month%20WASP%29def/SOURCES/.IRI/.Analyses/.MDG/.Africa/.queriesCMAPlatest/.cabaseline_full//baseyear/get_parameter/dup/%28%20%29rsearch/%7Bpop/pop/pop/BaseYears/exch/mark/exch/interp/counttomark/array/astore/nip/%7Bs==%7Dforall/VALUES%7D%7Bpop/BaseYears/exch/VALUES%7Difelse%5BBaseYears%5Daverage//fullname/%28BaseLine%29def/tag:/%28fullname%29%28BaseLine%29:tag//long_name/%28BaseLine%29def/maskgt/SOURCES/.IRI/.Analyses/.MDG/.Africa/.queriesCMAPlatest/.cabaseline_full//baseyear/get_parameter/dup/%28%20%29rsearch/%7Bpop/pop/pop/BaseYears/exch/mark/exch/interp/counttomark/array/astore/nip/%7Bs==%7Dforall/VALUES%7D%7Bpop/BaseYears/exch/VALUES%7Difelse%5BBaseYears%5Daverage//fullname/%28BaseLine%29def/tag:/%28fullname%29%28BaseLine%29:tag//long_name/%28BaseLine%29def/:a/T/fig-/green/deltabars/brown/deltabars/|/black/thin/line/black/medium/line/-fig//framelabel/%28%25s%5Bcountry%5D%20precipitation%20relative%20to%20years%20%29//baseyear/get_parameter/%28%20starting%20%25=%5BBaseline%5D%29append/append/psdef//country//Algeria/plotvalue//Baseline/0.5/plotvalue//plotaxislength/432/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//XOVY/null/psdef/+.gif" border="0" alt="image" />
</fieldset>
 <div id="tabs-1" class="ui-tabs-panel" about="">
  <h2 align="center" property="term:title">Promedio por Región del Índice WASP</h2>
  <p align="left" property="term:description">
Este gráfico muestra una serie de tiempo del valor promedio sobre una región del índice de Anomalía Ponderada Estandarizada de Precipitación (WASP, por su sigla en Inglés) de 12 meses, calculada usando la última versión de la base de datos de precipitación mensual CMAP para las áreas seleccionas por el usuario en las regiones del África.</p>
<p align="left">
Para el computo del índece de WASP, salidas mensuales de precipitación promedio a largo plazo  son obtenidas y luego estandarizadas dividiendolas por la desviación estandar de precipitación mensual. Las anomalías mensuales estandarizadas se ponderan multiplicandolas por la fracción de la precipitacióm media anual para el mes dado. Estas anomalías ponderadas, en este caso,  son luego sumadas en un periodo de 12 meses  y este resultado es en sí estandarizado.</p>
<p>
El usuario es también capaz de selecionar un año de referencia, poniendo una línea base en el dibujo correspondiente para el valor del índice WASP para el centro del año seleccionado. Para los valores del índice WASP sobre la línea base, el área entre el índice y el valor de la línea base esta sombreada  con verde. Para los valores del índice de WASP bajo la línea base, el área entre el índice y la línea base esta sombreada en café.</p>
<p>
La base puede ser un año solo, múltiples años o un rango de años. Para un año solo, simplemente ingrese las 4 cifras del año que quiere, como está por defecto. Para múltiples años, ingrese las 4 cifras de los años que quiere, separadas por un espacio. Por ejemplo, al ingresar <i>1985 1990 2004</i> se selecciona estos 3 años y se calcula el promedio para formar una nueva línea base. Para un rango de años, ingrese las 4 cifras del primer año y las del último año (incluso) separadas por un <i>-</i>. Por ejemplo <i>1990-1999</i> selecciona estos 10 años y calcula el promedio para formar una línea base que representa los 90s. Finalmente, se puede definir un año de otra manera que de Enero a Diciembre al elegir el mes cuando empieza el año. Por ejemplo, elegir <i>Mar</i> define un año como los 12 meces desde Marzo hasta Febrero.
</p>
<p>
El propósito de esta herramienta es proveer un medio visual simple de relación de precipitación promedio sobre una región para un año referencia de interés.
</p>
<h4>Referencias:</h4>
<b>Lyon</b>, B., and A. G. Barnston, 2005:  ENSO and the spatial extent of interannual precipitation extremes in tropical land areas. <i>Journal of Climate</i>, <b>18</b>, 5095-5109.
<p>
<b>Lyon</b>, B., 2004:  The strength of El Niño and the spatial extent of tropical drought. <i>Geophys. Res. Lett.</i>, <b>31</b>, L21204.
</p>
</div>
<div id="tabs-2" class="ui-tabs-panel">
<h2  align="center">Documentación de la Base de Datos</h2>
<dl class="datasetdocumentation">
<dt>Fuente de Datos</dt>
<dd>Última versión disponible mensual del Análisis Combinado de Precipitación CPC (CMAP, versión 2, combinado con medición y estimados de satélite) con una malla de resolución de 2.5° x 2.5° lat/lon.</dd>
<dt>Periódo Base para Anomalías</dt>
<dd>1979 hasta el último año calendario completo (2007)</dd>
</dl>
</div>
<div class="ui-tabs-panel-hidden">
<h2 align="center">Base de Datos</h2>
<p>
<a href="http://iridl.ldeo.columbia.edu/expert/home/.mbell/.MDG/.Africa/.queriesCMAPlatest/caCMAP-latest_WASP12//fullname/%2812-Month%20WASP%29def/tag://fullname/%2812-Month%20WASP%29:tag//long_name/%2812-Month%20WASP%29def/cabaseline//fullname/%28Baseline%29def/tag://fullname/%28Baseline%29:tag//long_name/%28Baseline%29def/%7BWASP/Baseline%7Dds/nip/">Acceso a la base de datos usada para crear este mapa.</a>
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
<fieldset class="navitem langgroup" id="contactus"></fieldset>
</div>
 </body>
 </html>
