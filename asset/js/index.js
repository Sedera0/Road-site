window.onload = function(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
};


window.addEventListener("scroll", function(){
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    if(window.scrollY > 50){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
});