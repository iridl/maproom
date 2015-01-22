<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:wms="http://www.opengis.net/wms#"
      xmlns:iridl="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#"
      xmlns:term="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
      xmlns:xs="http://www.w3.org/2001/XMLSchema#"
      version="HTML 4.01"
 xml:lang="es"
      >
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IFRC PIC: Como Usar el Pronóstico de Precipitación en la Herramienta de Mapa de Contexto</title>
<link rel="stylesheet" type="text/css" href="../../../uicore/uicore.css" />
<link rel="stylesheet" type="text/css" href="/localconfig/ui.css" />
<link rel="stylesheet" type="text/css" href="../ifrc.css" />
<link rev="section" href="fic.html" />
<link class="altLanguage" rel="alternate" hreflang="en" href="instructions.html?Set-Language=en" />
<link rel="canonical" href="instructions.html" />
<link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
<link class="carryLanguage" rel="home alternate" type="application/json" href="/maproom/navmenu.json" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Hazards" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate" />
<link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#forecast" />
    <link rel="stylesheet" type="text/css" href="/site.css">
    <STYLE TYPE="text/css">
    <!--
    .indented
       {
       padding-left: 75pt;
       padding-right: 25pt;
       }
    .anchorlinks {font-size: 9pt;}
    .rightbox {float: right; padding-left: 10px; padding-right: 10px;}
    p {clear: right}
    -->
    </STYLE>
<script type="text/javascript" src="../../../uicore/uicore.js"></script>
<script type="text/javascript" src="/localconfig/ui.js"></script>
</head>
<body bgcolor="#FFFFFF"  link="#993333" vlink="#993333" alink="#FF0000">
<form name="pageform" id="pageform" class="carryLanguage carryup carry">
<input class="carryLanguage carryup carry" name="Set-Language" type="hidden" />
<input class="carry" name="Region" type="hidden" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList"> 
                <legend>Federación Internacional</legend> 
                      <a class="navlink carryup" href="fic.html">Predicciones en Contexto</a>
            </fieldset>
 </div>

<h3 align=center><u>Como Usar el Pronóstico de Precipitación en la Herramienta de Mapa de Contexto</u></h3>
<p>

<div class="anchorlinks">
 <ul>
 <li><a href="#visual">Características visuales de la interfase del mapa</a><br></li>
 <li><a href="#interp">Interpretando los mapas</a><br></li>
 <div class="indented">
  <li><a href="#esrlgfs">Mapas de Pronóstico de la Precipitación de Seis Días y Diario del ESRL GFS</a><br></li>
  <li><a href="#prcp_fcst">Pronóstico Estacional de Precipitación del IRI</a><br></li>
  <li><a href="#extreme_prcp_fcst">Pronóstico de la Precipitación Extrema del IRI</a><br></li>
  <li><a href="#pic3mo_same">Predicciones en Contexto (PiC) del IRI</a><br></li>
  <li><a href="#CMAP_climo">Climatología Mensual del Merged Analysis of Precipitation (CMAP) del CPC</a><br></li>
  <li><a href="#count">Población Ajustada Proyectada según las Naciones Unidas del CIESIN/SEDAC</a><br></li>
  <li><a href="#imr">Tasa de Mortalidad Infantil, Año 2000 del CIESIN/SEDAC Global Distribution of Poverty</a><br></li>
 </div>
 </ul>
</div>
<p>
<p>
<p><a name="visual"><u><b>Características visuales de la interfase del mapa</b></u>
<br>En primer lugar el mapa muestra el total de precipitaciones de los seis días más recientes. Los usuarios también pueden usar el visualizador de mapas para:
<ul>
<li>Seleccionar un mapa de su interés</li>
<li>Ampliar (zoom in) una región mas especifica de su interés</li>
<li>Seleccionar el momento de inicio del pronóstico en el mapa de pronóstico de precipitación total de seis días, en el mapa de pronóstico de precipitación estacional y en el de predicción en contexto (PiC) del IRI</li> 
</ul>

