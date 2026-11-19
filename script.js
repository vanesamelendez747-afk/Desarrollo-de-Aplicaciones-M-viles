
// BUSCADOR DE TEMAS
const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".tarjeta");

buscador.addEventListener("input", function() {
    const texto = this.value.toLowerCase();

    tarjetas.forEach(tarjeta => {
        const contenido = tarjeta.textContent.toLowerCase();

        tarjeta.style.display =
            contenido.includes(texto) ? "block" : "none";
    });
});

// MODO OSCURO
const botonModo = document.getElementById("modoOscuro");

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        botonModo.textContent = "☀️ Modo claro";
    } else {
        botonModo.textContent = "🌙 Modo oscuro";
    }
});

// BOTON VOLVER ARRIBA
const botonSubir = document.getElementById("subir");

window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
});

botonSubir.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// MENSAJE EN CONSOLA
console.log("DEV MOBILE iniciado correctamente");
console.log("Tutorial de desarrollo móvil listo");
