/* Part 2: JavaScript Functions */

// Example: calculate area with parameters & return value
function calculateArea(width, height) {
  return width * height; // returns a value
}

// Example: demonstrate scope
let globalMessage = "Hello from the global scope!";

function showMessage() {
  let localMessage = "Hello from the local scope!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // only accessible here
}
showMessage();

/* Part 3: Combining CSS & JS */

// Animate Box
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  animateBox.classList.add("animate");

  // Remove class after animation ends to allow re-trigger
  animateBox.addEventListener("animationend", () => {
    animateBox.classList.remove("animate");
  }, { once: true });
});

// Modal Logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