<p>
<u><i>Seleccione el mapa de su interés</i></u>
<br>Hay botones de radio en el lado izquierdo de la página bajo "¿Que le gustaría saber?".
<br>
<ol>
<li>Seleccione el botón de radio correspondiente a el mapa que quiere ver</li>
<li>Haga clic/presione el botón de "redibujar" (botón azul con flecha circular), que se volverá rojo, para mostrar el mapa que ha elegido.</li>
</ol>

<p>
<u><i>Acercar/Alejar el mapa (Zoom in/Zoom out)</i></u>
<br>Hay dos formas para ampliar (hacer zoom) el mapa sobre regiones: una es 'cliquear-y-arrastrar' marcando la ventana que se quiere ampliar, y la otra es usando las cajas de texto de latitud/longitud. Note que el mapa no puede mostrar áreas fuera de las latitudes mostradas inicialmente en la interfase (es decir 66.25°S - 76.25°N). 
<br>
<ul>
 <li><i>Cliquear-y-arrastrar</i>
 </li>
  <ol>
   <li>Haga clic en el botón izquierdo del mouse en la esquina superior izquierda de la región que quiere ampliar.
</li>
   <li>Mientras mantiene presionado el botón, arrastre el mouse a la esquina inferior derecha de la región que quiere ampliar.
</li>
   <li>Suelte el botón izquierdo del Mouse. El mapa se re-dibujará automáticamente.<p></li>
  </ol></li>
 <li><i>Selección de lat/lon específica</i>
  <br>Hay cuatro cajas de texto de lat/lon debajo y a la izquierda del mapa.
  <br>
  <ol>
   <li>Cambie el valor en las cajas de texto de lat/lon a los limites de la región que desea visualizar usando el formato de texto ya mostrado.
</li>
   <li>Haga clic sobre el botón de "Redibujar."</li>
  </ol>
</ul>
<p>
<u><i>Seleccione el Tiempo de Inicio del Pronóstico</i></u>
<br>Cuando se elige los mapas de pronóstico total de seis días o los mapas de pronóstico estacional del IRI o los mapas de PiC , aparecerá una caja de texto y botones arriba del mapa que permitirá elegir el Tiempo de Inicio de Pronóstico (o el Mes de Publicación del Pronóstico de IRI). El Tiempo de Inicio de Pronóstico del mapa que se está exhibiendo aparece en la caja de texto.
<p>Para moverse hacia adelante o atrás un paso en el tiempo (es decir moverse un día en el mapa de pronóstico de seis días y moverse un mes en los mapas de pronóstico del IRI), haga clic sobre los botones correspondientes al lado de la caja de texto.
<p>El usuario también puede modificar la fecha en la caja de texto, usando el formato apropiado (por ejemplo "0000 16 Jan 2008", para los mapas de seis días; "Jan 2008" para los mapas de pronóstico del IRI), y luego cliquear el botón de "Redibujar" para ir al pronóstico publicado en esa fecha.
<p>Para crear una animación de estos mapas a lo largo de una serie de fechas, en la caja de texto de "Tiempo de Inicio del Pronóstico" incluya una fecha de comienzo para la animación seguido por "to" (es decir, "al" en Inglés), seguido por la fecha de finalización, luego haga clic en el botón de "Redibujar." Por ejemplo para ver una animación de los pronósticos de seis días desde el la fecha de inicio 0000 1 Jan 2008 hasta el 0000 15 Jan 2008, escriba "0000 1 Jan 2008 to 0000 15 Jan 2008" y luego haga clic sobre "Redibujar."
<p>
<hr width="80%"> </hr>
<p><a name="interp"><u><b>Interpretando los mapas</b></u>
<br>En las secciones siguientes se proporciona una explicación sobre  la interpretación correcta de cada mapa disponible en la interfase.
<p>
   <a name="esrlgfs"><b>Mapas de Pronóstico de Precipitación de Seis Días y Diario del ESRL GEFS</b><br>
