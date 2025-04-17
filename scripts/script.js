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
                setTimeout(updateCount, 100);
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

    if (!countersStarted && sectionTop < windowHeight - 1) {
        animateCounters();
        countersStarted = true;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');

    if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }
   
});
// Логин и пароль


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("error-message");

        if (username === "1103" && password === "Halil") {
            window.location.href = "dashboard.html";
        } else {
            errorMessage.style.display = "block";
        }
    });
});

// menu dashboard
// Ждем, когда DOM загрузится
document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard загружен.");

    // Получаем все ссылки в меню
    const navItems = document.querySelectorAll('.nav-item');
    
    // Функция для скрытия всех секций
    function hideAllSections() {
        const sections = document.querySelectorAll('.dashboard-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Устанавливаем активный пункт меню
    function setActiveMenuItem(activeItem) {
        navItems.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
    }

    // Переключение видимости секций при клике на пункт меню
    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const sectionId = item.getAttribute('data-section');
            
            // Скрыть все секции
            hideAllSections();
            
            // Показать нужную секцию
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.style.display = 'block';
            }
            
            // Установить активный пункт меню
            setActiveMenuItem(item);
        });
    });

    // Изначально показываем главную секцию
    document.getElementById('home').style.display = 'block';
});
document.getElementById("burgerMenu").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
  });
  