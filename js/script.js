(function(doc, win) {
  'use strict'
  win.onload = function() {
    var slideshowwidth = doc.querySelector('[data-js="slideshow"]').offsetWidth;
    var objs = doc.querySelectorAll('slide')

    for (var i in objs) {
      alert(objs[i]);
    }
  }

}(document, window));