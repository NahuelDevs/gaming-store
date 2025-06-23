// Detectar cuando el elemento entra en pantalla
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2 
});

// Seleccionar los elementos que queremos animar
document.querySelectorAll('.aparecer').forEach(el => observador.observe(el));