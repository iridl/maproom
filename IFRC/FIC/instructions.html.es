<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
    <title>IFRC PIC: Como Usar el Pron&oacute;stico de Precipitaci&oacute;n en la Herramienta de Mapa de Contexto</title>
<link rel="stylesheet" type="text/css" href="../../maproom.css" />
<link rel="stylesheet" type="text/css" href="../ifrc.css" />
<link rev="section" href="fic.html" />
<link class="altLanguage" rel="alternate" hreflang="en" href="instructions.html?Set-Language=en" />
<link rel="canonical" href="instructions.html" />
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
<script type="text/javascript" src="../../maproom.js"></script>
</head>
<body bgcolor="#FFFFFF"  link="#993333" vlink="#993333" alink="#FF0000">
<form name="pageform" id="pageform" class="carryup carry">
<input class="carryup carry" name="Set-Language" type="hidden" />
<input class="carry" name="Region" type="hidden" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList"> 
                <legend>Federaci&#243;n Internacional</legend> 
                      <a class="navlink carryup" href="fic.html">Predicciones en Contexto</a>
            </fieldset>
 </div>

<h3 align=center><u>Como Usar el Pron&oacute;stico de Precipitaci&oacute;n en la Herramienta de Mapa de Contexto</u></h3>
<p>

<div class="anchorlinks">
 <ul>
 <li><a href="#visual">Caracter&iacute;sticas visuales de la interfase del mapa</a><br></li>
 <li><a href="#interp">Interpretando los mapas</a><br></li>
 <div class="indented">
  <li><a href="#esrlgfs">Mapas de Pron&oacute;stico de la Precipitaci&oacute;n de Seis D&iacute;as y Diario del ESRL GFS</a><br></li>
  <li><a href="#prcp_fcst">Pron&oacute;stico Estacional de Precipitaci&oacute;n del IRI</a><br></li>
  <li><a href="#extreme_prcp_fcst">Pron&oacute;stico de la Precipitaci&oacute;n Extrema del IRI</a><br></li>
  <li><a href="#pic3mo_same">Predicciones en Contexto (PiC) del IRI</a><br></li>
  <li><a href="#CMAP_climo">Climatolog&iacute;a Mensual del Merged Analysis of Precipitation (CMAP) del CPC</a><br></li>
  <li><a href="#count">Poblaci&oacute;n Ajustada Proyectada seg&uacute;n las Naciones Unidas del CIESIN/SEDAC</a><br></li>
  <li><a href="#imr">Tasa de Mortalidad Infantil, A&ntilde;o 2000 del CIESIN/SEDAC Global Distribution of Poverty</a><br></li>
 </div>
 </ul>
</div>
<p>
<p>
<p><a name="visual"><u><b>Caracter&iacute;sticas visuales de la interfase del mapa</b></u>
<br>En primer lugar el mapa muestra el total de precipitaciones de los seis d&iacute;as m&aacute;s recientes. Los usuarios tambi&eacute;n pueden usar el visualizador de mapas para:
<ul>
<li>Seleccionar un mapa de su inter&eacute;s</li>
<li>Ampliar (zoom in) una regi&oacute;n mas especifica de su inter&eacute;s</li>
<li>Seleccionar el momento de inicio del pron&oacute;stico en el mapa de pron&oacute;stico de precipitaci&oacute;n total de seis d&iacute;as, en el mapa de pron&oacute;stico de precipitaci&oacute;n estacional y en el de predicci&oacute;n en contexto (PiC) del IRI</li> 
</ul>

<p>
<u><i>Seleccione el mapa de su inter&eacute;s</i></u>
<br>Hay botones de radio en el lado izquierdo de la p&aacute;gina bajo "&iquest;Que le gustar&iacute;a saber?".
<br>
<ol>
<li>Seleccione el bot&oacute;n de radio correspondiente a el mapa que quiere ver</li>
<li>Haga clic/presione el bot&oacute;n de "redibujar" (bot&oacute;n azul con flecha circular), que se volver&aacute; rojo, para mostrar el mapa que ha elegido.</li>
</ol>

<p>
<u><i>Acercar/Alejar el mapa (Zoom in/Zoom out)</i></u>
<br>Hay dos formas para ampliar (hacer zoom) el mapa sobre regiones: una es 'cliquear-y-arrastrar' marcando la ventana que se quiere ampliar, y la otra es usando las cajas de texto de latitud/longitud. Note que el mapa no puede mostrar &aacute;reas fuera de las latitudes mostradas inicialmente en la interfase (es decir 66.25&deg;S - 76.25&deg;N). 
<br>
<ul>
 <li><i>Cliquear-y-arrastrar</i>
 </li>
  <ol>
   <li>Haga clic en el bot&oacute;n izquierdo del mouse en la esquina superior izquierda de la regi&oacute;n que quiere ampliar.
