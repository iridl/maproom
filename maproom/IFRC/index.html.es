<?xml version="1.0" encoding="utf-8"?><!DOCTYPE html
  SYSTEM "about:legacy-compat">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:wms="http://www.opengis.net/wms#"
      xmlns:iridl="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#"
      xmlns:maproom="http://iridl.ldeo.columbia.edu/ontologies/maproom.owl#"
      xmlns:term="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
      xmlns:xs="http://www.w3.org/2001/XMLSchema#"
      version="XHTML+RDFa 1.0"
      xml:lang="es">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width; initial-scale=1.0;" />
      <title>IFRC Forecasts in Context</title>
      <link rel="stylesheet" type="text/css" href="../../uicore/uicore.css" />
      <link rel="stylesheet" type="text/css" href="ifrc.css" />
      <link rel="canonical" href="index.html" />
      <link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
      <link class="carryLanguage" rel="home alternate" type="application/json"
            href="/maproom/navmenu.json" />
      <link class="altLanguage" rel="alternate" hreflang="en"
            href="index.html?Set-Language=en" />
      <link rel="term:isDescribedBy"
            href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Hazards" />
      <link rel="term:isDescribedBy"
            href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate" />
      <link rel="term:isDescribedBy"
            href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#forecast" />
      <link rel="term:icon"
            href="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/.apcp/X+Y+fig:+colors+thin+solid+countries_gaz+:fig+//apcp/0/400/plotrange/S/last/plotvalue/X/178.75/538.75/plotrange//color_smoothing+null+psdef//XOVY+null+psdef//antialias/true/psdef//plotborder+0+psdef//plotaxislength+220+psdef+.gif" /><script type="text/javascript" src="../../uicore/uicore.js" xml:space="preserve"></script></head>
   <body>
      
      
      <form name="pageform" id="pageform" method="get"
            enctype="application/x-www-form-urlencoded">
         <input class="carryup carryLanguage" name="Set-Language" type="hidden" />
         <input class="carryup carry titleLink itemImage" name="bbox" type="hidden" />
         
      </form>
      
      <div class="controlBar">
         
         <fieldset class="navitem"> 
            
            <legend>Data Library</legend> 
            <a rev="section" class="navlink carryup" href="/maproom/" shape="rect">Maproom</a>
            
         </fieldset> 
         
         <fieldset class="navitem"> 
            
            <legend>Federación Internacional</legend> 
            <span class="navtext">Predicciones en Contexto</span>
            
            
         </fieldset> 
         
         <fieldset class="navitem"> 
            
            <legend>Region</legend>
            <a class="carryLanguage" rel="iridl:hasJSON" href="/maproom/globalregions.json"
               shape="rect"></a>
            		<select class="RegionMenu" name="bbox">
               <option value="">Global</option>
               <optgroup class="template" label="Region">
                  <option class="irigaz:hasPart irigaz:id@value term:label"></option>
               </optgroup></select>
            
         </fieldset>
         
      </div>
      
      
      <div id="content" class="searchDescription">
         
         <div><img src="http://iridl.ldeo.columbia.edu/maproom/.IFRC/.Forecasts/logoFED_UK_220px.jpg" /></div>
         
         <h2 property="term:title">La Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja:  Predicciones en Contexto</h2>
         <span align="left" property="term:description">
            Esta colección de mapas provee información que puede ser utilizado para tomar decisiones humanitarias a cualquier parte del
            mundo. Esta colección fue creada por el IRI y la FICR. También provee información de acciónes tempranas que puede hacer basada
            de los mapas.</span> 
         
         <p>Aga clic en las fichas (arriba a la derecha) para acceder a los enlaces a las mapas siguientes:
            
            <ul>
               <li><b>Pronósticos para los Próximos 6 Días:</b> Estés mapas muestran las áreas donde se predice la lluvia abundante en los próximos seis dias, y cuánta lluvia se espera.
               </li>
               <li><b>Pronósticos para los Próximos 3 Meses:</b> Estés mapas muestran las áreas donde se predice grande o pequeño cantidades de lluvia en los próximos tres meses.
               </li>
               <li><b>Condiciones Históricas:</b> Estés mapas muestran patrones de lluvia que son típicos durante El Niño, La Niña, y normalmente.
               </li>
               <li><b>Fluctuaciones Recientes del Clima:</b> Estés mapas muestran cuánto a variado la lluvia en los últimos 100 años, y que tendencias de lluvia existe en su localidad.
               </li>
               <li><b>Indicadores de Vulnerabilidad:</b> Estés mapas muestran la densidad de la población humana y la tase de mortalidad infantil, lo que indica las áreas que pueden
                  ser más vulnerable a grande o pequeño cantidades de lluvia.
               </li>
            </ul>
            
         </p>
         
      </div>
      
      
      <div xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:maproomregistry="http://iridl.ldeo.columbia.edu/maproom/maproomregistry.owl#"
           xmlns:xs="http://www.w3.org/2001/XMLSchema"
           xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"
           xmlns:iriterms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
           class="rightcol">
         <div class="ui-tabs">
            <ul class="ui-tabs-nav">
               <li><a href="#tabs-1">Pronósticos para los Próximos 6 Días</a></li>
               <li><a href="#tabs-2">Pronóstico para los Próximos 3 Meses</a></li>
               <li><a href="#tabs-3">Condiciones Históricas</a></li>
               <li><a href="#tabs-4">Fluctuaciones Recientes del Clima</a></li>
               <li><a href="#tabs-5">Indicadores de Vulnerabilidad</a></li>
            </ul>
            <div id="tabs-1" class="ui-tabs-panel">
               <div class="itemGroup">Pronósticos para los Próximos 6 Días</div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/index.html">¿Dónde se esperan lluvias excepcionalmente abundantes?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/index.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/.apcppctlenoseasonal/X+Y+fig:+colors+thin+solid+countries_gaz+:fig+//apcp/0/1/plotrange/S/last/plotvalue/X/178.75/538.75/plotrange//color_smoothing+null+psdef//XOVY+null+psdef//plotborder+0+psdef//plotaxislength+220+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra las áreas donde se predice que la lluvia (o nieve) acumulada en los próximos seis días sea excepcionalmente
                     abundante relativo a la lluvia normal en este locación.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/heavyrain.html">¿Cómo se compara la cantidad de lluvia pronosticada con la lluvia normal durante este mes?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/heavyrain.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcppctmonthlyclim/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue//framelabel+(Forecast%20for%20%25=%5Bforecasttime%5D%20Issued%20%25=%5BS%5D)+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra locaciones que tiene un pronóstico de recibir en los próximos seis días un grande porcentaje de la lluvia
                     que se recibe normalmente durante este mes en cada locatión.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/wetter.html">¿Dónde se espera humedad superior al promedio?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/wetter.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcpanom/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue//framelabel+(Forecast%20for%20%25=%5Bforecasttime%5D%20Issued%20%25=%5BS%5D)+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra dónde se predice que la lluvia/nieve total en los próximos seis días sea más o menos el promedio para esta
                     parte del año.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/cummrain.html">¿Cuánta lluvia se espera?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/cummrain.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcp/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue//framelabel+(Forecast%20for%20%25=%5Bforecasttime%5D%20Issued%20%25=%5BS%5D)+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra la cantidad total de lluvia o nieve (en mm) que se espera que caiga en los próximos 6 días.</div>
                  <div class="itemFooter"></div>
               </div>
            </div>
            <div id="tabs-2" class="ui-tabs-panel">
               <div class="itemGroup">Pronóstico para los Próximos 3 Meses</div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/prcp_fcst.html">¿Es probable que los próximos 3 meses sean inusualmente húmedos o secos?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/prcp_fcst.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+//L/1./plotvalue/F/last/plotvalue/Y/-58/75.04166/plotrange+//XOVY+null+psdef//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra la probabilidad de que la precipitación total de 3 meses sea inusualmente alta o baja.</div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/extreme_prcp_fcst.html">¿Es probable que los próximos 3 meses sean excepcionalmente húmedos o secos?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/extreme_prcp_fcst.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.extreme_prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+//L/1/plotvalue//F/622.5/plotvalue/Y/-58/75.04166/plotrange+//XOVY+null+psdef//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra dónde es probable que sea extremadamente húmedo o seco en los próximos tres meses. Extremadamente se refiere
                     al 15% menor o mayor que el récord histórico.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/pic3mo_reversed.html">¿Es probable que las condiciones inusuales húmedas o secas terminen?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/pic3mo_reversed.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_reversed/:a:/.forecasttime/L/first/VALUE/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+//F/622.5/plotvalue/Y/-66.25/76.25/plotrange+//XOVY+null+psdef//framelabel+%28%25=%5Bforecasttime%5D%20Forecast%20Precipitation%20Tendency%20reversed%20from%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra lugares donde es probable que las condiciones húmedas o secas terminen durante los próximos 3 meses.</div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/pic3mo_same.html">¿Es probable que las condiciones inusuales húmedas o secas continúen?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/pic3mo_same.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_same/:a:/.forecasttime/L/first/VALUE/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+//F/622.5/plotvalue/Y/-66.25/76.25/plotrange+//XOVY+null+psdef//framelabel+%28%25=%5Bforecasttime/L/first/VALUE%5D%20Forecast%20Precipitation%20Tendency%20same%20as%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra dónde y cuán probable es que las condiciones húmedas o secas recientes continúen durante los próximos tres
                     meses.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/seasonalforecastskill.html">¿Qué tan bien podemos predecir el clima estacional?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/seasonalforecastskill.html"><img class="itemImage" src="FIC/skillmap-small.jpg" /></a></div>
                  <div class="itemDescription">Este mapa muestra dónde los pronósticos del IRI para 3 meses son constantemente buenos para predecir precipitación estacional
                     en al menos una estación del año.
                  </div>
                  <div class="itemFooter"></div>
               </div>
            </div>
            <div id="tabs-3" class="ui-tabs-panel">
               <div class="itemGroup">Condiciones Históricas</div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/elninorain.html">¿Qué cambios en la precipitación son típicos durante El Niño?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/elninorain.html"><img class="itemImage" src="FIC/ElNinoandRainfall220.png" /></a></div>
                  <div class="itemDescription">Durante un episodio de El Niño, las áreas verdes o amarillas tienen la probabilidad de ser más húmedas o secas que lo normal
                     en los meses indicados.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/laninarain.html">¿Qué cambios en la precipitación son típicos durante La Niña?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/laninarain.html"><img class="itemImage" src="FIC/LaNinaandRainfall220.png" /></a></div>
                  <div class="itemDescription">Durante un episodio de La Niña, las áreas verdes o amarillas tienen la probabilidad de ser más húmedas o secas que lo normal
                     en los meses indicados.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/CMAP_climo.html">¿Cuánta lluvia cae normalmente en esta parte del año?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/CMAP_climo.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CPC/.Merged_Analysis/.monthly/.v1201/.prcp_est/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/0.5/plotvalue/Y/-58/75.04166/plotrange+//XOVY+null+psdef//color_smoothing+null+psdef//antialias+true+psdef//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra cuánta lluvia cae normalmente en cada mes del año.</div>
                  <div class="itemFooter"></div>
               </div>
            </div>
            <div id="tabs-4" class="ui-tabs-panel">
               <div class="itemGroup">Fluctuaciones Recientes del Clima</div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="TD/ClimateChange.html">¿Qué tan importantes han sido para el clima las tendencias centenales?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="TD/ClimateChange.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28season%29/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/%7B4/-1/roll%5BT%5Drmsaover/%28units%29%28mm/month%29def/dup/mul%7Drepeat/2/copy/min/3/-2/roll/max/2/index/1/index/sub/0/flaggt/4.5/mul/5/-4/roll/2/index/sub/0/flagge/2/index/2/index/sub/0/flaggt/mul/3.5/mul/4/-3/roll/sub/0/maskgt/exch/div/-0.1/flagle/1.5/add/0/replaceNaN/add/add/0/maskle/%7BLow/2/Medium/3/High/4/%28Extremely%20High%29%7D/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20century-long%20shifts%29def/startcolormap/transparent/white/90/190/95/RGB/yellow/orange/red/white/endcolormap/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/0/psdef//plotaxislength/200/psdef/+//plotborder+0+psdef//plotaxislength+200+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra cómo los periodos húmedos y secos han variado a lo largo del tiempo. Trace un rectángulo sobre una región
                     o haga clic en un lugar del mapa para visualizar los gráficos que se refieren a esta área. Estos gráficos muestran cuánto
                     varía la precipitación (o la temperatura) año con año, década con década y en el siglo pasado. Esta información se puede usar
                     para propósitos de planificación en diferentes escalas de tiempo, y para poner recientes memorias de patrones de precipitación
                     o eventos específicos en una perspectiva a más largo plazo.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="TD/DecadalChange.html">¿Qué tan importantes han sido para el clima los fluctuaciones por década?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="TD/DecadalChange.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28season%29/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/%7Bexch%5BT%5Drmsaover/%28units%29%28mm/month%29def/dup/mul%7Drepeat/1/index/add/div/%7BLow/0.15/Medium/0.25/High/0.4/%28Extremely%20High%29%7D/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20decade-long%20shifts%29def/startcolormap/transparent/white/90/190/95/RGB/yellow/orange/red/white/endcolormap/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/0/psdef//plotaxislength/200/psdef/+//plotborder+0+psdef//plotaxislength+200+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra cómo los periodos húmedos y secos han variado a lo largo del tiempo. Trace un rectángulo sobre una región
                     o haga clic en un lugar del mapa para visualizar los gráficos que se refieren a esta área. Estos gráficos muestran cuánto
                     varía la precipitación (o la temperatura) año con año, década con década y en el siglo pasado. Esta información se puede usar
                     para propósitos de planificación en diferentes escalas de tiempo, y para poner recientes memorias de patrones de precipitación
                     o eventos específicos en una perspectiva a más largo plazo.
                  </div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="TD/YearlyChange.html">¿Qué tan importantes han sido para el clima los desplazamientos año con año?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="TD/YearlyChange.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.UEA/.CRU/.TS3p1/.r2p5%5B%28Jan%29//seasonStart/parameter/%28-%29%28Dec%29//seasonEnd/parameter/%28%201901-2009%29%5Dconcat//season/parameter/a:/%28.pre%29//var/parameter/interp/yearly-anomalies/T//season/get_parameter/seasonalAverage/:a:/.stn/%28.pre%29//var/parameter/interp/0/maskle/T//season/get_parameter/0.66/seasonalAverage/0/replaceNaN/0/flaggt/T/10.0/2.0/div/floor/12/mul/pad1/T/10.0/12/mul/runningAverage/0.5/masklt%5BT%5D0.5/average/0/mul/add/%28.pre%29//var/parameter/%28.pre%29eq/%7B:a:/.pre/T/%28season%29/get_parameter/seasonalAverage/T/differential_mul%5BT%5Daverage/30/masklt/0/mul/add%7Dif/:a/X/-20/180/-20/RANGEEDGES/Y/-60/80/RANGE/SOURCES/.IRI/.Analyses/.TS/.AR4/.tas%5BT%5D1.0/0.0/regridLinear/dup%5BT%5Dstandardize/exch/2/index%5BT%5Dcorrelate/mul/1/index%5BT%5Drmsaover/mul/1/index%5BT%5Daverage/add/1/index/1/index/sub/T/-1/1.0/10/div/butt_filter:/:butt_filter/.butt%5BX/Y%5DREORDER/2/index/2/index/sub/1/index/sub/4/-2/roll/pop/pop/2/%7Bexch%5BT%5Drmsaover/%28units%29%28mm/month%29def/dup/mul%7Drepeat/exch/1/index/add/div/%7BLow/0.75/Medium/0.85/High/0.9/%28Extremely%20High%29%7D/%28DoI%29classify%5BDoI%5Ddominant_class/%28long_name%29%28Importance%20of%20year-to-year%20shifts%29def/startcolormap/transparent/white/90/190/95/RGB/yellow/orange/red/white/endcolormap/X/Y/fig-/colors/countries_gaz/-fig/%28plotaxislength%29590/psdef/%28antialias%29true/psdef//plotborder/0/psdef//plotaxislength/200/psdef/+//plotborder+0+psdef//plotaxislength+200+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra cómo los periodos húmedos y secos han variado a lo largo del tiempo. Trace un rectángulo sobre una región
                     o haga clic en un lugar del mapa para visualizar los gráficos que se refieren a esta área. Estos gráficos muestran cuánto
                     varía la precipitación (o la temperatura) año con año, década con década y en el siglo pasado. Esta información se puede usar
                     para propósitos de planificación en diferentes escalas de tiempo, y para poner recientes memorias de patrones de precipitación
                     o eventos específicos en una perspectiva a más largo plazo.
                  </div>
                  <div class="itemFooter"></div>
               </div>
            </div>
            <div id="tabs-5" class="ui-tabs-panel">
               <div class="itemGroup">Indicadores de Vulnerabilidad</div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/count.html">¿Están densamente pobladas las zonas con riesgo de lluvias abundantes?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/count.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.GPWv3/.count/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/546./plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra la densidad de la población humana.</div>
                  <div class="itemFooter"></div>
               </div>
               <div class="item">
                  <div class="itemTitle"><a class="carryLanguage carry titleLink" href="FIC/imr.html">¿Las zonas de riesgo con lluvias abundantes, contienen poblaciones vulnerables?</a></div>
                  <div class="itemIcon"><a class="carryLanguage carry titleLink" href="FIC/imr.html"><img class="itemImage"
                             src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.Poverty/.imr/X/Y/fig-+colors+black+thin+countries_gaz+-fig+X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+220+psdef//plotborder+0+psdef+.gif" /></a></div>
                  <div class="itemDescription">Este mapa muestra la tase de mortalidad infantil, un indicador de pobreza.</div>
                  <div class="itemFooter"></div>
               </div>
            </div>
         </div>
      </div>
      
      <div class="optionsBar">
         
         <fieldset class="navitem" id="share">
            <legend>Compartir</legend>
            
         </fieldset>
         
      </div>
      
   </body>
</html>