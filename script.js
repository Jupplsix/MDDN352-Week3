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

	// tiltAdjust = map(height, 0, 180, 0, displayHeight);
	tiltAdjust = (height-0)/(180-0) * ((window.innerHeight)-0) + 0;

	tiltAdjust = tiltAdjust + "px";

	console.log(height);
	console.log(tiltAdjust);
	tiltElement.style.height = tiltAdjust;

});