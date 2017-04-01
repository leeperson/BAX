$(".cp1").on("click",function(){
	$(".cp2 img").hide("fast");
	$(".cp1 img").show("fast");
})
$(".cp2").on("click",function(){
	$(".cp1 img").hide("fast");
	$(".cp2 img").show("fast");
})
$(".cp3").on("click",function(){
	$(".cp4 img").hide("fast");
	$(".cp3 img").show("fast");
})
$(".cp4").on("click",function(){
	$(".cp3 img").hide("fast");
	$(".cp4 img").show("fast");
})