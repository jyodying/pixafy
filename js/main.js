$(function(){
	//$.backstretch("images/testpixafy-bg.jpg");
		$("#rw1","#rw2", "#rw3").hover(function(){
	    $(this).filter(':not(:animated)').animate({ 'background-position': "top center" });
	}, function() {
	    $(this).animate({ 'background-position': "bottom center" });
	});

});
