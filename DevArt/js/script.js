const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

button.addEventListener("click", doSomething);

const hamburger = document.getElementById("hamburger-menu");
const nav = document.getElementById("main-nav");

hamburger.addEventListener("click", function() {
	nav.classList.toggle("show");
 });
 
  
 function menuicon_toggle()
{
	document.getElementById('menu-icon').classList.toggle('open');
	document.getElementById('menu-icon-content').classList.toggle('open');
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '20px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:90, origin:'bottom'})
sr.reveal('.about,.services,.portfolio,.contact',{delay:100, origin:'bottom'})