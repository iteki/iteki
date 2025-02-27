let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slides[currentIndex].style.display = "block";
    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);
showSlides();
