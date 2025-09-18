const sliderRight = document.querySelector(".slide-right");
const sliderLeft = document.querySelector(".slide-left");
const carousel = document.querySelector(".carousel");
const dotsContainer = document.querySelector(".dots");

const totalSlides = 6;
let currentSlideIndex = 0;
const slideWidth = 500;
let translateX = 0;

for (let i = 0; i <= totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    goToSlide(i);
  });
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlideIndex);
  });
}

function goToSlide(index) {
  currentSlideIndex = index;
  translateX = -slideWidth * index;
  carousel.style.translate = `${translateX}px`;
  updateDots();
}

function slideNext() {
  if (currentSlideIndex < totalSlides - 1) {
    goToSlide(currentSlideIndex + 1);
  } else {
    goToSlide(0); // loop back to first
  }
}

function slidePrevious() {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  } else {
    goToSlide(totalSlides - 1); // loop to last
  }
}

sliderRight.addEventListener("click", slideNext);

sliderLeft.addEventListener("click", slidePrevious);

setInterval(slideNext, 5000);