<p>
El Earth System Research Laboratory (ESRL) Physical Sciences Division (PSD) ha emprendido esfuerzos para "re-pronosticar" usando una versión anterior, pero no cambiada del modelo de Medium-Range Forecast (MRF, un precusor de el modelo de Global Forecast System actualmente dirigido operativamente por NCEP) para producir  un ensamblado de 15 miembros de pronósticos de tiempo numéricos sobre una base diaria, ejecutada desde 1979 hasta el presente con una resolución espacial de 2.5° lat/lon. El modelo usa condiciones iniciales del Reanálisis del NCEP/NCAR y es actualizado a diario en 00 UTC. El resultado es una climatología estable del modelo para las variables de pronóstico desde 1979 hasta el presente, incluyendo precipitación acumulada. Puede encontrar más información sobre el proyecto de ESRL Reforecast en  la siguiente dirección de Internet: <a href="http://www.cdc.noaa.gov/people/jeffrey.s.whitaker/refcst/">Proyecto de ESRL Reforecast</a> 
<p>
<b>Referencia:</b>  Hamill, T. M., J. S. Whitaker, and S. L. Mullen, 2006:  Reforecasts:  An important dataset for improving weather predictions. <i>Bull. Amer. Meteor. Soc.</i>, <b>87</b>, 33-46.
<p>
En la aplicación actual de estos datos de pronóstico, no se han hecho ajustes para tener en cuenta sesgos del modelo con respecto a la atmósfera real. Sin embargo, usando esta climatología fija, se han calculado estadísticas de pronóstico de precipitación auto-consistentes, incluyendo las anomalías diarias, el porcentaje de la precipitación media mensual total, y los percentiles de precipitación, para ubicar los totales de pronósticos de precipitación diarias y de seis días en su contexto histórico. Todos los mapas de pronóstico de precipitación que se muestran aquí son derivados de promedios de los valores de precipitación diaria de los ensamblados. Los mapas basados en el pronóstico de precipitación total de seis días pueden ser seleccionados y visualizados en la ventana principal de la interfase. Los mapas de pronóstico de precipitación de un día individual para cualquiera de los días 1 a 6 están disponibles a través de hipervínculos en el cuadro titulado "Mapas de Pronóstico de Precipitación Total de un Día (24 Horas)" que se  encuentra debajo de la ventana principal de la interfase. 
<p>
Dado que la resolución espacial de los valores de pronóstico de precipitación del modelo de pronóstico es 2.5° lat/lon, los totales de pronóstico y las estadísticas representan valores de precipitación de gran escala. Aunque en general estos mapas deberían ser capaces de identificar regiones de grandes lluvias acumuladas a gran escala asociadas por ejemplo con ciclones tropicales, no deben ser utilizadas para  predecir la trayectoria de ciclones o la ubicación de precipitaciones intensas a escala menor o localizada (asociada , por ejemplo con la orografía). 

<p><a name="tot6dayapcp"><b>Pronóstico de la Precipitación Total de Seis Días del ESRL GEFS</b>
<p>
<div class="rightbox">
<a href="cummrain.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcp/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el pronóstico de precipitación de gran escala (en milímetros) de seis días para el período que aparece en el mapa, usando el pronóstico emitido en el momento indicado para el inicio del pronóstico.
<p><a name="tot6dayapcpanom"><b>Pronóstico de la Anomalía de la Precipitación Total de Seis Días del ESRL GEFS</b>
<p>
<div class="rightbox">
<a href="wetter.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcpanom/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra la diferencia (en milímetros) entre el valor del pronóstico actual de la precipitación total de seis días y el pronóstico promedio de largo plazo (1985-2012) para seis días en la misma época del año utilizando la climatología del modelo. El valor del pronóstico promedio de largo plazo (1985-2012) se calcula usando grupos de péntadas (5 días) para la precipitación total de seis días para cada año utilizando la climatología del modelo; por lo tanto, el promedio de largo plazo se calcula típicamente usando 140 valores. A pesar de que la anomalía de la precipitación expresa cuánto difiere el valor del pronóstico de precipitación actual con el "normal" de largo plazo, no especifica claramente cuán inusual es la diferencia para ese lugar o época del año en particular. Por ejemplo, mientras una anomalía de 30 mm puede ser significativo en el Norte de áfrica, puede ser no significativo en Indonesia.
<p><a name="tot6dayapcppctle"><b>Percentil del Pronóstico de Precipitación Total de Seis Días del ESRL GEFS</b>
<p>
<div class="rightbox">
<a href="sampletabslogo.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcppctlenoseasonal/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el pronóstico de percentil de la precipitación total de seis días con respecto a todos los pronósticos de precipitación de la climatología del modelo de 1985-2012.  Para determinar el valor de percentil que será asignado al pronóstico de precipitación total de seis días actual, se ordenan los pronósticos de precipitación total de seis días de 1985 al 2012 de mayor a menor. De estos, se le asigna un valor de 0 al valor menor, y un valor de 1 al mayor. El valor del pronóstico de precipitación actual se compara con estos pares de precipitación y con los valores de los percentiles climatológicos y se le asigna su rango de percentil dentro de este conjunto. Para hacer énfasis sobre los valores de precipitación que corresponded a percentiles mayores con respecto al modelo histórico, solo se muestran los valores de percentiles mayores a 0.9. Los valores de percentil proporcionan una buena idea de cómo el pronóstico de precipitación total actual se compara con el registro histórico de un lugar determinado.

