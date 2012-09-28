<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://iridl.ldeo.columbia.edu/ontologies/xhtml1/DTD/xhtml1-transitional.dtd">
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
<meta name="viewport" content="width=device-width; initial-scale=1.0;" />
<meta property="maproom:Sort_Id" content="d02" />
<title>IFRC PIC: Recent Climate Trends</title>
<link rel="stylesheet" type="text/css" href="../../../uicore/uicore.css" />
<link rel="stylesheet" type="text/css" href="../ifrc.css" />
<link class="altLanguage" rel="alternate" hreflang="en" href="DecadalChange.html?Set-Language=en" />
<link rel="canonical" href="DecadalChange.html" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/maproom/IFRC/#TimeScales" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Hazards" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate" />
<link rel="term:icon" href="http://iridl.ldeo.columbia.edu/home/.benno/.UEA/.CRU/.TS3p1/.monthly/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28Jan-Dec%201901-2009%29//season/parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/home/.remic/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/{exch[T]rmsaover/(units)(mm/month)def/dup/mul}repeat/1/index/add/div/{Low/0.15/Medium/0.25/High/0.4/(Extremely High)}/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20decade-long%20shifts%29def/startcolormap/white/white/90/190/95/RGB/yellow/orange/red/white/endcolormap//max-age/604800/def/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/0/psdef//plotaxislength/200/psdef/+//plotborder+0+psdef//plotaxislength+200+psdef+.gif" />
<script type="text/javascript" src="../../../uicore/uicore.js"></script>
<style>
.dlimage, .dlimage.wide{
float: none;
width: 46%;
display: inline;
}
.dlimgts {
width: 100%;
}
@media only all and (max-width: 800px) {
.dlimage, .dlimage.wide{
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
<form name="pageform" id="pageform" class="carryup carry dlimg dlimgts dlauximg dlimgloc share">
<input class="carryup carry" name="Set-Language" type="hidden" />
<input class="carry dlimg dlimgloc share" name="bbox" type="hidden" />
<input class="carry dlimgts dlimgloc share" name="region" type="hidden" />
<input class="dlimg dlimgts share" name="var" type="hidden" />
<input class="dlimg dlimgts share" name="seasonStart" type="hidden"  />
<input class="dlimg dlimgts share" name="seasonEnd" type="hidden"  />
<input class="notused" name="plotaxislength" type="hidden" />
<input class="pickarea" name="resolution" type="hidden" value="2.5" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList"> 
                <legend>Federación Internacional</legend> 
                      <a rev="section" class="navlink carryup" href="/maproom/IFRC/">Predicciones en Contexto</a>
            </fieldset> 
            <fieldset class="navitem" id="chooseSection"> 
                <legend about="http://iridl.ldeo.columbia.edu/maproom/IFRC/#TimeScales"><span property="term:label">Fluctuaciones Recientes del Clima</span></legend>
            </fieldset> 
            <fieldset class="navitem" id="chooseRegion"> 
                <legend>Región</legend> 
            </fieldset>
            <fieldset class="navitem"><legend>Variable</legend><span class="selectvalue"></span><select class="pageformcopy" name="var"><option value="">Lluvia</option><option value=".tmp">Temperatura</option></select></fieldset>
            <fieldset class="navitem"><legend>Season</legend><span class="selectvalue"></span><select class="pageformcopy" name="seasonStart"><option value="">Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dec</option></select> to <span class="selectvalue"></span><select class="pageformcopy" name="seasonEnd"><option>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option value="">Dec</option></select></fieldset>
 </div>
<div class="ui-tabs">
    <ul class="ui-tabs-nav">
<div id="ifrcdiv">
<img id="ifrcicon" src="http://iridl.ldeo.columbia.edu/maproom/.IFRC/.Forecasts/logoFED_UK_220px.jpg" /></div>
      <li><a href="#tabs-1" >Descripci&#243;n</a></li>
      <li><a href="#tabs-2" >M&#225;s Informaci&#243;n</a></li>
      <li><a href="#tabs-3" >Instructi&#243;nes</a></li>
      <li><a href="#tabs-4" >Dataset de Documentaci&#243;n</a></li>
      <li><a href="#tabs-5" >Cont&#225;ctenos</a></li>
    </ul>
<span id="content">
<fieldset class="dlimage" about="">
<link rel="iridl:hasFigure" href="http://iridl.ldeo.columbia.edu/home/.benno/.UEA/.CRU/.TS3p1/.monthly/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28Jan-Dec%201901-2009%29//season/parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/home/.remic/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/{exch[T]rmsaover/(units)(mm/month)def/dup/mul}repeat/1/index/add/div/{Low/0.15/Medium/0.25/High/0.4/(Extremely High)}/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20decade-long%20shifts%29def/startcolormap/white/white/90/190/95/RGB/yellow/orange/red/white/endcolormap//max-age/604800/def/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/72/psdef//plotaxislength/590/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//framelabel/%28.pre%29//var/parameter/%28.pre%29eq/%28Historical%20Precipitation%20%29%28Historical%20Temperature%20%29ifelse//season/get_parameter/append/psdef/" />
<img class="dlimg" src="http://iridl.ldeo.columbia.edu/home/.benno/.UEA/.CRU/.TS3p1/.monthly/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28Jan-Dec%201901-2009%29//season/parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/home/.remic/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/{exch[T]rmsaover/(units)(mm/month)def/dup/mul}repeat/1/index/add/div/{Low/0.15/Medium/0.25/High/0.4/(Extremely High)}/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20decade-long%20shifts%29def/startcolormap/white/white/90/190/95/RGB/yellow/orange/red/white/endcolormap//max-age/604800/def/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/72/psdef//plotaxislength/590/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//framelabel/%28.pre%29//var/parameter/%28.pre%29eq/%28Historical%20Precipitation%20%29%28Historical%20Temperature%20%29ifelse//season/get_parameter/append/psdef/+.gif" border="0" alt="image" />
  <br />
  <img class="dlauximg" src="http://iridl.ldeo.columbia.edu/home/.benno/.UEA/.CRU/.TS3p1/.monthly/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28Jan-Dec%201901-2009%29//season/parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/home/.remic/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/{exch[T]rmsaover/(units)(mm/month)def/dup/mul}repeat/1/index/add/div/{Low/0.15/Medium/0.25/High/0.4/(Extremely High)}/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20decade-long%20shifts%29def/startcolormap/white/white/90/190/95/RGB/yellow/orange/red/white/endcolormap//max-age/604800/def/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/72/psdef//plotaxislength/590/psdef//plotbordertop/40/psdef//plotborderbottom/40/psdef//framelabel/%28.pre%29//var/parameter/%28.pre%29eq/%28Historical%20Precipitation%20%29%28Historical%20Temperature%20%29ifelse//season/get_parameter/append/psdef/.auxfig//plotborder+72+psdef//plotaxislength+590+psdef+.gif" />
</fieldset>
<fieldset class="dlimage">
<img class="dlimgloc regionwithinbbox" src="http://iridl.ldeo.columbia.edu/SOURCES/.WORLDBATH/.bath/X%5B-20/-60/340/60%5D//bbox/parameter/dup/0/get/exch/2/get/RANGEEDGES/%28bb:-180%2C-60%2C180%2C60%29//region/parameter/geoobject/2/copy/rasterize/Y/cosd/mul/X/1/index%5BX/Y%5Dweighted-average/exch/Y/exch%5BX/Y%5Dweighted-average/X/Y/fig-/lightgrey/mask/grey/mews_prov/black/countries_gaz/red/fill/red/smallpushpins/-fig//plotbordertop/8/psdef//antialias/true/psdef//plotaxislength/120/psdef//plotborder/0/psdef//plotborderleft/8/psdef//plotborderright/8/psdef//plotborderbottom/8/psdef/+.gif" />
<div style="display: inline-block; text-align: top">
<link class="dlimgts" rel="iridl:hasJSON" href="http://iridl.ldeo.columbia.edu/expert/home/.benno/.UEA/.CRU/.TS3p1/.monthly/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn//var/get_parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add//var/get_parameter/%28.pre%29eq/%7B:a:/.pre/T//season/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/:a/add%7Dif/home/.remic/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/%7B4/-1/roll/%28bb:%5B-180%2C-60%2C180%2C80%5D%29//region/parameter/geoobject%5BX/Y%5Dweighted-average%5BT%5Drmsaover/dup/mul%7Drepeat/3/%7B3/-1/roll/3/index/div//percent/unitconvert/0.5/add/toi4%7Drepeat/%7Bclimatechange/decadal/residual%7Dds/climatechange//long_name/%28Century-long%20Shifts%29def/decadal//long_name/%28Decade-long%20Shifts%29def/residual//long_name/%28Year-to-Year%20Shifts%29def/%7Bclimatechange/decadal/residual%7Dds/nip//max-age/864000/7/mul/def/info.json" />
<table class="valid template">
<tr class="iridl:hasDependentVariables"><td class="iridl:name@class"> <span class="iridl:long_name"></span></td><td align="right" class="iridl:name@class"><span class="iridl:value"></span>%
</td></tr>
</table>
</div>
<img class="dlimgts" src="http://iridl.ldeo.columbia.edu/home/.benno/.UEA/.CRU/.TS3p1/.monthly/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn//var/get_parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add//var/get_parameter/%28.pre%29eq/%7B:a:/.pre/T//season/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/:a/add%7Dif/home/.remic/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/%7B4/-1/roll/%28bb:%5B-180%2C-60%2C180%2C80%5D%29//region/parameter/geoobject%5BX/Y%5Dweighted-average%7Drepeat/pop/%28scale_symmetric%29%28true%29def/%28fullname%29%28Decade-long%20Shifts%29def/DATA/AUTO/AUTO/RANGE/exch/%28scale_symmetric%29%28true%29def/%28fullname%29%28Century-long%20Shifts%29def/DATA/AUTO/AUTO/RANGE/3/-1/roll/%28scale_symmetric%29%28true%29def/%28fullname%29//var/get_parameter/%28.pre%29eq/%28Total%20Rain%20and%20Snow%29%28Total%29ifelse/def/DATA/AUTO/AUTO/RANGE/3/-2/roll//max-age/604800/def/T/fig-/black/line/zeroline/solid/thick/blue/line/magenta/line/-fig/%28plotaxislength%29590/psdef//plotborder/72/psdef//plotaxislength/590/psdef//framelabel//region/get_parameter/s==/space/append//season/get_parameter/append/psdef/+.gif" />
</fieldset>
</span>
 <div id="tabs-1" class="ui-tabs-panel" about="">
<h2 align="center"  property="term:title" >&#191;Qu&#233; tan importantes han sido para el clima los fluctuaciones por d&#233;cada? </h2>
<p align="left" property="term:description">Este mapa muestra c&#243;mo los periodos h&uacute;medos y secos han variado a lo largo del tiempo. Trace un rect&#225;ngulo sobre una regi&#243;n o haga clic en un lugar del mapa para visualizar los gr&#225;ficos que se refieren a esta &#225;rea. Estos gr&#225;ficos muestran cu&#225;nto var&#237;a la precipitaci&#243;n (o la temperatura) a&#241;o con a&#241;o, d&#233;cada con d&#233;cada y en el siglo pasado. Esta informaci&#243;n se puede usar para prop&#243;sitos de planificaci&#243;n en diferentes escalas de tiempo, y para poner recientes memorias de patrones de precipitaci&#243;n o eventos espec&#237;ficos en una perspectiva a m&#225;s largo plazo.</p>
<p align="left">Si los desplazamientos de 10 a&#241;os son anaranjados o rojos, entonces las fluctuaciones de una d&#233;cada de la lluvia o de la temperatura pueden ser particularmente importantes en su &#225;rea. </p>
</div>
<div id="tabs-2" class="ui-tabs-panel">
<h2  align="center">&#191;Qu&#233; es esta herramienta? </h2>
<p align="left">Este "Maproom de Tendencias Clim&#225;ticas Recientes" muestra c&#243;mo los periodos h&uacute;medos y secos (o calientes y fr&#237;os) han variado en el &uacute;ltimo siglo. Muchas partes del mundo tienen temporadas secas y temporadas lluviosas (o veranos e inviernos) dentro de cada a&#241;o, pero tambi&#233;n tienen a&#241;os o d&#233;cadas completos que son inusualmente secos o h&uacute;medos (o calientes o fr&#237;o). Estas gr&#225;ficas tienen como objetivo mostrar las tendencias en lluvia/nieve (o temperatura) durante tres "escalas de tiempo":</p>
<ul>
<li>Desplazamientos a&#241;o con a&#241;o (la l&#237;nea negra es precipitaci&#243;n real)</li>
<li>Desplazamientos en toda una d&#233;cada (l&#237;nea azul suave)</li>
<li>Tendencias en todo un siglo (l&#237;nea recta morada)</li>
</ul>
<p align="left">En el mapa, si el color de un lugar es casi rojo, significa que los desplazamientos en diez a&#241;os de la lluvia (o la temperatura) pueden tener mayor importancia para ese lugar. La leyenda muestra el grado de importancia de los cambios de precipitaci&#243;n (o temperatura) que se pueden explicar con esta tendencia de 10 a&#241;os.</p>
<p><b>Use esta herramienta para:</b></p>
<ul>
<li>Examinar el contexto y la historia de una tendencia h&uacute;meda/seca (o caliente/fr&#237;a) que est&#225; experimentando actualmente. </li>
<li>Ver si han habido desplazamientos grandes en la d&#233;cada pasada para ayudarle a prepararse a esperarlos en el futuro.</li>
<li>Ver si hay evidencia de que ya se acerca un desplazamiento a plazo m&#225;s largo de precipitaci&#243;n o temperatura (l&#237;nea morada).</li>
</ul>
<p><b>No se recomienda:</b></p>
<ul>
<li>Mirar s&#243;lo un punto en la cuadr&#237;cula (puede ser enga&#241;oso). Revise unos pocos en la misma &#225;rea, o promedie en un recuadro de mayor tama&#241;o.</li>
<li>Ver s&#243;lo una escala de tiempo. La precipitaci&#243;n real est&#225; influenciada por desplazamientos anuales, de una d&#233;cada o de un siglo de duraci&#243;n.</li>
<li>Usar esto como herramienta para predecir el futuro. S&#243;lo muestra informaci&#243;n hist&#243;rica.</li>
</ul>
</div>
<div id="tabs-3" class="ui-tabs-panel">
<h2  align="center">&#191;C&#243;mo se usa esta herramienta? </h2>
<ol>
<li>Seleccione su &#225;rea haciendo clic en un punto en el mapa superior, seleccionando una regi&#243;n predeterminada de la barra lateral azul, o trazando un recuadro con el rat&#243;n para un &#225;rea media (en este caso, haga clic en el recuadro de "an&#225;lisis regional"). Debe aparecer una gr&#225;fica en la parte inferior que muestra la precipitaci&#243;n/nevadas en su &#225;rea de los &uacute;ltimos 100 a&#241;os (vea arriba informaci&#243;n sobre estas gr&#225;ficas). TENGA PACIENCIA porque algunas veces la gr&#225;fica requiere algunos minutos para calcular.</li>
<li>Comience viendo la tendencia a largo plazo (l&#237;nea morada) para ver si hay alguna evidencia de una tendencia de precipitaci&#243;n a plazo m&#225;s largo en los &uacute;ltimos 100 a&#241;os.  Esto podr&#237;a o podr&#237;a no coincidir con proyecciones de cambio de clima de t&#233;rmino m&#225;s largo para el Siglo XXI que obtiene de fuentes como <a href="http://www.ipcc.ch/">IPCC</a>. Si tiene preguntas sobre la coincidencia de las tendencias pasadas y las proyecciones futuras, env&#237;e un mensaje electr&#243;nico al <a href="mailto:ifrc@iri.columbia.edu">Servicio de Asistencia del IRI</a>.  Aunque haya alguna evidencia de una tendencia a largo plazo, probablemente notar&#225; que es muy peque&#241;a y que la precipitaci&#243;n var&#237;a mucho m&#225;s en escalas de tiempo m&#225;s breves (temporadas, a&#241;os, d&#233;cadas).</li>
<li>A continuaci&#243;n, vea la l&#237;nea azul de los desplazamientos de una d&#233;cada. Puede encontrar un n&uacute;mero azul en la parte superior de la gr&#225;fica que se encuentra junto a la frase "Desplazamientos de una d&#233;cada" que indica cu&#225;nto de la precipitaci&#243;n o temperatura hist&#243;rica se puede explicar con esta l&#237;nea azul. Si este n&uacute;mero es superior al 20%, entonces las fases de 10 a&#241;os pueden ser importantes en el &#225;rea que usted seleccion&#243;. </li>
<ol>
<li>Si estas fases son importantes en su &#225;rea, debe tomar eso en consideraci&#243;n cuando piense en las proyecciones de cambio de clima a m&#225;s largo plazo, a fin de estar preparado para experimentar periodos de precipitaci&#243;n que pueden contradecir lo que se predice para la tendencia a m&#225;s largo plazo.</li>
<li>Si la l&#237;nea azul tiene muy poca importancia, entonces se puede concentrar m&#225;s en los desplazamientos a&#241;o con a&#241;o as&#237; como en las tendencias a plazo m&#225;s largo.</li>
<li>Si en su &#225;rea ha experimentado un periodo seco o h&uacute;medo (o caliente o fr&#237;o) que ha durado varios a&#241;os en su &#225;rea, la l&#237;nea azul puede ayudar a determinar si usted estaba en una fase de diez a&#241;os h&uacute;meda o seca (o caliente o fr&#237;a). De ser as&#237;, cuando la fase cambie, podr&#237;a ver resultados opuestos, y el patr&#243;n reciente podr&#237;a ni deberse a una tendencia clim&#225;tica a plazo m&#225;s largo.</li>
</ol>
<li>Finalmente, vea la precipitaci&#243;n real en su &#225;rea (l&#237;nea negra).  Es com&uacute;n para la mayor&#237;a de las fluctuaciones (65% o m&#225;s) en precipitaci&#243;n que sucedan en una escala de tiempo de estaci&#243;n a estaci&#243;n o de a&#241;o a a&#241;o.  Esto s&#243;lo significa que la precipitaci&#243;n fluct&uacute;a una buena cantidad a&#241;o con a&#241;o. Estos son <a href="http://iridl.ldeo.columbia.edu/maproom/.IFRC/.Forecasts/index.html?mapsel=prcp_fcst&#38;map.S.plotvalue=0000+7+Jun+2012&#38;map.Y.units=degree_north&#38;map.Y.plotlast=76.25N&#38;map.url=+SOURCES+.IRI+.MD+.IFRC+.ESRL+.PSD+.reforecast+.ensemble_mean+.analyses+.tot6day+a%3A+.apcppctlenoseasonal+%3Aa%3A+.forecasttime+%3Aa+X+Y+fig-+colors+plotlabel+black+thin+countries_gaz+-fig&#38;map.domain=+{+%2FS+1749.+plotvalue+}&#38;map.domainparam=+%2Fplotaxislength+550+psdef+%2Fplotborder+72+psdef+%2FXOVY+null+psdef&#38;map.zoom=Click+for+Info&#38;map.Y.plotfirst=66.25S&#38;map.X.plotfirst=178.75E&#38;map.X.units=degree_east&#38;map.X.modulus=360&#38;map.X.plotlast=178.75E&#38;map.Y.step=.5">pron&#243;sticos </a> disponibles para predecir la precipitaci&#243;n cada temporada, as&#237; que su monitorizaci&#243;n podr&#237;a ser &uacute;til para anticipar un aumento en el riesgo de inundaciones y sequ&#237;as. &#191;Puede escoger a&#241;os de lluvias muy abundantes o escasas?  Adicionalmente, puede ser &uacute;til notar que es muy probable que el rango de los datos reales que sea mucho mayor que cualquier aumento o reducci&#243;n de la precipitaci&#243;n mostrado con el tiempo por la tendencia de cambios clim&#225;ticos a plazo m&#225;s largo. En cualquier a&#241;o determinado, las fluctuaciones a&#241;o con a&#241;o a corto plazo pueden eclipsar la tendencia de cambio clim&#225;tico a plazo m&#225;s largo.</li>
</ol>
</div>
<div id="tabs-4" class="ui-tabs-panel">
<h2  align="center">Dataset de Documentaci&#243;n</h2>
<p><a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Time_Scales/notes.html">Documento t&#233;cnico de referencia</a></p>
Greene, A.M, L. Goddard and R. Cousin, <a href="http://www.agu.org/pubs/crossref/2011/2011EO450001.shtml">Web tool deconstructs variability in twentieth-century climate (Recurso de la Web deconstruye la variabilidad en el clima del Siglo Veinte)</a>, Eos Trans. AGU, 92(45), 397, doi:10.1029/2011EO450001.
<p>
<b>R&#233;cord de temperatura media multimodelo media global  </b>
<br /><font size="-1"><b>Fuente de datos</b>:
<a href="http://iridl.ldeo.columbia.edu/SOURCES/.WCRP/.CMIP3/" target="_blank">Media del conjunto multimodelo CMIP3</a>
</font>
</p><p>
<b>Observaciones</b>
<br /><font size="-1"><b>Fuente de datos</b>:
temperatura y precipitaci&#243;n medias mensuales de <a href="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.monthly/" target="_blank">CRU TS 3.1</a>
</font>
</p>
</div>
<div id="tabs-5"  class="ui-tabs-panel">
<h2  align="center">Servicios de Asistencia</h2>
<p>
Contacte con <a href="mailto:ifrc@iri.columbia.edu">ifrc@iri.columbia.edu</a> si usted es un humanitario que toma las decisiones con preguntas sobre la informaci&#243;n en esta Sala de Mapas, o el clima y otras preguntas relacionadas con el clima.  Por lo general, responden en un d&#237;a laborable.</p>
<p>
En contacto con <a href="mailto:help@iri.columbia.edu?subject=Precipitation Forecast in Context Map Tool">help@iri.columbia.edu</a> con cualquier pregunta t&#233;cnica o problemas con esta Sala de Mapas, por ejemplo, las previsiones no mostrar o actualizar correctamente.
 </p>
</div>
</div>
<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
 </body>
 </html>
