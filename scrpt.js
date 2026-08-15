const btnContinuar = document.getElementById("btnContinuar");
const btnAbrir = document.getElementById("btnAbrir");

const inicio = document.getElementById("inicio");
const sobreSeccion = document.getElementById("sobreSeccion");
const cartaSeccion = document.getElementById("cartaSeccion");

const sobre = document.getElementById("sobre");


// ==========================================
// BOTÓN CONTINUAR
// ==========================================

btnContinuar.addEventListener("click", function () {

    // Ocultar pantalla inicial

    inicio.style.display = "none";

    // Mostrar el sobre

    sobreSeccion.style.display = "flex";

});


// ==========================================
// BOTÓN ABRIR CARTA
// ==========================================

btnAbrir.addEventListener("click", function () {

    // Activar animación del sobre

    sobre.classList.add("abierto");


    // Esperar a que termine la animación

    setTimeout(function () {

        sobreSeccion.style.display = "none";

        cartaSeccion.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2200);

});