<p><a name="tot6dayapcppctmonthlyclim"><b>Pronóstico de Precipitación Total de Seis Días como Porcentaje del Total Mensual Promedio</b>
<p>
<div class="rightbox">
<a href="heavyrain.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcppctmonthlyclim/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el valor de pronóstico de precipitación de seis días actual expresado como porcentaje del promedio de la precipitación total mensual utilizando la climatología del modelo. Esta medida destaca lugares  con pronósticos diarios o de seis días de precipitación extrema ya que compara totales diarios o de seis días con lo que normalmente llovería en el transcurso de todo un mes. Un valor de 100% indica que se pronostica que la precipitación total diaria o de seis días será tan grande como el total mensual promedio que se recibe en esta época del año (según la climatología del modelo). Un valor de 25% indica que se pronostica que la precipitación total diaria o de seis días será equivalente a la cuarta parte del total de la precipitación mensual promedio para esta época del año (según la climatología del modelo).

<p><a name="prcp_fcst"><b>Pronóstico de Precipitación Estacional del IRI</b>
<p>
<div class="rightbox">
<a href="prcp_fcst.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/L/1/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Los pronósticos probabilísticos de precipitación estacional del IRI para el mundo completo se publican a mediados de cada mes. Estos pronósticos son para los cuatro trimestres superpuestos, extendiéndose hasta seis meses en adelante. El mapa que se muestra en esta interfase es el pronóstico de precipitación para el primer trimestre. Para el pronóstico publicado en Enero, por ejemplo, el pronóstico mostrado es válido para el trimestre de Febrero-Marzo-Abril.
<p>
Los pronósticos proveen probabilidades de que la precipitación estacional estará en el tercio menor de la distribución climatológica (tercil inferior), el tercio del medio (tercil medio),  o el tercio mayor (tercil superior). Para mostrar las probabilidades usando solamente un mapa, la probabilidad de la categoría con valor más alto (33.3% o más) se sombrea con un color; las variaciones en el sombreado de los terciles bajos y altos indican la magnitud de la probabilidad. Las áreas en gris indican que la categoría cercana a lo normal es lo más probable. Las áreas en blanco indican climatología del pronóstico (33.3% para cada tercil), en cuyo caso ningún tercil es dominante. La distribución climatológica se determina con las observaciones de los trimestres en cuestión a través de la historia de los 30 años más recientes. El pronóstico representa una destilación de información de un gran número de "inputs", donde el más importante es la predicción de varios modelos atmosféricos dinámicos que responden a los patrones esperados en las temperaturas superficiales del mar (TSM).
<p>
Puede encontrar más información sobre los pronósticos estacionales del IRI en estas páginas: <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&parentname=CommunityPage&parentid=1&mode=2&in_hi_userid=2&cached=true">Pronóstico del IRI Net Assessment</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.Precipitation/">página de Pronóstico de Map Room</a>, <a href="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.FD/.Seasonal_Forecast/">Data Library</a>.
<p><b>Referencia:</b>  Barnston, A. G., S. J. Mason, L. Goddard, D. G. Dewitt, and S. E. Zebiak, 2003:  Multimodel ensembling in seasonal climate forecasting at IRI. <i>Bull. Amer. Meteor. Soc.</i>, <b>84</b>, 1783-1796.

