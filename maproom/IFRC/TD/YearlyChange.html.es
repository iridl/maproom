<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:wms="http://www.opengis.net/wms#"
      xmlns:iridl="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#"
      xmlns:maproom="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"
      xmlns:term="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
      xmlns:xs="http://www.w3.org/2001/XMLSchema#"
      version="XHTML+RDFa 1.1"
 xml:lang="es"
      >
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta property="maproom:Sort_Id" content="d03" />
<title>IFRC PIC: Recent Climate Trends</title>
<link rel="stylesheet" type="text/css" href="../../../uicore/uicore.css" />
<link rel="stylesheet" type="text/css" href="/localconfig/ui.css" />
<link rel="stylesheet" type="text/css" href="../ifrc.css" />
<link class="altLanguage" rel="alternate" hreflang="en" href="YearlyChange.html?Set-Language=en" />
<link rel="canonical" href="YearlyChange.html" />
<link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
<link class="carryLanguage" rel="home alternate" type="application/json" href="/maproom/navmenu.json" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/maproom/IFRC/#TimeScales" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Hazards" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#maproom_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#precipitation" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#interactive" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#seasonal" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#decadal" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#interannual" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#change" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#variance" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#standard_deviation" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#IRI"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Atmosphere"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Gridded"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#IFRC_term"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#deg2.5x2.5"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Global"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#temperature"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#AirTemperature"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#AirTemperature2m"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#z2m"/>
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#time_series"/>
<link rel="term:icon" href="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28season%29/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/%7Bexch%5BT%5Drmsaover/%28units%29%28mm/month%29def/dup/mul%7Drepeat/exch/1/index/add/div/%7BLow/0.75/Medium/0.85/High/0.9/%28Extremely%20High%29%7D/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20year-to-year%20shifts%29def/startcolormap/transparent/white/90/190/95/RGB/yellow/orange/red/white/endcolormap/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/0/psdef/+//plotborder+0+psdef//plotaxislength+200+psdef+.gif" />
<script type="text/javascript" src="../../../uicore/uicore.js"></script>
<script type="text/javascript" src="/localconfig/ui.js"></script>
<style>
.val999 {
visibility: hidden
}
.message999 {
display: none;
}
.message999.val999 {
display: block;
visibility: visible;
}

.dlimage, .dlimage.wide{
width: 46%;
display: inline;
}
.dlimgts {
width: 100%;
}
@media only all and (max-width: 800px) {
.dlimage, .dlimage.wide {
width: 95%;
}
}
.climatechange {
color: magenta;
}
.decadal {
color: blue;
}
.residual {
}
</style>
</head>
<body>
<form name="pageform" id="pageform" class="carryLanguage carryup carry dlimg dlimgts dlauximg dlimgloc share">
<input class="carryLanguage carryup carry" name="Set-Language" type="hidden" />
<input class="carryup carry dlimg dlimgloc share" name="bbox" type="hidden" />
<input class="carry dlimgts dlimgloc share" name="region" type="hidden" />
<input class="carry dlimg dlimgts share" name="var" type="hidden" />
<input class="carry dlimg dlimgts share" name="seasonStart" type="hidden"  />
<input class="carry dlimg dlimgts share" name="seasonEnd" type="hidden"  />
<input class="notused" name="plotaxislength" type="hidden" />
<input class="pickarea" name="resolution" type="hidden" data-default="2.5" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList"> 
                <legend>Federación Internacional</legend> 
                      <a rev="section" class="navlink carryup" href="/maproom/IFRC/">Predicciones en Contexto</a>
            </fieldset> 
            <fieldset class="navitem" id="chooseSection"> 
                <legend about="http://iridl.ldeo.columbia.edu/maproom/IFRC/#TimeScales"><span property="term:label">Fluctuaciones Recientes del Clima</span></legend>
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
            <fieldset class="navitem"><legend>Variable</legend><span class="selectvalue"></span><select class="pageformcopy" name="var"><option value="">Lluvia</option><option value=".tmp">Temperatura</option></select></fieldset>
            <fieldset class="navitem"><legend>Season</legend><span class="selectvalue"></span><select class="pageformcopy" name="seasonStart"><option value="">Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dec</option></select> to <span class="selectvalue"></span><select class="pageformcopy" name="seasonEnd"><option>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option value="">Dec</option></select></fieldset>
 </div>
