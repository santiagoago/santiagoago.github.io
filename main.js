//tomar clases
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const contenido = document.querySelector(".contenido");
const estatico = document.querySelector(".estatico");
const barra1 = document.querySelector(".uno")
const barra2 = document.querySelector(".dos")
const barra3 = document.querySelector(".tres")
const barra4 = document.querySelector(".cuatro")
const barra5 = document.querySelector(".cinco")
const barra6 = document.querySelector(".seis")
//declarar funcion toggle
function toggleMenu(){
    menu.classList.toggle("menu_opened")
};
//agragar evento
openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
barra1.addEventListener("click", toggleMenu);
barra2.addEventListener("click", toggleMenu);
barra3.addEventListener("click", toggleMenu);
barra4.addEventListener("click", toggleMenu);
barra5.addEventListener("click", toggleMenu);
barra6.addEventListener("click", toggleMenu);
//añadir scroll
ScrollReveal().reveal('.sol');
ScrollReveal().reveal('.tarot1', { delay: 500 });
ScrollReveal().reveal('.moon1', { delay: 500 });
ScrollReveal().reveal('.dolar', { delay: 500 });
ScrollReveal().reveal('.imagenes', { delay: 500 });