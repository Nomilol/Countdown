var Interval;
var time;
var min;
var sec;

$("form").on("submit", function(event){
	event.preventDefault();
	time = $("input").val();
	compteur();
});

function compteur(){
	Interval = setInterval(function(){
		time--;
		min = parseInt(time/60,10);
		sec = time - min*60;
		if(time === 0 && min != 0){
			min--;
		} if(sec === 0 && min === 0){
			clearInterval(Interval);
		}
		$("#minutes").text(min);
		$("#secondes").text(sec);
	}, 1000);
}

$("#playstop").on("click", function(){
	clearInterval(Interval);		
	
}); 


$('#reset').on('click', function(){
	clearInterval(Interval);
	$('input').val()
	$("#minutes").text(0);
	$("#secondes").text(0);
	min = 0;
	console.log(min);
	sec = 0;
});

$("#zero").on("click", function(){
	time = $('input').val();
	//compteur();
});