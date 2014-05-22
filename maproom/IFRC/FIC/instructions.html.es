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
<meta name="viewport" content="width=device-width; initial-scale=1.0;" />
    <title>IFRC PIC: Como Usar el Pron&#243;stico de Precipitaci&#243;n en la Herramienta de Mapa de Contexto</title>
<link rel="stylesheet" type="text/css" href="../../../uicore/uicore.css" />
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
</head>
<body bgcolor="#FFFFFF"  link="#993333" vlink="#993333" alink="#FF0000">
<form name="pageform" id="pageform" class="carryLanguage carryup carry">
<input class="carryLanguage carryup carry" name="Set-Language" type="hidden" />
<input class="carry" name="Region" type="hidden" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList"> 
                <legend>Federaci&#243;n Internacional</legend> 
                      <a class="navlink carryup" href="fic.html">Predicciones en Contexto</a>
            </fieldset>
 </div>

<h3 align=center><u>Como Usar el Pron&#243;stico de Precipitaci&#243;n en la Herramienta de Mapa de Contexto</u></h3>
<p>

<div class="anchorlinks">
 <ul>
 <li><a href="#visual">Caracter&#237;sticas visuales de la interfase del mapa</a><br></li>
 <li><a href="#interp">Interpretando los mapas</a><br></li>
 <div class="indented">
  <li><a href="#esrlgfs">Mapas de Pron&#243;stico de la Precipitaci&#243;n de Seis D&#237;as y Diario del ESRL GFS</a><br></li>
  <li><a href="#prcp_fcst">Pron&#243;stico Estacional de Precipitaci&#243;n del IRI</a><br></li>
  <li><a href="#extreme_prcp_fcst">Pron&#243;stico de la Precipitaci&#243;n Extrema del IRI</a><br></li>
  <li><a href="#pic3mo_same">Predicciones en Contexto (PiC) del IRI</a><br></li>
  <li><a href="#CMAP_climo">Climatolog&#237;a Mensual del Merged Analysis of Precipitation (CMAP) del CPC</a><br></li>
  <li><a href="#count">Poblaci&#243;n Ajustada Proyectada seg&#250;n las Naciones Unidas del CIESIN/SEDAC</a><br></li>
  <li><a href="#imr">Tasa de Mortalidad Infantil, A&#241;o 2000 del CIESIN/SEDAC Global Distribution of Poverty</a><br></li>
 </div>
 </ul>
</div>
<p>
<p>
<p><a name="visual"><u><b>Caracter&#237;sticas visuales de la interfase del mapa</b></u>
<br>En primer lugar el mapa muestra el total de precipitaciones de los seis d&#237;as m&#225;s recientes. Los usuarios tambi&#233;n pueden usar el visualizador de mapas para:
<ul>
<li>Seleccionar un mapa de su inter&#233;s</li>
<li>Ampliar (zoom in) una regi&#243;n mas especifica de su inter&#233;s</li>
<li>Seleccionar el momento de inicio del pron&#243;stico en el mapa de pron&#243;stico de precipitaci&#243;n total de seis d&#237;as, en el mapa de pron&#243;stico de precipitaci&#243;n estacional y en el de predicci&#243;n en contexto (PiC) del IRI</li> 
</ul>

<p>
<u><i>Seleccione el mapa de su inter&#233;s</i></u>
<br>Hay botones de radio en el lado izquierdo de la p&#225;gina bajo "&#191;Que le gustar&#237;a saber?".
<br>
<ol>
<li>Seleccione el bot&#243;n de radio correspondiente a el mapa que quiere ver</li>
<li>Haga clic/presione el bot&#243;n de "redibujar" (bot&#243;n azul con flecha circular), que se volver&#225; rojo, para mostrar el mapa que ha elegido.</li>
</ol>

<p>
<u><i>Acercar/Alejar el mapa (Zoom in/Zoom out)</i></u>
<br>Hay dos formas para ampliar (hacer zoom) el mapa sobre regiones: una es 'cliquear-y-arrastrar' marcando la ventana que se quiere ampliar, y la otra es usando las cajas de texto de latitud/longitud. Note que el mapa no puede mostrar &#225;reas fuera de las latitudes mostradas inicialmente en la interfase (es decir 66.25&#176;S - 76.25&#176;N). 
<br>
<ul>
 <li><i>Cliquear-y-arrastrar</i>
 </li>
  <ol>
   <li>Haga clic en el bot&#243;n izquierdo del mouse en la esquina superior izquierda de la regi&#243;n que quiere ampliar.
