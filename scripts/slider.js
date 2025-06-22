const slider = document.getElementById('slider');
const buttons = document.querySelectorAll('.button-holder .button');
let currentSlide = 0;
const totalSlides = slider.children.length;

function moverSlider(index) {
    currentSlide = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    actualizarBotones();
}

function actualizarBotones() {
    buttons.forEach((btn, i) => {
        btn.classList.toggle('activo', i === currentSlide);
    });
}

// Avanza automático cada 7 segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    moverSlider(currentSlide);
}, 7000);

// Activar primer slide
moverSlider(0);

// Hacer que los botones funcionen al clic
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        moverSlider(index);
    });
});
