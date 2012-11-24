<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://iridl.ldeo.columbia.edu/ontologies/xhtml1/DTD/xhtml1-transitional.dtd">
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
<title>MODIS Analysis Tool</title>
<script type="text/javascript" src="../../../../../../uicore/uicore.js"></script>
<link rel="stylesheet" type="text/css" href="../../../../../../uicore/uicore.css" />
<link class="altLanguage" rel="alternate" hreflang="en" href="index.html?Set-Language=en" />
<link class="altLanguage" rel="alternate" hreflang="fr" href="index.html?Set-Language=fr" />
<link rel="canonical" href="index.html" />
<meta property="maproom:Entry_Id" content="Health_Regional_Africa_Malaria_MODIS" />
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
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#sixteen-day"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#interactive"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#health"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#climate"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#NDVI"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#LandSurface"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Epidemic_Malaria"/>
  <link rel="term:isDescribedBy" href="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Africa"/>
<link rel="term:icon" href="http://iri.columbia.edu/~mbell/icons/Health-Regional-Africa-NDVI-icon.jpg" />
<style>
.dlimgtsbox { 
width: 49%;
display: inline-block
 }
body.varreflectance img.dlauximg{display: none}
body.varreflectance .regionwithinbbox{display: none !important}
</style>
</head>
<body xml:lang="es">
<form name="pageform" id="pageform" class="info carryup carry share dlimg dlauximg dlimgts dlimgloc">
<input class="carryup carry" name="Set-Language" type="hidden" />
<input class="dlimg share dlimgloc carry" name="bbox" type="hidden" />
<input class="dlimg dlauximg dlimgts share dlimgloc carry justsregion" name="sregion" type="hidden" value=".WAF" />
<input class="dlimg dlauximg dlimgts share dlimgloc carry justsregion bodyClass" name="var" type="hidden" value="NDVI" />
<input class="share dlimgts dlimgloc" name="region" type="hidden" />
<input class="unused" name="plotaxislength" type="hidden" value="432" />
<input class="pickarea" name="resolution" type="hidden" value=".5" />
</form>
<div class="controlBar">
           <fieldset class="navitem" id="toSectionList"> 
                <legend>Climate and Health</legend> 
                      <a rev="section" class="navlink carryup" href="/maproom/Health/Regional/Africa/Malaria/">Malaria</a>
            </fieldset> 
            <fieldset class="navitem" id="chooseSection"> 
                <legend about="http://iridl.ldeo.columbia.edu/ontologies/iridl.owl#Epidemic_Malaria"><span property="term:label">Malaria Epidémica</span></legend>
            </fieldset> 
            <fieldset class="navitem"> 
                <legend>Region</legend> 
                <select class="pageformcopy" name="sregion">
                 <option value=".WAF">West Africa</option>
                   <option value=".EAF">East Africa</option>
                   <option value=".SAF">Southern Africa</option>
                    </select>
            </fieldset>
            <fieldset class="navitem"> 
                <legend>Variable</legend> 
                <select class="pageformcopy" name="var">
                 <option value="NDVI">NDVI</option>
                   <option value="EVI">EVI</option>
                   <option value="reflectance">reflectance</option>
                    </select>
            </fieldset>
 <fieldset class="navitem"><legend>Spatially Average Over</legend><span class="selectvalue"></span><select class="pageformcopy" name="resolution">
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
      <li><a href="#tabs-1" >Description</a></li>
      <li><a href="#tabs-2" >Dataset Documentation</a></li>
      <li><a href="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.LandDAAC/.MODIS/.version_005/">Dataset</a></li>
      <li><a href="#tabs-4" >Contact Us</a></li>
    </ul>