</li>
   <li>Mientras mantiene presionado el bot&oacute;n, arrastre el mouse a la esquina inferior derecha de la regi&oacute;n que quiere ampliar.
</li>
   <li>Suelte el bot&oacute;n izquierdo del Mouse. El mapa se re-dibujar&aacute; autom&aacute;ticamente.<p></li>
  </ol></li>
 <li><i>Selecci&oacute;n de lat/lon espec&iacute;fica</i>
  <br>Hay cuatro cajas de texto de lat/lon debajo y a la izquierda del mapa.
  <br>
  <ol>
   <li>Cambie el valor en las cajas de texto de lat/lon a los limites de la regi&oacute;n que desea visualizar usando el formato de texto ya mostrado.
</li>
   <li>Haga clic sobre el bot&oacute;n de "Redibujar."</li>
  </ol>
</ul>
<p>
<u><i>Seleccione el Tiempo de Inicio del Pron&oacute;stico</i></u>
<br>Cuando se elige los mapas de pron&oacute;stico total de seis d&iacute;as o los mapas de pron&oacute;stico estacional del IRI o los mapas de PiC , aparecer&aacute; una caja de texto y botones arriba del mapa que permitir&aacute; elegir el Tiempo de Inicio de Pron&oacute;stico (o el Mes de Publicaci&oacute;n del Pron&oacute;stico de IRI). El Tiempo de Inicio de Pron&oacute;stico del mapa que se est&aacute; exhibiendo aparece en la caja de texto.
<p>Para moverse hacia adelante o atr&aacute;s un paso en el tiempo (es decir moverse un d&iacute;a en el mapa de pron&oacute;stico de seis d&iacute;as y moverse un mes en los mapas de pron&oacute;stico del IRI), haga clic sobre los botones correspondientes al lado de la caja de texto.
<p>El usuario tambi&eacute;n puede modificar la fecha en la caja de texto, usando el formato apropiado (por ejemplo "0000 16 Jan 2008", para los mapas de seis d&iacute;as; "Jan 2008" para los mapas de pron&oacute;stico del IRI), y luego cliquear el bot&oacute;n de "Redibujar" para ir al pron&oacute;stico publicado en esa fecha.
<p>Para crear una animaci&oacute;n de estos mapas a lo largo de una serie de fechas, en la caja de texto de "Tiempo de Inicio del Pron&oacute;stico" incluya una fecha de comienzo para la animaci&oacute;n seguido por "to" (es decir, "al" en Ingl&eacute;s), seguido por la fecha de finalizaci&oacute;n, luego haga clic en el bot&oacute;n de "Redibujar." Por ejemplo para ver una animaci&oacute;n de los pron&oacute;sticos de seis d&iacute;as desde el la fecha de inicio 0000 1 Jan 2008 hasta el 0000 15 Jan 2008, escriba "0000 1 Jan 2008 to 0000 15 Jan 2008" y luego haga clic sobre "Redibujar."
<p>
<hr width="80%"> </hr>
<p><a name="interp"><u><b>Interpretando los mapas</b></u>
<br>En las secciones siguientes se proporciona una explicaci&oacute;n sobre  la interpretaci&oacute;n correcta de cada mapa disponible en la interfase.
<p>
   <a name="esrlgfs"><b>Mapas de Pron&oacute;stico de Precipitaci&oacute;n de Seis D&iacute;as y Diario del ESRL GFS</b><br>
