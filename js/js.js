
console.log("Cierren bien las etiquetas");
console.warn("");
console.error("");
console.debug(document);
console.info(document);
console.trace(document);
const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    // Si el tema actual es 'dark', cambiar a claro; si no, cambiar a oscuro
    const cuerpo = document.querySelector("body");
    const temaActual = cuerpo.getAttribute("data-bs-theme");
    if (temaActual === "dark") {
        temaClaro();
    } else {
        temaOscuro();
    }
}