<div class="ui-tabs">
    <ul class="ui-tabs-nav">
<div id="ifrcdiv">
<img id="ifrcicon" src="http://iridl.ldeo.columbia.edu/maproom/.IFRC/.Forecasts/logoFED_UK_220px.jpg" /></div>
      <li><a href="#tabs-1" >Descripción</a></li>
      <li><a href="#tabs-2" >Más Información</a></li>
      <li><a href="#tabs-3" >Instructiónes</a></li>
    <li><a href="#tabs-7" >Descripción Técnica</a></li>
      <li><a href="#tabs-4" >Dataset de Documentación</a></li>
      <li><a href="#tabs-5" >Contáctenos</a></li>
    </ul>
<fieldset class="dlimage" about="">
<link rel="iridl:hasFigure" href="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28season%29/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/%7Bexch%5BT%5Drmsaover/%28units%29%28mm/month%29def/dup/mul%7Drepeat/exch/1/index/add/div/%7BLow/0.75/Medium/0.85/High/0.9/%28Extremely%20High%29%7D/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20year-to-year%20shifts%29def/startcolormap/transparent/white/90/190/95/RGB/yellow/orange/red/white/endcolormap/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/72/psdef//plotaxislength/590/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//framelabel/%28.pre%29//var/parameter/%28.pre%29eq/%28Historical%20Precipitation%20%29%28Historical%20Temperature%20%29ifelse//season/get_parameter/append/psdef/" />
<img class="dlimg" rel="iridl:hasFigureImage" src="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28season%29/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/%7Bexch%5BT%5Drmsaover/%28units%29%28mm/month%29def/dup/mul%7Drepeat/exch/1/index/add/div/%7BLow/0.75/Medium/0.85/High/0.9/%28Extremely%20High%29%7D/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20year-to-year%20shifts%29def/startcolormap/transparent/white/90/190/95/RGB/yellow/orange/red/white/endcolormap/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/72/psdef//plotaxislength/590/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//framelabel/%28.pre%29//var/parameter/%28.pre%29eq/%28Historical%20Precipitation%20%29%28Historical%20Temperature%20%29ifelse//season/get_parameter/append/psdef/+.gif" border="0" alt="image" />
  <br />
  <img class="dlauximg" rel="iridl:hasFigureImage" src="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28season%29/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/%7Bexch%5BT%5Drmsaover/%28units%29%28mm/month%29def/dup/mul%7Drepeat/exch/1/index/add/div/%7BLow/0.75/Medium/0.85/High/0.9/%28Extremely%20High%29%7D/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20year-to-year%20shifts%29def/startcolormap/transparent/white/90/190/95/RGB/yellow/orange/red/white/endcolormap/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/72/psdef//plotaxislength/590/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//framelabel/%28.pre%29//var/parameter/%28.pre%29eq/%28Historical%20Precipitation%20%29%28Historical%20Temperature%20%29ifelse//season/get_parameter/append/psdef/.auxfig//plotborder+72+psdef//plotaxislength+590+psdef+.gif" />
