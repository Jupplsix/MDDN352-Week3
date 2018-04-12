

// Get Required Elements from HTML

var page = document.querySelector("#fullscreenCover");
var tiltElement = document.querySelector("#tilt");

var displayHeight;



// Resize Page to Fit Screen

function resizePageLoad() {
	var height = window.innerHeight;
	displayHeight = height;
	height = height + "px";
	displayHeight = height;
}


window.addEventListener('load', resizePageLoad);

window.addEventListener('deviceorientation', function(event){

	var height = event.beta;

	heightDisplay = map(height, 45, 135, 0, displayHeight);

	heightDisplay = heightDisplay + "px";
	tiltElement.style.height = heightDisplay;

});