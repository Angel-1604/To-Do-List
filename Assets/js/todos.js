//check off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

	//If li is gray turn balck else turn it gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// $(this).css({
// 	color: "black",
//     textDecoration: "none"
// });
// 	}
// 	else{
// $(this).css({
// 	color: "gray",
//     textDecoration: "line-through"
// });
// 	}

// used .on(click, li , function) so that it will affect future element

//used rgb(128, 128, 128 so that it will work. its gray)
// instead of using lines 5-17 to toggle between gray and black : set a class in css with color gray and use toggleclass in js to toggle between gray and black.

//to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

 //d event.stopPropagation is to stop d click function from bubbling ; that is to only work on d span and not continue on the li, body or div.
// used parent() so it will delete d entire li unless it deletes only d span. Used .fadeOut and .remove to delete d li. dont use only fadeOut becos it only makes it non-visible but it still there.

 //to create new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});



// // Check Off Specific Todos By Clicking
// $("ul").on("click", "li", function(){
// 	$(this).toggleClass("completed");
// });

// //Click on X to delete Todo
// $("ul").on("click", "span", function(event){
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });

// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){
// 		//grabbing new todo text from input
// 		var todoText = $(this).val();
// 		$(this).val("");
// 		//create a new li and add to ul
// 		$("ul").append("<li><span>X</span> " + todoText + "</li>")
// 	}
// });

// to toggle with d plus icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});




