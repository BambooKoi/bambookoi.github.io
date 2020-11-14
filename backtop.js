// Back to Top Script has to load after the content
// It gets its own JS file.

// Show Back to Top on Scroll:
var scrollup = document.getElementById("backtop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollup.style.display = "block";
  } else {
    scrollup.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
