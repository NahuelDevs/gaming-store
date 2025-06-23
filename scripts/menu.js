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