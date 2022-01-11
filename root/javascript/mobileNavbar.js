// Handles functions for the mobile navbar

var mobileNavbarContent;
var menuIcon;
var menuActive = false;

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
  mobileNavbarContent = document.getElementById("mobile-navbar-content");
  menuIcon = document.getElementById("menu-icon");

  if (document.all) {
    menuIcon.attachEvent('onclick', toggleMobileNavbar);
    window.attachEvent('scroll', closeNavbar);
  } else {
    menuIcon.addEventListener('click', toggleMobileNavbar, false);
    window.addEventListener('scroll', closeNavbar, false);
  }
}

function toggleMobileNavbar() {
  if (menuActive) {
    mobileNavbarContent.style.display = "none";
    menuIcon.style.backgroundColor = "white";
  } else {
    mobileNavbarContent.style.display = "block";
    menuIcon.style.backgroundColor = "#e3e3e3";
  }
  menuActive = !menuActive;
}

function closeNavbar() {
  if (menuActive) {
    mobileNavbarContent.style.display = "none";
    menuIcon.style.backgroundColor = "white";
  }
  menuActive = false;
}
