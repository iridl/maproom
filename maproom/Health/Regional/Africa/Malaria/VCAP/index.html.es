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
<meta name="viewport" content="width=device-width; initial-scale=1.0;" />
<title>Vectorial Capacity (VCAP)</title>
<script type="text/javascript" src="../../../../../../uicore/uicore.js"></script>
<link rel="stylesheet" type="text/css" href="../../../../../../uicore/uicore.css" />
<link class="share" rel="canonical" href="index.html" />
<link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
<link class="carryLanguage" rel="home alternate" type="application/json" href="/maproom/navmenu.json" />
<link class="altLanguage" rel="alternate" hreflang="en" href="index.html?Set-Language=en" />
<meta property="maproom:Entry_Id" content="Health_Regional_Africa_Malaria_VCAP" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_Africa_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#maproom_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Surface"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#PlanetarySurface"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Malaria"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/irigaz.owl#Africa_3327_1"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#health"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#Health_Regional_Africa_Malaria_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#interactive"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#LandSurface"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Epidemic_Malaria"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Monitoring_The_Environment"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Africa"/>
<link rel="term:icon" href="http://iridl.ldeo.columbia.edu/maproom/.Health/.Regional/.Africa/.Malaria/VCAPsmall.jpg" />
<style>
.dlimgtsbox {
width: 49%;
display: inline-block
 }
</style>
</head>
<body xml:lang="es">
<form name="pageform" id="pageform" class="info carryup carry share dlimg dlauximg dlimgts dlimgloc">
<input class="carryup carry carryLanguage" name="Set-Language" type="hidden" />
<input class="dlimg share dlimgloc" name="bbox" type="hidden" />
<input class="dlimg share" name="T" type="hidden" />
<input class="share dlimgts dlimgloc" name="region" type="hidden" />
<input class="dlimg dlauximg" name="plotaxislength" type="hidden" value="432" />
<input class="pickarea" name="resolution" type="hidden" value="irids:SOURCES:Features:Political:Africa:Districts:ds" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList">
                <legend>Clima y Salud</legend>
                      <a rev="section" class="navlink carryup" href="/maproom/Health/Regional/Africa/Malaria/System.html">Sistema de Alerta Temprana</a>
            </fieldset>
            <fieldset class="navitem" id="chooseSection">
                <legend about="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Monitoring_The_Environment"><span property="term:label">el analisis de la ambiente</span></legend>
            </fieldset>
 <fieldset class="navitem"><legend>Spatially Average Over</legend><select class="pageformcopy" name="resolution">
<option value=".1">11x11 km box</option>
<option value=".3">33x33 km box</option>
<option value=".5">55x55 km box</option>
<option value="1.">111x111 km box</option>
<option value="irids:SOURCES:Features:Political:Africa:Districts:ds">district boundaries</option>
</select></fieldset>
 </div>
<style>
.leftpart {
display: inline-block;
width: 60%
}
.rightpart {
margin-left: 10pt;
display: inline-block;
width: 30%
}
@media only all and (max-width: 400px) {
.leftpart { width: 100%}
.rightpart {width: 95%}
}
.plotheading {
text-align: center;
margin: 0px;
}
</style>
<div class="ui-tabs">
    <ul class="ui-tabs-nav">
      <li><a href="#tabs-1" >Descripción</a></li>
      <li><a href="#tabs-2" >Documentación de la Base de Datos</a></li>
      <li><a href="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.VCAP/.eight-day/.v200906/.vcap/">Base de Datos</a></li>
      <li><a href="#tabs-4" >Contáctenos</a></li>
      <li><a href="#tabs-5" >Instrucciones</a></li>
    </ul>
