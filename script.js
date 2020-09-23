// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-102814295-6');


// Import header.html, nav.html
$(function() {
  $("#header").load("header.html");
  $("#nav-js").load("nav.html");
});


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


// Fix Navigation Menu Width if Switched between <= 1080px:
// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 1080px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
  }

  // media query correct nav menu if window resized
  function WidthChange(mq) {
  if (mq.matches) {
      document.getElementById("menu").style.width = "250px";
  } else {
      document.getElementById("menu").style.width = "0";
  }
}


// Navigation Hamburger Toggle
function openNav() {
  document.getElementById("menu").style.width = "100vw";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
}