<p>
El Earth System Research Laboratory (ESRL) Physical Sciences Division (PSD) ha emprendido esfuerzos para "re-pronosticar" usando una versi&oacute;n anterior, pero no cambiada del modelo de Medium-Range Forecast (MRF, un precusor de el modelo de Global Forecast System actualmente dirigido operativamente por NCEP) para producir  un ensamblado de 15 miembros de pron&oacute;sticos de tiempo num&eacute;ricos sobre una base diaria, ejecutada desde 1979 hasta el presente con una resoluci&oacute;n espacial de 2.5&deg; lat/lon. El modelo usa condiciones iniciales del Rean&aacute;lisis del NCEP/NCAR y es actualizado a diario en 00 UTC. El resultado es una climatolog&iacute;a estable del modelo para las variables de pron&oacute;stico desde 1979 hasta el presente, incluyendo precipitaci&oacute;n acumulada. Puede encontrar m&aacute;s informaci&oacute;n sobre el proyecto de ESRL Reforecast en  la siguiente direcci&oacute;n de Internet: <a href="http://www.cdc.noaa.gov/people/jeffrey.s.whitaker/refcst/">Proyecto de ESRL Reforecast</a> 
<p>
<b>Referencia:</b>  Hamill, T. M., J. S. Whitaker, and S. L. Mullen, 2006:  Reforecasts:  An important dataset for improving weather predictions. <i>Bull. Amer. Meteor. Soc.</i>, <b>87</b>, 33-46.
<p>
En la aplicaci&oacute;n actual de estos datos de pron&oacute;stico, no se han hecho ajustes para tener en cuenta sesgos del modelo con respecto a la atm&oacute;sfera real. Sin embargo, usando esta climatolog&iacute;a fija, se han calculado estad&iacute;sticas de pron&oacute;stico de precipitaci&oacute;n auto-consistentes, incluyendo las anomal&iacute;as diarias, el porcentaje de la precipitaci&oacute;n media mensual total, y los percentiles de precipitaci&oacute;n, para ubicar los totales de pron&oacute;sticos de precipitaci&oacute;n diarias y de seis d&iacute;as en su contexto hist&oacute;rico. Todos los mapas de pron&oacute;stico de precipitaci&oacute;n que se muestran aqu&iacute; son derivados de promedios de los valores de precipitaci&oacute;n diaria de los ensamblados. Los mapas basados en el pron&oacute;stico de precipitaci&oacute;n total de seis d&iacute;as pueden ser seleccionados y visualizados en la ventana principal de la interfase. Los mapas de pron&oacute;stico de precipitaci&oacute;n de un d&iacute;a individual para cualquiera de los d&iacute;as 1 a 6 est&aacute;n disponibles a trav&eacute;s de hiperv&iacute;nculos en el cuadro titulado "Mapas de Pron&oacute;stico de Precipitaci&oacute;n Total de un D&iacute;a (24 Horas)" que se  encuentra debajo de la ventana principal de la interfase. 
<p>
Dado que la resoluci&oacute;n espacial de los valores de pron&oacute;stico de precipitaci&oacute;n del modelo de pron&oacute;stico es 2.5&deg; lat/lon, los totales de pron&oacute;stico y las estad&iacute;sticas representan valores de precipitaci&oacute;n de gran escala. Aunque en general estos mapas deber&iacute;an ser capaces de identificar regiones de grandes lluvias acumuladas a gran escala asociadas por ejemplo con ciclones tropicales, no deben ser utilizadas para  predecir la trayectoria de ciclones o la ubicaci&oacute;n de precipitaciones intensas a escala menor o localizada (asociada , por ejemplo con la orograf&iacute;a). 

<p><a name="tot6dayapcp"><b>Pron&oacute;stico de la Precipitaci&oacute;n Total de Seis D&iacute;as del ESRL GFS</b>
<p>
<div class="rightbox">
<a href="cummrain.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast/.ensemble_mean/.analyses/.tot6day/a:/.apcp/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el pron&oacute;stico de precipitaci&oacute;n de gran escala (en mil&iacute;metros) de seis d&iacute;as para el per&iacute;odo que aparece en el mapa, usando el pron&oacute;stico emitido en el momento indicado para el inicio del pron&oacute;stico.
<p><a name="tot6dayapcpanom"><b>Pron&oacute;stico de la Anomal&iacute;a de la Precipitaci&oacute;n Total de Seis D&iacute;as del ESRL GFS</b>
<p>
<div class="rightbox">
<a href="wetter.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast/.ensemble_mean/.analyses/.tot6day/a:/.apcpanom/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra la diferencia (en mil&iacute;metros) entre el valor del pron&oacute;stico actual de la precipitaci&oacute;n total de seis d&iacute;as y el pron&oacute;stico promedio de largo plazo (1979-2004) para seis d&iacute;as en la misma &eacute;poca del a&ntilde;o utilizando la climatolog&iacute;a del modelo. El valor del pron&oacute;stico promedio de largo plazo (1979-2004) se calcula usando grupos de p&eacute;ntadas (5 d&iacute;as) para la precipitaci&oacute;n total de seis d&iacute;as para cada a&ntilde;o utilizando la climatolog&iacute;a del modelo; por lo tanto, el promedio de largo plazo se calcula t&iacute;picamente usando 130 valores. A pesar de que la anomal&iacute;a de la precipitaci&oacute;n expresa cu&aacute;nto difiere el valor del pron&oacute;stico de precipitaci&oacute;n actual con el "normal" de largo plazo, no especifica claramente cu&aacute;n inusual es la diferencia para ese lugar o &eacute;poca del a&ntilde;o en particular. Por ejemplo, mientras una anomal&iacute;a de 30 mm puede ser significativo en el Norte de &aacute;frica, puede ser no significativo en Indonesia.
<p><a name="tot6dayapcppctle"><b>Percentil del Pron&oacute;stico de Precipitaci&oacute;n Total de Seis D&iacute;as del ESRL GFS</b>
<p>
<div class="rightbox">
<a href="sampletabslogo.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast/.ensemble_mean/.analyses/.tot6day/a:/.apcppctle/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el pron&oacute;stico de percentil de la precipitaci&oacute;n total de seis d&iacute;as con respecto a todos los pron&oacute;sticos de precipitaci&oacute;n de la climatolog&iacute;a del modelo de 1979-2004.  Para determinar el valor de percentil que ser&aacute; asignado al pron&oacute;stico de precipitaci&oacute;n total de seis d&iacute;as actual, se ordenan los pron&oacute;sticos de precipitaci&oacute;n total de seis d&iacute;as de 1979 al 2004 de mayor a menor. De estos, se le asigna un valor de 0 al valor menor, y un valor de 1 al mayor. El valor del pron&oacute;stico de precipitaci&oacute;n actual se compara con estos pares de precipitaci&oacute;n y con los valores de los percentiles climatol&oacute;gicos y se le asigna su rango de percentil dentro de este conjunto. Para hacer &eacute;nfasis sobre los valores de precipitaci&oacute;n que corresponded a percentiles mayores con respecto al modelo hist&oacute;rico, solo se muestran los valores de percentiles mayores a 0.9. Los valores de percentil proporcionan una buena idea de c&oacute;mo el pron&oacute;stico de precipitaci&oacute;n total actual se compara con el registro hist&oacute;rico de un lugar determinado.