<fieldset class="regionwithinbbox dlimage" about="">
<a class="dlimgts" rel="iridl:hasTable" href="http://iridl.ldeo.columbia.edu/expert/SOURCES/.IRI/.Analyses/.USGS/.VCAP/.eight-day/.v200906/.vcap_coarse/%28bb:11:12:12:13:bb%29//region/parameter/geoobject%5BX/Y%5Dweighted-average/DATA/null/null/RANGE//long_name/%28VCAP%29def/T/exch/table:/2/:table/"></a>
<img class="dlimgloc" src="http://iridl.ldeo.columbia.edu/SOURCES/.WORLDBATH/.bath/X/-30/60/RANGE/Y/-60/40/RANGE/%28bb:0:0:5:5:bb%29//region/parameter/geoobject/2/copy/rasterize/Y/cosd/mul/X/1/index%5BX/Y%5Dweighted-average/exch/Y/exch%5BX/Y%5Dweighted-average/X/Y/fig-/lightgrey/mask/grey/mews_prov/black/countries_gaz/red/fill/red/smallpushpins/-fig//plotbordertop/8/psdef//antialias/true/psdef//plotaxislength/120/psdef//plotborder/0/psdef//plotborderleft/8/psdef//plotborderright/8/psdef//plotborderbottom/8/psdef/+//plotborder+0+psdef//plotaxislength+120+psdef+.gif" />
<div class="valid" style="display: inline-block; text-align: top;">
<a class="dlimgts" rel="iridl:hasJSON" href="http://iridl.ldeo.columbia.edu/expert/%28bb:1:2:3:4:bb%29//region/parameter/geoobject/info.json"></a>
<div class="template">
Observations for <span class="bold iridl:long_name"></span>
</div>
</div>
<br />
<div class="dlimgtsbox">
<div>Últimos 12 Meses de VCAP</div>
<img class="dlimgts" rel="iridl:hasFigureImage" style="width: 100%" src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.Analyses/.USGS/.VCAP/.eight-day/.v200906/.vcap_coarse/%28bb:11:12:12:13:bb%29//region/parameter/geoobject%5BX/Y%5Dweighted-average/T/last/365/sub/last/RANGE//long_name/%28VCAP%29def/DATA/0.0/20.0/RANGE/T/fig-/line/-fig//VCAP/0.0/20.0/plotrange//plotborder/62/psdef//XOVY/null/psdef//plotaxislength/250/psdef/+.gif" />
</div><div class="dlimgtsbox">
<div>Comparaciones Múltiples Interanuales</div>
<img class="dlimgts" rel="iridl:hasFigureImage" style="width: 100%" src="http://iridl.ldeo.columbia.edu/expert/SOURCES/.IRI/.Analyses/.USGS/.VCAP/.eight-day/.v200906/.vcap_coarse/%28bb:11:12:12:13:bb%29//region/parameter/geoobject%5BX/Y%5Dweighted-average//long_name/%28VCAP%29def/DATA/0.0/20.0/RANGE/T/exch/T/dup/dup/yearlyedgesgrid/1/index/boundinggrids/pop/.gridvalues/constantdata/sub/1/add/toi4//units/%28days%20since%202008-01-01%29def//modulus/365.0/def/exch/1/index/1/index/T/%282008%29VALUES//fullname/%282008%29def/3/index/3/index/T/%282009%29VALUES//fullname/%282009%29def/5/index/5/index/T/%282010%29VALUES//fullname/%282010%29def/7/index/7/index/T/%282011%29VALUES//fullname/%282011%29def/9/index/9/index/T/%282012%29VALUES//fullname/%282012%29def/11/index/11/index/T/%282013%29VALUES/interp//fullname/%282013%29def/fig:/green/solid/scatterline/red/solid/scatterline/gray/solid/scatterline/magenta/solid/scatterline/blue/scatterline/black/medium/solid/scatterline/:fig//doy/4.0/361.0/plotrange//VCAP/0.0/20.0/plotrange//doy/4.0/361.0/plotrange//VCAP/0.0/20.0/plotrange//plotborder/62/psdef//XOVY/null/psdef//plotaxislength/250/psdef/+.gif" />
</div>
</fieldset>

<fieldset class="dlimage">
<a rel="iridl:hasFigure" href="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.VCAP/.eight-day/.v200906/.vcap/a:/:a:/SOURCES/.Features/.Epidemiological/.VCAPmerged/.epidemic_map/.the_geom/rasterize/mul/0.01/:a/50/masknotrange/DATA/0/50/RANGE//long_name/%28Vectorial%20Capacity%29def/home/.jdcorral/.Features/.Epidemiological/.VCAPmerged/.epidemic_map/.the_geom/X/Y/fig-+colors+black+thin+countries_gaz+lightgrey+stroke+-fig+//T/last/plotvalue/Y/-40.0/39.99167/plotrange+//antialias+true+psdef/"></a>