</li>
   <li>Mientras mantiene presionado el bot&#243;n, arrastre el mouse a la esquina inferior derecha de la regi&#243;n que quiere ampliar.
</li>
   <li>Suelte el bot&#243;n izquierdo del Mouse. El mapa se re-dibujar&#225; autom&#225;ticamente.<p></li>
  </ol></li>
 <li><i>Selecci&#243;n de lat/lon espec&#237;fica</i>
  <br>Hay cuatro cajas de texto de lat/lon debajo y a la izquierda del mapa.
  <br>
  <ol>
   <li>Cambie el valor en las cajas de texto de lat/lon a los limites de la regi&#243;n que desea visualizar usando el formato de texto ya mostrado.
</li>
   <li>Haga clic sobre el bot&#243;n de "Redibujar."</li>
  </ol>
</ul>
<p>
<u><i>Seleccione el Tiempo de Inicio del Pron&#243;stico</i></u>
<br>Cuando se elige los mapas de pron&#243;stico total de seis d&#237;as o los mapas de pron&#243;stico estacional del IRI o los mapas de PiC , aparecer&#225; una caja de texto y botones arriba del mapa que permitir&#225; elegir el Tiempo de Inicio de Pron&#243;stico (o el Mes de Publicaci&#243;n del Pron&#243;stico de IRI). El Tiempo de Inicio de Pron&#243;stico del mapa que se est&#225; exhibiendo aparece en la caja de texto.
<p>Para moverse hacia adelante o atr&#225;s un paso en el tiempo (es decir moverse un d&#237;a en el mapa de pron&#243;stico de seis d&#237;as y moverse un mes en los mapas de pron&#243;stico del IRI), haga clic sobre los botones correspondientes al lado de la caja de texto.
<p>El usuario tambi&#233;n puede modificar la fecha en la caja de texto, usando el formato apropiado (por ejemplo "0000 16 Jan 2008", para los mapas de seis d&#237;as; "Jan 2008" para los mapas de pron&#243;stico del IRI), y luego cliquear el bot&#243;n de "Redibujar" para ir al pron&#243;stico publicado en esa fecha.
<p>Para crear una animaci&#243;n de estos mapas a lo largo de una serie de fechas, en la caja de texto de "Tiempo de Inicio del Pron&#243;stico" incluya una fecha de comienzo para la animaci&#243;n seguido por "to" (es decir, "al" en Ingl&#233;s), seguido por la fecha de finalizaci&#243;n, luego haga clic en el bot&#243;n de "Redibujar." Por ejemplo para ver una animaci&#243;n de los pron&#243;sticos de seis d&#237;as desde el la fecha de inicio 0000 1 Jan 2008 hasta el 0000 15 Jan 2008, escriba "0000 1 Jan 2008 to 0000 15 Jan 2008" y luego haga clic sobre "Redibujar."
<p>
<hr width="80%"> </hr>
<p><a name="interp"><u><b>Interpretando los mapas</b></u>
<br>En las secciones siguientes se proporciona una explicaci&#243;n sobre  la interpretaci&#243;n correcta de cada mapa disponible en la interfase.
<p>
   <a name="esrlgfs"><b>Mapas de Pron&#243;stico de Precipitaci&#243;n de Seis D&#237;as y Diario del ESRL GEFS</b><br>