<p><a name="tot6dayapcppctmonthlyclim"><b>Pron&oacute;stico de Precipitaci&oacute;n Total de Seis D&iacute;as como Porcentaje del Total Mensual Promedio</b>
<p>
<div class="rightbox">
<a href="heavyrain.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast/.ensemble_mean/.analyses/.tot6day/a:/.apcppctmonthlyclim/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/S/last/plotvalue/X/178.75/538.75/plotrange+//framelabel+(Forecast for %25=[forecasttime] Issued %25=[S])+psdef//antialias+true+psdef//color_smoothing+null+psdef//apcp/0/300/plotrange/S/last/plotvalue//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el valor de pron&oacute;stico de precipitaci&oacute;n de seis d&iacute;as actual expresado como porcentaje del promedio de la precipitaci&oacute;n total mensual utilizando la climatolog&iacute;a del modelo. Esta medida destaca lugares  con pron&oacute;sticos diarios o de seis d&iacute;as de precipitaci&oacute;n extrema ya que compara totales diarios o de seis d&iacute;as con lo que normalmente llover&iacute;a en el transcurso de todo un mes. Un valor de 100% indica que se pronostica que la precipitaci&oacute;n total diaria o de seis d&iacute;as ser&aacute; tan grande como el total mensual promedio que se recibe en esta &eacute;poca del a&ntilde;o (seg&uacute;n la climatolog&iacute;a del modelo). Un valor de 25% indica que se pronostica que la precipitaci&oacute;n total diaria o de seis d&iacute;as ser&aacute; equivalente a la cuarta parte del total de la precipitaci&oacute;n mensual promedio para esta &eacute;poca del a&ntilde;o (seg&uacute;n la climatolog&iacute;a del modelo).

