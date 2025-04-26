const modules = {
    1: {
      title: "Módulo 1",
      desc: "Descripción del Módulo 1",
      pdf: "modulo1.pdf",
      video: "videoModulo1.mp4",
      extras: [
        { title: "Introducción", src: "intro1.mp4" },
        { title: "Ejemplo práctico", src: "ejemplo1.mp4" }
      ]
    },
    2: {
      title: "Módulo 2",
      desc: "Descripción del Módulo 2",
      pdf: "modulo2.pdf",
      video: "modulo2.mp4",
      extras: [
        { title: "Teoría", src: "teoria2.mp4" },
        { title: "Demostración", src: "demo2.mp4" }
      ]
    },
    3: {
      title: "Módulo 3",
      desc: "Descripción del Módulo 3",
      pdf: "modulo3.pdf",
      video: "modulo3.mp4",
      extras: [
        { title: "Casos reales", src: "casos3.mp4" },
        { title: "Resumen", src: "resumen3.mp4" }
      ]
    }
  };

  let selectedModule = 1;
  const moduleList = document.getElementById("moduleList");
  const moduleTitle = document.getElementById("moduleTitle");
  const moduleDesc = document.getElementById("moduleDesc");
  const mainVideo = document.getElementById("mainVideo");
  const extraVideos = document.getElementById("extraVideos");

  moduleList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const id = parseInt(e.target.dataset.id);
      if (id !== selectedModule) {
        selectedModule = id;
        updateModule();
      }
      document.querySelectorAll(".module-list li").forEach(li => li.classList.remove("active"));
      e.target.classList.add("active");
    }
  });

  function updateModule() {
    const mod = modules[selectedModule];
    moduleTitle.textContent = mod.title;
    moduleDesc.textContent = mod.desc;
    mainVideo.src = mod.video;
    mainVideo.style.display = "none"; // hide on change

    // Update extra videos
    extraVideos.innerHTML = "";
    mod.extras.forEach(extra => {
      const div = document.createElement("div");
      div.className = "extra-video";
      div.innerHTML = `
        <video controls>
          <source src="${extra.src}" type="video/mp4">
        </video>
        <div class="extra-video-title">${extra.title}</div>
      `;
      extraVideos.appendChild(div);
    });
  }

  function downloadPDF() {
    const pdf = modules[selectedModule].pdf;
    window.open(pdf, "_blank");
  }

  function toggleVideo() {
    if (mainVideo.style.display === "none") {
      mainVideo.style.display = "block";
    } else {
      mainVideo.style.display = "none";
    }
  }

  updateModule(); // Initial load