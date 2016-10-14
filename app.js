var Interval;
var defaultTime = 90;
var time = defaultTime;
var running = false;

function reset(){
	time = $("input").val();
	compteur();
}

function compteur(){
	clearInterval(Interval);
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


$("#playStop").on("click", function(){
	if(!running){
		clearInterval(Interval);
	} else{
		compteur();
	}
	running = !running;		
});


$("#reset").on("click", function(){reset()});

$("form").on("submit", function(){
	event.preventDefault();
	reset();
});