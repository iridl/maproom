/*
MBB 2012 -- maproom implementation in javascript

$.ready runs a function at DOMContentLoaded if possible, otherwise onload
runs immediately if already loaded.  It is invoked at the end of this file.
*/
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
/*
To simplify writing maproom documents, and accessing them locally,
from test locations, and from the server, urls that start /maproom/
are prepending with the document root, as long as the urls are processed
by the maproom javascript code.

maproomroot: holds the document root
localHrefOf: converts a /maproom/ reference to be relative to the current document
*/
var slist=document.getElementsByTagName('script');
var scriptsrc='';
for (var i=0; i<slist.length; i++){
var shref=slist[i].src;
if(shref.substr(shref.length-10,10) == 'maproom.js'){
scriptsrc=shref;
break;
}
}
var scriptroot = scriptsrc.substr(0,scriptsrc.indexOf('/maproom/')+9);
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
submitPageForm(it.hrefroot + opt.value,"carry");
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
	var last = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'].length-1;
	myinput.value=it.innerHTML;
	var c0 = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'].indexOf(myinput.value);
	if(c0 == 0){
	myinput.guessvalue=it.parentNode.info['iridl:gridvalues']['iridl:valuelist'][1];
}
	if(c0 == last){
	myinput.guessvalue=it.parentNode.info['iridl:gridvalues']['iridl:valuelist'][last-1];
}
	imageinputvaluechange(evt);
 }
function stepupclickevent(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
   var myinput = it.parentNode.getElementsByTagName('input')[0];
	var cin = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'].indexOf(myinput.value);
	if(cin > -1 && cin < it.parentNode.info['iridl:gridvalues']['iridl:valuelist'].length-1) {
	myinput.value = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'][cin+1];
	if(cin < it.parentNode.info['iridl:gridvalues']['iridl:valuelist'].length-2) {
	myinput.guessvalue = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'][cin+2];
	}
	imageinputvaluechange(evt);
	}
 }
function stepdownclickevent(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
   var myinput = it.parentNode.getElementsByTagName('input')[0];
	var cin = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'].indexOf(myinput.value);
	if(cin >0) {
	myinput.value = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'][cin-1];
	if(cin > 1) {
	myinput.guessvalue = it.parentNode.info['iridl:gridvalues']['iridl:valuelist'][cin-2];
	}
	imageinputvaluechange(evt);
	}
 }