<p><a name="extreme_prcp_fcst"><b>Pronóstico de Precipitación Extrema del IRI</b>
<p>
<div class="rightbox">
<a href="extreme_prcp_fcst.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.extreme_prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//plotaxislength+250+psdef//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef+.gif">
</a>
</div>
El pronóstico probabilístico de precipitación estacional extrema para el mundo completo que produce el IRI se publica a mediados de cada mes. El pronóstico es válido para el próximo trimestre. Por ejemplo un pronóstico publicado en Enero, es válido para el trimestre de Febrero-Marzo-Abril.
<p>
El pronóstico provee probabilidades de que la precipitación estacional estará en el 15% más bajo o en el 15% más alto de la distribución climatológica. Para mostrar las probabilidades usando solo un mapa, se sombrea la probabilidad más alta; las variaciones en el sombreado indican la magnitud de la probabilidad. Los azules claros/medianos/ oscuros indican una probabilidad ligeramente mayor/mayor/muy mayor (20-40% / 40-50% / más del 50%) de precipitación estacional en el 15% más alto de la distribución climatológica. Los colores dorado/marrón/marrón oscuro indican una probabilidad ligeramente mayor/mayor/muy mayor (20-40% / 40-50% / más del 50%) de precipitación estacional en el 15% más bajo de la distribución climatológica. La distribución climatológica está determinada por las observaciones para la temporada en cuestión sobre la historia de los últimos 30 años. El pronóstico representa una destilación de información de un número de "inputs", donde el más importante es la predicción de varios modelos atmosféricos dinámicos que responden a los patrones esperados en las temperaturas superficiales del mar (TSM).
<p>
Puede encontrar más información sobre los pronósticos estacionales del IRI en estas páginas: <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&parentname=CommunityPage&parentid=1&mode=2&in_hi_userid=2&cached=true">Pronóstico del IRI Net Assessment</a>, <a href="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.FD/.Seasonal_Forecast/">Data Library</a>.
<p><b>Referencia:</b>  Barnston, A. G., S. J. Mason, L. Goddard, D. G. Dewitt, and S. E. Zebiak, 2003:  Multimodel ensembling in seasonal climate forecasting at IRI. <i>Bull. Amer. Meteor. Soc.</i>, <b>84</b>, 1783-1796.

