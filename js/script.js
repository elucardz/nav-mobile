$('#menu-open').click(function(){
	var activeMenu = $('#menu').multilevelpushmenu('activemenu').length;
	if(activeMenu > 0)
	{
	$('#menu').multilevelpushmenu('collapse');
	}else
	{
	$('#menu').multilevelpushmenu('expand');
	}
});

$("#pushobj").on("swipeleft",function(){
	var activeMenu = $('#menu').multilevelpushmenu('activemenu').length;
	if(activeMenu == 0)
	{
	$('#menu').multilevelpushmenu('expand');
	}
});

$("#pushobj").on("swiperight",function(){
	var activeMenu = $('#menu').multilevelpushmenu('activemenu').length;
	if(activeMenu > 0)
	{
	$('#menu').multilevelpushmenu('collapse');
	}
});


$(document).ready(function(){
	$(window).trigger('resize');
});

$(window).resize(function(){
	if($(window).width() > 768)
	{
		window.location.replace("http://www.navitaire.com");
	}
});