function imageinputvaluechange(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
 var myinput = it.parentNode.getElementsByTagName('input')[0];
 var myimage =  it.parentNode.mylink.figureimage;
// copy value(s) to page form and get url
var pform=document.getElementById('pageform');
var guess='';
  if(myinput.guessvalue){
  pform.elements[myinput.name].value = myinput.guessvalue;
//  guess = appendPageForm(myimage.src.replace(/[?].*/,''),myimage.className);
    guess = myinput.guessvalue;
	myinput.guessvalue='';
}
  updatePageForm(pform.elements[myinput.name],myinput.value,guess);
//  pform.elements[myinput.name].value = myinput.value;
//  myimage.src = appendPageForm(myimage.src.replace(/[?].*/,''),myimage.className);
//	if(guess){
//        preload(guess);
//	}
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
gb.id='googleplusbutton';
gb.innerHTML='<div class="g-plusone" data-count="false" ></div>';
s.appendChild(gb);
gb= document.createElement('div');
gb.className='sharebutton';
gb.id='custom-tweet-button';
var gba = document.createElement('a');
gba.setAttribute("title","Tweet");
gba.onclick=doTwitter;
gb.appendChild(gba);
s.appendChild(gb);
gb= document.createElement('div');
gb.className='sharebutton';
gb.id='evernote';
gba = document.createElement('a');
gba.setAttribute("title","Save to Evernote");
gba.onclick=doEvernoteClip;
gb.appendChild(gba);
s.appendChild(gb);
gb= document.createElement('div');
gb.className='sharebutton';
gb.id='tumblr';
    var tumblr_button = document.createElement("a");
	tumblr_button.onclick=doTumblrClip;
    tumblr_button.setAttribute("title", "Share on Tumblr");
    gb.appendChild(tumblr_button);
s.appendChild(gb);
/* code to add GMail buttons
gb= document.createElement('div');
gb.className='sharebutton';
gb.id='gmailbutton';
    tumblr_button = document.createElement("a");
	tumblr_button.onclick=doGMail;
    tumblr_button.setAttribute("title", "Share on GMail");
    gb.appendChild(tumblr_button);
s.appendChild(gb);
*/
}
// adds scripts to share to activate buttons
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
s.appendChild(po);
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = "http://static.evernote.com/noteit.js";
s.appendChild(ga);
}
function doTwitter(){
 var url = appendPageForm(location.href.replace(/[?].*/,''),'share');
    var tpar = getElementsByAttribute(document,'*','property','term:title');
    var dpar = getElementsByAttribute(document,'*','property','term:description');
    var title="";
	if(tpar.length>0){
	title=tpar[0].innerHTML;
	}
	if(!title)title=document.title;
var twitter_url = "https://twitter.com/share?via=iridl&hashtags=dataviz&url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(title);
window.open(twitter_url);
}
function doGMail(){
 var url = appendPageForm(location.href.replace(/[?].*/,''),'share');
    var tpar = getElementsByAttribute(document,'*','property','term:title');
	if(tpar.length>0){
	title=tpar[0].innerHTML;
	}
	if(!title)title=document.title;
var m='http://mail.google.com/mail/?ui=1&view=cm&fs=1&tf=1&to=&su='+encodeURIComponent(title)+'&body='+encodeURIComponent(url);
window.open(m);
}
function doTumblrClip(){
    var content = document.getElementById("content");
    var tpar = getElementsByAttribute(document,'h2','property','term:title');
    var dpar = getElementsByAttribute(document,'p','property','term:description');
    var title="";
	if(tpar.length>0){
	title=tpar[0].innerHTML;
	}
	if(!title)title=document.title;
    var description="";
	if(dpar.length>0){
	description=dpar[0].innerHTML;
	}
      var tumblr_url;
    var tumblr_photo_source = "";
    var tumblr_photo_caption = "";
	if(description){
	tumblr_photo_caption = description;
	}
	else {
	tumblr_photo_caption = title;
	}
	if(content){
	if(content.getElementsByTagName('link').length>0){
	tumblr_photo_source = content.getElementsByTagName('link')[0].figureimage.src;
	}
	}
    var tumblr_photo_click_thru = appendPageForm(location.href.replace(/[?].*/,''),'share');
	if(tumblr_photo_source){
tumblr_url = "http://www.tumblr.com/share/photo?source=" + encodeURIComponent(tumblr_photo_source) + "&caption=" + encodeURIComponent(tumblr_photo_caption) + "&clickthru=" + encodeURIComponent(tumblr_photo_click_thru);
}
else {
 var tumblr_link_url = appendPageForm(location.href.replace(/[?].*/,''),'share');
    var tumblr_link_name = title;
    var tumblr_link_description = description;
tumblr_url = "http://www.tumblr.com/share/link?url=" + encodeURIComponent(tumblr_link_url) + "&name=" + encodeURIComponent(tumblr_link_name) + "&description=" + encodeURIComponent(tumblr_link_description);
}
window.open(tumblr_url);
}

