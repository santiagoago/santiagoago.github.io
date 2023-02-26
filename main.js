//datos
addEventListener(`DOMContentLoaded`,() => {
    const contadores = document.querySelectorAll(`.contador__cantidad`)
    const velocidad = 1000

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad

                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador, 5)
                }else{
                    contador.innerText = cantidad_maxima
                }
            }
            actualizar_contador()
        }
    }
    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add(`animar`)
                elemento.target.classList.remove(`ocultar`)
                setTimeout(animarContadores,300)
            }
        });
    }
    const observer = new IntersectionObserver(mostrarContadores,{
        threshold: 0.75
    })
    const elementosHtml = document.querySelectorAll(`.contador`);
    elementosHtml.forEach(elementoHtml =>{
        observer.observe(elementoHtml)
    })
})
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