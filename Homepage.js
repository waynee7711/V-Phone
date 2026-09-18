const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let currentSlide = 0;

function updateSlidePosition() {
  const slideHeight = document.querySelector(".slide").clientHeight;
  slides.style.transform = `translateY(-${currentSlide * slideHeight}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".arrow.down").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  });

  document.querySelector(".arrow.up").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });

  window.addEventListener("resize", updateSlidePosition);
})