</fieldset>
<fieldset class="dlimage">
<img class="dlimgloc regionwithinbbox" src="http://iridl.ldeo.columbia.edu/SOURCES/.WORLDBATH/.bath/X/Y/%28bb:-20:-60:340:80:bb%29//bbox/parameter/geoobject/geoboundingbox/BOXEDGES/%28bb:-20%2C-40%2C55%2C40%29//region/parameter/geoobject/2/copy/rasterize/Y/cosd/mul/X/1/index%5BX/Y%5Dweighted-average/exch/Y/exch%5BX/Y%5Dweighted-average/X/Y/fig-/lightgrey/mask/black/countries_gaz/red/fill/red/smallpushpins/-fig//plotbordertop/8/psdef//antialias/true/psdef//plotaxislength/120/psdef//plotborder/0/psdef//plotborderleft
/8/psdef//plotborderright/8/psdef//plotborderbottom/8/psdef/+.gif" />
<div style="display: inline-block; text-align: top">
<link class="dlimgts" rel="iridl:hasJSON" href="http://iridl.ldeo.columbia.edu/expert/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn//var/get_parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add//var/get_parameter/%28.pre%29eq/%7B:a:/.pre/T//season/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/:a/add%7Dif/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/%7B4/-1/roll/%28bb:%5B-180%2C-60%2C180%2C80%5D%29//region/parameter/geoobject%5BX/Y%5Dweighted-average%5BT%5Drmsaover/dup/mul%7Drepeat/3/%7B3/-1/roll/3/index/div//percent/unitconvert/0.5/add/999/setmissing_value/toi4%7Drepeat/%7Bclimatechange/decadal/residual%7Dds/climatechange//long_name/%28Century-long%20Shifts%29def/decadal//long_name/%28Decade-long%20Shifts%29def/residual//long_name/%28Year-to-Year%20Shifts%29def/%7Bclimatechange/decadal/residual%7Dds/nip//max-age/8640000/7/mul/def/info.json" />
<script type="application/json" property="iridl:hasPUREdirective">
{"tr": {
 "var&lt;-iridl:hasDependentVariables": {
  "td.name": "var.iridl:long_name",
 "td.name@class+": "var.iridl:name",
 "+td.value": "var.iridl:value",
"td.value@class+": "#{var.iridl:name} val#{var.iridl:value}"
}
},
".message999@class+": "val#{iridl:hasDependentVariables.climatechange.iridl:value}"
}
</script>
<div class="template">
<table class="valid">
<tr><td class="name "></td><td align="right" class="value ">%</td></tr>
</table>
<div class="message999 "><b>No analysis available at this location</b></div>
</div>
</div>
<img class="dlimgts" rel="iridl:hasFigureImage" src="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn//var/get_parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add//var/get_parameter/%28.pre%29eq/%7B:a:/.pre/T//season/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/:a/add%7Dif/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/%7B4/-1/roll/%28bb:%5B-180%2C-60%2C180%2C80%5D%29//region/parameter/geoobject%5BX/Y%5Dweighted-average/0/replaceNaN%7Drepeat/pop/%28scale_symmetric%29%28true%29def/%28fullname%29%28Decade-long%20Shifts%29def/DATA/AUTO/AUTO/RANGE/exch/%28scale_symmetric%29%28true%29def/%28fullname%29%28Century-long%20Shifts%29def/DATA/AUTO/AUTO/RANGE/3/-1/roll/%28scale_symmetric%29%28true%29def/%28fullname%29//var/get_parameter/%28.pre%29eq/%28Total%20Rain%20and%20Snow%29%28Total%29ifelse/def/DATA/AUTO/AUTO/RANGE/3/-2/roll/T/fig-/black/line/zeroline/solid/thick/blue/line/magenta/line/-fig/%28plotaxislength%29590/psdef//plotborder/72/psdef//plotaxislength/590/psdef//framelabel//region/get_parameter/s==/space/append//season/get_parameter/append/psdef/+.gif" />
</fieldset>
 <div id="tabs-1" class="ui-tabs-panel" about="">
