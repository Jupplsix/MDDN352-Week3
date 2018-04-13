// Get Required Elements from HTML

var page = document.querySelector("#fullscreenCover");
var tiltElement = document.querySelector("#tiltProgress");

// Resize Page to Fit Screen

function resizePageLoad() {

	var height = window.innerHeight;
	height = height + "px";
	page.style.height = height;
}


window.addEventListener('load', resizePageLoad);

window.addEventListener('deviceorientation', function(event){

	var height = event.beta;
	tiltAdjust = map(height, 0, 180, 0, displayHeight);
	tiltAdjust = tiltAdjust + "px";
	tiltElement.style.height = tiltAdjust;

});