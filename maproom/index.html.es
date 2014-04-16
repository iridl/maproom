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
      <title>IRI Map Room</title>
      <link rel="stylesheet" type="text/css" href="../uicore/uicore.css" />
      <link class="carryLanguage" rel="home" href="http://iri.columbia.edu/" title="IRI" />
      <link class="carryLanguage" rel="home alternate" type="application/json"
            href="/maproom/navmenu.json" />
      <link class="altLanguage" rel="alternate" hreflang="en"
            href="index.html?Set-Language=en" />
      <link class="altLanguage" rel="alternate" hreflang="fr"
            href="index.html?Set-Language=fr" />
      <link class="altLanguage" rel="alternate" hreflang="id"
            href="index.html?Set-Language=id" />
      <link class="altLanguage" rel="alternate" hreflang="ru"
            href="index.html?Set-Language=ru" />
      <link rel="canonical" href="index.html" />
      <link rel="term:isDescribedBy"
            href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate" />
      <link rel="term:isDescribedBy"
            href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#forecast" /><script type="text/javascript" src="../uicore/uicore.js" xml:space="preserve"></script></head>
   <body>
      
      
      <form name="pageform" id="pageform" method="get"
            enctype="application/x-www-form-urlencoded">
         <input class="carryLanguage" name="Set-Language" type="hidden" />
         <input class="titleLink itemImage" name="bbox" type="hidden" />
         
      </form>
      
      <div class="controlBar">
         
         <fieldset class="navitem">
            
            <legend>IRI/LDEO</legend> 
            <a rev="section" class="navlink carryup" href="/" shape="rect">Climate Data Library</a>
            
         </fieldset> 
         
         <fieldset class="navitem"> 
            
            <legend>Data Library</legend> 
            <span class="navtext">Maproom</span>
            
            
         </fieldset> 
         
         <fieldset class="navitem"> 
            
            <legend>Región</legend>
            <a class="carryLanguage" rel="iridl:hasJSON" href="/maproom/globalregions.json"
               shape="rect"></a>
            		<select class="RegionMenu" name="bbox">
               <option value="">Global</option>
               <optgroup class="template" label="Región">
                  <option class="irigaz:hasPart irigaz:id@value term:label"></option>
               </optgroup></select>
            
         </fieldset>
         
      </div>
      
      <div>
         
         <div id="content" class="searchDescription">
            
            <h2 property="term:title">IRI Clima y la Sociedad Maproom</h2>
            
            <p align="left" property="term:description">
               El clima y la sociedad maproom es una colección de mapas y otras figuras que vigilar el clima y las condiciones sociales en
               la actualidad y en El pasado reciente. Los mapas y las cifras pueden ser manipuladas y están vinculados a los datos originales.
               Incluso si usted está interesado principalmente en datos en lugar de cifras, este es un buen lugar para ver qué conjuntos
               de datos son particularmente útiles para vigilar las condiciones actuales.
            </p>
            
         </div>
         
         
         <div xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:maproomregistry="http://iridl.ldeo.columbia.edu/maproom/maproomregistry.owl#"
              xmlns:xs="http://www.w3.org/2001/XMLSchema"
              xmlns:vocab="http://www.w3.org/1999/xhtml/vocab#"
              xmlns:iriterms="http://iridl.ldeo.columbia.edu/ontologies/iriterms.owl#"
              class="rightcol">
            <div class="ui-tabs">
               <ul class="ui-tabs-nav"></ul>
               <div class="ui-tabs-panel">
                  <div class="item">
                     <div class="itemTitle"><a class="carry titleLink" href="Global/index.html">Climate: Analysis, Monitoring and Forecasts</a></div>
                     <div class="itemIcon"><a class="carry titleLink" href="Global/index.html"><img class="itemImage"
                                src="http://iridl.ldeo.columbia.edu/expert/ds:/SOURCES/.NOAA/.NCEP/.CPC/.GLOBAL/.monthly/.olr/X/Y/1/SM121/DATA/10/STEP/Y/%2822S%29%2822N%29RANGE//name//tropical_OLR/def/SOURCES/.NOAA/.NCEP/.CPC/.GLOBAL/.monthly/.olr/X/Y/1/SM121/DATA/10/STEP//name//global_OLR/def/:ds/a-+.tropical_OLR+startcolormap+DATA+120+300+RANGE+5+130+5+RGB+RGBdup+120+VALUE+5+130+5+RGB+RGBdup+170+VALUE+10+150+15+RGB+RGBdup+180+VALUE+20+170+25+RGB+RGBdup+190+VALUE+45+180+50+RGB+RGBdup+200+VALUE+70+190+75+RGB+RGBdup+210+VALUE+110+210+115+RGB+RGBdup+220+VALUE+150+230+155+RGB+RGBdup+230+VALUE+170+242+175+RGB+RGBdup+240+VALUE+211+211+211+RGB+RGBdup+250+VALUE+255+255+255+RGB+300+VALUE+white+endcolormap+-a-+.global_OLR+-a+X+Y+fig:+colors+grey+unlabelledcontours+black+thin+solid+coasts+countries+:fig+/T/last/plotvalue/X/-20/340/plotrange/Y/-65/75/plotrange//plotborder+0+psdef//antialias+true+psdef//plotaxislength+220+psdef//XOVY+null+psdef+.gif" /></a></div>
                     <div class="itemDescription">Historical, current, and future climate conditions around the globe.</div>
                     <div class="itemFooter"></div>
                  </div>
                  <div class="item">
                     <div class="itemTitle"><a class="carryLanguage carry titleLink" href="IFRC/index.html">La Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja: Predicciones en Contexto</a></div>
                     <div class="itemIcon"><a class="carryLanguage carry titleLink" href="IFRC/index.html"><img class="itemImage"
                                src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.MD/.IFRC/.ESRL/.PSD/.reforecast2/.ensemble_mean/.analyses/.tot6day/.apcp/X+Y+fig:+colors+thin+solid+countries_gaz+:fig+//apcp/0/400/plotrange/S/last/plotvalue/X/178.75/538.75/plotrange//color_smoothing+null+psdef//XOVY+null+psdef//antialias/true/psdef//plotborder+0+psdef//plotaxislength+220+psdef+.gif" /></a></div>
                     <div class="itemDescription">Esta colección de mapas provee información que puede ser utilizado para tomar decisiones humanitarias a cualquier parte del
                        mundo. Esta colección fue creada por el IRI y la FICR. También provee información de acciónes tempranas que puede hacer basada
                        de los mapas.
                     </div>
                     <div class="itemFooter"></div>
                  </div>
                  <div class="item">
                     <div class="itemTitle"><a class="carry titleLink" href="ENSO/index.html">El Niño, La Niña and the Southern Oscillation</a></div>
                     <div class="itemIcon"><a class="carry titleLink" href="ENSO/index.html"><img class="itemImage"
                                src="http://iridl.ldeo.columbia.edu/expert/filters/.NINO/SOURCES/.Indices/.india/.rainfall/T/first/%281870%29RANGE/SOURCES/.IITM/.All_India/.Rainfall/.PCPN/T/%28Jun%201871%29last/RANGE/T/4/boxAverage/4/mul/T/12/STEP/appendstream%5BT%5DREORDER/dup/mean/sub/SOURCES/.KAPLAN/.EXTENDED/.v2/.ssta/NINO3/T/%28Oct%201856%29last/RANGE/T/4/boxAverage/T/12/STEP/T/-4/shiftGRID/2/T/1/MATCH/correlationcolorscale/DATA/-2.5/2.5/RANGE/T+fig-+colorbars2+thin+grey+dotted+-200+50+150+horizontallines++|+colorbars2+-fig+//rainfall/-241.5632/174.4369/plotrange//NINO3/-3/3/plotrange/T/-1243./last/plotrange+//plotaxislength+220+psdef//XOVY+null+psdef//plotborder+0+psdef+.gif" /></a></div>
                     <div class="itemDescription">"ENSO" refers to the El Niño/Southern Oscillation, the interaction between the atmosphere and ocean in the tropical Pacific
                        that results in a somewhat periodic variation between between below-normal and above-normal sea surface temperatures and dry
                        and wet conditions over the course of a few years.
                     </div>
                     <div class="itemFooter"></div>
                  </div>
                  <div class="item">
                     <div class="itemTitle"><a class="carryLanguage carry titleLink" href="Health/index.html">Clima y Salud</a></div>
                     <div class="itemIcon"><a class="carryLanguage carry titleLink" href="Health/index.html"><img class="itemImage"
                                src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.Analyses/.CSMT/.Annual_Sum/X/Y/fig-+colors+grey+verythin+mews_prov+black+thin+countries_gaz+-fig//antialias+true+psdef///plotborder+0+psdef//plotaxislength+150+psdef+.gif" /></a></div>
                     <div class="itemDescription">El clima afecta a la salud en diferentes formas. Estos efectos pueden ser directos, como con el estrés por calor, o indirectos,
                        como las enfermedades infecciosas tales como la malaria y meningitis.
                     </div>
                     <div class="itemFooter"></div>
                  </div>
                  <div class="item">
                     <div class="itemTitle"><a class="carryLanguage carry titleLink" href="Food_Security/index.html">Food Security</a></div>
                     <div class="itemIcon"><a class="carryLanguage carry titleLink" href="Food_Security/index.html"><img class="itemImage"
                                src="http://iridl.ldeo.columbia.edu/SOURCES/.NOAA/.NCEP/.CPC/.CMORPH/.daily_calculated/.mean/.morphed/.cmorph/24/mul//units/%28mm%29def/X/-20.0/95.0/RANGEEDGES/Y/-4.0/40.0/RANGEEDGES/cmorph_tool_colors/X/Y/fig-/colors/black/thin/countries_gaz/-fig//T/3654.5/plotvalue//antialias/true/psdef//plotaxislength/200/psdef//plotborder/0/psdef/+.gif" /></a></div>
                     <div class="itemDescription">Climate may affect food security directly or indirectly.</div>
                     <div class="itemFooter"></div>
                  </div>
                  <div class="item">
                     <div class="itemTitle"><a class="carry titleLink" href="Agriculture/index.html">Climate and Agriculture</a></div>
                     <div class="itemIcon"><a class="carry titleLink" href="Agriculture/index.html"><img class="itemImage"
                                src="http://iridl.ldeo.columbia.edu/expert/SOURCES/.IMD/.HRDGT/.v1p0%5B%28Jan%29//seasonStart/parameter/%28-%29%28Mar%29//seasonEnd/parameter%5Dconcat//season/parameter%5B%28.%29%28tmax%29//var1/parameter%5Dconcat//var/parameter/interp/X/66.0/98.0/RANGEEDGES/Y/6.0/38.0/RANGEEDGES//season/get_parameter/30.0/1.0/%28seasonalfreqGT%29//freqGTLT/parameter/interp/T//season/get_parameter/VALUES%5BT%5D0.75/percentileover/%7BCool/0.33333/Normal/0.66667/Warm%7Dclassify/SOURCES/.Indices/.nino/.EXTENDED/.NINO34/T/%28Jan%201969%29%28Dec%202005%29RANGE/T//season/get_parameter/1.0/seasonalAverage/T//season/get_parameter/VALUES%5BT%5D0.0/percentileover/%7BLaNina/0.25/Neutral/0.75/ElNino%7Dclassify/1/masklt/mul%5BT%5Daverage/NINO34//ENSO/renameGRID/aprod//Tercile/renameGRID/tercileclassesscale/DATA/0/1/RANGE/ENSO/%28LaNina%29//ensoState/parameter/VALUE//ENSO/removeGRID/Tercile/%28Cool%29//tercile/parameter/VALUE//Tercile/removeGRID/X/Y/fig-/colors/coasts_gaz/thin/countries_gaz/verythin/admin1_india/-fig//plotaxislength/220/psdef//plotborder/0/psdef//antialias/true/psdef/+.gif" /></a></div>
                     <div class="itemDescription">The variability of seasonal temperature and precipitation and the sub-seasonal statistics of these and other climate variables
                        play a key role in the quality and quantity of agricultural output. This map room includes maps and analyses of seasonal statistics
                        of historical temperature and precipitation, seasonal temperature and precipitation forecasts, and GCM skill maps for regions
                        of Asia and South America, and a map of farming systems in Africa.
                     </div>
                     <div class="itemFooter"></div>
                  </div>
                  <div class="item">
                     <div class="itemTitle"><a class="carry titleLink" href="Fire/index.html">Climate and Fire</a></div>
                     <div class="itemIcon"><a class="carry titleLink" href="Fire/index.html"><img class="itemImage"
                                src="http://iridl.ldeo.columbia.edu/SOURCES/.IRI/.Analyses/.Locust/.CMORPH/.dekadsum/X/90./155./RANGEEDGES/Y/-12.5/9.5/RANGEEDGES/X/Y/fig-+colors+grey+verythin+indonesia_prov+black+thin+countries_gaz+-fig+//T/1795./plotvalue+//antialias+true+psdef/+//dekadsum/0/300/plotrange//T/1795./plotvalue//plotaxislength+220+psdef//plotborder+0+psdef//XOVY+null+psdef+.jpg" /></a></div>
                     <div class="itemDescription">The Climate and Fire Map Room includes two tools that can support a robust fire early warning system in Indonesia. The Indonesia
                        Rainfall Analysis Tool provides maps and time series of recent rainfall in Indonesia and a fire risk map for Kapuas district
                        in Central Kalimantan. The Predictive Tool for Fire Activity offers experimental forecasts of the likelihood of fire activity
                        1-2 months in advance in Kalimantan, Indonesia.
                     </div>
                     <div class="itemFooter"></div>
                  </div>
               </div>
            </div>
         </div>
         
         
      </div>
      
      <div class="optionsBar">
         
         <fieldset class="navitem" id="share">
            <legend>Share</legend>
            
            
         </fieldset>
         
      </div>
      
   </body>
</html>