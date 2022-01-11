// Smoothly scrolls between sections of the screen when certain items are tapped

$(document).ready(function(){

  $("#explore-button").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#introduction").offset().top
      }, 1000);
  })

  $(".home-nav-element").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#home").offset().top
      }, 1500);
  })

  $(".qualifications-nav-element").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#qualifications").offset().top
      }, 1500);
  })
    
  $(".work_examples-nav-element").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#work_examples").offset().top
      }, 1500);
  })
});