<p><a name="prcp_fcst"><b>Pron&oacute;stico de Precipitaci&oacute;n Estacional del IRI</b>
<p>
<div class="rightbox">
<a href="prcp_fcst.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/L/1/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Los pron&oacute;sticos probabil&iacute;sticos de precipitaci&oacute;n estacional del IRI para el mundo completo se publican a mediados de cada mes. Estos pron&oacute;sticos son para los cuatro trimestres superpuestos, extendi&eacute;ndose hasta seis meses en adelante. El mapa que se muestra en esta interfase es el pron&oacute;stico de precipitaci&oacute;n para el primer trimestre. Para el pron&oacute;stico publicado en Enero, por ejemplo, el pron&oacute;stico mostrado es v&aacute;lido para el trimestre de Febrero-Marzo-Abril.
<p>
Los pron&oacute;sticos proveen probabilidades de que la precipitaci&oacute;n estacional estar&aacute; en el tercio menor de la distribuci&oacute;n climatol&oacute;gica (tercil inferior), el tercio del medio (tercil medio),  o el tercio mayor (tercil superior). Para mostrar las probabilidades usando solamente un mapa, la probabilidad de la categor&iacute;a con valor m&aacute;s alto (33.3% o m&aacute;s) se sombrea con un color; las variaciones en el sombreado de los terciles bajos y altos indican la magnitud de la probabilidad. Las &aacute;reas en gris indican que la categor&iacute;a cercana a lo normal es lo m&aacute;s probable. Las &aacute;reas en blanco indican climatolog&iacute;a del pron&oacute;stico (33.3% para cada tercil), en cuyo caso ning&uacute;n tercil es dominante. La distribuci&oacute;n climatol&oacute;gica se determina con las observaciones de los trimestres en cuesti&oacute;n a trav&eacute;s de la historia de los 30 a&ntilde;os m&aacute;s recientes. El pron&oacute;stico representa una destilaci&oacute;n de informaci&oacute;n de un gran n&uacute;mero de "inputs", donde el m&aacute;s importante es la predicci&oacute;n de varios modelos atmosf&eacute;ricos din&aacute;micos que responden a los patrones esperados en las temperaturas superficiales del mar (TSM).
<p>
Puede encontrar m&aacute;s informaci&oacute;n sobre los pron&oacute;sticos estacionales del IRI en estas p&aacute;ginas: <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&parentname=CommunityPage&parentid=1&mode=2&in_hi_userid=2&cached=true">Pron&oacute;stico del IRI Net Assessment</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.Precipitation/">p&aacute;gina de Pron&oacute;stico de Map Room</a>, <a href="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.FD/.Seasonal_Forecast/">Data Library</a>.
<p><b>Referencia:</b>  Barnston, A. G., S. J. Mason, L. Goddard, D. G. Dewitt, and S. E. Zebiak, 2003:  Multimodel ensembling in seasonal climate forecasting at IRI. <i>Bull. Amer. Meteor. Soc.</i>, <b>84</b>, 1783-1796.

<p><a name="extreme_prcp_fcst"><b>Pron&oacute;stico de Precipitaci&oacute;n Extrema del IRI</b>
<p>
<div class="rightbox">
<a href="extreme_prcp_fcst.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.extreme_prcp_fcst/:a:/.forecasttime/:a/X/Y/fig-+colors+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//plotaxislength+250+psdef//framelabel+%28Forecast%20for%20%25=%5Bforecasttime%5D,%20Forecast%20Issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef+.gif">
</a>
</div>
El pron&oacute;stico probabil&iacute;stico de precipitaci&oacute;n estacional extrema para el mundo completo que produce el IRI se publica a mediados de cada mes. El pron&oacute;stico es v&aacute;lido para el pr&oacute;ximo trimestre. Por ejemplo un pron&oacute;stico publicado en Enero, es v&aacute;lido para el trimestre de Febrero-Marzo-Abril.
<p>
El pron&oacute;stico provee probabilidades de que la precipitaci&oacute;n estacional estar&aacute; en el 15% m&aacute;s bajo o en el 15% m&aacute;s alto de la distribuci&oacute;n climatol&oacute;gica. Para mostrar las probabilidades usando solo un mapa, se sombrea la probabilidad m&aacute;s alta; las variaciones en el sombreado indican la magnitud de la probabilidad. Los azules claros/medianos/ oscuros indican una probabilidad ligeramente mayor/mayor/muy mayor (20-40% / 40-50% / m&aacute;s del 50%) de precipitaci&oacute;n estacional en el 15% m&aacute;s alto de la distribuci&oacute;n climatol&oacute;gica. Los colores dorado/marr&oacute;n/marr&oacute;n oscuro indican una probabilidad ligeramente mayor/mayor/muy mayor (20-40% / 40-50% / m&aacute;s del 50%) de precipitaci&oacute;n estacional en el 15% m&aacute;s bajo de la distribuci&oacute;n climatol&oacute;gica. La distribuci&oacute;n climatol&oacute;gica est&aacute; determinada por las observaciones para la temporada en cuesti&oacute;n sobre la historia de los &uacute;ltimos 30 a&ntilde;os. El pron&oacute;stico representa una destilaci&oacute;n de informaci&oacute;n de un n&uacute;mero de "inputs", donde el m&aacute;s importante es la predicci&oacute;n de varios modelos atmosf&eacute;ricos din&aacute;micos que responden a los patrones esperados en las temperaturas superficiales del mar (TSM).
<p>
Puede encontrar m&aacute;s informaci&oacute;n sobre los pron&oacute;sticos estacionales del IRI en estas p&aacute;ginas: <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&parentname=CommunityPage&parentid=1&mode=2&in_hi_userid=2&cached=true">Pron&oacute;stico del IRI Net Assessment</a>, <a href="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.FD/.Seasonal_Forecast/">Data Library</a>.
<p><b>Referencia:</b>  Barnston, A. G., S. J. Mason, L. Goddard, D. G. Dewitt, and S. E. Zebiak, 2003:  Multimodel ensembling in seasonal climate forecasting at IRI. <i>Bull. Amer. Meteor. Soc.</i>, <b>84</b>, 1783-1796.

