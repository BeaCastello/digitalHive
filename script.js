function validateLogin() {
    // Para loguearse
    const validUsername = "admin";
    const validPassword = "12345";

    // Obtener valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación del formulario
    if (username === validUsername && password === validPassword) {
        window.location.href = "index.html"; // Redirige a la página principal
    } else {
        alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
}


function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const navLinks = document.getElementById('nav-links');

    if (!menuHamburguesa.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});



// Función para mostrar el banner si no hay una cookie de aceptación
window.onload = function () {
    if (!getCookie("cookiesAccepted")) {
        document.getElementById("cookieBanner").style.display = "block";
    }
};



// Función para aceptar las cookies y ocultar el banner
function acceptCookies() {
    setCookie("cookiesAccepted", "true", 365); // Guarda la aceptación por 1 año
    document.getElementById("cookieBanner").style.display = "none";
}

// Función para crear una cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para leer una cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}