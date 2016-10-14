var Interval;
var time;

$("form").on("submit", function(event){
	event.preventDefault();
	time = $("input").val();
	compteur();
});

function compteur(){
	Interval = setInterval(function(){
		time--;
		var min = parseInt(time/60,10);
		var sec = time - min*60;
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

$("#reset").click(function(){
	time = $('input').val();
	compteur();
});