<p><a name="pic3mo_same"><b>Predicciones en Contexto (PiC) del IRI: Observaci&oacute;n de la misma tendencia en el Pron&oacute;stico Estacional y la Precipitaci&oacute;n observada en los &uacute;ltimos 3 meses</b>
<p>
<div class="rightbox">
<a href="pic3mo_same.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_same/:a:/.forecasttime/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28%25=%5Bforecasttime%5D%20Forecast%20Precipitation%20Tendency%20same%20as%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El IRI provee una perspectiva clim&aacute;tica en contexto para las regiones del mundo, mostrando una combinaci&oacute;n de precipitaciones observadas y pronosticadas. Las &aacute;reas sombreadas en el mapa de "Misma Tendencia" indican lugares donde el pron&oacute;stico de precipitaci&oacute;n estacional del IRI Net Assessment  para el pr&oacute;ximo trimestre muestra una probabilidad mayor de precipitaci&oacute;n sobre lo normal (bajo lo normal) Y donde la precipitaci&oacute;n recibida en el trimestre antes de que el pron&oacute;stico fuera publicado fue mayor que lo normal (menor que lo normal) tambi&eacute;n -- en otras palabras, donde el pron&oacute;stico estacional indica una probabilidad mayor de que las condiciones observadas contin&uacute;en. Este mapa es actualizado todos los meses.
<p>
La informaci&oacute;n que se usa como referencia de observaciones es la precipitaci&oacute;n mensual en grillas del NCEP para 30 a&ntilde;os (1969 a 1998). Las observaciones de los &uacute;ltimos tres meses se basan en los datos mensuales en grilla de CAMS-OPI. En primer lugar, la observaci&oacute;n de lluvias para el trimestre m&aacute;s reciente en cada punto de grilla se ordena en una escala de 0 a 1, con 0 como el evento m&aacute;s seco en los &uacute;ltimos 30 a&ntilde;os para el trimestre en cuesti&oacute;n, y 1.0 como el trimestre m&aacute;s h&uacute;medo. Un valor de 0.333 o menos es considerado seco (bajo lo normal), y un valor de 0.667 o m&aacute;s es considerado h&uacute;medo (sobre lo normal). En segundo lugar, se examina el pron&oacute;stico del pr&oacute;ximo trimestre para el mismo lugar. Un pron&oacute;stico con  una probabilidad de 40% o m&aacute;s para la categor&iacute;a debajo de lo normal se interpreta como un pron&oacute;stico seco, y un pron&oacute;stico con  una probabilidad de 40% o m&aacute;s para la categor&iacute;a sobre  lo normal se interpreta como un pron&oacute;stico h&uacute;medo.
<p>
En base a la observaci&oacute;n y el pron&oacute;stico, se produce un mapa que representa las &aacute;reas con altas probabilidades que contin&uacute;en las condiciones m&aacute;s h&uacute;medas o m&aacute;s secas de lo normal.  En el mapa se indica la posibilidad de la persistencia de las condiciones h&uacute;medas o secas, dependiendo si el pron&oacute;stico de probabilidad es 40-50% (etiquetado "Mayor"), o 55% o m&aacute;s (etiquetado "Mucho Mayor"). Por lo tanto, las &aacute;reas en amarillo claro (verde claro) indican lugares donde la precipitaci&oacute;n en la estaci&oacute;n pasada fue menor que lo normal (mayor que lo normal) y el pron&oacute;stico indica una probabilidad mayor de que contin&uacute;en las condiciones de precipitaci&oacute;n debajo de lo normal (sobre lo normal) en el pr&oacute;ximo trimestre. Las &aacute;reas en amarillo oscuro (verde oscuro) indican lugares donde la precipitaci&oacute;n en la estaci&oacute;n pasada fue menor que lo normal (mayor que lo normal) y el pron&oacute;stico indica una probabilidad mucho mayor de que contin&uacute;en las condiciones de precipitaci&oacute;n debajo de lo normal (sobre lo normal) en el pr&oacute;ximo trimestre.
<p>
Para ver m&aacute;s informaci&oacute;n sobre este an&aacute;lisis, v&eacute;ase las siguientes p&aacute;ginas:  <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&PageID=0&cached=true&mode=2#pic">Predicciones en Contexto</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">p&aacute;gina del Map Room PiC</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">Data Library</a>.
<p>
<p><a name="pic3mo_reversed"><b>Predicciones en Contexto (PiC) del IRI: Tendencia Revertida Entre el Pron&oacute;stico Estacional y las Observaciones de Precipitaci&oacute;n Trimestral</b>
<p>
<div class="rightbox">
<a href="pic3mo_reversed.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.IRI/.Seasonal_Forecast/a:/.pic3mo_reversed/:a:/.forecasttime/:a:/.observationtime/:a/X/Y/fig-+colors+plotlabel+plotlabel+black+thin+countries_gaz+-fig+/F/last/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//framelabel+%28%25=%5Bforecasttime%5D%20Forecast%20Precipitation%20Tendency%20reversed%20from%20Observed%20%25=%5Bobservationtime%5D,%20issued%20%25=%5BF%5D%29+psdef//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El IRI provee una perspectiva clim&aacute;tica en contexto para las regiones del mundo, mostrando una combinaci&oacute;n de precipitaciones observadas y pronosticadas. Las &aacute;reas sombreadas en el mapa de "Tendencia Revertida" indican lugares donde el pron&oacute;stico de precipitaci&oacute;n estacional del IRI Net Assessment  para el pr&oacute;ximo trimestre muestra una probabilidad mayor de precipitaci&oacute;n sobre lo normal (bajo lo normal) Y donde la precipitaci&oacute;n recibida en el trimestre anterior a que el pron&oacute;stico fuera publicado fue menor que lo normal (mayor que lo normal) -- en otras palabras, donde el pron&oacute;stico estacional indica una probabilidad mayor de tendencia opuesta a las condiciones observadas en los &uacute;ltimos tres meses. Este mapa es actualizado todos los meses.
<p>
La informaci&oacute;n que se usa como referencia de observaciones es la precipitaci&oacute;n mensual en grillas del NCEP para 30 a&ntilde;os (1969 a 1998). Las observaciones de los &uacute;ltimos tres meses se basan en los datos mensuales en grilla de CAMS-OPI. En primer lugar, la observaci&oacute;n de lluvias para el trimestre m&aacute;s reciente en cada punto de grilla se ordena en una escala de 0 a 1, con 0 como el evento m&aacute;s seco en los &uacute;ltimos 30 a&ntilde;os para el trimestre en cuesti&oacute;n, y 1.0 como el trimestre m&aacute;s h&uacute;medo. Un valor de 0.333 o menos es considerado seco (bajo lo normal), y un valor de 0.667 o m&aacute;s es considerado h&uacute;medo (sobre lo normal). En segundo lugar, se examina el pron&oacute;stico del pr&oacute;ximo trimestre para el mismo lugar. Un pron&oacute;stico con  una probabilidad de 40% o m&aacute;s para la categor&iacute;a debajo de lo normal se interpreta como un pron&oacute;stico seco, y un pron&oacute;stico con  una probabilidad de 40% o m&aacute;s para la categor&iacute;a sobre  lo normal se interpreta como un pron&oacute;stico h&uacute;medo.
<p>
En base a la observaci&oacute;n y el pron&oacute;stico, se produce un mapa que representa las &aacute;reas con altas probabilidades de tendencias revertidas en comparaci&oacute;n con la precipitaci&oacute;n observada en los tres meses anteriores. Las &aacute;reas en amarillo indican lugares con precipitaciones observadas sobre lo normal, pero con probabilidades mayores de precipitaci&oacute;n debajo de lo normal en el pr&oacute;ximo trimestre. Las &aacute;reas en verde indican lugares con precipitaciones observadas debajo de lo normal en el trimestre anterior, pero con probabilidades mayores de precipitaci&oacute;n sobre lo normal en el trimestre siguiente.
<p>
Para ver m&aacute;s informaci&oacute;n sobre este an&aacute;lisis, v&eacute;ase las siguientes p&aacute;ginas:  <a href="http://portal.iri.columbia.edu/portal/server.pt?open=512&objID=944&PageID=0&cached=true&mode=2#pic">Predicciones en Contexto</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">p&aacute;gina del Map Room PiC</a>, <a href="http://iridl.ldeo.columbia.edu/maproom/.Global/.Forecasts/.PiC/">Data Library</a>.
<p>
<a name="CMAP_climo"><b>Climatolog&iacute;a Mensual del CPC Merged Analysis of Precipitaci&oacute;n (CMAP)</b>
<p>
<div class="rightbox">
<a href="CMAP_climo.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CPC/.Merged_Analysis/.monthly/.v0703/.prcp_est/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/0.5/plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//color_smoothing+null+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Se presentan los valores de precipitaci&oacute;n media mensual de 1979-2004 para proporcionar informaci&oacute;n sobre los totales de precipitaci&oacute;n mensual "normal". Los datos provienen del set de datos de NOAA Climate Prediction Center's Merged Analysis of Precipitation (CMAP), disponibles a una resoluci&oacute;n de 2.5&deg; lat/lon. Los valores de precipitaci&oacute;n del CMAP aqu&iacute; proporcionados son derivados de  una combinaci&oacute;n de observaciones en estaciones meteorol&oacute;gicas y estimaciones satelitales en base a infrarrojos y microondas. Puede encontrar m&aacute;s informaci&oacute;n sobre este data set en la p&aacute;gina siguiente: <a href="http://www.cpc.noaa.gov/products/global_precip/html/wpage.cmap.html">CMAP</a>
<p>
<b>Referencia:</b>  Xie, P. and P. A. Arkin, 1997:  Global precipitation:  A 17-year monthly analysis based on gauge observations, satellite estimates, and numerical model outputs. <i>Bull. Amer. Met. Soc.</i>, <b>78</b>, 2539-2558. 

