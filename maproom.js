
window.$ = {};
$.ready = function(fn) {
  if (document.readyState == "complete")
      return fn();

  if (window.addEventListener) {
      window.addEventListener("DOMContentLoaded", fn, false);
      window.addEventListener("load", fn, false);
}
  else if (window.attachEvent)
      window.attachEvent("onload", fn);
  else
      window.onload = fn;
}
var maproomroot = document.location.href.substr(0,document.location.href.indexOf('/maproom/')+9);
function localHrefOf(ghref){
var lhref;
var ifmap  = ghref.indexOf('/maproom/');
if(ifmap > -1){
var maproomurl = ghref.substr(0,ifmap+9);
lhref = maproomroot + ghref.substr(maproomurl.length);
}
else {
lhref= ghref;
}
return lhref;
}
function domapsel(){
it=document.getElementById('mapselect');
it.parentNode.getElementsByTagName('legend')[0].innerHTML=it.options[it.selectedIndex].parentNode.label;
it.previousSibling.innerHTML=it.options[it.selectedIndex].innerHTML;

var opt=it.options[it.selectedIndex];
var fullpathname = document.location.href;
if(fullpathname.indexOf("?")>= 0){
fullpathname = fullpathname.substring(0,fullpathname.indexOf("?"));
}
if(fullpathname.indexOf("#")>= 0){
fullpathname = fullpathname.substring(0,fullpathname.indexOf("#"));
}
if (it.hrefroot + opt.value != fullpathname){
callPageForm(it.hrefroot + opt.value,"carry");
}
}
function tabclick(it){
    var mylist=it.parentNode.getElementsByClassName("ui-state-active");
    for (var i= 0; i<mylist.length; i++){
	var sid = mylist[i].children[0].hash.substr(1);
        document.getElementById(sid).className="ui-tabs-panel-hidden";
	mylist[i].className="ui-state-default";
    }
    it.className="ui-state-active";
	var sid = it.children[0].hash.substr(1);
        document.getElementById(sid).className="ui-tabs-panel";
    return false;
}
function limitclickevent(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
   var myinput = it.parentNode.getElementsByTagName('input')[0];
	myinput.value=it.innerHTML;
 }
function stepupclickevent(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
   var myinput = it.parentNode.getElementsByTagName('input')[0];
	var cin = it.parentNode.info['iridl:gridvalues'].indexOf(myinput.value);
	if(cin < it.parentNode.info['iridl:gridvalues'].length-1) {
	myinput.value = it.parentNode.info['iridl:gridvalues'][cin+1];
	}
 }
function stepdownclickevent(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
   var myinput = it.parentNode.getElementsByTagName('input')[0];
	var cin = it.parentNode.info['iridl:gridvalues'].indexOf(myinput.value);
	if(cin >0) {
	myinput.value = it.parentNode.info['iridl:gridvalues'][cin-1];
	}
 }
