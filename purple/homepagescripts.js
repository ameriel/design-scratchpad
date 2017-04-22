$(document).ready(function() {
	$("div").mouseenter(function() {
		if ($(window).width() > 600) {
			$(this).children().children("img").fadeTo("medium", 1.0);
		}
		$(this).children().children("p").css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 300);
	});
	$("div").mouseleave(function() {
		if ($(window).width() > 600) {
			$(this).children().children("img").fadeTo("medium", 0.4);
		}
		$(this).children().children("p").css("display","none");
	});
});