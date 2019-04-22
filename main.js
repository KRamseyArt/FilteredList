//get input element
let filterInput = document.getElementById("filterInput");
//add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
	//get value of input
	let filterValue = document.getElementById("filterInput").value.toUpperCase();

	//get names UL
	let ul = document.getElementById("names");
	//get LIs from UL
	let item = ul.querySelectorAll("li.collection-item");

	//loop through collection-item li's
	for (let i = 0; i < item.length; i++) {
		let a = item[i].getElementsByTagName("a")[0];
		//if matched
		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			item[i].style.display = "";
		} else {
			item[i].style.display = "none";
		}
	}
}
