// Simple Countdown for Article Offer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (display) display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            if (display) display.textContent = "00:00";
        }
    }, 1000);
}

// Carousel Logic
function initCarousel() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        const dots = carousel.parentElement.querySelectorAll('.dot'); // Dots are usually in correct wrapper

        if (!inner || items.length === 0) return;

        let currentIndex = 0;
        const totalItems = items.length;

        function showSlide(index) {
            // Handle wrap-around
            if (index >= totalItems) currentIndex = 0;
            else if (index < 0) currentIndex = totalItems - 1;
            else currentIndex = index;

            inner.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update dots
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[currentIndex]) dots[currentIndex].classList.add('active');
            }
        }

        // Auto Play
        setInterval(() => {
            currentIndex++;
            showSlide(currentIndex);
        }, 3000);
    });
}

window.onload = function () {
    const nineMinutes = 60 * 9;
    const display = document.querySelector('#timer');
    if (display) startTimer(nineMinutes, display);

    initCarousel();

    // Set Current Date in Alert Bar
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('pt-BR', options);
    }
};
