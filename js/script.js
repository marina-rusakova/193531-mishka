var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


var popup = document.querySelector(".modal-overlay");
var links = document.querySelectorAll(".modal-open-btn");
var close = popup.querySelector(".modal-close-btn");

var i = 0;

for (i = 0; i < links.length; ++i) {
  links[i].addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
  });
}

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});
