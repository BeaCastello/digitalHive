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
      description: "- ¿Qué es una computadora?. </br>- Historia y evolución de las computadoras. </br> - Tipos de computadoras (PC, portátiles, servidores, etc.). </br> - Hardware y software. </br> - Periféricos.",       
      video: "videoModulo1.mp4",
      videoTitle: "Introducción a los ordenadores",      
      pdf: "Curso.pdf",
      pptx: "módulo1.pptx",
    },
    2: {
      title: "Módulo 2: Sistemas operativos (SO)",
      description: "- ¿Qué es un Sistema Operativo?. </br>- Características principales de un Sistema Operativo. </br>- Tipos de Sistemas Operativos más comunes. </br>- Pasos para instalar el Window 10.",
      video: "video2.mp4",
      videoTitle: "Conceptos básicos, componentes, características principales y funciones principales de los Sistemas Operativos.",
      pdf: "módulo2.pdf",
      pptx: "módulo2.pptx",
    },
    3: {
      title: "Módulo 3: Introducción a Windows.",
      description: "- Introducción a Windows. </br> - Historia y versiones principales de Windows.  </br> -	Requisitos del sistema e instalación. </br>- Iniciar sesión y la interfaz gráfica:  <li> Escritorio. </li> <li> Menú de Inicio. </li> <li> Explorador de archivos.</li> -	Navegación básica:  <li>	Iconos, carpetas y accesos directos. </li> <li> Seleccionar, copiar, cortar, pegar y mover archivos. </li> - Personalización...",
      video: "video3.mp4",
      videoTitle: "Introducción a Windows y sus Principales Funcionalidades.",
      pdf: "módulo3.pdf",
      pptx: "módulo3.pptx",
    },
    4: {
        title: "Módulo 4: Tratamiento de textos (Microsoft Word)",
        description: "-	Introducción a Microsoft Word. <li> Historia y evolución de Microsoft Word.  </li> <li>	Instalación y versiones disponibles. </li> <li>	Interfaz principal: cinta de opciones, barra de herramientas y área de trabajo. </br> -	Creación y Edición de Documentos. <li> 	Abrir, guardar y cerrar documentos. </li> <li>Creación de documentos en blanco y uso de plantillas. </li> <li>	Modos de vista y navegación en el documento...</li>", 
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
      5: {
        title: "Módulo 5: Hoja de cálculo (Microsoft Excel)",
        description: "-	Introducción a Microsoft Word. <li> Historia y evolución de Microsoft Word.  </li> <li>	Instalación y versiones disponibles. </li> <li>	Interfaz principal: cinta de opciones, barra de herramientas y área de trabajo. </br> -	Creación y Edición de Documentos. <li> 	Abrir, guardar y cerrar documentos. </li> <li>Creación de documentos en blanco y uso de plantillas. </li> <li>	Modos de vista y navegación en el documento...</li>", 
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
      6: {
        title: "Módulo 6: Presentaciones con Power Point",
        description: "-	Introducción a Microsoft Word. <li> Historia y evolución de Microsoft Word.  </li> <li>	Instalación y versiones disponibles. </li> <li>	Interfaz principal: cinta de opciones, barra de herramientas y área de trabajo. </br> -	Creación y Edición de Documentos. <li> 	Abrir, guardar y cerrar documentos. </li> <li>Creación de documentos en blanco y uso de plantillas. </li> <li>	Modos de vista y navegación en el documento...</li>", 
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
  };
  
  
  // Función para cargar el contenido de un módulo
  function loadModule(moduleId) {
    const module = modulesData[moduleId];
  
    // Actualizar columna de contenido
    document.getElementById("module-title").textContent = module.title;
    document.getElementById("module-description").innerHTML = module.description;
    document.getElementById("download-link").href = module.pdf;
    document.getElementById("download-link1").href = module.pptx;
  
    // Actualizar columna de video
    document.getElementById("video-player").src = module.video;
    document.getElementById("video-title").textContent = module.videoTitle;
    document.getElementById("video-description").textContent = module.videoDescription;
  }