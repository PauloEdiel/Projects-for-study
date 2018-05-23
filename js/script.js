(function(win, doc) {
  'use strit';
  win.onload = function() {
    var slides = doc.querySelectorAll('.slide');
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.toggle("slideativo");
    }
  };
})(window, document);