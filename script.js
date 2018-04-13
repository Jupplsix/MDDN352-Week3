

// Get Required Elements from HTML

var page = document.querySelector("#fullscreenCover");
var tiltElement = document.querySelector("#tiltProgress");

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
	tiltAdjust = map(YAngle, 0, 180, 0, displayHeight);

	tiltElement.style.height = YAngle + "px";
});