function tabclickevent(evt){
    evt = (evt) ? evt : ((event) ? event : null );
    it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
    var mylist=it.parentNode.getElementsByClassName("ui-state-active");
    for (var i= 0; i<mylist.length; i++){
	var sid = mylist[i].children[0].hash.substr(1);
        document.getElementById(sid).className="ui-tabs-panel-hidden";
	mylist[i].className="ui-state-default";
    }
    it.className="ui-state-active";
	var sid = it.children[0].hash.substr(1);
	if(sid){
        document.getElementById(sid).className="ui-tabs-panel";
	}
	else {
	location.href= it.children[0].href;
	}
        if(document.width < 750){
	location.href= it.children[0].href;
	}
    return false;
}
function tabtarget(evt){
	var ret = (document.width < 750);
	evt = (evt) ? evt : ((event) ? event : null );
	if (evt) {
	if(ret){
	 if(evt.returnValue){
	evt.returnValue="false";
	}
	}
	}
    return(ret);
}
function tabsSetup(){
    var mylist=document.getElementsByClassName("ui-tabs");
    for (var i= 0; i<mylist.length; i++){
	var tabset=mylist[i];
	var tablist=tabset.getElementsByTagName("ul")[0].getElementsByTagName("li");
	for (var j=0; j<tablist.length; j++){
	var atab=tablist[j];
	if(!atab.children[0].onclick) {
        atab.onclick=tabclickevent;
	if(j != 0){
        atab.className='ui-state-default';
        var sid = atab.children[0].hash.substr(1);
	if(sid){
        document.getElementById(sid).className="ui-tabs-panel-hidden";
	}
	}
	else {
        atab.className='ui-state-active';
        var sid = atab.children[0].hash.substr(1);
	if(sid){
        document.getElementById(sid).className="ui-tabs-panel";
	}
	}
        atab.children[0].onclick=tabtarget;
	}
	}
	}
}
function insertshare(){
var s = document.getElementById('share');
var sl = s.getElementsByTagName('legend');
if(!sl.length){
var ls=document.createElement('legend');
ls.appendChild(document.createTextNode('Share'));
s.insertBefore(ls,s.firstChild);
}
sl = document.getElementById('googleplus');
if(!sl){
var gb= document.createElement('div');
gb.className='sharebutton';
gb.id='googleplus';
gb.innerHTML='<div class="g-plusone" data-count="false" ></div>';
s.appendChild(gb);
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var sc = document.getElementsByTagName('script')[0]; 
    sc.parentNode.insertBefore(po, sc);
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = "http://static.evernote.com/noteit.js";
s.appendChild(ga);
var gb= document.createElement('div');
gb.className='sharebutton';
gb.id='evernote';
gb.innerHTML='<a href="#" onclick="Evernote.doClip({contentId:' + "'content'" + '}); return false;"><img src="http://static.evernote.com/site-mem-22.png" alt="Clip to Evernote" border="0"/></a>';
s.appendChild(gb);
}
}
function readwithiframe(slhref,s,readfn){
var iframe=document.getElementById('sectioniframe');
if(!iframe) {
iframe = document.createElement('iframe');
iframe.id='sectioniframe';
iframe.style.display="none";
iframe.onload = readfn;
s.appendChild(iframe);
}
iframe.src=slhref;
}
function getXMLhttp(){
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
return xmlhttp;
}
function readwithxmlhttp(slhref,sel){
var xmlhttp=getXMLhttp();
xmlhttp.mysel=sel;
xmlhttp.onreadystatechange = function() {
if(xmlhttp.readyState == 4){
var xmlDoc=xmlhttp.responseXML;
if(!xmlDoc){
parser= new DOMParser();
xmlDoc=parser.parseFromString(xmlhttp.responseText,"text/xml");
}
dofinishchooseSection(xmlhttp.mysel,xmlDoc);
}
};
xmlhttp.open("GET",slhref,true);
xmlhttp.send();
}
      function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue){
      var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
      var arrReturnElements = new Array();
      var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
      var oCurrent;
      var oAttribute;
      for(var i=0; i<arrElements.length; i++){
      oCurrent = arrElements[i];
      oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
      if(typeof oAttribute == "string" && oAttribute.length > 0){
      if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))){
      arrReturnElements.push(oCurrent);
      }
      }
      }
      return arrReturnElements;
      }
