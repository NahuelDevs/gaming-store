const boton = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');

boton.addEventListener('click', () => {
    boton.classList.toggle('activo');
    menu.classList.toggle('activo');
});

// Opcional: cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!boton.contains(e.target) && !menu.contains(e.target)) {
        boton.classList.remove('activo');
        menu.classList.remove('activo');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('boton-categorias');
    const lista = document.getElementById('lista-categorias');

    boton.addEventListener('click', () => {
        lista.classList.toggle('visible');
    });

    // Opcional: cerrar el menú si haces clic fuera
    window.addEventListener('click', function (e) {
        if (!boton.contains(e.target) && !lista.contains(e.target)) {
            lista.classList.remove('visible');
        }
    });
});