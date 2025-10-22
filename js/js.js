
console.log("Cierren bien las etiquetas");
console.warn("");
console.error("");
console.debug(document);
console.info(document);
console.trace(document);
const temaOscuto = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun fill");
}
