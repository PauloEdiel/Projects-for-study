var slides = document.querySelectorAll('.slide');
var control = document.querySelectorAll('.controll-slide-ball');
var i = 0;
var time = 3000;

Array.prototype.forEach.call(control, function(control) {
  control.addEventListener('click', showSlide, false)
});



setInterval(mudarSlide, time);


function mudarSlide() {
  if (i < slides.length - 1) {
    slides[i].classList.remove("slide-ativo");
    i++;
    slides[i].classList.add("slide-ativo");

  } else {

    i = 0;
  }

}

function showSlide(control) {
  console.log(control)

  //slides[i].classList.remove("slide-ativo");
  //slides[valor].classList.add("slide-ativo");

}

window.onload = mudarSlide();