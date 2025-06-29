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


// Datos de los módulos
const modulesData = {
    1: {
      title: "Módulo 1: Introducción a los ordenadores",
      description: "- ¿Qué es un ordenador?. </br>- Historia y evolución de los ordenadores. </br> - Tipos de ordenadores (PC, portátiles, servidores, etc.). </br> - Hardware y software. </br> - Periféricos.",       
      video: "Módulo1.mp4",
      videoTitle: "Introducción a los ordenadores",      
      pdf: "modulo1.pdf",
      pptx: "módulo1.pptx",
    },
    2: {
      title: "Módulo 2: Sistemas operativos (SO)",
      description: "- ¿Qué es un Sistema Operativo?. </br>- Características principales de un Sistema Operativo. </br>- Tipos de Sistemas Operativos más comunes. </br>- Pasos para instalar el Window 10.",
      video: "videoMódulo2.mp4",
      videoTitle: "Sistemas Operativos(SO)",
      pdf: "módulo2.pdf",
      pptx: "Módulo2.pptx",
    },
    3: {
      title: "Módulo 3: Introducción a Windows.",
      description: "- Introducción a Windows. </br>- Iniciar sesión. </br> -	Navegación básica:  <li>	Iconos, carpetas y accesos directos. </li> <li> Seleccionar, copiar, cortar, pegar y mover archivos.  </br> - Personalización...",
      video: "video3.mp4",
      videoTitle: "Introducción a Windows",
      pdf: "módulo3.pdf",
      pptx: "módulo3.pptx",
    },
    4: {
        title: "Módulo 4: Tratamiento de textos (Microsoft Word)",
        description: "-	Introducción a Microsoft Word. <li> Historia y evolución de Microsoft Word.  </li> <li>	Instalación y versiones disponibles. </li> <li>	Interfaz principal: cinta de opciones, barra de ... </br> -	Creación y Edición de Documentos. <li> 	Abrir, guardar y cerrar documentos. </li> <li>Creación de documentos en blanco... </li>", 
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
      5: {
        title: "Módulo 5: Hoja de cálculo (Microsoft Excel)",
        description: "-	Introducción a Microsoft Excel <li> Instalación y requisitos del sistema. </li> <li> Interfaz de usuario: cinta de opciones, barras de herramientas y hoja de cálculo.  </li> - Conceptos Básicos y Manejo de Hojas de Cálculo  </br><li> Crear, abrir, guardar y cerrar libros de Excel.</li>  <li> Introducción a celdas, filas y columnas...", 
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
      6: {
        title: "Módulo 6: Presentaciones con Power Point",
        description: "-	Introducción a Microsoft PowerPoint. <li> Instalación y requisitos del sistema. .  </li> <li>	Interfaz de usuario: cinta de opciones, diapositivas, área de notas y panel de vista previa. </li> - Creación y Gestión de Presentaciones...",
        video: "video1.mp4",
        videoTitle: "Video de Introducción",
        pdf: "modulo1.pdf"
      },
  };
  
  
  // Cargar el contenido de un módulo
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
   
  }
 
