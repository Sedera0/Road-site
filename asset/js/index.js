// Redirection vers login.html
window.onload = function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
};

// Sticky NAVBAR
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("sticky", window.scrollY > 5);
});

// Toggle Menu Button
document.addEventListener('DOMContentLoaded', function () {
    const showBtn = document.getElementById('showMenu');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('closeMenu');

    showBtn.addEventListener('click', function () {
        menu.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('show');
    })
});

// Chiffre Count
function isVisible(section) {
    const screen = section.getBoundingClientRect();
    return screen.top <= window.innerHeight;
}



let isAnimate = false;
window.addEventListener("scroll", function () {
    const placeSection = document.querySelector(".place");
    if (isVisible(placeSection) && !isAnimate) {
        placeSection.classList.add("visible");
        animate();
        isAnimate = true;
    }
});

function count(element, start, end, duration, unity = '') {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(function () {
        current += increment;
        element.textContent = current + unity;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animate() {
    const ratingElements = document.querySelectorAll('.place-rating h2');
    const endValues = [99, 220, 50];
    const durations = [3000, 3000, 3000];
    const unities = ["%", "", ""];

    ratingElements.forEach((element, index) => {
        count(element, 0, endValues[index], durations[index], unities[index]);
    });
}
