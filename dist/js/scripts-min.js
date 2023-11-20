"use strict";

var listElements = document.querySelectorAll('.menu__item--show');
var list = document.querySelector('.menu__links');
var menu = document.querySelector('.menu__hamburguer');
var addClick = function addClick() {
  listElements.forEach(function (element) {
    element.addEventListener('click', function () {
      var subMenu = element.children[1];
      var height = 0;
      element.classList.toggle('menu__item--active');
      if (subMenu.clientHeight === 0) {
        height = subMenu.scrollHeight;
      }
      subMenu.style.height = "".concat(height, "px");
    });
  });
};
var deleteStyleHeight = function deleteStyleHeight() {
  listElements.forEach(function (element) {
    if (element.children[1].getAttribute('style')) {
      element.children[1].removeAttribute('style');
      element.classList.remove('menu__item--active');
    }
  });
};
window.addEventListener('resize', function () {
  if (window.innerWidth > 800) {
    deleteStyleHeight();
    if (list.classList.contains('menu__links--show')) list.classList.remove('menu__links--show');
  } else {
    addClick();
  }
});
if (window.innerWidth <= 800) {
  addClick();
}
menu.addEventListener('click', function () {
  list.classList.toggle('menu__links--show');
});
var button = document.getElementById('button-1');
var modal = document.getElementById('modal');
var button2 = document.getElementById('button-2');
// const modal2 = document.getElementById('modal2');

var button3 = document.getElementById('button-3');
// const modal3 = document.getElementById('modal3');

var button4 = document.getElementById('button-4');
// const modal4 = document.getElementById('modal4');

console.log(button);
console.log(modal);
button.addEventListener('click', function () {
  return modal.classList.add('modal--show');
});
modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) modal.classList.remove('modal--show');
});
button2.addEventListener('click', function () {
  return modal.classList.add('modal--show');
});
modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) modal.classList.remove('modal--show');
});
button3.addEventListener('click', function () {
  return modal.classList.add('modal--show');
});
modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) modal.classList.remove('modal--show');
});
button4.addEventListener('click', function () {
  return modal.classList.add('modal--show');
});
modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) modal.classList.remove('modal--show');
});
var slides = document.querySelectorAll('.slider__slide');
var btnPrev = document.getElementById('btn-prev');
var btnNex = document.getElementById('btn-next');
var current = 0;
function slider() {
  for (var i = 0; i < slides.length; i++) {
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
btnPrev.addEventListener('click', function () {
  previousSlide();
});
btnNex.addEventListener('click', function () {
  nextSlide();
});
setInterval(nextSlide, 5000); // Cambia la imagen cada 2 segundos
//# sourceMappingURL=scripts-min.js.map