<p>
El Earth System Research Laboratory (ESRL) Physical Sciences Division (PSD) ha emprendido esfuerzos para "re-pronosticar" usando una versi&#243;n anterior, pero no cambiada del modelo de Medium-Range Forecast (MRF, un precusor de el modelo de Global Forecast System actualmente dirigido operativamente por NCEP) para producir  un ensamblado de 15 miembros de pron&#243;sticos de tiempo num&#233;ricos sobre una base diaria, ejecutada desde 1979 hasta el presente con una resoluci&#243;n espacial de 2.5&#176; lat/lon. El modelo usa condiciones iniciales del Rean&#225;lisis del NCEP/NCAR y es actualizado a diario en 00 UTC. El resultado es una climatolog&#237;a estable del modelo para las variables de pron&#243;stico desde 1979 hasta el presente, incluyendo precipitaci&#243;n acumulada. Puede encontrar m&#225;s informaci&#243;n sobre el proyecto de ESRL Reforecast en  la siguiente direcci&#243;n de Internet: <a href="http://www.cdc.noaa.gov/people/jeffrey.s.whitaker/refcst/">Proyecto de ESRL Reforecast</a> 
<p>
<b>Referencia:</b>  Hamill, T. M., J. S. Whitaker, and S. L. Mullen, 2006:  Reforecasts:  An important dataset for improving weather predictions. <i>Bull. Amer. Meteor. Soc.</i>, <b>87</b>, 33-46.
<p>
En la aplicaci&#243;n actual de estos datos de pron&#243;stico, no se han hecho ajustes para tener en cuenta sesgos del modelo con respecto a la atm&#243;sfera real. Sin embargo, usando esta climatolog&#237;a fija, se han calculado estad&#237;sticas de pron&#243;stico de precipitaci&#243;n auto-consistentes, incluyendo las anomal&#237;as diarias, el porcentaje de la precipitaci&#243;n media mensual total, y los percentiles de precipitaci&#243;n, para ubicar los totales de pron&#243;sticos de precipitaci&#243;n diarias y de seis d&#237;as en su contexto hist&#243;rico. Todos los mapas de pron&#243;stico de precipitaci&#243;n que se muestran aqu&#237; son derivados de promedios de los valores de precipitaci&#243;n diaria de los ensamblados. Los mapas basados en el pron&#243;stico de precipitaci&#243;n total de seis d&#237;as pueden ser seleccionados y visualizados en la ventana principal de la interfase. Los mapas de pron&#243;stico de precipitaci&#243;n de un d&#237;a individual para cualquiera de los d&#237;as 1 a 6 est&#225;n disponibles a trav&#233;s de hiperv&#237;nculos en el cuadro titulado "Mapas de Pron&#243;stico de Precipitaci&#243;n Total de un D&#237;a (24 Horas)" que se  encuentra debajo de la ventana principal de la interfase. 
<p>
Dado que la resoluci&#243;n espacial de los valores de pron&#243;stico de precipitaci&#243;n del modelo de pron&#243;stico es 2.5&#176; lat/lon, los totales de pron&#243;stico y las estad&#237;sticas representan valores de precipitaci&#243;n de gran escala. Aunque en general estos mapas deber&#237;an ser capaces de identificar regiones de grandes lluvias acumuladas a gran escala asociadas por ejemplo con ciclones tropicales, no deben ser utilizadas para  predecir la trayectoria de ciclones o la ubicaci&#243;n de precipitaciones intensas a escala menor o localizada (asociada , por ejemplo con la orograf&#237;a). 