<p><a name="count"><b>Poblaci&oacute;n Proyectada para el A&ntilde;o 2005 Ajustada por las Naciones Unidas, del CIESIN/SEDAC GPWv3</b>
<p>
<div class="rightbox">
<a href="count.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.GPWv3/.count/X/Y/fig-+colors+black+thin+countries_gaz+-fig+//T/546./plotvalue/X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
Este mapa muestra el n&uacute;mero estimado de personas viviendo en cada una de las grillas de 2.5 minutos de arco proyectado para el a&ntilde;o 2005. Los datos provienen del CIESIN Gridded Population of the World, Version 3 (<a href="http://sedac.ciesin.org/gpw/index.jsp">GPWv3</a>).  Los valores son derivados de estimaciones de oficinas estad&iacute;sticas nacionales y ajustados de acuerdo con estimaciones nacionales de poblaci&oacute;n de las Naciones Unidas. 
Puede encontrar m&aacute;s informaci&oacute;n sobre este set de datos en la siguiente p&aacute;gina:  <a href="http://sedac.ciesin.org/gpw/documentation.jsp">Gridded Population of the World, Version 3</a>.
<p>
<b>Referencia:</b>  Center for International Earth Science Information Network (CIESIN), Columbia University; United Nations Food and Agriculture Programme (FAO); and Centro Internacional de Agricultura Tropical (CIAT). 2005. Gridded Population of the World: Future Estimates (GPWFE). Palisades, NY: Socioeconomic Data and Applications Center (SEDAC), Columbia University. Available at <a href="http://sedac.ciesin.columbia.edu/gpw/">http://sedac.ciesin.columbia.edu/gpw/</a>.

