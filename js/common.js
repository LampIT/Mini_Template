$(document).ready(function(){
	calcTopSliderHeight();
});

$(window).resize(function(){
	calcTopSliderHeight();
});

function calcTopSliderHeight(){
	$(".slider-wrapper").css("height", $("header").height() - $(".top-line").height());
}