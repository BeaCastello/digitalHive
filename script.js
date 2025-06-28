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
document.addEventListener("DOMContentLoaded", function () {
    if (!getCookie("cookiesAccepted")) {
        const banner = document.getElementById("cookieBanner");
        if (banner) {
            banner.style.display = "block";
        }
    }
});


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

// Conectando con el whatsapp
const whatsappContainer = document.getElementById('whatsapp-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        whatsappContainer.classList.add('visible');
    } else {
        whatsappContainer.classList.remove('visible');
    }
});
// Enlace con emailjs

(function () {
    emailjs.init({publicKey:"kTtaHH0bvjX_I3jqv"});
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm("service_mmov9hk","template_imevdo7", this)
        .then(function () {
            alert('Correo enviado con éxito!');
        }, function (error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});

