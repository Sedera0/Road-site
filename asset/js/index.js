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
    const liens = document.querySelectorAll('#menu a')
    showBtn.addEventListener('click', function () {
        menu.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('show');
    });

    liens.forEach(function (lien) {
        lien.addEventListener('click', function () {
            menu.classList.remove('show');
        });
    });
});


function isVisible(section) {
    const screen = section.getBoundingClientRect();
    return screen.top <= window.innerHeight;
}

let isAnimatePlace = false;
let isAnimateDestination = false;
let isAnimateReservation = false;
let isAnimateHotel = false;

window.addEventListener("scroll", function () {
    const placeSection = document.querySelector(".place");
    const destinationSection = document.querySelector(".destination");
    const reservationSection = document.querySelector(".reservation");
    const hotelSection = document.querySelector('.hotel')

    if (isVisible(placeSection) && !isAnimatePlace) {
        placeSection.classList.add("visible");
        animate();
        isAnimatePlace = true;
    }

    if (isVisible(destinationSection) && !isAnimateDestination) {
        destinationSection.classList.add("visible");
        isAnimateDestination = true;
    }

    if (isVisible(reservationSection) && !isAnimateReservation) {
        reservationSection.classList.add("visible");
        isAnimateDestination = true;
    }

    if (isVisible(hotelSection) && !isAnimateHotel) {
        hotelSection.classList.add("visible");
        isAnimateDestination = true;
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


document.getElementById("reservation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const mail = document.getElementById("mail").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const date2 = document.getElementById("date2").value;
    const success = document.getElementById("success");

    if (mail !== '' && location !== '' && date !== '' && date2 !== '') {
        success.style.display = "flex";

        setTimeout(function () {
            success.style.display = "none"
        }, 4000);
    }
});

const send = document.querySelector(".send");
send.addEventListener('click', function () {
    const sent = document.querySelector(".sent");
    const valide = document.querySelector(".valide").value;

    if (valide !== '') {
        sent.style.display = "flex";

        setTimeout(function () {
            sent.style.display = "none"
        }, 4000);
    }
})