<p><a name="tot6dayapcp"><b>Pron&#243;stico de la Precipitaci&#243;n Total de Seis D&#237;as del ESRL GEFS</b>
<p>
<div class="rightbox">
<a href="cummrain.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcp/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el pron&#243;stico de precipitaci&#243;n de gran escala (en mil&#237;metros) de seis d&#237;as para el per&#237;odo que aparece en el mapa, usando el pron&#243;stico emitido en el momento indicado para el inicio del pron&#243;stico.
<p><a name="tot6dayapcpanom"><b>Pron&#243;stico de la Anomal&#237;a de la Precipitaci&#243;n Total de Seis D&#237;as del ESRL GEFS</b>
<p>
<div class="rightbox">
<a href="wetter.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcpanom/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra la diferencia (en mil&#237;metros) entre el valor del pron&#243;stico actual de la precipitaci&#243;n total de seis d&#237;as y el pron&#243;stico promedio de largo plazo (1985-2012) para seis d&#237;as en la misma &#233;poca del a&#241;o utilizando la climatolog&#237;a del modelo. El valor del pron&#243;stico promedio de largo plazo (1985-2012) se calcula usando grupos de p&#233;ntadas (5 d&#237;as) para la precipitaci&#243;n total de seis d&#237;as para cada a&#241;o utilizando la climatolog&#237;a del modelo; por lo tanto, el promedio de largo plazo se calcula t&#237;picamente usando 140 valores. A pesar de que la anomal&#237;a de la precipitaci&#243;n expresa cu&#225;nto difiere el valor del pron&#243;stico de precipitaci&#243;n actual con el "normal" de largo plazo, no especifica claramente cu&#225;n inusual es la diferencia para ese lugar o &#233;poca del a&#241;o en particular. Por ejemplo, mientras una anomal&#237;a de 30 mm puede ser significativo en el Norte de &#225;frica, puede ser no significativo en Indonesia.
<p><a name="tot6dayapcppctle"><b>Percentil del Pron&#243;stico de Precipitaci&#243;n Total de Seis D&#237;as del ESRL GEFS</b>
<p>
<div class="rightbox">
<a href="sampletabslogo.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcppctlenoseasonal/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el pron&#243;stico de percentil de la precipitaci&#243;n total de seis d&#237;as con respecto a todos los pron&#243;sticos de precipitaci&#243;n de la climatolog&#237;a del modelo de 1985-2012.  Para determinar el valor de percentil que ser&#225; asignado al pron&#243;stico de precipitaci&#243;n total de seis d&#237;as actual, se ordenan los pron&#243;sticos de precipitaci&#243;n total de seis d&#237;as de 1985 al 2012 de mayor a menor. De estos, se le asigna un valor de 0 al valor menor, y un valor de 1 al mayor. El valor del pron&#243;stico de precipitaci&#243;n actual se compara con estos pares de precipitaci&#243;n y con los valores de los percentiles climatol&#243;gicos y se le asigna su rango de percentil dentro de este conjunto. Para hacer &#233;nfasis sobre los valores de precipitaci&#243;n que corresponded a percentiles mayores con respecto al modelo hist&#243;rico, solo se muestran los valores de percentiles mayores a 0.9. Los valores de percentil proporcionan una buena idea de c&#243;mo el pron&#243;stico de precipitaci&#243;n total actual se compara con el registro hist&#243;rico de un lugar determinado.

<p><a name="tot6dayapcppctmonthlyclim"><b>Pron&#243;stico de Precipitaci&#243;n Total de Seis D&#237;as como Porcentaje del Total Mensual Promedio</b>
<p>
<div class="rightbox">
<a href="heavyrain.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/a:/.apcppctmonthlyclim/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el valor de pron&#243;stico de precipitaci&#243;n de seis d&#237;as actual expresado como porcentaje del promedio de la precipitaci&#243;n total mensual utilizando la climatolog&#237;a del modelo. Esta medida destaca lugares  con pron&#243;sticos diarios o de seis d&#237;as de precipitaci&#243;n extrema ya que compara totales diarios o de seis d&#237;as con lo que normalmente llover&#237;a en el transcurso de todo un mes. Un valor de 100% indica que se pronostica que la precipitaci&#243;n total diaria o de seis d&#237;as ser&#225; tan grande como el total mensual promedio que se recibe en esta &#233;poca del a&#241;o (seg&#250;n la climatolog&#237;a del modelo). Un valor de 25% indica que se pronostica que la precipitaci&#243;n total diaria o de seis d&#237;as ser&#225; equivalente a la cuarta parte del total de la precipitaci&#243;n mensual promedio para esta &#233;poca del a&#241;o (seg&#250;n la climatolog&#237;a del modelo).

