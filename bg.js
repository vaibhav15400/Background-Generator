var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("bcolor");

function setbg(){
		body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ","
	+ color3.value
	+")";

}

color1.addEventListener("input", setbg);
color2.addEventListener("input", setbg);
color3.addEventListener("input", setbg);
