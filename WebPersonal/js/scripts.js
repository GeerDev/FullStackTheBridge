// Evento que se dispara cuando el documento HTML ha sido cargado y parseado
document.addEventListener('DOMContentLoaded', () =>{
    
    // Referencias al documento HTML
    const navBar = document.querySelector('.nav');
    const navbarMenu = document.querySelector('.nav__enlaces');
    const scrollUp = document.querySelector('.scroll-up-btn');
    const cruz = document.querySelector('#cruz');
    const botonNavegacion = document.querySelector(".menu-btn");
    const navbarEnlace = document.querySelectorAll('.navbar__enlace');
    const botonScroll = document.querySelector('.scroll-up-btn');

    // Scroll - Mostrar Barra de Navegación Sticky y Mostrar el Botón Scroll
    // El evento es generado cuando el usuario realiza desplazamiento (scrolls) sobre el contenido de un elemento.
    // Element.onscroll es equivalente a element.addEventListener("scroll" ... ).
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (window.scrollY > 40 && !navbarMenu.classList.contains('active')) {
        navBar.classList.add("javascript");
    } else {
        navBar.classList.remove("javascript");
    }

    if (window.scrollY > 500 && !navbarMenu.classList.contains('active')) {
        scrollUp.classList.add("show");
    } else {
        scrollUp.classList.remove("show");
    }
    } 

    // Botón Scroll arriba
    botonScroll.addEventListener('click',() =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
       
    // Maquina de escribir
    const typed = new Typed("#typing", {
        strings: ["Front-End.", "Back-End.", "Devops.", "Developer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Eventos - Botón Menú Desplegable y Enlaces- Toggle
    botonNavegacion.addEventListener('click', () => {
        navbarMenu.classList.toggle("active");
        cruz.classList.toggle("active");
        scrollUp.classList.remove("show");
        navBar.classList.toggle("javascript");
    });

    navbarEnlace.forEach(elemento => {
        elemento.addEventListener('click', () => {
            if(navbarMenu.classList.contains('active')){
                navbarMenu.classList.toggle("active");
                cruz.classList.toggle("active");
            }
        });
    })

});