function insertchooseSection(){
var s=document.getElementById('chooseSection');
var sl=document.getElementById('toSectionList');
if (s && sl){
var sels=s.getElementsByTagName('select');
if(sels.length < 1){
var sel=document.createElement('span');
sel.className='selectvalue';
sel.innerHTML=getElementsByAttribute(document,'*','property','term:title')[0].innerHTML;
s.appendChild(sel);
sel=document.createElement('select');
sel.name="mapsel";
sel.onchange=domapsel;
sel.id='mapselect';
var slhref=sl.getElementsByTagName('a')[0].href;
slhref=addLanguageVar(localHrefOf(slhref));
s.appendChild(sel);
if(slhref){
var lin = slhref.lastIndexOf('/');
if(lin){
sel.hrefroot=slhref.substr(0,lin+1);
}else {
sel.hrefroot=slhref;
}
readwithxmlhttp(slhref,sel);
}
}
}
}
function finishchooseSectioniframe(){
var iframe=document.getElementById('sectioniframe');
var sel=document.getElementById('mapselect');

var xmlDoc = iframe.contentDocument;
dofinishchooseSection(sel,xmlDoc);
}
function dofinishchooseSection(sel,xmlDoc){
if(xmlDoc){
var itemlist=xmlDoc.getElementsByClassName('item');
var og=sel;
for (var i = 0; i<itemlist.length ; i++){
var item=itemlist[i];
if(item.previousSibling.previousSibling.className == 'itemGroup'){
og=document.createElement('optgroup');
og.label=item.previousSibling.previousSibling.innerHTML;
sel.appendChild(og);
}
var opt= new Option(
item.firstChild.firstChild.innerHTML,
item.firstChild.firstChild.getAttribute('href'),false,
false
);
var fullpathname = document.location.href;
if(fullpathname.indexOf("?") >=0){
fullpathname = fullpathname.substring(0,fullpathname.indexOf("?"));
}
if(fullpathname.indexOf("#") >= 0){
fullpathname = fullpathname.substring(0,fullpathname.indexOf("#"));
}
if (sel.hrefroot + opt.value == fullpathname){
opt.selected=true;
}
og.appendChild(opt);
}
if(typeof(sel.selectedIndex) === 'number'){
sel.parentNode.getElementsByTagName('legend')[0].innerHTML=sel.options[sel.selectedIndex].parentNode.label;
sel.previousSibling.innerHTML=sel.options[sel.selectedIndex].innerHTML;
}

}
else alert("cannot parse")
}
function insertRegion(){
    var theregion=document.getElementById("chooseRegion");
if(theregion){
var sel=theregion.getElementsByTagName('select');
if (sel.length == 0){
sel=document.createElement('span');
sel.className='selectvalue';
sel.innerHTML='Global';
theregion.appendChild(sel);
sel=document.createElement('select');
sel.size=1;
sel.name="forecastRegion";
sel.innerHTML='<optgroup label="Region"><option value="Afr">Africa</option><option value="Asi">Asia</option><option value="Aus">Australia</option><option value="Eur">Europe</option><option value="MEa">Middle East</option><option value="NAm">North America</option><option value="Pac">Pacific Islands</option><option value="SAm">South America</option><option value="World" selected="selected">Global</option></optgroup>';
theregion.appendChild(sel);
}
}
}
function initializeDLimage(){
    var mylist=document.getElementsByClassName("dlimage");
for( var i=0 ; i < mylist.length ; i++){
var s = mylist[0];
var sl = s.getElementsByTagName('legend');
var leg;
if(!sl.length){
leg=document.createElement('legend');
leg.innerHTML='<object class="dlimageswitch" data="' + maproomroot + 'icons/onoff.svg" type="image/svg+xml" width="13" height="13"><img class="dlimageswitch" src="'+ maproomroot + 'icons/onoff.png" width="13" height="13" border="0" hspace="2" vspace="2" /></object><img class="dlimagecontrol" src="http://iridl.ldeo.columbia.edu/icons/RedrawButton.jpg" title="Redraw" width="13" height="13" border="0" hspace="2" vspace="2" /><img class="dlimagecontrol" src="http://iridl.ldeo.columbia.edu/icons/ZoomButton.jpg" title="Zoom Out" width="13" height="13" border="0" hspace="2" vspace="2" /><img  class="dlimagecontrol" src="http://iridl.ldeo.columbia.edu/icons/HelpButton.jpg" title="Help" width="13" height="13" border="0" hspace="2" vspace="2" />'
s.insertBefore(leg,s.firstChild);
}
else {
leg=sl[0];
}
var sfigs=s.getElementsByTagName('link');
if(sfigs.length && sfigs[0].rel=='iridl:hasFigure'){
if(!sfigs[0].info){
sfigs[0].info="seeking";
var figurl=sfigs[0].href;
var infourl=figurl + 'info.json';
var xmlhttp= getXMLhttp();
xmlhttp.mylink=sfigs[0];
var imglist=s.getElementsByTagName('img');
for (var i = 0; i<imglist.length; i++){
if(imglist[i].className == 'dlimg'){
xmlhttp.mylink.figureimage=imglist[i];
break;
}
}
xmlhttp.onreadystatechange = function() {
if(xmlhttp.readyState == 4){
var jsontxt = xmlhttp.responseText;
xmlhttp.mylink.info=JSON.parse(jsontxt);
/* info now has figure information */
/* for (x in xmlhttp.mylink.info){
alert(x + " is " + JSON.stringify(xmlhttp.mylink.info[x]));
} */
DLimageBuildControls(xmlhttp.mylink);
}
};
xmlhttp.open("GET",infourl,true);
xmlhttp.send();
DLimageResizeImage(xmlhttp.mylink);
}
}
}
}
function DLimageResizeImage(mylink){
var imagesrc=mylink.figureimage.src;
var patt = new RegExp('//plotaxislength.([0-9]*).psdef');
var csize = imagesrc.match(patt);
if (csize.length<2){
	csize=432;
}
else {
	csize=csize[1];
}
var targetsize = 10*Math.round((mylink.parentNode.clientWidth - 20 - 72)/10,0);
if(targetsize > csize){
imagesrc2 = imagesrc.replace(patt,"//plotaxislength+" + targetsize + "+psdef");
mylink.figureimage.src=imagesrc2;
}
}
function DLimageBuildControls(mylink){
if(mylink.nextSibling.className != 'dlcontrol'){
var dimlist=mylink.info["iridl:hasDimensions"];
var currentObj=mylink;
for (var i = 0; i<dimlist.length; i++) {
var glist=dimlist[i]['iridl:gridvalues'];
if(glist && (glist.length > 1)){
var ctl = document.createElement('div');
ctl.className='dlcontrol';
var ipt = document.createElement('span');
ipt.className='controlLabel';
ipt.innerHTML=dimlist[i]['cfatt:long_name'] + '  ';
ctl.appendChild(ipt);
var iptset = document.createElement('span');
iptset.className='controlSet';
iptset.info=dimlist[i];
ctl.appendChild(iptset);
ipt = document.createElement('span');
ipt.className='lowerLimit';
ipt.onclick=limitclickevent;
ipt.innerHTML=glist[0];
iptset.appendChild(ipt);
ipt = document.createElement('span');
ipt.className='oneStep';
ipt.onclick=stepdownclickevent;
ipt.innerHTML='<';
iptset.appendChild(ipt);
ipt = document.createElement('input');
ipt.name=dimlist[i]['iridl:name'] + '.plotvalue';
ipt.value=dimlist[i]['iridl:defaultvalue'];
ipt.size=16;
iptset.appendChild(ipt);
ipt = document.createElement('span');
ipt.onclick=stepupclickevent;
ipt.className='oneStep';
ipt.innerHTML='>';
iptset.appendChild(ipt);
ipt = document.createElement('span');
ipt.className='upperLimit';
ipt.onclick=limitclickevent;
ipt.innerHTML=glist[glist.length-1];
iptset.appendChild(ipt);
currentObj.parentNode.insertBefore(ctl,currentObj.nextSibling);
currentObj=ctl;
}
}
}
}
function insertcontrolBar(){
var s=document.getElementById('irilink');
if(!s){
    var mylist=document.getElementsByClassName("controlBar");
if(mylist.length>0){
var cont=mylist[0];
var gb= document.createElement('a');
gb.id='irilink';
gb.href="http://iri.columbia.edu/";
var ob= document.createElement('object');
ob.data=maproomroot + "icons/iri.svg";
ob.type="image/svg+xml";
ob.className="iriicon";
        if(document.width < 750){
ob.innerHTML='<img class="iriicon" src="'+ maproomroot + 'icons/iri32.png" />';
}
else {
ob.innerHTML='<img class="iriicon" src="' + maproomroot + 'icons/iri.png" />';
}
gb.appendChild(ob);
cont.insertBefore(gb,cont.firstChild);
}
}
insertlang();
}
var Languages = new Array();
Languages["en"]="english";
Languages["es"]="espa&#241;ol";
Languages["in"]="bahasa";
Languages["fr"]="fran&ccedil;ais";
function languageChange(){
var s=document.getElementById('chooseLanguage');
var sel=s.getElementsByTagName('select')[0];
var newvalue=sel.options[sel.selectedIndex].value;
if(newvalue){
location.href=newvalue;
}
}
function insertlang(){
var s=document.getElementById('chooseLanguage');
var langList=document.getElementsByClassName('altLanguage');
if(!s && langList.length>0){
fs = document.createElement('fieldset');
fs.className='lang';
fs.id='chooseLanguage';
var leg=document.createElement('legend');
leg.innerHTML='Language';
fs.appendChild(leg);
var sel=document.createElement('select');
sel.name="Set-Language";
sel.onchange=languageChange;
var opt=document.createElement('option');
opt.value=document.getElementsByTagName('html')[0].getAttribute("xml:lang");
opt.innerHTML=Languages[opt.value];
opt.value="";
sel.appendChild(opt);
for( var i=0 ; i < langList.length ; i++){
opt=document.createElement('option');
opt.value=langList[i].href;
opt.innerHTML=Languages[langList[i].hreflang];
if(!opt.innerHTML)opt.innerHTML=langList[i].lang;
sel.appendChild(opt);
}
fs.appendChild(sel);
var mylist=document.getElementsByClassName("controlBar");
if(mylist.length>0){
var cont=mylist[0];
cont.insertBefore(fs,cont.firstChild);
}
}
}
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-432152-4']);
  _gaq.push(['_trackPageview']);
  _gaq.push(['_trackPageLoadTime']); 
 (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
	var pair;
        for (var i = 0; i < vars.length; i++) {
            pair = vars[i].split("=");
            if (pair[0] == variable) {
                return unescape(pair[1]);
            }
        }
	return undefined;
    }