<p><a name="prcp_fcst"><b>Pron&#243;stico de Precipitaci&#243;n Estacional del IRI</b>
<p>
<div class="rightbox">
<a href="prcp_fcst.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/L/1/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Los pron&#243;sticos probabil&#237;sticos de precipitaci&#243;n estacional del IRI para el mundo completo se publican a mediados de cada mes. Estos pron&#243;sticos son para los cuatro trimestres superpuestos, extendi&#233;ndose hasta seis meses en adelante. El mapa que se muestra en esta interfase es el pron&#243;stico de precipitaci&#243;n para el primer trimestre. Para el pron&#243;stico publicado en Enero, por ejemplo, el pron&#243;stico mostrado es v&#225;lido para el trimestre de Febrero-Marzo-Abril.
<p>
Los pron&#243;sticos proveen probabilidades de que la precipitaci&#243;n estacional estar&#225; en el tercio menor de la distribuci&#243;n climatol&#243;gica (tercil inferior), el tercio del medio (tercil medio),  o el tercio mayor (tercil superior). Para mostrar las probabilidades usando solamente un mapa, la probabilidad de la categor&#237;a con valor m&#225;s alto (33.3% o m&#225;s) se sombrea con un color; las variaciones en el sombreado de los terciles bajos y altos indican la magnitud de la probabilidad. Las &#225;reas en gris indican que la categor&#237;a cercana a lo normal es lo m&#225;s probable. Las &#225;reas en blanco indican climatolog&#237;a del pron&#243;stico (33.3% para cada tercil), en cuyo caso ning&#250;n tercil es dominante. La distribuci&#243;n climatol&#243;gica se determina con las observaciones de los trimestres en cuesti&#243;n a trav&#233;s de la historia de los 30 a&#241;os m&#225;s recientes. El pron&#243;stico representa una destilaci&#243;n de informaci&#243;n de un gran n&#250;mero de "inputs", donde el m&#225;s importante es la predicci&#243;n de varios modelos atmosf&#233;ricos din&#225;micos que responden a los patrones esperados en las temperaturas superficiales del mar (TSM).
<p>
Puede encontrar m&#225;s informaci&#243;n sobre los pron&#243;sticos estacionales del IRI en estas p&#225;ginas: <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&parentname=CommunityPage&parentid=1&mode=2&in_hi_userid=2&cached=true">Pron&#243;stico del IRI Net Assessment</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.Precipitation/">p&#225;gina de Pron&#243;stico de Map Room</a>, <a href="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.FD/.Seasonal_Forecast/">Data Library</a>.
<p><b>Referencia:</b>  Barnston, A. G., S. J. Mason, L. Goddard, D. G. Dewitt, and S. E. Zebiak, 2003:  Multimodel ensembling in seasonal climate forecasting at IRI. <i>Bull. Amer. Meteor. Soc.</i>, <b>84</b>, 1783-1796.

<p><a name="extreme_prcp_fcst"><b>Pron&#243;stico de Precipitaci&#243;n Extrema del IRI</b>
<p>
<div class="rightbox">
<a href="extreme_prcp_fcst.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.extreme_prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//plotaxislength+250+psdef//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef+.gif">
</a>
</div>
El pron&#243;stico probabil&#237;stico de precipitaci&#243;n estacional extrema para el mundo completo que produce el IRI se publica a mediados de cada mes. El pron&#243;stico es v&#225;lido para el pr&#243;ximo trimestre. Por ejemplo un pron&#243;stico publicado en Enero, es v&#225;lido para el trimestre de Febrero-Marzo-Abril.
<p>
El pron&#243;stico provee probabilidades de que la precipitaci&#243;n estacional estar&#225; en el 15% m&#225;s bajo o en el 15% m&#225;s alto de la distribuci&#243;n climatol&#243;gica. Para mostrar las probabilidades usando solo un mapa, se sombrea la probabilidad m&#225;s alta; las variaciones en el sombreado indican la magnitud de la probabilidad. Los azules claros/medianos/ oscuros indican una probabilidad ligeramente mayor/mayor/muy mayor (20-40% / 40-50% / m&#225;s del 50%) de precipitaci&#243;n estacional en el 15% m&#225;s alto de la distribuci&#243;n climatol&#243;gica. Los colores dorado/marr&#243;n/marr&#243;n oscuro indican una probabilidad ligeramente mayor/mayor/muy mayor (20-40% / 40-50% / m&#225;s del 50%) de precipitaci&#243;n estacional en el 15% m&#225;s bajo de la distribuci&#243;n climatol&#243;gica. La distribuci&#243;n climatol&#243;gica est&#225; determinada por las observaciones para la temporada en cuesti&#243;n sobre la historia de los &#250;ltimos 30 a&#241;os. El pron&#243;stico representa una destilaci&#243;n de informaci&#243;n de un n&#250;mero de "inputs", donde el m&#225;s importante es la predicci&#243;n de varios modelos atmosf&#233;ricos din&#225;micos que responden a los patrones esperados en las temperaturas superficiales del mar (TSM).
<p>
Puede encontrar m&#225;s informaci&#243;n sobre los pron&#243;sticos estacionales del IRI en estas p&#225;ginas: <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&parentname=CommunityPage&parentid=1&mode=2&in_hi_userid=2&cached=true">Pron&#243;stico del IRI Net Assessment</a>, <a href="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.FD/.Seasonal_Forecast/">Data Library</a>.
<p><b>Referencia:</b>  Barnston, A. G., S. J. Mason, L. Goddard, D. G. Dewitt, and S. E. Zebiak, 2003:  Multimodel ensembling in seasonal climate forecasting at IRI. <i>Bull. Amer. Meteor. Soc.</i>, <b>84</b>, 1783-1796.

