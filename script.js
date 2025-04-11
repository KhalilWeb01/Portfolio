let currentIndex = 0;

function scrollCarousel(direction) {
    const track = document.getElementById("carouselTrack");
    const items = track.querySelectorAll(".listing-item");
    const itemWidth = items[0].offsetWidth + 20; // ширина карточки + отступ
    const maxIndex = items.length - 3; // 3 карточки видимы одновременно

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Функция для показа/скрытия деталей карточки
function toggleDetails(element) {
    element.classList.toggle("open");
}
let testimonialIndex = 0;

function scrollTestimonials(direction) {
    const track = document.getElementById("testimonialTrack");
    const items = track.querySelectorAll(".testimonial-item");
    const maxIndex = items.length - 1;

    testimonialIndex += direction;

    if (testimonialIndex < 0) testimonialIndex = 0;
    if (testimonialIndex > maxIndex) testimonialIndex = maxIndex;

    track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
// Счетчик достижении
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 10000; // чем меньше — тем быстрее

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

// Показать счётчики, когда секция видна
const achievementsSection = document.querySelector('.achievements-section');
let countersStarted = false;

window.addEventListener('scroll', () => {
    const sectionTop = achievementsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!countersStarted && sectionTop < windowHeight - 100) {
        animateCounters();
        countersStarted = true;
    }
});
