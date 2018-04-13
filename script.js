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
	height = height + "px";
	tiltElement.style.height = height;

});