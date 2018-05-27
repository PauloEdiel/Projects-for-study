var slides = document.querySelectorAll('.slide');
var i = 0;
var time = 3000;

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

window.onload = mudarSlide();