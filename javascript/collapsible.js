// Handles the collapsing and opening of FAQ collapsable items (where the answers are stored)

$(document).ready(function(){
  <!-- javascript for collabsibles - taken from example at https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate -->
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
