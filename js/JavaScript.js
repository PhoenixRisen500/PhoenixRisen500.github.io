window.onscroll = function() {myFunction()};

// Get the header
var menu = document.getElementById("myJavaScriptStickyMenu");

// Get the offset position of the navbar
var sticky = menu.offsetTop;

// Add the sticky class to the menu when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset-280 > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}