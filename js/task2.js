(function () {
	"use strict";

	// Page Elements
	var headingNumber = document.getElementById("heading-number");
	var pageContent = document.getElementById("page-content");
	var alertButton = document.getElementById("alert-button");
	var incrementHeadingButton = document.getElementById("increment-button");
	var addNewPButton = document.getElementById("add-new-p"); 

	// Functions
	function showValueAlert() {
		alert(headingNumber.innerText);
	}

	function setHeader(x) {
		headingNumber.innerText = x;
	}

	function incrementHeading() {
		setHeader(parseInt(headingNumber.innerText) + 1);
	}

	function addNewParagraph() {
		console.log("Clicked");
		var newP = document.createElement("p");
		newP.innerText = headingNumber.innerText;
		pageContent.appendChild(newP);
	}

	function init() {
		setHeader(10);
		alertButton.addEventListener("click", showValueAlert);
		incrementHeadingButton.addEventListener("click", incrementHeading);
		addNewPButton.addEventListener("click", addNewParagraph);
	}

	// Initialize page
	window.addEventListener("load", init, false);
})();
