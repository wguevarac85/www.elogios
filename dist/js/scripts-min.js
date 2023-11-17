"use strict";

var slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".slider__section");
var sliderSectionLast = sliderSection[sliderSection.length - 1];
var btnleft = document.querySelector("#btn-left");
var btnRight = document.querySelector("#btn-right");
console.log(sliderSection);
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
function Next() {
  var sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLert = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLert = "-100%";
  }, 500);
}
function Prev() {
  var sliderSection = document.querySelector(".slider__section");
  var sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLert = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionLast);
    slider.style.marginLert = "-100%";
  }, 500);
}
btnRight.addEventListener('click', function () {
  Next();
});
btnleft.addEventListener('click', function () {
  Prev();
});
setInterval(function () {
  Next();
}, 5000);
//# sourceMappingURL=scripts-min.js.map
