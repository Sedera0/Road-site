window.onload = function(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if(isLoggedIn === "true"){
        window.location.href = "index.html";
    }
};