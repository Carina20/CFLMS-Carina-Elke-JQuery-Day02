
/* --------------------this one DOESN'T work-----------------------------*/

// $(document).ready(function(){
// 	$("#Santa_Clause").on("click", function() {
// $("Santa_text").html("You clicked on Santa Clause")
// 	});
// });

/* --------------------this one works-----------------------------

// $(document).ready(function(){
// $("#Santa_Clause").click(function(){
// 	$("#Santa_text").text("You clicked on Santa Clause")
// });
// })
*/
/* --------------------this one works too-----------------------------*/

$(document).ready(function(){
	$("#Santa_Clause").click(function(){
		$("#Santa_text").html("You clicked on Santa Clause")
	});
})