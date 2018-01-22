(function () {
	"use strict";

	function addEntryToTableRow( value, row ) {
		var newEntry = document.createElement("td");
		newEntry.innerText = value;
		row.appendChild(newEntry);
	}

	function getPowTwoTable(x) {
		var pow2Table = document.getElementById("pow-two-table").children[0];
		for (var i = 0; i < x; i++) {
			var newRow = document.createElement("tr");
			addEntryToTableRow(i, newRow);
			addEntryToTableRow(Math.pow(2, i), newRow);
			pow2Table.appendChild(newRow);
		}
	}

	function init() {
		getPowTwoTable(8);
	}

	window.addEventListener("load", init, false);
})();