function setPageForm(){
var myform=document.getElementById('pageform');
if(myform){
var inputs=myform.elements;
        var query = window.location.search.substring(1);
        var vars = query.split("&");
	var pair;
        for (var i = 0; i < vars.length; i++) {
            pair = vars[i].split("=");
            if (inputs[pair[0]]) {
		inputs[pair[0]].value=unescape(pair[1]);
            }
        }
}
}
function disableNullInputs(){
var myform=document.getElementById('pageform');
if(myform){
var inputs=myform.elements;
        for (var i = 0; i < inputs.length; i++) {
if(!inputs[i].value){
inputs[i].disabled=true;
}
}
}
}
function addLanguageVar(url){
var myform=document.getElementById('pageform');
if(myform){
var lang=myform.elements['Set-Language'];
if(lang && lang.value){
var newurl= url + "?Set-Language=" + lang.value;
return newurl;
}
}
return url;
}
function setupPageFormLinks(){
var myform=document.getElementById('pageform');
if(myform){
var clist = myform.className.split(' ');
var atags = document.getElementsByTagName('a');
for ( var i = 0; i < clist.length; i++ )
         {
var cclass=clist[i];
var members = document.getElementsByClassName(cclass);
for ( var j = 0; j < members.length; j++ )
if(members[j].href){
members[j].onclick=onClickPageForm;
}
}
}
}
function onClickPageForm(evt){
    evt = (evt) ? evt : ((event) ? event : null );
var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement;

callPageForm(it.href,it.className);
return false;
}
function callPageForm(href,classes){
var localhref=localHrefOf(href);
var myform=document.getElementById('pageform');
if(myform){
var inputs=myform.elements;
        for (var i = 0; i < inputs.length; i++) {
inputs[i].disabled=true;
}
var alldisabled=true;
var clist = classes.split(' ');
for ( var ic = 0; ic < clist.length; ic++ ){
var cclass=clist[ic];
var members = document.getElementsByClassName(cclass);
for ( var j = 0; j < members.length; j++ )
if(members[j].disabled && members[j].value){
members[j].disabled=false;
alldisabled=false;
}
}
if(alldisabled){
document.location.href=localhref;
}
else {
myform.action=localhref;
myform.submit();
}
}
else {
document.location.href=localhref;
}
}
$.ready(
function loadmaproom(){
setPageForm()
tabsSetup();
insertcontrolBar();
initializeDLimage();
insertchooseSection();
insertRegion();
insertshare();
setupPageFormLinks();
}
);
