                         /* DESPLAZAMIENTO SUAVE (SMOOTH SCROLLING) */
                         
let navegador = document.querySelectorAll(".navegation ul a"); 

for (let links of navegador) {
    links.addEventListener("click", desplazarSuave);
} 

function desplazarSuave(a){
    a.preventDefault();
    let href = this.getAttribute("href"); 
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
} 


                         /* MODO CLARO/OSCURO */

const modo = document.querySelector(".switch-dark-light");

modo.addEventListener("click", e => {
    modo.classList.toggle("active");
    document.body.classList.toggle("active");
})