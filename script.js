

// Get Required Elements from HTML

var page = document.querySelector("#fullscreenCover");

var tiltElement = document.querySelector("#tilt");

var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");

// Setup Required Variables

var displayHeight;


// Resize Page to Fit Screen

function resizePageLoad() {
	displayHeight = window.innerHeight;
	page.style.height = displayHeight + "px";
}


window.addEventListener('load', resizePageLoad);

window.addEventListener('deviceorientation', function(event){

	var YAngle = event.beta;
	tiltAdjust = map(YAngle, 45, 135, 0, displayHeight/2);

	tiltElement.style.height = tiltAdjust + "px";

	text1.textContent = YAngle;
	text2.textContent = tiltAdjust;
});