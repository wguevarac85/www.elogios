let slides = document.querySelectorAll('.slider__slide');
const btnPrev = document.getElementById('btn-prev');
const btnNex = document.getElementById('btn-next');
let current = 0;

function slider() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider__slide--active');
    }
    slides[current].classList.add('slider__slide--active');
}

function nextSlide() {
    if (current + 1 == slides.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
}

function previousSlide() {
    if (current == 0) {
        current = slides.length - 1;
    } else {
        current--;
    }
    slider();
}

btnPrev.addEventListener('click', ()=>{
    previousSlide()
})
btnNex.addEventListener('click', ()=>{
    nextSlide()
})


setInterval(nextSlide, 5000); // Cambia la imagen cada 2 segundos