<h2 align="center"  property="term:title" >¿Qué tan importantes han sido para el clima los desplazamientos año con año? </h2>
<p align="left" property="term:description">Este mapa muestra cómo los periodos húmedos y secos han variado a lo largo del tiempo. Trace un rectángulo sobre una región o haga clic en un lugar del mapa para visualizar los gráficos que se refieren a esta área. Estos gráficos muestran cuánto varía la precipitación (o la temperatura) año con año, década con década y en el siglo pasado. Esta información se puede usar para propósitos de planificación en diferentes escalas de tiempo, y para poner recientes memorias de patrones de precipitación o eventos específicos en una perspectiva a más largo plazo.</p>
<p align="left">Si los desplazamientos de 10 años son anaranjados o rojos, entonces las fluctuaciones de una década de la lluvia o de la temperatura pueden ser particularmente importantes en su área. </p>
</div>
<div id="tabs-2" class="ui-tabs-panel">
<h2  align="center">¿Qué es esta herramienta? </h2>
<p align="left">Este "Maproom de Tendencias Climáticas Recientes" muestra cómo los periodos húmedos y secos (o calientes y fríos) han variado en el último siglo. Muchas partes del mundo tienen temporadas secas y temporadas lluviosas (o veranos e inviernos) dentro de cada año, pero también tienen años o décadas completos que son inusualmente secos o húmedos (o calientes o frío). Estas gráficas tienen como objetivo mostrar las tendencias en lluvia/nieve (o temperatura) durante tres "escalas de tiempo":</p>
<ul>
<li>Desplazamientos año con año (la línea negra es precipitación real)</li>
<li>Desplazamientos en toda una década (línea azul suave)</li>
<li>Tendencias en todo un siglo (línea recta morada)</li>
</ul>
<p align="left">En el mapa, si el color de un lugar es casi rojo, significa que los desplazamientos en diez años de la lluvia (o la temperatura) pueden tener mayor importancia para ese lugar. La leyenda muestra el grado de importancia de los cambios de precipitación (o temperatura) que se pueden explicar con esta tendencia de 10 años.</p>
<p><b>Use esta herramienta para:</b></p>
<ul>
<li>Examinar el contexto y la historia de una tendencia húmeda/seca (o caliente/fría) que está experimentando actualmente. </li>
<li>Ver si han habido desplazamientos grandes en la década pasada para ayudarle a prepararse a esperarlos en el futuro.</li>
<li>Ver si hay evidencia de que ya se acerca un desplazamiento a plazo más largo de precipitación o temperatura (línea morada).</li>
</ul>
<p><b>No se recomienda:</b></p>
<ul>
<li>Mirar sólo un punto en la cuadrícula (puede ser engañoso). Revise unos pocos en la misma área, o promedie en un recuadro de mayor tamaño.</li>
<li>Ver sólo una escala de tiempo. La precipitación real está influenciada por desplazamientos anuales, de una década o de un siglo de duración.</li>
<li>Usar esto como herramienta para predecir el futuro. Sólo muestra información histórica.</li>
</ul>
</div>
<div id="tabs-3" class="ui-tabs-panel">
<h2  align="center">¿Cómo se usa esta herramienta? </h2>
<ol>
<li>Seleccione su área haciendo clic en un punto en el mapa superior, seleccionando una región predeterminada de la barra lateral azul, o trazando un recuadro con el ratón para un área media (en este caso, haga clic en el recuadro de "análisis regional"). Debe aparecer una gráfica en la parte inferior que muestra la precipitación/nevadas en su área de los últimos 100 años (vea arriba información sobre estas gráficas). TENGA PACIENCIA porque algunas veces la gráfica requiere algunos minutos para calcular.</li>
<li>Comience viendo la tendencia a largo plazo (línea morada) para ver si hay alguna evidencia de una tendencia de precipitación a plazo más largo en los últimos 100 años.  Esto podría o podría no coincidir con proyecciones de cambio de clima de término más largo para el Siglo XXI que obtiene de fuentes como <a href="http://www.ipcc.ch/">IPCC</a>. Si tiene preguntas sobre la coincidencia de las tendencias pasadas y las proyecciones futuras, envíe un mensaje electrónico al <a href="mailto:ifrc@iri.columbia.edu">Servicio de Asistencia del IRI</a>.  Aunque haya alguna evidencia de una tendencia a largo plazo, probablemente notará que es muy pequeña y que la precipitación varía mucho más en escalas de tiempo más breves (temporadas, años, décadas).</li>
<li>A continuación, vea la línea azul de los desplazamientos de una década. Puede encontrar un número azul en la parte superior de la gráfica que se encuentra junto a la frase "Desplazamientos de una década" que indica cuánto de la precipitación o temperatura histórica se puede explicar con esta línea azul. Si este número es superior al 20%, entonces las fases de 10 años pueden ser importantes en el área que usted seleccionó. </li>
<ol>
<li>Si estas fases son importantes en su área, debe tomar eso en consideración cuando piense en las proyecciones de cambio de clima a más largo plazo, a fin de estar preparado para experimentar periodos de precipitación que pueden contradecir lo que se predice para la tendencia a más largo plazo.</li>
<li>Si la línea azul tiene muy poca importancia, entonces se puede concentrar más en los desplazamientos año con año así como en las tendencias a plazo más largo.</li>
<li>Si en su área ha experimentado un periodo seco o húmedo (o caliente o frío) que ha durado varios años en su área, la línea azul puede ayudar a determinar si usted estaba en una fase de diez años húmeda o seca (o caliente o fría). De ser así, cuando la fase cambie, podría ver resultados opuestos, y el patrón reciente podría ni deberse a una tendencia climática a plazo más largo.</li>
</ol>
<li>Finalmente, vea la precipitación real en su área (línea negra).  Es común para la mayoría de las fluctuaciones (65% o más) en precipitación que sucedan en una escala de tiempo de estación a estación o de año a año.  Esto sólo significa que la precipitación fluctúa una buena cantidad año con año. Estos son <a href="http://iridl.ldeo.columbia.edu/maproom/.IFRC/.Forecasts/index.html?mapsel=prcp_fcst&amp;map.S.plotvalue=0000+7+Jun+2012&amp;map.Y.units=degree_north&amp;map.Y.plotlast=76.25N&amp;map.url=+SOURCES+.IRI+.MD+.IFRC+.ESRL+.PSD+.reforecast+.ensemble_mean+.analyses+.tot6day+a%3A+.apcppctlenoseasonal+%3Aa%3A+.forecasttime+%3Aa+X+Y+fig-+colors+plotlabel+black+thin+countries_gaz+-fig&amp;map.domain=+{+%2FS+1749.+plotvalue+}&amp;map.domainparam=+%2Fplotaxislength+550+psdef+%2Fplotborder+72+psdef+%2FXOVY+null+psdef&amp;map.zoom=Click+for+Info&amp;map.Y.plotfirst=66.25S&amp;map.X.plotfirst=178.75E&amp;map.X.units=degree_east&amp;map.X.modulus=360&amp;map.X.plotlast=178.75E&amp;map.Y.step=.5">pronósticos </a> disponibles para predecir la precipitación cada temporada, así que su monitorización podría ser útil para anticipar un aumento en el riesgo de inundaciones y sequías. ¿Puede escoger años de lluvias muy abundantes o escasas?  Adicionalmente, puede ser útil notar que es muy probable que el rango de los datos reales que sea mucho mayor que cualquier aumento o reducción de la precipitación mostrado con el tiempo por la tendencia de cambios climáticos a plazo más largo. En cualquier año determinado, las fluctuaciones año con año a corto plazo pueden eclipsar la tendencia de cambio climático a plazo más largo.</li>
</ol>
<div class="buttonInstructions"></div>
</div>
<div id="tabs-4" class="ui-tabs-panel">
<h2  align="center">Dataset de Documentación</h2>
<p><a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Time_Scales/notes.html">Documento técnico de referencia</a></p>
Greene, A.M, L. Goddard and R. Cousin, <a href="http://www.agu.org/pubs/crossref/2011/2011EO450001.shtml">Web tool deconstructs variability in twentieth-century climate (Recurso de la Web deconstruye la variabilidad en el clima del Siglo Veinte)</a>, Eos Trans. AGU, 92(45), 397, doi:10.1029/2011EO450001.
<p>
<b>Récord de temperatura media multimodelo media global  </b>
<br /><font size="-1"><b>Fuente de datos</b>:
<a href="http://iridl.ldeo.columbia.edu/SOURCES/.WCRP/.CMIP3/" target="_blank">Media del conjunto multimodelo CMIP3</a>
</font>
</p><p>
<b>Observaciones</b>
<br /><font size="-1"><b>Fuente de datos</b>:
temperatura y precipitación medias mensuales de <a href="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.monthly/" target="_blank">CRU TS 3.1</a>
</font>
</p>
</div>
<div id="tabs-5"  class="ui-tabs-panel">
<h2  align="center">Servicios de Asistencia</h2>
<p>
Contacte con <a href="mailto:ifrc@iri.columbia.edu">ifrc@iri.columbia.edu</a> si usted es un humanitario que toma las decisiones con preguntas sobre la información en esta Sala de Mapas, o el clima y otras preguntas relacionadas con el clima.  Por lo general, responden en un día laborable.</p>
<p>
En contacto con <a href="mailto:help@iri.columbia.edu?subject=Precipitation Forecast in Context Map Tool">help@iri.columbia.edu</a> con cualquier pregunta técnica o problemas con esta Sala de Mapas, por ejemplo, las previsiones no mostrar o actualizar correctamente.
 </p>
