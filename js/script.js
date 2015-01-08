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
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        startAnimation();
        clearInterval(readyStateCheckInterval);
    }
}, 10);
});

startAnimation = function()
{
	$('#nav-bar').removeClass('minimized');
		$('#nav-bar').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
			setTimeout(function() {
				$('#pleaseWaitDialog').addClass('transparent');
				$('#nav-bar .container').removeClass('transparent');
				$('body').removeClass('overflow-hidden');
			}, 1);
		});
}

$(window).resize(function(){
	if($(window).width() > 768)
	{
		window.location.replace("http://www.navitaire.com");
	}
});