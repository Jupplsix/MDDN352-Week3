// Get Required Elements from HTML

var page = document.querySelector("#fullscreenCover");
var ball = document.querySelector("#ball");

// Setup Required Variables

var displayHeight;

// Resize Page to Fit Screen

function resizePageLoad() {
	displayHeight = window.innerHeight;

	ball.style.height = displayHeight/5 + "px";
	ball.style.width = displayHeight/5 + "px";

	page.style.height = displayHeight + "px";
}


window.addEventListener('load', resizePageLoad);


window.addEventListener('deviceorientation', function(event){


	var XAngle = event.gamma;
	var YAngle = event.beta;

	ball.style.marginTop = YAngle*2 + "px";
	ball.style.marginLeft = XAngle*2 + "px";
});