</div>
<div id="tabs-7" class="ui-tabs-panel">
<h2  align="center">Descripción Técnica</h2>
<p align="left"> <b>Fluctuaciones decadales del clima</b>
Después de eliminar la tendencia, se esperaría que unos 20% de la varianza del ruido blanco anualmente resuelto se acumularía al componente decadal, como es definido aquí, por este tamaño de la muestra (aproximadamente 100 años). Ruido blanco es un proceso aleatorio sin &quot;memoria,&quot; en el sentido que su valor en un momento en particular no muestra dependencia de sus valores en tiempos anteriores. Esto difiere de los procesos con memoria o &quot;persistencia&quot; en cuales el nivel del proceso es dependiente de los valores anteriores (tales procesos tienden a variar con más baja frecuencia que el ruido blanco). De este modo, una fracción de varianza decadal de hasta unos 20% (significando la fracción decadal dividida entre la suma de la fracciones decadales e interanuales solas) no se debe confundir con la señal de una oscilación sistemática decadal o más aún con un proceso aleatorio de baja frecuencia, que se diferenciaría del ruido blanco. Como resultado, la importancia Media de los fluctuaciones decadales del clima es definida como la fracción de la varianza decadal (relativa sólo a la suma de las fracciones decadales e interanuales) entre 15% y 25%. La categoría Baja es definida como una fracción de varianza decadal de menos de 15%; la categoría Alta es mayor que 25% y la categoría Extremadamente Alta es mayor que 40%.</p>

