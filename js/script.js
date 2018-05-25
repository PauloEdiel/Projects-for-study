var slides = document.querySelectorAll('.slide');
var i = 0;
var time = 1000;
var $buttonMudar = document.querySelector('[data-js="muda"]');


$buttonMudar.addEventListener('click', clickMudar, false);

function clickMudar() {
  if (i < slides.length - 1) {

    slides[i].classList.remove("slide-ativo");
    i++;
    slides[i].classList.add("slide-ativo");
  } else {
    i = 0;
  }
}





//window.onload = changeSlide();