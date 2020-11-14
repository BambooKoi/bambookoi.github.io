// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-102814295-6');


// Import header.html, nav.html
$(function() {
  $("#header-js").load("header.html");
  $("#nav-js").load("nav.html");
  $("#footer-js").load("footer.html");  //make footer.html by copying footer from wipindex.html then add the footer div to all pages
});


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
