// STICKY MENUBAR

var menubar = document.getElementById("menubar");
var sticky = menubar.offsetTop;

window.addEventListener("scroll", myFunction);

function myFunction() {
    console.log("Function read")
  if (window.pageYOffset >= sticky) {
      console.log("Sticky")
      menubar.style.position="fixed";
      menubar.style.top="0";

  } else {
      console.log("Not sticky")
      menubar.style.position="absolute";
      menubar.style.top="33vw";
  }
}


// HEADER ANIMATION
let opening = document.querySelector("path");
let openingText = document.querySelector("#openingText");
opening.addEventListener('animationend', change1);

function change1(evt){
    console.log(evt)
    if(evt.animationName=="svg"){
        console.log("CHANGE1");
        openingText.classList.add("appear");
    }
}

// BACK TO TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        console.log("Back to top button")
        document.getElementById("topButton").style.opacity = "1";
    } else {
        document.getElementById("topButton").style.opacity = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
let topButton = document.querySelector("#topButton");

topButton.addEventListener("click", topFunction);

function topFunction() {
    console.log("Goes up to top")
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
