document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const myEmail = "sedera";
    const password = document.getElementById("password").value;
    const myPassword = "sedera";
    const error = document.getElementById("error");
    const loginBtn = document.getElementById("loginBtn");

    if (email !== myEmail || password !== myPassword) {
        error.style.display = "flex";
    }
    else {
        localStorage.setItem("isLoggedIn", "true");
        loginBtn.innerHTML = "...";
        setTimeout(function () {
            window.location = "index.html";
        }, 3000);
    }
});