<p><a name="pic3mo_same"><b>Predicciones en Contexto (PiC) del IRI: Observaci&#243;n de la misma tendencia en el Pron&#243;stico Estacional y la Precipitaci&#243;n observada en los &#250;ltimos 3 meses</b>
<p>
<div class="rightbox">
<a href="pic3mo_same.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_same/:a:/.forecasttime/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28%25=%5Bforecasttime%5D%20Forecast%20Precipitation%20Tendency%20same%20as%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El IRI provee una perspectiva clim&#225;tica en contexto para las regiones del mundo, mostrando una combinaci&#243;n de precipitaciones observadas y pronosticadas. Las &#225;reas sombreadas en el mapa de "Misma Tendencia" indican lugares donde el pron&#243;stico de precipitaci&#243;n estacional del IRI Net Assessment  para el pr&#243;ximo trimestre muestra una probabilidad mayor de precipitaci&#243;n sobre lo normal (bajo lo normal) Y donde la precipitaci&#243;n recibida en el trimestre antes de que el pron&#243;stico fuera publicado fue mayor que lo normal (menor que lo normal) tambi&#233;n -- en otras palabras, donde el pron&#243;stico estacional indica una probabilidad mayor de que las condiciones observadas contin&#250;en. Este mapa es actualizado todos los meses.
<p>
La informaci&#243;n que se usa como referencia de observaciones es la precipitaci&#243;n mensual en grillas del NCEP para 30 a&#241;os (1969 a 1998). Las observaciones de los &#250;ltimos tres meses se basan en los datos mensuales en grilla de CAMS-OPI. En primer lugar, la observaci&#243;n de lluvias para el trimestre m&#225;s reciente en cada punto de grilla se ordena en una escala de 0 a 1, con 0 como el evento m&#225;s seco en los &#250;ltimos 30 a&#241;os para el trimestre en cuesti&#243;n, y 1.0 como el trimestre m&#225;s h&#250;medo. Un valor de 0.333 o menos es considerado seco (bajo lo normal), y un valor de 0.667 o m&#225;s es considerado h&#250;medo (sobre lo normal). En segundo lugar, se examina el pron&#243;stico del pr&#243;ximo trimestre para el mismo lugar. Un pron&#243;stico con  una probabilidad de 40% o m&#225;s para la categor&#237;a debajo de lo normal se interpreta como un pron&#243;stico seco, y un pron&#243;stico con  una probabilidad de 40% o m&#225;s para la categor&#237;a sobre  lo normal se interpreta como un pron&#243;stico h&#250;medo.
<p>
En base a la observaci&#243;n y el pron&#243;stico, se produce un mapa que representa las &#225;reas con altas probabilidades que contin&#250;en las condiciones m&#225;s h&#250;medas o m&#225;s secas de lo normal.  En el mapa se indica la posibilidad de la persistencia de las condiciones h&#250;medas o secas, dependiendo si el pron&#243;stico de probabilidad es 40-50% (etiquetado "Mayor"), o 55% o m&#225;s (etiquetado "Mucho Mayor"). Por lo tanto, las &#225;reas en amarillo claro (verde claro) indican lugares donde la precipitaci&#243;n en la estaci&#243;n pasada fue menor que lo normal (mayor que lo normal) y el pron&#243;stico indica una probabilidad mayor de que contin&#250;en las condiciones de precipitaci&#243;n debajo de lo normal (sobre lo normal) en el pr&#243;ximo trimestre. Las &#225;reas en amarillo oscuro (verde oscuro) indican lugares donde la precipitaci&#243;n en la estaci&#243;n pasada fue menor que lo normal (mayor que lo normal) y el pron&#243;stico indica una probabilidad mucho mayor de que contin&#250;en las condiciones de precipitaci&#243;n debajo de lo normal (sobre lo normal) en el pr&#243;ximo trimestre.
<p>
Para ver m&#225;s informaci&#243;n sobre este an&#225;lisis, v&#233;ase las siguientes p&#225;ginas:  <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&PageID=0&cached=true&mode=2#pic">Predicciones en Contexto</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">p&#225;gina del Map Room PiC</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">Data Library</a>.
<p>
<p><a name="pic3mo_reversed"><b>Predicciones en Contexto (PiC) del IRI: Tendencia Revertida Entre el Pron&#243;stico Estacional y las Observaciones de Precipitaci&#243;n Trimestral</b>
<p>
<div class="rightbox">
<a href="pic3mo_reversed.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_reversed/:a:/.forecasttime/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28%25=%5Bforecasttime%5D%20Forecast%20Precipitation%20Tendency%20reversed%20from%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El IRI provee una perspectiva clim&#225;tica en contexto para las regiones del mundo, mostrando una combinaci&#243;n de precipitaciones observadas y pronosticadas. Las &#225;reas sombreadas en el mapa de "Tendencia Revertida" indican lugares donde el pron&#243;stico de precipitaci&#243;n estacional del IRI Net Assessment  para el pr&#243;ximo trimestre muestra una probabilidad mayor de precipitaci&#243;n sobre lo normal (bajo lo normal) Y donde la precipitaci&#243;n recibida en el trimestre anterior a que el pron&#243;stico fuera publicado fue menor que lo normal (mayor que lo normal) -- en otras palabras, donde el pron&#243;stico estacional indica una probabilidad mayor de tendencia opuesta a las condiciones observadas en los &#250;ltimos tres meses. Este mapa es actualizado todos los meses.
<p>
La informaci&#243;n que se usa como referencia de observaciones es la precipitaci&#243;n mensual en grillas del NCEP para 30 a&#241;os (1969 a 1998). Las observaciones de los &#250;ltimos tres meses se basan en los datos mensuales en grilla de CAMS-OPI. En primer lugar, la observaci&#243;n de lluvias para el trimestre m&#225;s reciente en cada punto de grilla se ordena en una escala de 0 a 1, con 0 como el evento m&#225;s seco en los &#250;ltimos 30 a&#241;os para el trimestre en cuesti&#243;n, y 1.0 como el trimestre m&#225;s h&#250;medo. Un valor de 0.333 o menos es considerado seco (bajo lo normal), y un valor de 0.667 o m&#225;s es considerado h&#250;medo (sobre lo normal). En segundo lugar, se examina el pron&#243;stico del pr&#243;ximo trimestre para el mismo lugar. Un pron&#243;stico con  una probabilidad de 40% o m&#225;s para la categor&#237;a debajo de lo normal se interpreta como un pron&#243;stico seco, y un pron&#243;stico con  una probabilidad de 40% o m&#225;s para la categor&#237;a sobre  lo normal se interpreta como un pron&#243;stico h&#250;medo.
<p>
En base a la observaci&#243;n y el pron&#243;stico, se produce un mapa que representa las &#225;reas con altas probabilidades de tendencias revertidas en comparaci&#243;n con la precipitaci&#243;n observada en los tres meses anteriores. Las &#225;reas en amarillo indican lugares con precipitaciones observadas sobre lo normal, pero con probabilidades mayores de precipitaci&#243;n debajo de lo normal en el pr&#243;ximo trimestre. Las &#225;reas en verde indican lugares con precipitaciones observadas debajo de lo normal en el trimestre anterior, pero con probabilidades mayores de precipitaci&#243;n sobre lo normal en el trimestre siguiente.
<p>
Para ver m&#225;s informaci&#243;n sobre este an&#225;lisis, v&#233;ase las siguientes p&#225;ginas:  <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&PageID=0&cached=true&mode=2#pic">Predicciones en Contexto</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">p&#225;gina del Map Room PiC</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">Data Library</a>.
<p>
<a name="CMAP_climo"><b>Climatolog&#237;a Mensual del CPC Merged Analysis of Precipitaci&#243;n (CMAP)</b>
<p>
<div class="rightbox">
<a href="CMAP_climo.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CPC/.Merged_Analysis/.monthly/.v1201/.prcp_est/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/0.5/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//color_smoothing+null+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Se presentan los valores de precipitaci&#243;n media mensual de 1985-2010 para proporcionar informaci&#243;n sobre los totales de precipitaci&#243;n mensual "normal". Los datos provienen del set de datos de NOAA Climate Prediction Center's Merged Analysis of Precipitation (CMAP), disponibles a una resoluci&#243;n de 2.5&#176; lat/lon. Los valores de precipitaci&#243;n del CMAP aqu&#237; proporcionados son derivados de  una combinaci&#243;n de observaciones en estaciones meteorol&#243;gicas y estimaciones satelitales en base a infrarrojos y microondas. Puede encontrar m&#225;s informaci&#243;n sobre este data set en la p&#225;gina siguiente: <a href="http://www.cpc.noaa.gov/products/global_precip/html/wpage.cmap.html">CMAP</a>
<p>
<b>Referencia:</b>  Xie, P. and P. A. Arkin, 1997:  Global precipitation:  A 17-year monthly analysis based on gauge observations, satellite estimates, and numerical model outputs. <i>Bull. Amer. Met. Soc.</i>, <b>78</b>, 2539-2558. 