<fieldset class="regionwithinbbox dlimage" about="">
<img class="dlimgloc" src="http://iridl.ldeo.columbia.edu/SOURCES/.WORLDBATH/.bath/X/Y/%28bb:-20%2C-40%2C55%2C40%29//bbox/parameter/geoobject/geoboundingbox/BOXEDGES/%28bb:-20%2C-40%2C-20%2C-40%29dup//region/parameter/dup//bbox/get_parameter/eq/%7Bpop%7D%7Bnip%7Difelse/geoobject/2/copy/rasterize/Y/cosd/mul/X/1/index%5BX/Y%5Dweighted-average/exch/Y/exch%5BX/Y%5Dweighted-average/X/Y/fig-/lightgrey/mask/grey/mews_prov/black/countries_gaz/red/fill/red/smallpushpins/-fig//plotbordertop/8/psdef//antialias/true/psdef//plotaxislength/120/psdef//plotborder/0/psdef//plotborderleft/8/psdef//plotborderright/8/psdef//plotborderbottom/8/psdef/+.gif" />
<div style="display: inline-block; text-align: top;">
<a class="dlimgts" rel="iridl:hasJSON" href="http://iridl.ldeo.columbia.edu/expert/%28bb:1:2:3:4:bb%29//region/parameter/geoobject/info.json"></a>
<div class="template">
Observations for <span class="bold iridl:long_name"></span>
</div>
</div>
<br />
<div class="dlimgtsbox">
<div>a)</div>
<img class="dlimgts" src="http://iridl.ldeo.columbia.edu/home/.jdcorral/.Analyses/%28NDVI%29//var/parameter/interp/%28.WAF%29//sregion/parameter/interp/T/last/365/sub/last/RANGEEDGES/%28bb:%5B17%2C4.50%2C17.5%2C5%5D%29//region/parameter/geoobject%5BX/Y%5Dweighted-average/toNaN%5BT%5DREORDER/CopyStream/T/fig:/line/:fig//plotborder/72/psdef//plotbordertop/15/psdef//plotborderbottom/62/psdef//plotaxislength/250/psdef//XOVY/null/psdef/+.gif" />
</div>
<div class="dlimgtsbox">
<div>b)</div>
<img class="dlimgts" src="http://iridl.ldeo.columbia.edu/home/.jdcorral/.Analyses/%28NDVI%29//var/parameter/interp/%28.WAF%29//sregion/parameter/interp/%28bb:%5B17%2C4.50%2C17.5%2C5%5D%29//region/parameter/geoobject%5BX/Y%5Dweighted-average/DATA/0.0/1.0/RANGE/T/exch/T/dup/dup/yearlyedgesgrid/1/index/boundinggrids/pop/.gridvalues/constantdata/sub/1/add/toi4//name//doy/def//long_name/%28Day%20of%20the%20Year%29def//units/%28days%20since%202007-01-01%29def//modulus/365./def/exch/1/index/1/index/T/%282007%29VALUES//fullname/%282007%29def/3/index/3/index/T/%282008%29VALUES//fullname/%282008%29def/5/index/5/index/T/%282009%29VALUES//fullname/%282009%29def/7/index/7/index/T/%282010%29VALUES//fullname/%282010%29def/9/index/9/index/T/%282011%29VALUES//fullname/%282011%29def/11/index/11/index/T/%282012%29VALUES//fullname/%282012%29def/CopyStream/fig:/green/solid/scatterline/red/solid/scatterline/gray/solid/scatterline/magenta/solid/scatterline/blue/scatterline/black/medium/solid/scatterline/:fig/+//doy/9./359./plotrange//var/get_parameter/-0.2/1./plotrange//doy/9./359./plotrange//var/get_parameter/-0.2/1./plotrange+//plotborder+62+psdef//XOVY+null+psdef//plotaxislength+250+psdef//antialias+true+psdef+.gif" />
</div>
<p>
a) 16 day estimates for the selected region for the last 12 months.  
</p> <p>
b) Same as (a) for the current year (thick black line), as indicated by the axis labels. Estimates from previous years are also shown
</p>
</fieldset>
<fieldset class="dlimage">
<a class="justsregion" rel="iridl:hasFigure" href="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.LandDAAC/.MODIS/.version_005/%28.WAF%29//sregion/parameter/interp/%28NDVI%29//var/parameter/interp/nip/X/Y/fig-//var/get_parameter/%28reflectance%29eq/%7Brgbcolor%7D%7Bcolors%7Difelse/lightgrey/verythin/mews_prov/black/thin/countries_gaz/-fig//T/last/plotvalue/Y/low/high/plotrange//antialias/true/psdef/"></a>
<img class="dlimg" src="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.LandDAAC/.MODIS/.version_005/%28.WAF%29//sregion/parameter/interp/%28NDVI%29//var/parameter/interp/nip/X/Y/fig-//var/get_parameter/%28reflectance%29eq/%7Brgbcolor%7D%7Bcolors%7Difelse/lightgrey/verythin/mews_prov/black/thin/countries_gaz/-fig//T/last/plotvalue/Y/low/high/plotrange//antialias/true/psdef/+.gif" border="0" />
<img class="dlauximg" src="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.LandDAAC/.MODIS/.version_005/%28.WAF%29//sregion/parameter/interp/%28NDVI%29//var/parameter/interp/nip/X/Y/fig-//var/get_parameter/%28.reflectance%29eq/%7Brgbcolor%7D%7Bcolors%7Difelse/lightgrey/verythin/mews_prov/black/thin/countries_gaz/-fig//T/last/plotvalue/Y/low/high/plotrange/.auxfig+//T/3567.0/plotvalue/Y/-9.5446024E-04/39.99889/plotrange+//plotaxislength+432+psdef//plotborder+72+psdef+.gif" />
</fieldset>
 <div id="tabs-1" class="ui-tabs-panel" about="">
 <h2 align="center" property="term:title">MODIS Analysis Tool</h2>
  <p align="left" property="term:description">A regional tool that facilitates access to estimates of vegetation from MODIS images provided by the United States Geological Survey. Images are available for West Africa, East Africa, and Southern Africa.  
