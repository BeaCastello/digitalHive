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
      video: "Módulo1.mp4",
      videoTitle: "Conceptos básicos, hardware y software.",      
      pdf: "Curso.pdf"
    },
    2: {
      title: "Módulo 2: Sistemas operativos (SO)",
      description: "- ¿Qué es un Sistema Operativo?. </br>- Características principales de un Sistema Operativo. </br>- Tipos de Sistemas Operativos más comunes. </br>- Pasos para instalar el Window 10.",
      video: "video2.mp4",
      videoTitle: "Conceptos Básicos¿Qué es un sistema operativo? Componentes, funciones y características.",
      pdf: "módulo2.pdf"
    },
    3: {
      title: "Módulo 3: Introducción a Windows.",
      description: "- Introducción a Windows. </br> - Historia y versiones principales de Windows.  </br> -	Requisitos del sistema e instalación. </br>- Iniciar sesión y la interfaz gráfica:  <li> Escritorio. </li> <li> Menú de Inicio. </li> <li> Explorador de archivos.</li> -	Navegación básica:  <li>	Iconos, carpetas y accesos directos. </li> <li> Seleccionar, copiar, cortar, pegar y mover archivos. </li> - Personalización...",
      video: "video3.mp4",
      videoTitle: "Introducción a Windows y sus Principales Funcionalidades.",
      pdf: "módulo3.pdf"
    },
    4: {
        title: "Módulo 4: Tratamiento de textos (Microsoft Word)",
        description: "'¿Qué es el arraigo?','imagenes/arraigo1.png', '¿Qué es el arraigo?', 'El arraigo es un procedimiento establecido en la normativa de extranjería en España, que permite a los ciudadanos no pertenecientes a la Unión Europea y que han residido en el país en situación irregular durante un periodo determinado, obtener la residencia legal y regularizar su situación. <br><br> Este tipo de autorización de residencia, otorgada por circunstancias excepcionales, permite al beneficiario residir legalmente en España durante un año, con la posibilidad de renovación para obtener un permiso de residencia a largo plazo.<br><br>El procedimiento de arraigo, regulado por la Ley Orgánica 4/2000 y el Real Decreto 557/2011 sobre extranjería, permite a cualquier ciudadano extracomunitario vivir y trabajar en España de manera legal. Los beneficiarios pueden desempeñarse como trabajadores autónomos, o como trabajadores por cuenta ajena en todo el Territorio Nacional. <br><br>El arraigo es una vía accesible para aquellos que ingresan al país como turistas y buscan regularizar su situación. Una de las principales ventajas de este procedimiento es que puede iniciarse desde España y, en comparación con otros permisos de residencia, implica trámites considerablemente menos complejos que los que se suelen exigir desde el país de origen.'", 
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
      5: {
        title: "Módulo 5: Hoja de cálculo (Microsoft Excel)",
        description: "'¿Qué es el arraigo?','imagenes/arraigo1.png', '¿Qué es el arraigo?', 'El arraigo es un procedimiento establecido en la normativa de extranjería en España, que permite a los ciudadanos no pertenecientes a la Unión Europea y que han residido en el país en situación irregular durante un periodo determinado, obtener la residencia legal y regularizar su situación. <br><br> Este tipo de autorización de residencia, otorgada por circunstancias excepcionales, permite al beneficiario residir legalmente en España durante un año, con la posibilidad de renovación para obtener un permiso de residencia a largo plazo.<br><br>El procedimiento de arraigo, regulado por la Ley Orgánica 4/2000 y el Real Decreto 557/2011 sobre extranjería, permite a cualquier ciudadano extracomunitario vivir y trabajar en España de manera legal. Los beneficiarios pueden desempeñarse como trabajadores autónomos, o como trabajadores por cuenta ajena en todo el Territorio Nacional. <br><br>El arraigo es una vía accesible para aquellos que ingresan al país como turistas y buscan regularizar su situación. Una de las principales ventajas de este procedimiento es que puede iniciarse desde España y, en comparación con otros permisos de residencia, implica trámites considerablemente menos complejos que los que se suelen exigir desde el país de origen.'", 
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
      6: {
        title: "Módulo 6: Presentaciones con Power Point",
        description: "'¿Qué es el arraigo?','imagenes/arraigo1.png', '¿Qué es el arraigo?', 'El arraigo es un procedimiento establecido en la normativa de extranjería en España, que permite a los ciudadanos no pertenecientes a la Unión Europea y que han residido en el país en situación irregular durante un periodo determinado, obtener la residencia legal y regularizar su situación. <br><br> Este tipo de autorización de residencia, otorgada por circunstancias excepcionales, permite al beneficiario residir legalmente en España durante un año, con la posibilidad de renovación para obtener un permiso de residencia a largo plazo.<br><br>El procedimiento de arraigo, regulado por la Ley Orgánica 4/2000 y el Real Decreto 557/2011 sobre extranjería, permite a cualquier ciudadano extracomunitario vivir y trabajar en España de manera legal. Los beneficiarios pueden desempeñarse como trabajadores autónomos, o como trabajadores por cuenta ajena en todo el Territorio Nacional. <br><br>El arraigo es una vía accesible para aquellos que ingresan al país como turistas y buscan regularizar su situación. Una de las principales ventajas de este procedimiento es que puede iniciarse desde España y, en comparación con otros permisos de residencia, implica trámites considerablemente menos complejos que los que se suelen exigir desde el país de origen.'", 
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
  
    // Actualizar columna de video
    document.getElementById("video-player").src = module.video;
    document.getElementById("video-title").textContent = module.videoTitle;
    document.getElementById("video-description").textContent = module.videoDescription;
  }