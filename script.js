

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


// window.addEventListener('deviceorientation', function(event){

// 	var YAngle = event.beta;
// 	// tiltAdjust = map(YAngle, 45, 135, 0, displayHeight/2);

// 	// tiltElement.style.height = tiltAdjust + "px";

// 	text1.textContent = "stuff";
// 	// text2.textContent = tiltAdjust;
// });