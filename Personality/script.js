// Votre code Javascript
let button1 = document.getElementById("dwayneJohnsonButton")
let button2 = document.getElementById("vinDieselButton")
let button3 = document.getElementById("imenEsButton")
let button4 = document.getElementById("jessicaAlbaButton")
let button5 = document.getElementById("zitaHanrotButton")

// const button= document.querySelectorAll(" .button li")
let bw = document.getElementById('bw')
let dwayneJohnson = document.getElementById("dwayneJohnson")
let vinDiesel = document.getElementById("vinDiesel")
let imenEs = document.getElementById("imenEs")
let jessicaAlba = document.getElementById("jessicaAlba")
let zitaHanrot = document.getElementById("zitaHanrot")

let perso = document.querySelectorAll(".perso")

perso.forEach(element => {
	element.addEventListener("click", () => {
		myfunction(element);
	});
});

window.onload = defaut();

function defaut() {
	imenEs.classList.toggle("active");
	imenEs.querySelector(".color").classList.toggle("active");
}


button1.addEventListener('click', () => {
	dwayneJohnson.classList.toggle("active");
	dwayneJohnson.querySelector(".color").classList.toggle("active");


})


button2.addEventListener('click', () => {

	vinDiesel.classList.toggle("active");
	vinDiesel.querySelector(".color").classList.toggle("active");


})
button3.addEventListener('click', () => {
	imenEs.classList.toggle("active");
	imenEs.querySelector(".color").classList.toggle("active");


})
button4.addEventListener('click', () => {
	jessicaAlba.classList.toggle("active");
	jessicaAlba.querySelector(".color").classList.toggle("active");


})
button5.addEventListener('click', () => {
	zitaHanrot.classList.toggle("active");
	zitaHanrot.querySelector(".color").classList.toggle("active");


})

	.addEventListener('click', () => {
		console.log("je suis trop forte");
		button1.classList.toggle("active");

	})

//    vinDiesel.classList.remove("active");
//    vinDiesel.querySelector(".color").classList.remove("active");
//    imenEs.classList.remove("active");
//    imenEs.querySelector(".color").classList.remove("active");
//    jessicaAlba.classList.remove("active");
//    jessicaAlba.querySelector(".color").classList.remove("active");
//    zitaHanrot.classList.remove("active");
//    zitaHanrot.querySelector(".color").classList.remove("active");