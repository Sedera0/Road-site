
/**
 * Redirection vers login.html
*/
window.onload = function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
};



/**
 * Sticky NAVBAR
*/
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }

});



/**
 * Toogle Menu Button
 */
document.addEventListener('DOMContentLoaded', function () {
    let showBtn = document.getElementById('showMenu');
    let menu = document.getElementById('menu');
    let closeBtn = document.getElementById('closeMenu');


    showBtn.addEventListener('click', function () {
        menu.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('show');
    })
})

/**
 * Chiffre Count
*/
function isVisible(section) {
    const screen = section.getBoundingClientRect();
    return (
        screen.top >= 0 &&
        screen.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

let isAnimate = false;
window.addEventListener("scroll", function () {
    const placeSection = document.querySelector(".place");

    if (isVisible(placeSection)) {
        placeSection.classList.add("visible");
        animate();
        isAnimate = true;
    }
});

/**
 * Scale Effect
 */



function count(element, start, end, duration, unity = '') {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function () {
        current += increment;
        element.textContent = current + unity;
        if (current == end) {
            clearInterval(timer)
        }
    }, stepTime)
}

function animate() {
    let ratings = document.querySelectorAll('.place-rating');
    let rating1 = document.getElementById('count1');
    let rating2 = document.getElementById('count2');
    let rating3 = document.getElementById('count3');

    ratings.forEach(placeRating => {
        if (isVisible(placeRating)) {
            count(rating1, 0, 99, 2000, "%");
            count(rating2, 0, 220, 2000);
            count(rating3, 0, 50, 2000);
        }
    });
}