<p><a name="count"><b>Poblaci&#243;n Proyectada para el A&#241;o 2005 Ajustada por las Naciones Unidas, del CIESIN/SEDAC GPWv3</b>
<p>
<div class="rightbox">
<a href="count.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.GPWv3/.count/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/546./plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el n&#250;mero estimado de personas viviendo en cada una de las grillas de 2.5 minutos de arco proyectado para el a&#241;o 2005. Los datos provienen del CIESIN Gridded Population of the World, Version 3 (<a href="http://sedac.ciesin.org/gpw/index.jsp">GPWv3</a>).  Los valores son derivados de estimaciones de oficinas estad&#237;sticas nacionales y ajustados de acuerdo con estimaciones nacionales de poblaci&#243;n de las Naciones Unidas. 
Puede encontrar m&#225;s informaci&#243;n sobre este set de datos en la siguiente p&#225;gina:  <a href="http://sedac.ciesin.org/gpw/documentation.jsp">Gridded Population of the World, Version 3</a>.
<p>
<b>Referencia:</b>  Center for International Earth Science Information Network (CIESIN), Columbia University; United Nations Food and Agriculture Programme (FAO); and Centro Internacional de Agricultura Tropical (CIAT). 2005. Gridded Population of the World: Future Estimates (GPWFE). Palisades, NY: Socioeconomic Data and Applications Center (SEDAC), Columbia University. Available at <a href="http://sedac.ciesin.columbia.edu/gpw/">http://sedac.ciesin.columbia.edu/gpw/</a>.