<p align="left"><b>Fluctuaciones interanuales del clima</b>
Complementariamente, una fracción de varianza interanual de hasta unos 80% se anticipa en una señal aleatoria. Por lo tanto, la importancia Media de los fluctuaciones interanuales del clima es definida como la fracción de la varianza interanual (relativa a la suma de las fracciones decadales e interanuales) entre 75% y 85%. La categoría Baja es definida como una fracción de varianza interanual de menos de 75%; la categoría Alta es mayor que 85% y la categoría Extremadamente Alta es mayor que 90%.</p>

<p align="left"><b>Tendencias climáticas a largo plazo </b>
La tendencia, o más precisamente la parte de la señal regional que es linealmente dependiente de la temperatura media global, aquí llamada tendencias climáticas a largo plazo, tiene características estadísticas diferentes a las señales de los fluctuaciones decadales e interanuales así que usamos una estrategia diferente para definir sus categorías de importancia. Las categorías son definidas simplemente e intuitivamente con relación a la importancia de las otras dos escalas temporales. De este modo, Extremadamente Alta es asignada cuando la fracción de la varianza correspondiente a la tendencia (relativa a la varianza total de la señal original) es mayor que ambas fracciones de varianza decadal e interanual; Alta es asignada cuando la fracción de la varianza correspondiente a la tendencia se encuentra entre las otras dos; Medio es asignada cuando la fracción de la varianza correspondiente a la tendencia es menos que las otras dos fracciones; Bajo es asignada cuando la fracción de la varianza correspondiente a la tendencia es como mínimo 10% menos que la menor de las otras dos fracciones. </p>

</div>

</div>
<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
 </body>
 </html>
