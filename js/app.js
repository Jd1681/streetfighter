$(document).ready(function(){
  $('.ryu').mouseenter(function() {
  	$('.ryu-still').hide();
  	$('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })
  .mousedown(function() {
   	playHadouken(); 	
   	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show()
  	.animate(
  		{'left': '1100px'},
  		500,
  		function()  {
  			$(this).hide();
  			$(this).css('left','500px');
  		});
  })
  .mouseup(function()  {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  	// ryu goes back to his ready position
  });
});

$(document).keydown(function(event) {
  	if (event.keyCode == 88 ) {
  		event.preventDefault();
  		$('ryu-ready').hide();
  		$('ryu-throwing').hide();
  		$('ryu-still').hide();
  		$('.ryu-cool').show();
    }
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}