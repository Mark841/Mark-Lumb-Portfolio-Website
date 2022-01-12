// Handles moving the navigation to stay at a fixed position on the screen when scrolling

var navbar;
var sticky = 105;
var main;
var logoBanner;

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", initialize, false);
} else if (document.all) {
  document.write('<script type="text/javascript" id="domReadyTest" defer="defer" src="javascript:void(0)"></script>');

  var domReadyTest = document.getElementById("domReadyTest")

  domReadyTest.onreadystatechange = function() {
    if (this.readyState == "complete") {
      initialize();
    }
  }
}

function initialize() {
  // Get the navbar
  navbar = document.getElementById("navbar");
  main = document.getElementById("main");
}

window.onscroll = function() {handleScroll()};
window.onresize = function() {handleResize()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleScroll() {
  if (window.getComputedStyle(navbar, null).display == "flex" && window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.width = window.getComputedStyle(main).width;
  } else {
    navbar.classList.remove("sticky");
  }
}

function handleResize() {
  if (window.getComputedStyle(navbar, null).display == "block") {
    navbar.classList.remove("sticky");
  }
  navbar.style.width = window.getComputedStyle(main).width;
}