<img class="dlimg" src="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.VCAP/.eight-day/.v200906/.vcap/a:/:a:/SOURCES/.Features/.Epidemiological/.VCAPmerged/.epidemic_map/.the_geom/rasterize/mul/0.01/:a/50/masknotrange/DATA/0/50/RANGE//long_name/%28Vectorial%20Capacity%29def/home/.jdcorral/.Features/.Epidemiological/.VCAPmerged/.epidemic_map/.the_geom/X/Y/fig-+colors+black+thin+countries_gaz+lightgrey+stroke+-fig+//T/last/plotvalue/Y/-40.0/39.99167/plotrange+//antialias+true+psdef+.gif" border="0" alt="image" />
  <br />
  <img class="dlauximg" src="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.VCAP/.eight-day/.v200906/.vcap/a:/:a:/SOURCES/.Features/.Epidemiological/.VCAPmerged/.epidemic_map/.the_geom/rasterize/mul/0.01/:a/50/masknotrange/DATA/0/50/RANGE//long_name/%28Vectorial%20Capacity%29def/X/Y/fig-+colorscale2+-fig//nplotstream+1+def+//T/3158.0/plotvalue/Y/-40.0/39.99167/plotrange+//antialias+true+psdef+.gif" />
</fieldset>
 <div id="tabs-1" class="ui-tabs-panel" about="">
<h2 align="center"  property="term:title" >Capacidad Vectorial (VCAP) -- Malaria </h2>
<p align="left" property="term:description">Los modelos de VCAP incluyen la influencia de las variables de precipitación y temperatura en los patrones de transmisión de malaria. VCAP es la tasa diaria a la cual futuras inoculaciones pueden incrementar partiendo de un caso infectado actual. El mapa representa el promedio de los 8 días más recientes de los modelos de VCAP.</p>
<p>El mapa es provisto como un Sistema de Alerta Temprana para áreas clasificadas como semi-áridas y áreas de altura de riesgo epidémico. Los colores más oscuros designan áreas de elevada VCAP. Estas son áreas donde la transmisión puede tener lugar y donde existe posibilidad de niveles epidémicos de malaria.</p>
<p>La interfaz de VCAP provee una perspectiva contextual de la Capacidad Vectorial reciente comparándola con temporadas anteriores.</p>

<h4>Máscara Epidemiológica</h4>

<p>
Este mapa utiliza una máscara epidemiológica para aislar las zonas propensas a nueva exposición de malaria. La máscara permite que VCAP sea exclusivamente ilustrada en zonas donde la malaria es considerada epidémica, por lo tanto, las áreas donde la transmisión de malaria es considerada endémica o ausente son excluidas. Esta máscara esta basada exclusivamente en las limitaciones climáticas para la transmisión de malaria, y aún no representa los márgenes de zonas norte o sur del continente, donde el control ha elimiado el riesgo a malaria.</p>

<h4>Referencias</h4>
<p>
Ceccato, P. , Vancutsem, C., Klaver, R., Rowland, J., Connor, S.J. <a href="http://www.hindawi.com/journals/jtm/2012/595948/">A Vectorial Capacity Product to Monitor Changing Malaria Transmission Potential in Epidemic Regions of Africa</a>. <i>Journal of Tropical Medicine</i>, Volume 2012, Article ID 595948, doi:10.1155/2012/595948.
</p>
</div>
<div id="tabs-2" class="ui-tabs-panel">
<h2  align="center">Documentación de la Base de Datos</h2>
<p><b><a class="carry"></a>8 días promedios de la Capacidad Vectorial</b><br />
<b>Data</b> 8 Días del Modelo de Capacidad Vectorial -- Malaria
<br /><b>Fuente de Datos</b> USGS/Famine Early Warning System (FEWS)
</p>
*Información adicional de datos decadales y diarios de FEWS esta disponible en
<a href="http://earlywarning.usgs.gov/fews/africa/index.php">FEWS NET Africa Data Portal</a>.
</div>
<div class="ui-tabs-panel-hidden">
<h2 align="center">Base de Datos</h2>
<p>
<a href="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.VCAP/.eight-day/.v200906/.vcap/">Access the dataset used to create this map.</a>
</p>
</div>
<div id="tabs-4"  class="ui-tabs-panel">
<h2  align="center">Servicios de Asistencia</h2>
<p>
Contacte <a href="mailto:help@iri.columbia.edu?subject=VCAP:  African Sector">help@iri.columbia.edu</a> con cualquier pregunta técnica o problema con este Cuarto de Mapas.
 </p>
</div>
<div id="tabs-5"  class="ui-tabs-panel">
<h2  align="center">Instrucciónes</h2>
<p>
Para ayudar en la evaluación de riesgo potencial de brote de malaria, la interfaz VCAP proporciona a los usuarios la posibilidad de realizar gráficos. Al seleccionar una zona donde predomina la VCAP, la interfaz proporcionará una perspectiva contextual de la VCAP reciente mostrando una serie de tiempo VCAP de 12 meses y ofreciendo comparaciones múltiples interanuales.
 </p>
<div class="buttonInstructions"></div>
</div>
</div>
<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
 </body>
 </html>
