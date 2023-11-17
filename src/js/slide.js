const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnleft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
console.log(sliderSection);


slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLert = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLert = "-100%";
    },500);
}

function Prev(){
    let sliderSection = document.querySelector(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLert = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionLast);
        slider.style.marginLert = "-100%";
    },500);
}

btnRight.addEventListener('click', function(){
    Next();
})
btnleft.addEventListener('click',function(){
    Prev();
});
setInterval(function(){
    Next();
},5000);