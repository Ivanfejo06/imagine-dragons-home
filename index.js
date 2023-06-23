document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("dos");
    var shouldStickPosition = navbar.offsetTop;
  
    function addOrRemoveStickyClass() {
      console.log(window.pageYOffset);
      if (window.pageYOffset >= shouldStickPosition) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  
    window.onscroll = function() {
      addOrRemoveStickyClass();
    };
  });