function doEvernoteClip(){
var clipargs = {};
clipargs.contentId = 'content';
clipargs.url = appendPageForm(location.href.replace(/[?].*/,''),'share');
clipargs.filter= function (arg){
if(!(arg.className == 'imagecontrols' || arg.style.visibility=='hidden')){
return arg;
}
};
Evernote.doClip(clipargs);
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
function preload(href){
var xmlhttp=getXMLhttp();
xmlhttp.onreadystatechange=function(evt) {
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
if (it.readyState==4) {
  }
} 
xmlhttp.open("GET",href,true);
xmlhttp.send();
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
sel.name="bbox";
sel.className='pageformcopy';
sel.onchange=regiononchange;
sel.innerHTML='<optgroup label="Region"><option value="[-20,-40,55,40]">Africa</option><option value="[40,-10,170,75]">Asia</option><option value="[100,-55,180,0]">Australia</option><option value="[-20,35,40,75]">Europe</option><option value="[10,15,75,45]">Middle East</option><option value="[-170,15,-60,75]">North America</option><option value="[-100,0,-70,35]">Central America</option><option value="[-90,-60,-30,15]">South America</option><option value="" selected="selected">Global</option></optgroup>';
theregion.appendChild(sel);
}
}
}
function regiononchange(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
/* updates selectvalue element*/
it.previousSibling.innerHTML=it.options[it.selectedIndex].innerHTML;
var pform=document.getElementById('pageform');
if(pform){
if(pform.elements[it.name]){
pform.elements[it.name].value=it.options[it.selectedIndex].value;
updatePageForm(pform.elements[it.name]);
}
}
}
function pageformcopyonchange(evt){
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
var pform=document.getElementById('pageform');
if(pform){
if(pform.elements[it.name]){
if(it.option){
pform.elements[it.name].value=it.options[it.selectedIndex].value;
}
else {
pform.elements[it.name].value=it.value;
}
updatePageForm(pform.elements[it.name]);
}
}
}
function initializeDLimage(){
    var mylist=document.getElementsByClassName("dlimage");
for( var idlimage=0 ; idlimage < mylist.length ; idlimage++){
var s = mylist[idlimage];
var sl = s.getElementsByTagName('legend');
var leg;
var sfigs=getElementsByAttribute(s,'link','rel','iridl:hasFigure');
if(!sl.length && sfigs.length){
leg=document.createElement('legend');
leg.className='imagecontrols';
leg.innerHTML='<object class="dlimageswitch" data="' + scriptroot + 'icons/onoff.svg" type="image/svg+xml" width="13" height="13"><img class="dlimageswitch" src="'+ scriptroot + 'icons/onoff.png" width="13" height="13" border="0" hspace="2" vspace="2" /></object>';
var ctl=document.createElement('img');
ctl.className="dlimagecontrol";
ctl.width="13";
ctl.height="13";
ctl.border="0";
ctl.hspace="2";
ctl.vspace="2";
ctl.src="http://iridl.ldeo.columbia.edu/icons/RedrawButton.jpg";
ctl.title="Redraw";
ctl.onclick=doredrawbutton;
leg.appendChild(ctl);
ctl=document.createElement('img');
ctl.className="dlimagecontrol";
ctl.width="13";
ctl.height="13";
ctl.border="0";
ctl.hspace="2";
ctl.vspace="2";
ctl.src="http://iridl.ldeo.columbia.edu/icons/ZoomButton.jpg";
ctl.title="Zoom Out";
ctl.onclick=dozoomout;
leg.appendChild(ctl);
 ctl=document.createElement('img');
ctl.className="dlimagecontrol";
ctl.width="13";
ctl.height="13";
ctl.border="0";
ctl.hspace="2";
ctl.vspace="2";
ctl.src="http://iridl.ldeo.columbia.edu/icons/HelpButton.jpg";
ctl.title="More Information";
ctl.onclick=doinfobutton;
leg.appendChild(ctl);
s.insertBefore(leg,s.firstChild);
}
else {
leg=sl[0];
}
var sfigs=getElementsByAttribute(s,'link','rel','iridl:hasFigure');
if(sfigs.length){
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
xmlhttp.mylink.figureimage.mylink=xmlhttp.mylink;
break;
}
}
xmlhttp.onreadystatechange = function(evt) {
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
if(it.readyState == 4){
var jsontxt = it.responseText;
it.mylink.info=JSON.parse(jsontxt);
/* info now has figure information */
/* for (x in it.mylink.info){
alert(x + " is " + JSON.stringify(it.mylink.info[x]));
} */
DLimageBuildControls(it.mylink);
}
};
xmlhttp.open("GET",infourl,true);
xmlhttp.send();
DLimageResizeImage(xmlhttp.mylink);
}
}
}
}
function dozoomout () {
var myform=document.getElementById('pageform');
if(myform){
var myin = myform.elements['bbox'];
if(myin){
myin.value='';
updatePageForm();
}
}
}
function setbbox (newbbox) {
var myform=document.getElementById('pageform');
if(myform){
var myin = myform.elements['bbox'];
if(myin){
myin.value=JSON.stringify(newbbox);
updatePageForm();
}
}
}
function getbbox (myinfo) {
var mybbox;
var myform=document.getElementById('pageform');
if(myform){
var myin = myform.elements['bbox'];
if(myin && myin.value){
mybbox=JSON.parse(myin.value);
}
}
if(!mybbox){
var Xare = myinfo["iridl:hasAbscissa"]["iridl:gridvalues"]["@type"];
var Yare = myinfo["iridl:hasOrdinate"]["iridl:gridvalues"]["@type"];
var X0,X1,Y0,Y1;
if(Xare = 'iridl:EvenGridEdges'){
X0 = myinfo["iridl:hasAbscissa"]["iridl:gridvalues"]["iridl:first"];
X1 = myinfo["iridl:hasAbscissa"]["iridl:gridvalues"]["iridl:last"];
}
if(Yare = 'iridl:EvenGridEdges'){
var Y0 = myinfo["iridl:hasOrdinate"]["iridl:gridvalues"]["iridl:first"];
var Y1 = myinfo["iridl:hasOrdinate"]["iridl:gridvalues"]["iridl:last"];
}
mybbox=[X0,Y0,X1,Y1];
}
return mybbox;
}
function doredrawbutton () {
var myform=document.getElementById('pageform');
if(myform){
updatePageForm();
}
}
function doinfobutton (evt) {
   var evt = (evt) ? evt : ((event) ? event : null );
   var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement.parentNode;
var mylink = getElementsByAttribute(it.parentNode.parentNode,'link','rel','iridl:hasFigure');
// location.href=appendPageForm(mylink[0].href+'index.html',mylink[0].figureimage.className);
location.href=mylink[0].href;
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
var pform=document.getElementById('pageform');
var ipt=pform.elements['plotaxislength'];
if(!ipt){
ipt= document.createElement('input');
ipt.className = mylink.figureimage.className.split(' ')[0];
appendMissingClass(pform,ipt.className);
ipt.name = 'plotaxislength';
ipt.type='hidden';
pform.appendChild(ipt);
}
var clientsize = Math.max(mylink.parentNode.clientWidth,mylink.parentNode.clientHeight); 
var targetsize = 20*Math.round((clientsize - 20 - 72 + 9)/20,0);
if(targetsize > csize){
ipt.value=targetsize;
var newsrc=appendPageForm(mylink.figureimage.src,mylink.figureimage.className);
mylink.figureimage.src=newsrc;
}
}
/* handles building of image controls from info.json information
invoked when load of info.json completes
*/
function DLimageBuildControls(mylink){
/* builds image choice controls and places them immediately after the hasFigure link 
*/
if(mylink.nextSibling.className != 'dlcontrol'){
var dimlist=mylink.info["iridl:hasDimensions"];
var currentObj=mylink;
if(dimlist){
for (var i = 0; i<dimlist.length; i++) {
var glist=dimlist[i]['iridl:gridvalues']['iridl:valuelist'];
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
iptset.mylink=mylink;
ctl.appendChild(iptset);
ipt = document.createElement('span');
ipt.className='lowerLimit';
ipt.onclick=limitclickevent;
ipt.innerHTML=glist[0];
iptset.appendChild(ipt);
ipt = document.createElement('span');
ipt.className='oneStep';
ipt.onclick=stepdownclickevent;
ipt.innerHTML='&lt;';
iptset.appendChild(ipt);
ipt = document.createElement('input');
ipt.className=mylink.figureimage.className.split(' ')[0] + ' pageformcopy';
ipt.name=dimlist[i]['iridl:name'];
ipt.value=dimlist[i]['iridl:defaultvalue'];
ipt.onchange=imageinputvaluechange;
ipt.size=16;
iptset.appendChild(ipt);
if(document.getElementById('pageform')){
var pform=document.getElementById('pageform');
if(!pform.elements[ipt.name]){
var iptcpy= document.createElement('input');
iptcpy.className = ipt.className;
appendMissingClass(pform,ipt.className);
iptcpy.name = ipt.name;
iptcpy.value=ipt.value;
iptcpy.type='hidden';
pform.appendChild(iptcpy);
}
else {
if(pform.elements[ipt.name].value != ''){
ipt.value=pform.elements[ipt.name].value;
}
}
}
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
} // end of image (dimension) control builds
var myfigure = mylink.figureimage;
if(!myfigure.myoverlay){
//if(false){
var myimgdiv = document.createElement('div');
myfigure.myoverlay=myimgdiv;
myimgdiv.className="imageOverlayDiv";
myimgdiv.style.position='absolute';
// myimgdiv.style.width=myfigure.width + 'px';
// myimgdiv.style.height=myfigure.height + 'px';
// image is not necessarily loaded yet, so cannot be sure of the image size.
myimgdiv.style.width=myfigure.clientWidth + 'px';
myimgdiv.style.height=myfigure.clientHeight + 'px';
myimgdiv.style.padding='0px';
myimgdiv.onmousedown=startdrag;
myimgdiv.onmouseup=stopdrag;
myimgdiv.onmousemove=followdrag;
myimgdiv.onmouseover=hello;
myimgdiv.onmouseout=goodbye;
myimgdiv.mycontainer=myfigure.parentNode;
myimgdiv.zoomstatus=document.createElement('div');
myimgdiv.zoomstatus.className='zoomStatus';
myimgdiv.zoomstatus.style.position='absolute';
myimgdiv.zoomstatus.style.visibility='hidden';
myimgdiv.appendChild(myimgdiv.zoomstatus);
myimgdiv.outline=document.createElement('span');
myimgdiv.outline.style.visibility='hidden';
myimgdiv.outline.style.position='absolute';
myimgdiv.outline.style.width='85px';
myimgdiv.outline.style.height='54px';
myimgdiv.outline.style.left='102px';
myimgdiv.outline.style.top='50px';
myimgdiv.outline.style.zindex='5';
myimgdiv.outline.style.backgroundColor='#E00000';
myimgdiv.outline.style.color='#ffff99';
myimgdiv.outline.onclick=skipme;
myimgdiv.outline.onmousemove=skipme;
myimgdiv.appendChild(myimgdiv.outline);
myimgdiv.outlineimage=document.createElement('span');
myimgdiv.outlineimage.style.position='absolute';
myimgdiv.outlineimage.style.left='-102px';
myimgdiv.outlineimage.style.top='-50px';
myimgdiv.outlineimage.style.clip='rect(52px 184px 102px 104px)';
myimgdiv.outline.appendChild(myimgdiv.outlineimage);
myimgdiv.outlineimage.onclick=skipme;
myimgdiv.outlineimage.onmousemove=skipme;
myimgdiv.inputimage=myfigure;
var newimg=document.createElement("img");
newimg.width=myimgdiv.inputimage.width;
newimg.height=myimgdiv.inputimage.height;
newimg.src=myimgdiv.inputimage.src;
myimgdiv.outlineimage.appendChild(newimg);
myfigure.parentNode.insertBefore(myimgdiv,myfigure);
// myimgdiv.appendChild(myfigure);
}
}
function hideImageOverlay(myfigure){
if(myfigure.myoverlay){
var myimgdiv=myfigure.myoverlay;
myimgdiv.outline.style.visibility='hidden';
myimgdiv.inputimage.style.visibility='visible';
}
}
function resetImageOverlay(myfigure){
if(myfigure.myoverlay){
var myimgdiv = myfigure.myoverlay;
myimgdiv.style.width=myfigure.clientWidth + 'px';
myimgdiv.style.height=myfigure.clientHeight + 'px';
myimgdiv.outlineimage.children[0].width=myfigure.width;
myimgdiv.outlineimage.children[0].height=myfigure.height;
myimgdiv.outlineimage.children[0].src=myfigure.src;
}
}
function getcurrentTarget(evt) {
evt = (evt) ? evt : event;
if(evt){
var elem = (evt.currentTarget) ? evt.currentTarget : ((evt.srcElement.parentNode) ? evt.srcElement.parentNode : null);
if(elem){
return elem;
}
}
return null;
}
function hello(evt){
var myimgdiv=getcurrentTarget(evt);
if(myimgdiv){
var checkobj;
checkobj=document.getElementById("clickzoom");
var mypar=myimgdiv.zoomstatus;
if(mypar){
if(checkobj){
mypar.innerHTML="click for information;<br /> click & drag down-and-right to zoom in";
}
else {
mypar.innerHTML="click & drag down-and-right to zoom in";
}
mypar.style.visibility="visible";
mypar.timeoutId=setTimeout(function () {mypar.style.visibility='hidden'},3000);
}
}
return true;
}
function goodbye(evt){
var myimgdiv=getcurrentTarget(evt);
if(myimgdiv){
myimgdiv.zoomstatus.style.visibility="hidden";
if(myimgdiv.zoomstatus.timeoutId){
clearTimeout(myimgdiv.zoomstatus.timeoutId);
myimgdiv.zoomstatus.timeoutID=null;
}
}
return true;
}
/* drag zoom routines */
var myobj=null;
var myx,myy;
function doit(state){
myit=document.getElementById("outline");
myit.style.visibility=state;
return false;
}
function stopdrag(evt){
evt = (evt) ? evt : event;
var myimgdiv=getcurrentTarget(evt);
var myinfo = myimgdiv.inputimage.mylink.info;
if(myobj != null && myinfo){
if(myobj.style.visibility == 'visible'){
myvals=lonlat(myinfo,myimgdiv.inputimage.clientWidth,parseInt(myobj.style.left),parseInt(myobj.style.top),parseInt(myobj.style.width),parseInt(myobj.style.height));
setbbox(myvals);
}
}
if(myobj != null && myobj.style.visibility == 'visible'){
evt.cancelBubble = true;
myobj=null;
mypar=myimgdiv.zoomstatus;
// mypar.innerHTML="zooming " + JSON.stringify(myvals);
mypar.innerHTML="zooming... ";
// mypar.style.visibility="visible";
myit=myimgdiv.inputimage;
myit.style.visibility="hidden";
//myit.form.submit();
return false;
}
else {
myobj=null;
return true;
}
}
function absLeft(obj){
if(obj.offsetParent){
myval=obj.offsetLeft + absLeft(obj.offsetParent);
}
else {
myval=obj.offsetLeft;
}
return myval;
}
function absTop(obj){
if(obj.offsetParent){
myval=obj.offsetTop + absTop(obj.offsetParent);
}
else {
myval=obj.offsetTop;
}
return myval;}
function startdrag(evt){
evt = (evt) ? evt : event;
var myimgdiv=getcurrentTarget(evt);
var myworld = myimgdiv.mycontainer;
if(myworld){
var myinfo = myimgdiv.inputimage.mylink.info;
var plotborderleft = myinfo["iridl:plotborderleft"];
var plotbordertop = myinfo["iridl:plotbordertop"];
var plotborderright = myinfo["iridl:plotborderright"];
var plotborderbottom = myinfo["iridl:plotborderbottom"];
// alert(evt.layerX + ' ' + evt.x + ' ' + evt.pageX + ' ' + absLeft(myimgdiv));
myx=evt.pageX-absLeft(myimgdiv);
myy=evt.pageY-absTop(myimgdiv);
if(myobj == null){
myobj = myimgdiv.outline;
sizeto(myobj,0,0);
return false;
}else
{return true;
}
}
}
function followdrag(evt){
evt = (evt) ? evt : event;
var myimgdiv=getcurrentTarget(evt);
var myworld = myimgdiv.mycontainer;
if(myworld){
var myinfo = myimgdiv.inputimage.mylink.info;
var plotborderleft = myinfo["iridl:plotborderleft"];
var plotbordertop = myinfo["iridl:plotbordertop"];
var plotborderright = myinfo["iridl:plotborderright"];
var plotborderbottom = myinfo["iridl:plotborderbottom"];
var Xaxislength = myinfo["iridl:Xaxislength"];
var Yaxislength = myinfo["iridl:Yaxislength"];
if(myobj != null){
dx=evt.pageX-absLeft(myimgdiv);
dy=evt.pageY-absTop(myimgdiv);
cw=parseInt(myobj.style.width);
ch=parseInt(myobj.style.height);
newx=Math.min(dx,myx);
newy=Math.min(dy,myy);
neww=Math.max(dx,myx)-newx;
newh=Math.max(dy,myy)-newy;
//if(newx >plotborderleft && newy>plotborderright&& newx+neww<Xaxislength+plotborderleft && newy+newh < Yaxislength+plotbordertop)
if(true){
sizeto(myimgdiv.outline,neww,newh);
if(cw*ch > 0){
myit=myimgdiv.outline;
myit.style.visibility='visible';
iimg=myimgdiv.inputimage;
}
shiftto(myimgdiv.outline,newx,newy);
}
evt.cancelBubble = true;
}
}
return false;
}
function skipme(evt){
return false;
}
function plotaxislengthfn(myinfo){
var plotaxislength;
var Xaxislength = myinfo["iridl:Xaxislength"];
var Yaxislength = myinfo["iridl:Yaxislength"];
var pform=document.getElementById('pageform');
if(pform && pform.elements['plotaxislength'] && pform.elements['plotaxislength'].value){
	plotaxislength = pform.elements['plotaxislength'].value;
}
else {
	if(Xaxislength >= Yaxislength){
	plotaxislength = Xaxislength;
	}
	else {
	plotaxislength = Yaxislength;
	}
}
return(plotaxislength);
}
lonlatA=new Array();
function lonlat(myinfo,imagewidth,left,top,width,height){
myA=lonlatA;
var plotborderleft = myinfo["iridl:plotborderleft"];
var plotbordertop = myinfo["iridl:plotbordertop"];
var plotborderright = myinfo["iridl:plotborderright"];
var plotborderbottom = myinfo["iridl:plotborderbottom"];
var plotaxislength = plotaxislengthfn(myinfo);
var Xaxislength = myinfo["iridl:Xaxislength"];
var Yaxislength = myinfo["iridl:Yaxislength"];
var Xare = myinfo["iridl:hasAbscissa"]["iridl:gridvalues"]["@type"];
var Yare = myinfo["iridl:hasOrdinate"]["iridl:gridvalues"]["@type"];
myA = getbbox(myinfo);
var X0,X1,Y0,Y1;
X0 = myA[0];
Y0 = myA[1];
X1 = myA[2];
Y1 = myA[3];
if(X1-X0 >= Y1-Y0) {
Yaxislength = Math.round((plotaxislength * (Y1-Y0))/(X1-X0));
Xaxislength = plotaxislength;
}
else {
Xaxislength = Math.round((plotaxislength * (X1-X0))/(Y1-Y0));
Yaxislength = plotaxislength;
}
frac = imagewidth/(parseFloat(plotborderleft) + parseFloat(Xaxislength) + parseFloat(plotborderright));
nxl =  Math.round(X0 + (X1-X0)*(left-plotborderleft)/(frac*Xaxislength));
nxr =  Math.round(X0 + (X1-X0)*(left+width-plotborderleft)/(frac*Xaxislength));
nyt =  Math.round(Y1 - (Y1-Y0)*(top-plotbordertop)/(frac*Yaxislength));
nyb =  Math.round(Y1 - (Y1-Y0)*(top+height-plotbordertop)/(frac*Yaxislength));
myA[0]=nxl;
myA[1]=nyb;
myA[2]=nxr;
myA[3]=nyt;
return myA;
}
function grow(myit,dx,dy){
myit.style.width=parseInt(myit.style.width)+dx+'px';
myit.style.height=parseInt(myit.style.height)+dy+'px';
myitt=myit.childNodes[0];
var re=/(\d+)px,?\s+(\d+)px,?\s+(\d+)px,?\s+(\d+)px/;
var results = re.exec(myitt.style.clip);
myitt.style.clip="rect(" + results[1] + "px " + (parseInt(results[2])+dx) + "px " +
(parseInt(results[3])+dy) + "px " + results[4] + "px)";
return false;
}
function sizeto(myit,dx,dy){
cw=parseInt(myit.style.width);
ch=parseInt(myit.style.height);
grow(myit,dx-cw,dy-ch);
}
function shiftby(myit,dx,dy){
myit.style.left=parseInt(myit.style.left)+dx+'px';
myit.style.top=parseInt(myit.style.top)+dy+'px';
myitt=myit.childNodes[0];
var re=/(\d+)px,?\s+(\d+)px,?\s+(\d+)px,?\s+(\d+)px/;
var results = re.exec(myitt.style.clip);
myitt.style.clip="rect(" + (parseInt(results[1])+dy) + "px " + (parseInt(results[2])+dx) + "px " +
(parseInt(results[3])+dy) + "px " + (parseInt(results[4])+dx) + "px)";
myitt.style.left=parseInt(myitt.style.left)-dx+'px';
myitt.style.top=parseInt(myitt.style.top)-dy+'px';
return false;
}
function shiftto(myit,newx,newy){
cleft=parseInt(myit.style.left);
ctop=parseInt(myit.style.top);
shiftby(myit,newx-cleft,newy-ctop);
}
/* end of drag zoom routines */
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
ob.data=scriptroot + "icons/iri.svg";
ob.type="image/svg+xml";
ob.className="iriicon";
        if(document.width < 750){
ob.innerHTML='<img class="iriicon" src="'+ scriptroot + 'icons/iri32.png" />';
}
else {
ob.innerHTML='<img class="iriicon" src="' + scriptroot + 'icons/iri.png" />';
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
var achange=false;
var inputs=myform.elements;
        var query = window.location.search.substring(1);
        var vars = query.split("&");
	var pair;
        for (var i = 0; i < vars.length; i++) {
            pair = vars[i].split("=");
            if (inputs[pair[0]]) {
	        achange=true;
// decode and encode do not properly invert each other w.r.t. space to + conversion
	        var hold = pair[1].replace(/[+]/g," ");
		inputs[pair[0]].value=decodeURIComponent(hold);
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
for ( var i = 0; i < clist.length; i++ )
         {
var cclass=clist[i];
var members = document.getElementsByClassName(cclass);
for ( var j = 0; j < members.length; j++ ) {
if(members[j].href){
members[j].onclick=onClickPageForm;
}
if(members[j].src){
members[j].onload=imageloadedevent;
}
}
}
var stag = document.getElementsByClassName('pageformcopy');
for (var i=0; i< stag.length ; i++){
var sel=stag[i];
if(!sel.onchange){
sel.onchange=pageformcopyonchange;
}
}
updatePageForm();
}
}

/*
function to indicate an update to the pageform
updates all image urls that have classes that match the pageform
updates elements in class pageformcopy with corresponding name.

If supplied with the input element that changed,
1) only checks the classes that correspond, and
2) uses guessvalue to do readahead, resetting when done. 
*/
function updatePageForm(changedInput, newvalue, guessvalue){
var myform=document.getElementById('pageform');
if(myform){
var clist;
if(changedInput){
clist = changedInput.className.split(' ');
if(newvalue){
changedInput.value=newvalue;
}
}
else {
clist = myform.className.split(' ');
}
for ( var i = 0; i < clist.length; i++ )
         {
var cclass=clist[i];
var members = document.getElementsByClassName(cclass);
for ( var j = 0; j < members.length; j++ ) {
var cmem=members[j];
if(cmem.tagName == 'IMG'){
var newsrc = appendPageForm(cmem.src.replace(/[?].*/,''),cmem.className);
if(newsrc != cmem.src){
    cmem.src = newsrc;
}
}
if(cmem.tagName == 'LINK'){
var newsrc = appendPageForm(cmem.href.replace(/[?].*/,''),cmem.className);
if(newsrc != cmem.href){
    cmem.href = newsrc;
}
}
}
}
if(guessvalue){
changedInput.value=guessvalue;
for ( var i = 0; i < clist.length; i++ )
         {
var cclass=clist[i];
var members = document.getElementsByClassName(cclass);
for ( var j = 0; j < members.length; j++ ) {
var cmem=members[j];
if(cmem.tagName == 'IMG'){
var newsrc = appendPageForm(cmem.src.replace(/[?].*/,''),cmem.className);
if(newsrc != cmem.src){
	preload(newsrc);
}
}
}
}
changedInput.value=newvalue;
}
var stag = document.getElementsByClassName('pageformcopy');
for (var i=0; i< stag.length ; i++){
var sel=stag[i];
var cval = myform.elements[sel.name].value;
if((typeof(sel.value) != 'undefined') && cval && sel.value != cval){
sel.value=cval;
}
if(typeof(sel.selectedIndex) === 'number'){
var options=sel.options;
var cval = myform.elements[sel.name].value;
for (var j=0; j < options.length ; j++){
if(options[j].value == cval){
sel.selectedIndex=j;
if(sel.previousSibling.className == 'selectvalue'){
sel.previousSibling.innerHTML=sel.options[sel.selectedIndex].innerHTML;
}
break;
}
}
}
}
}
}
function imageloadedevent(evt){
    evt = (evt) ? evt : ((event) ? event : null );
var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement;
if(it.className == 'dlimg'){
if(it.mylink){
var mynode = it.mylink.parentNode;
if(it.height>it.width && mynode.className.indexOf('tall')<0){
mynode.className = mynode.className + ' tall';
}
if(it.height<it.width && mynode.className.indexOf('tall')>0){
mynode.className = mynode.className.replace(' tall','');
}
}
hideImageOverlay(it);
/* makes sure the image overlay is the right size if it exists */
resetImageOverlay(it);
var pform=document.getElementById('pageform');
if(pform && pform.elements['plotaxislength'] && pform.elements['plotaxislength'].value){
var clientsize = Math.max(it.width,it.height); 
var targetsize = 20*Math.round((clientsize - 20 - 72 + 9)/20,0);
var plen = pform.elements['plotaxislength'].value;
if(targetsize!=plen){
pform.elements['plotaxislength'].value = targetsize;
updatePageForm(pform.elements['plotaxislength']);
}
}
}
return true;
}
/* if none of the classes in srcclass are in element.className,
appends the first class in srclass
*/
function appendMissingClass(element,srcclass){
var targetclass=element.className;
var slist = srcclass.split(' ');
var match = false;
for (var i = 0 ; i < slist.length; i++){
if(targetclass.indexOf(slist[i]) >=0){
match = true;
}
}
if(!match){
element.className = targetclass + ' ' + slist[0];
}
}

function onClickPageForm(evt){
    evt = (evt) ? evt : ((event) ? event : null );
var it = (evt.currentTarget) ? evt.currentTarget : evt.srcElement;

submitPageForm(it.href,it.className);
return false;
}
/*
submitPageForm -- submits pageform to href, appending inputs corresponding to class.
*/
function submitPageForm(href,classes){
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
/*
appendPageForm -- appends to href, appending pageform inputs corresponding to class.
*/
function appendPageForm(href,classes){
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
return localhref;
}
else {
var action = localhref;
delim= '?';
        for (var i = 0; i < inputs.length; i++) {
var myinput=inputs[i];
	if(!myinput.disabled){
	action = action + delim + myinput.name + '=' + encodeURIComponent(myinput.value);
	delim='&'
	}
	}
return action;
}
}
else {
return localhref;
}
}
// loadmaproom is run once (at DOMContentLoaded if possible, or onload).
var loadmaproomneeded=true;
$.ready(
function loadmaproom(){
if(loadmaproomneeded){
loadmaproomneeded=false;
setPageForm();
tabsSetup();
insertcontrolBar();
initializeDLimage();
insertchooseSection();
insertRegion();
insertshare();
setupPageFormLinks();
}
}
);
