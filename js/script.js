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

// CARD MODAL

const openModal = function () {
  modal.style.display = "block";
  overlay.style.display = "block";
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
  overlay.classList.add("hidden");
};

// create references to the modal...
let modal = document.getElementById("myModal");
// var modal = document.querySelector(".modal");
// to all images -- note I'm using a class!
let images = document.getElementsByClassName("modal-img");
// the image in the modal
let modalImg = document.getElementById("img01");
// and the caption in the modal
let captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    openModal();
  };
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  closeModal();
};

const overlay = document.querySelector(".overlay");

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
