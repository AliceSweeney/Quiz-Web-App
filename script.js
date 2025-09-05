$(document).ready(function() {
	$(".question").click(function(){
		$(this).children().filter(".answer").css("visibility", "visible");
	});
	$(".answer").hover(function(){
		$(this).css("font-weight", "bold");
	},
	function(){
		$(this).css("font-weight", "normal");
	});
});
