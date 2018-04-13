// Get Required Elements from HTML

var page = document.querySelector("#fullscreenCover");
var ball = document.querySelector("#ball");
var center = document.querySelector("#center");

// Setup Required Variables

var displayHeight;

// Resize Page to Fit Screen

function resizePageLoad() {
	displayHeight = window.innerHeight;

	ball.style.height = displayHeight/4 + "px";
	ball.style.width = displayHeight/4 + "px";

	center.style.height = displayHeight/4 + "px";
	center.style.width = displayHeight/4 + "px";

	page.style.height = displayHeight + "px";
}


window.addEventListener('load', resizePageLoad);


window.addEventListener('deviceorientation', function(event){

	var XAngle = event.gamma;
	var YAngle = event.beta;

	ball.style.marginTop = YAngle*8 + "px";
	ball.style.marginLeft = XAngle*8 + "px";

	if((XAngle < 1.0 && XAngle > -1.0) && (YAngle < 1.0 && YAngle > -1.0)) {
		ball.style.height = displayHeight/3.5 + "px";
		ball.style.width = displayHeight/3.5 + "px";
		ball.style.backgroundColor = "lightgreen";
		center.style.backgroundColor = "white";
	} else {
		ball.style.height = displayHeight/4 + "px";
		ball.style.width = displayHeight/4 + "px";
		ball.style.backgroundColor = "white";
		center.style.backgroundColor = "black";
	}

});