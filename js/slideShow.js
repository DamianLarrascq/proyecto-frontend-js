let slideIndex = 0
let timer;
let slideshow = document.getElementById('slideshow')
let slides = document.getElementsByClassName("slides");

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
    resetAutoPlay();
}

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[n].classList.add('active');
}

function startAutoPlay() {
    timer = setInterval(() => {
        plusSlides(1);
    }, 3000)
}

function stopAutoPlay() {
    clearInterval(timer);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

slideshow.addEventListener('mouseenter', stopAutoPlay);
slideshow.addEventListener('mouseleave', startAutoPlay);

showSlides(slideIndex)
startAutoPlay();