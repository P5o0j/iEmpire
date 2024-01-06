// Open the Modal
let modal = document.getElementById("myModalLightbox");
const overlay = document.querySelector(".overlay");

function openModal() {
  document.getElementById("myModalLightbox").style.display = "block";
  //   overlay.style.display = "block";
  //   overlay.classList.remove("hidden");
}

// Close the Modal
function closeModal() {
  document.getElementById("myModalLightbox").style.display = "none";
  //   overlay.style.display = "none";
  //   overlay.classList.add("hidden");
}

// const openModal = function () {
//   modal.style.display = "block";
//   overlay.style.display = "block";
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.style.display = "none";
//   overlay.style.display = "none";
//   overlay.classList.add("hidden");
// };

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
