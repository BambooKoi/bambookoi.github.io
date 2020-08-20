// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-102814295-6');

// Show back to top on scroll
window.onscroll = function() {scrolling()};
        
function scrolling() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("scrolled").innerHTML = '<a href="#" id="scrolled" title="Back to top"><i class="las la-angle-up"></i></a>';
  } else {
      document.getElementById("scrolled").innerHTML = '';
  }
}

// Import header.html, nav.html and footer.html
$(function() {
  $("#header").load("header.html");
  // $("#nav-js").load("nav.html");
  $("#footer").load("footer.html");
});

/*
// nav toggle
function navToggle() {
  var x = document.getElementById("nav-js");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
    document.getElementByClassName("burger").innerHTML = '<i class="las la-bars"></i>';
  } else {
    x.style.display = "inline-block";
    // Toggle icon: X doesn't appear?
    document.getElementByClassName("burger").innerHTML = '<i class="las la-times"></i>';
  }
}
*/