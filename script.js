

// Get Required Elements from HTML

var page = document.querySelector("#fullscreenCover");

var tiltElement = document.querySelector("#tilt");

var pos = document.querySelector("#pos");




// Resize Page to Fit Screen

function resizePageLoad() {
	var height = window.innerHeight;
	var heightpos = height/2;


	height = height + "px";
	heightpos = heightpos + "px";

	page.style.height = height;
	pos.style.marginTop = heightpos;
}

function geo(x, y) {
	pos.textContent = (x + " " + y);
}

window.addEventListener('load', resizePageLoad);

window.addEventListener('deviceorientation', function(event){

	var height = event.beta;
	height = height + "px";
	tiltElement.style.height = height;

});

navigator.geolocation.getCurrentPosition(function(position) {
  geo(position.coords.latitude, position.coords.longitude);
});