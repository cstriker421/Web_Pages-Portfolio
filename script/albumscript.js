const slides = document.querySelectorAll('.slides');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 5000);