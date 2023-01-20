// zoomIn 0.1

var fadeElements = document.getElementsByClassName('zoomIn');
var slideElements = document.getElementsByClassName('slideIn');


function zoomIn() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('zoomIn--visible');
			element.classList.add('zoomIn--animate');
			element.classList.remove('zoomIn--hidden');
		} else {
			element.classList.remove('zoomIn--visible');
			element.classList.add('zoomIn--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('zoomIn--visible');
			element.classList.add('zoomIn--hidden');
		}
	}
}

function slideIn() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < slideElements.length; index++) {
		var element = slideElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('slideIn--visible');
			element.classList.add('slideIn--animate');
			element.classList.remove('slideIn--hidden');
		} else {
			element.classList.remove('slideIn--visible');
			element.classList.add('slideIn--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('slideIn--visible');
			element.classList.add('slideIn--hidden');
		}
	}
}

//var myElement = document.getElementsByClassName('slideIn');
//var bounding = myElement.getBoundingClientRect();

var sectionId = ["home","aboutme","resume","projects","hobbies","blog","contact"]
var backgroundText = document.querySelector('.background-text')



document.addEventListener('scroll', zoomIn);
window.addEventListener('resize', zoomIn);

document.addEventListener('scroll', slideIn);
window.addEventListener('resize', slideIn);

document.addEventListener('DOMContentLoaded', function() {
    zoomIn();
	slideIn();
})