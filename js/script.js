"use strict";

// Get the button:
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//CLOCK
const timeElement = document.getElementById("clock");

function updateTime() {
  const now = new Date();
  // const day = now.getDate();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the string with leading zeroes
  const clockStr = `${day.toString().padStart(2, 0)}/${month
    .toString()
    .padStart(2, 0)}/${year} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  timeElement.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000);

// MENU ELEMENTS FADE
// const nav = document.querySelector(".nav-links");

// const handleHover = function (e) {
//   if (e.target.classList.contains("nav-link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav-links").querySelectorAll(".nav-link");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = this;
//     });
//   }
// };

// nav.addEventListener("mouseover", handleHover.bind(0.3));

// nav.addEventListener("mouseout", handleHover.bind(1));
