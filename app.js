var Interval;
var time = 10;

function compteur(){
	time--;
	$('span').text(time);
	console.log(time);
}


Interval = setInterval(compteur, 1000);


$("#playstop").on("click", function(){
	clearInterval(Interval);		
	
});










