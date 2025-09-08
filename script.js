$(document).ready(function() {
	$(".question").click(function(){
		$(this).siblings().filter(".answer").css("visibility", "visible");
	});
	$("button").click(function(){
		$(this).siblings().filter(".hint").css("visibility", "visible");
	});
	$(".answer").hover(function(){
		$(this).css("font-weight", "bold");
	},
	function(){
		$(this).css("font-weight", "normal");
	});
});
