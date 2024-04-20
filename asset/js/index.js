
/**
 * Redirection vers login.html
 */
window.onload = function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
};



/**
 * Sticky NAVBAR
 */
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

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
    const showBtn = document.getElementById('showMenu');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('closeMenu');


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
    return (screen.top >= 0 &&
        screen.left >= 0 &&
        screen.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        screen.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}

function countValue(element, start, end, duration){
    const range = end - start;
    const current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(function(){
        current += increment;
        element.textContent = current;
        if(current == end){
            clearInterval(timer)
        }
    }, stepTime)
}
function countPercentage(element, start, end, duration){
    const range = end - start;
    const current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(function(){
        current += increment;
        element.textContent = current + "%";
        if(current == end){
            clearInterval(timer)
        }
    }, stepTime)
}

function animate(){
    const placeRating = document.querySelector('.place-rating');
    const rating1 = document.getElementById('count1');
    const rating2 = document.getElementById('count2');
    const rating3 = document.getElementById('count3');

    if(isVisible(placeRating)){
        countPercentage(rating1, 0, 99,2000);
        countValue(rating2, 0, 220, 2000);
        countValue(rating3, 0, 50, 2000);
    }
}

window.addEventListener('scroll', function(){
    animate();
});

animate();



/**
 * Scale Effect de Section
 */
function scaleEffect(){
    const place = document.getElementById('place');
    if(isVisible(place)){
        place.classList.add('visible');
    }
}

window.addEventListener('scroll', function(){
    scaleEffect();
});

scaleEffect();