<p><a name="pic3mo_same"><b>Predicciones en Contexto (PiC) del IRI: Observación de la misma tendencia en el Pronóstico Estacional y la Precipitación observada en los últimos 3 meses</b>
<p>
<div class="rightbox">
<a href="pic3mo_same.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_same/:a:/.forecasttime/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28%25=%5Bforecasttime%5D%20Forecast%20Precipitation%20Tendency%20same%20as%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El IRI provee una perspectiva climática en contexto para las regiones del mundo, mostrando una combinación de precipitaciones observadas y pronosticadas. Las áreas sombreadas en el mapa de "Misma Tendencia" indican lugares donde el pronóstico de precipitación estacional del IRI Net Assessment  para el próximo trimestre muestra una probabilidad mayor de precipitación sobre lo normal (bajo lo normal) Y donde la precipitación recibida en el trimestre antes de que el pronóstico fuera publicado fue mayor que lo normal (menor que lo normal) también -- en otras palabras, donde el pronóstico estacional indica una probabilidad mayor de que las condiciones observadas continúen. Este mapa es actualizado todos los meses.
<p>
La información que se usa como referencia de observaciones es la precipitación mensual en grillas del NCEP para 30 años (1969 a 1998). Las observaciones de los últimos tres meses se basan en los datos mensuales en grilla de CAMS-OPI. En primer lugar, la observación de lluvias para el trimestre más reciente en cada punto de grilla se ordena en una escala de 0 a 1, con 0 como el evento más seco en los últimos 30 años para el trimestre en cuestión, y 1.0 como el trimestre más húmedo. Un valor de 0.333 o menos es considerado seco (bajo lo normal), y un valor de 0.667 o más es considerado húmedo (sobre lo normal). En segundo lugar, se examina el pronóstico del próximo trimestre para el mismo lugar. Un pronóstico con  una probabilidad de 40% o más para la categoría debajo de lo normal se interpreta como un pronóstico seco, y un pronóstico con  una probabilidad de 40% o más para la categoría sobre  lo normal se interpreta como un pronóstico húmedo.
<p>
En base a la observación y el pronóstico, se produce un mapa que representa las áreas con altas probabilidades que continúen las condiciones más húmedas o más secas de lo normal.  En el mapa se indica la posibilidad de la persistencia de las condiciones húmedas o secas, dependiendo si el pronóstico de probabilidad es 40-50% (etiquetado "Mayor"), o 55% o más (etiquetado "Mucho Mayor"). Por lo tanto, las áreas en amarillo claro (verde claro) indican lugares donde la precipitación en la estación pasada fue menor que lo normal (mayor que lo normal) y el pronóstico indica una probabilidad mayor de que continúen las condiciones de precipitación debajo de lo normal (sobre lo normal) en el próximo trimestre. Las áreas en amarillo oscuro (verde oscuro) indican lugares donde la precipitación en la estación pasada fue menor que lo normal (mayor que lo normal) y el pronóstico indica una probabilidad mucho mayor de que continúen las condiciones de precipitación debajo de lo normal (sobre lo normal) en el próximo trimestre.
<p>
Para ver más información sobre este análisis, véase las siguientes páginas:  <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&PageID=0&cached=true&mode=2#pic">Predicciones en Contexto</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">página del Map Room PiC</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">Data Library</a>.
<p>
<p><a name="pic3mo_reversed"><b>Predicciones en Contexto (PiC) del IRI: Tendencia Revertida Entre el Pronóstico Estacional y las Observaciones de Precipitación Trimestral</b>
<p>
<div class="rightbox">
<a href="pic3mo_reversed.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_reversed/:a:/.forecasttime/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28%25=%5Bforecasttime%5D%20Forecast%20Precipitation%20Tendency%20reversed%20from%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El IRI provee una perspectiva climática en contexto para las regiones del mundo, mostrando una combinación de precipitaciones observadas y pronosticadas. Las áreas sombreadas en el mapa de "Tendencia Revertida" indican lugares donde el pronóstico de precipitación estacional del IRI Net Assessment  para el próximo trimestre muestra una probabilidad mayor de precipitación sobre lo normal (bajo lo normal) Y donde la precipitación recibida en el trimestre anterior a que el pronóstico fuera publicado fue menor que lo normal (mayor que lo normal) -- en otras palabras, donde el pronóstico estacional indica una probabilidad mayor de tendencia opuesta a las condiciones observadas en los últimos tres meses. Este mapa es actualizado todos los meses.
<p>
La información que se usa como referencia de observaciones es la precipitación mensual en grillas del NCEP para 30 años (1969 a 1998). Las observaciones de los últimos tres meses se basan en los datos mensuales en grilla de CAMS-OPI. En primer lugar, la observación de lluvias para el trimestre más reciente en cada punto de grilla se ordena en una escala de 0 a 1, con 0 como el evento más seco en los últimos 30 años para el trimestre en cuestión, y 1.0 como el trimestre más húmedo. Un valor de 0.333 o menos es considerado seco (bajo lo normal), y un valor de 0.667 o más es considerado húmedo (sobre lo normal). En segundo lugar, se examina el pronóstico del próximo trimestre para el mismo lugar. Un pronóstico con  una probabilidad de 40% o más para la categoría debajo de lo normal se interpreta como un pronóstico seco, y un pronóstico con  una probabilidad de 40% o más para la categoría sobre  lo normal se interpreta como un pronóstico húmedo.
<p>
En base a la observación y el pronóstico, se produce un mapa que representa las áreas con altas probabilidades de tendencias revertidas en comparación con la precipitación observada en los tres meses anteriores. Las áreas en amarillo indican lugares con precipitaciones observadas sobre lo normal, pero con probabilidades mayores de precipitación debajo de lo normal en el próximo trimestre. Las áreas en verde indican lugares con precipitaciones observadas debajo de lo normal en el trimestre anterior, pero con probabilidades mayores de precipitación sobre lo normal en el trimestre siguiente.
<p>
Para ver más información sobre este análisis, véase las siguientes páginas:  <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&PageID=0&cached=true&mode=2#pic">Predicciones en Contexto</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">página del Map Room PiC</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">Data Library</a>.
<p>
<a name="CMAP_climo"><b>Climatología Mensual del CPC Merged Analysis of Precipitación (CMAP)</b>
<p>
<div class="rightbox">
<a href="CMAP_climo.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CPC/.Merged_Analysis/.monthly/.v1201/.prcp_est/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/0.5/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//color_smoothing+null+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Se presentan los valores de precipitación media mensual de 1985-2010 para proporcionar información sobre los totales de precipitación mensual "normal". Los datos provienen del set de datos de NOAA Climate Prediction Center's Merged Analysis of Precipitation (CMAP), disponibles a una resolución de 2.5° lat/lon. Los valores de precipitación del CMAP aquí proporcionados son derivados de  una combinación de observaciones en estaciones meteorológicas y estimaciones satelitales en base a infrarrojos y microondas. Puede encontrar más información sobre este data set en la página siguiente: <a href="http://www.cpc.noaa.gov/products/global_precip/html/wpage.cmap.html">CMAP</a>
<p>
<b>Referencia:</b>  Xie, P. and P. A. Arkin, 1997:  Global precipitation:  A 17-year monthly analysis based on gauge observations, satellite estimates, and numerical model outputs. <i>Bull. Amer. Met. Soc.</i>, <b>78</b>, 2539-2558. 

