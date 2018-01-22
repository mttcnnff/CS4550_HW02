(function () {
	"use strict";

	// Constants
	const loremIpsemSource = "https://en.wikipedia.org/wiki/Lorem_ipsum"
	const loremImpsemText = "Lorem ipsum dolor sit amet consectetur " +
	"adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
	"dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
	"exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
	"consequat. Duis aute irure dolor in reprehenderit in voluptate " +
	"velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " + 
	"sint occaecat cupidatat non proident, sunt in culpa qui " +
	" officia deserunt mollit anim id est laborum.";

	const nintyNineBottlesSource = "https://en.wikipedia.org/wiki/99_Bottles_of_Beer"
    const nintyNineBottlesText = "`${i} bottles of beer on the wall, ${i} " +
	"bottles of beer. \nTake one down, pass it around, ${i - 1} bottles of beer on " +
	"the wall...`";

	// Functions
	function getNewContentDiv() {
		var newContentDiv = document.createElement("div");
		newContentDiv.setAttribute("class", "column content");
		newContentDiv.setAttribute("id", "content");
		return newContentDiv;
	}

	function changeContent(newContent) {
		var content = document.getElementById("content");
		content.parentNode.replaceChild(newContent, content);
	}

	function getAttributionContent(link) {
		var newA = document.createElement("a");
		newA.innerText = "Attribution";
		newA.setAttribute("href", link);
		return newA;
	}

	function getLoremIpsemContent() {
		var loremIpsemContent = getNewContentDiv();
		var loremIpsemAttribution = getAttributionContent(loremIpsemSource);
		loremIpsemContent.appendChild(loremIpsemAttribution)
		for (var i = 0; i < 4; i++) {
			var newP = document.createElement("p");
			newP.innerText = loremImpsemText;
			loremIpsemContent.appendChild(newP);
		}
		return loremIpsemContent;
	}

	function getBottlesContent() {
		var bottlesContent = getNewContentDiv();
		var nintyNineBottlesAttribution = getAttributionContent(nintyNineBottlesSource);
		bottlesContent.appendChild(nintyNineBottlesAttribution);
		for (var i = 99; i > 95; i--) {
			var newP = document.createElement("p");
			newP.innerText = eval(nintyNineBottlesText);
			bottlesContent.appendChild(newP);
		}
		return bottlesContent;
	}

	function getLastThingContent() {
		var lastThingContent = getNewContentDiv();
		var newP = document.createElement("p");
		newP.innerText = "this is the third thing";
		lastThingContent.appendChild(newP);
		return lastThingContent;
	}

	// Page Elements
	var contentDiv = document.getElementById("content");
	var loremIpsemLink = document.getElementById("lorem-ipsem");
	var bottlesLink = document.getElementById("99-bottles");
	var lastThingLink = document.getElementById("last-thing");

	// New Content
	const loremIpsemContent = getLoremIpsemContent();
	const bottlesContent = getBottlesContent();
	const lastThingContent = getLastThingContent();

	function init() {
		changeContent(loremIpsemContent);
		loremIpsemLink.addEventListener("click", 
			() => {changeContent(loremIpsemContent)}, false);
		bottlesLink.addEventListener("click", 
			() => {changeContent(bottlesContent)}, false);
		lastThingLink.addEventListener("click", 
			() => {changeContent(lastThingContent)}, false);
	}

	// Initialize page
	window.addEventListener("load", init, false);
})();
