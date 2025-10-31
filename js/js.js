
console.log("Inicializando sistema de tema");

const temaOscuro = () => {
    document.body.classList.add('tema-oscuro');
    document.querySelector('#dl-icon').className = 'bi bi-sun-fill';
    localStorage.setItem('tema', 'oscuro');
}

const temaClaro = () => {
    document.body.classList.remove('tema-oscuro');
    document.querySelector('#dl-icon').className = 'bi bi-moon-fill';
    localStorage.setItem('tema', 'claro');
}

const cambiarTema = () => {
    if (document.body.classList.contains('tema-oscuro')) {
        temaClaro();
    } else {
        temaOscuro();
    }
}

// Aplicar tema guardado al cargar
document.addEventListener('DOMContentLoaded', () => {
    const preferencia = localStorage.getItem('tema');
    if (preferencia === 'oscuro') {
        temaOscuro();
    } else {
        temaClaro();
    }
});

//hacer que las letras se escriban con una nimacion.

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction va de 0 a 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calcular el estado actual de la animación
    let progress = timing(timeFraction);

    draw(progress); // dibujar

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}