<p><a name="count"><b>Población Proyectada para el Año 2005 Ajustada por las Naciones Unidas, del CIESIN/SEDAC GPWv3</b>
<p>
<div class="rightbox">
<a href="count.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.GPWv3/.count/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/546./plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el número estimado de personas viviendo en cada una de las grillas de 2.5 minutos de arco proyectado para el año 2005. Los datos provienen del CIESIN Gridded Population of the World, Version 3 (<a href="http://sedac.ciesin.org/gpw/index.jsp">GPWv3</a>).  Los valores son derivados de estimaciones de oficinas estadísticas nacionales y ajustados de acuerdo con estimaciones nacionales de población de las Naciones Unidas. 
Puede encontrar más información sobre este set de datos en la siguiente página:  <a href="http://sedac.ciesin.org/gpw/documentation.jsp">Gridded Population of the World, Version 3</a>.
<p>
<b>Referencia:</b>  Center for International Earth Science Information Network (CIESIN), Columbia University; United Nations Food and Agriculture Programme (FAO); and Centro Internacional de Agricultura Tropical (CIAT). 2005. Gridded Population of the World: Future Estimates (GPWFE). Palisades, NY: Socioeconomic Data and Applications Center (SEDAC), Columbia University. Available at <a href="http://sedac.ciesin.columbia.edu/gpw/">http://sedac.ciesin.columbia.edu/gpw/</a>.

<p><a name="imr"><b>Tasa de Mortalidad Infantil del CIESIN/SEDAC Global Distribution of Poverty, año 2000</b>
<p>
<div class="rightbox">
<a href="imr.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.Poverty/.imr/X/Y/fig-+colors+black+thin+countries_gaz+-fig+X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El set de datos del CIESIN/SEDAC Global Distribution of Poverty incluye la tasa de mortalidad infantil como un indicador del nivel de pobreza. Ese mapa muestra la tasa de mortalidad infantil (número de muertes infantiles por cada 10,000 nacimientos) para cada grilla de 0.25° lat/lon, para el año 2000.
<p>
Puede encontrar más información sobre este indicador de pobreza y el set de datos completo en la siguiente página:  <a href="http://sedac.ciesin.columbia.edu/povmap/">Global Distribution of Poverty</a>.
<p>
<b>Referencia:</b>  Center for International Earth Science Information Network (CIESIN), Columbia University; 2005 Global subnational infant mortality rates [dataset].  CIESIN, Palisades, NY, USA. Available at: <a href="http://www.ciesin.columbia.edu/povmap/ds_global.html">http://www.ciesin.columbia.edu/povmap/ds_global.html</a>
<p>

Por favor, no dude en <a href="mailto:mbell@iri.columbia.edu">enviarnos un correo electrónico</a> con sus preguntas o comentarios.  

<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
</body>
</html>
