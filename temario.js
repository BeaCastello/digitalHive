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




// Datos de los módulos
const modulesData = {
    1: {
      title: "Módulo 1: Introducción a los ordenadores",
      description: "Este módulo cubre los conceptos básicos y el propósito del curso.",
      video: "video1.mp4",
      videoTitle: "Video de Introducción",
      videoDescription: "Este video explica los fundamentos iniciales.",
      pdf: "modulo1.pdf"
    },
    2: {
      title: "Módulo 2: Conceptos Básicos",
      description: "En este módulo aprenderás los conceptos esenciales del tema.",
      video: "video2.mp4",
      videoTitle: "Conceptos Básicos",
      videoDescription: "Video sobre los conceptos esenciales del curso.",
      pdf: "modulo2.pdf"
    },
    3: {
      title: "Módulo 3: Herramientas Avanzadas",
      description: "Explora las herramientas avanzadas para maximizar tu aprendizaje.",
      video: "video3.mp4",
      videoTitle: "Herramientas Avanzadas",
      videoDescription: "Conoce las herramientas avanzadas en este video.",
      pdf: "modulo3.pdf"
    }
  };
  
  // Función para cargar el contenido de un módulo
  function loadModule(moduleId) {
    const module = modulesData[moduleId];
  
    // Actualizar columna de contenido
    document.getElementById("module-title").textContent = module.title;
    document.getElementById("module-description").textContent = module.description;
    document.getElementById("download-link").href = module.pdf;
  
    // Actualizar columna de video
    document.getElementById("video-player").src = module.video;
    document.getElementById("video-title").textContent = module.videoTitle;
    document.getElementById("video-description").textContent = module.videoDescription;
  }