<p><a name="imr"><b>Tasa de Mortalidad Infantil del CIESIN/SEDAC Global Distribution of Poverty, a&#241;o 2000</b>
<p>
<div class="rightbox">
<a href="imr.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.Poverty/.imr/X/Y/fig-+colors+black+thin+countries_gaz+-fig+X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El set de datos del CIESIN/SEDAC Global Distribution of Poverty incluye la tasa de mortalidad infantil como un indicador del nivel de pobreza. Ese mapa muestra la tasa de mortalidad infantil (n&#250;mero de muertes infantiles por cada 10,000 nacimientos) para cada grilla de 0.25&#176; lat/lon, para el a&#241;o 2000.
<p>
Puede encontrar m&#225;s informaci&#243;n sobre este indicador de pobreza y el set de datos completo en la siguiente p&#225;gina:  <a href="http://sedac.ciesin.columbia.edu/povmap/">Global Distribution of Poverty</a>.
<p>
<b>Referencia:</b>  Center for International Earth Science Information Network (CIESIN), Columbia University; 2005 Global subnational infant mortality rates [dataset].  CIESIN, Palisades, NY, USA. Available at: <a href="http://www.ciesin.columbia.edu/povmap/ds_global.html">http://www.ciesin.columbia.edu/povmap/ds_global.html</a>
<p>

Por favor, no dude en <a href="mailto:mbell@iri.columbia.edu">enviarnos un correo electr&#243;nico</a> con sus preguntas o comentarios.  

<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
</body>
</html>
