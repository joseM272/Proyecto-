
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
anime({
 targets: '#explosion',
  scale: [1, 10], // Expande rápidamente
  opacity: [1, 0],
  duration: 200,
  easing: 'easeOutElastic',
  complete: function() {
    // Iniciar la secuela después de la explosión principal
    animateDebris();
  } 
});
function animateDebris() {
  const debris = document.querySelectorAll('.debris');
  debris.forEach((el, index) => {
    anime({
      targets: el,
      translateX: anime.random(-200, 200),
      translateY: anime.random(-100, 100),
      scale: anime.random(0.5, 2),
      opacity: [1, 0],
      duration: anime.random(1000, 3000),
      easing: 'easeOutQuart',
      delay: index * 100
    });
  });
}   