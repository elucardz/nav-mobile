$(document).ready(function(){
		if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","http://helloworld123.site90.com/tailfins.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var x=xmlDoc.getElementsByTagName("tailfin");
var tailFinElement = "";
for (i=0;i<x.length;i++)
  { 
  tailFinElement+='<div class="col-xs-6 tailFin"><img src="../../img/clients/'+x[i].childNodes[0].nodeValue+'" class="clientImg" alt="Air One"></div>';
  }
  $('#tailfin-holder').html(tailFinElement);
});