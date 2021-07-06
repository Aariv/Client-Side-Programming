window.onload = init;

function init() {
	document.getElementById("btn1").onclick = changeHeading1;
	document.getElementById("btn2").onclick = changeHeading2;
	document.getElementById("btn3").onclick = changeParagraph;
}

function changeHeading1() {
	var elm = document.getElementById("heading1");
	console.log(elm.innerHTML);
	elm.innerHTML = "Hello";
}

function changeHeading2() {
	var elms = document.getElementByTagName("h2");
	for(var i = 0; i < elms.length; ++i) {
		elms[i].innerHTML = "Hello Again!";
	}
}

function changeParagraph() {
	// Not implemented.
}