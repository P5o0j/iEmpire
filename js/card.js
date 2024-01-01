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