<p><a name="imr"><b>Tasa de Mortalidad Infantil del CIESIN/SEDAC Global Distribution of Poverty, a&ntilde;o 2000</b>
<p>
<div class="rightbox">
<a href="imr.html.es">
<img src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.CIESIN/.Poverty/.imr/X/Y/fig-+colors+black+thin+countries_gaz+-fig+X/178.75/538.75/plotrange/Y/-66.25/76.25/plotrange+//antialias+true+psdef//plotaxislength+250+psdef+.gif">
</a>
</div>
El set de datos del CIESIN/SEDAC Global Distribution of Poverty incluye la tasa de mortalidad infantil como un indicador del nivel de pobreza. Ese mapa muestra la tasa de mortalidad infantil (n&uacute;mero de muertes infantiles por cada 10,000 nacimientos) para cada grilla de 0.25&deg; lat/lon, para el a&ntilde;o 2000.
<p>
Puede encontrar m&aacute;s informaci&oacute;n sobre este indicador de pobreza y el set de datos completo en la siguiente p&aacute;gina:  <a href="http://sedac.ciesin.columbia.edu/povmap/">Global Distribution of Poverty</a>.
<p>
<b>Referencia:</b>  Center for International Earth Science Information Network (CIESIN), Columbia University; 2005 Global subnational infant mortality rates [dataset].  CIESIN, Palisades, NY, USA. Available at: <a href="http://www.ciesin.columbia.edu/povmap/ds_global.html">http://www.ciesin.columbia.edu/povmap/ds_global.html</a>
<p>

Por favor, no dude en <a href="mailto:mbell@iri.columbia.edu">enviarnos un correo electr&oacute;nico</a> con sus preguntas o comentarios.  

<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
 <!-- hhmts start -->Last modified: Wed Feb 29 11:30:34 EST 2011 <!-- hhmts end -->
</body>
</html>
