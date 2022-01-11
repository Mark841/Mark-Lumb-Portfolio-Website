// Changes the coloured navigation item based on the screen position
// (i.e. highlights the 'Features' item when on the features section)

$(document).ready(function(){
  var homeNavItem = $("#home-nav-element");
  homeNavItem.addClass('scrolled');
  var featureNavItem = $("#features-nav-element");
  var offset =  $("#features").position().top;
  $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= offset-50) {
               featureNavItem.addClass('scrolled');
               homeNavItem.removeClass('scrolled');
            } else {
              featureNavItem.removeClass('scrolled');
              homeNavItem.addClass('scrolled');
            }
        });
    });
});