</p><p>An interactive map of the Normalized Difference Vegetation Index (NDVI), Enhanced Vegetation Index (EVI), and reflectance constructed from the middle infrared, near infrared and red channels for West Africa, East Africa, and Southern Africa. Time series analyses of NDVI,EVI, and reflectance are generated based on user-selected parameters.
</p>
</div>
<div id="tabs-2" class="ui-tabs-panel">
<h2  align="center">Dataset Documentation</h2>
<h4>Vegatation Estimates</h4>
<dl class="datasetdocumentation">
<dt>Data</dt>
<dd>16 day estimates on a 250m lat/lon grid</dd>
<dt>Data Source</dt><dd> United States Geological Survey, Land Processes Distributed Active Archive Center, 
Moderate Resolution Imaging Spectroradiometer 
(<a href="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.LandDAAC/.MODIS/.version_005/.dataset_documentation.html">USGS LandDAAC MODIS</a>)</dd>
<b>Note</b>:&nbsp;&nbsp;There is typically a 12- to 16-day delay between the end of the observation period for the latest data and the date when those data are received and displayed on this page.
</dl>
</div>
<div class="ui-tabs-panel-hidden">
<h2 align="center">Dataset</h2>
<p>
<a href="http://iridl.ldeo.columbia.edu/SOURCES/.USGS/.LandDAAC/.MODIS/.version_005/">Access the dataset used to create this map.</a>
</p>
</div>
<div id="tabs-4"  class="ui-tabs-panel">
<h2  align="center">Helpdesks</h2>
<p>
Contact <a href="mailto:help@iri.columbia.edu?subject=Maproom">help@iri.columbia.edu</a> with any technical questions or problems with this Map Room, for example, the forecasts not displaying or updating properly.
 </p>
</div>
</div>
<div class="optionsBar">
            <fieldset class="navitem" id="share"><legend>Share</legend></fieldset>
</div>
 </body>
 </html>
