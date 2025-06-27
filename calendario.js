(function () { emailjs.init("Oyh2uTXc5UaZPqt7o"); })(); // Enlace con emailjs

const disponibilidad = {
    "2025-07": [23, 24, 25],
    "2025-08": [1, 5, 12, 19, 26]
};
const horasPorDia = {
    "2025-07-23": ["11:00", "11:15", "11:30"],
    "2025-07-24": ["10:00", "11:00", "12:00"],
    "2025-07-25": ["09:00", "10:00"]
};

const cal = document.getElementById("calendar-dates");
const hours = document.getElementById("hours");
const feInput = document.getElementById("fecha-elegida");
const hoInput = document.getElementById("hora-elegida");
const mesActualSpan = document.getElementById("mes-actual");
let hoy = new Date(), selDia = null;

function updateMonthText(m, y) {
    const mNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    mesActualSpan.textContent = `${mNames[m]} ${y}`;
}

function generarCalendario(m, y) {
    cal.innerHTML = `
  <div><strong>Lu</strong></div>
  <div><strong>Ma</strong></div>
  <div><strong>Mi</strong></div>
  <div><strong>Ju</strong></div>
  <div><strong>Vi</strong></div>
  <div><strong>Sá</strong></div>
  <div><strong>Do</strong></div> `;
    hours.innerHTML = ""; feInput.value = ""; hoInput.value = ""; selDia = null;
    updateMonthText(m, y);
    const firstDay = new Date(y, m, 1).getDay(), totalDays = new Date(y, m + 1, 0).getDate();
    const key = `${y}-${String(m + 1).padStart(2, "0")}`;
    const disp = disponibilidad[key] || [];

    for (let i = 0; i < (firstDay ? (firstDay - 1) : 6); i++) cal.innerHTML += "<div></div>";
    for (let d = 1; d <= totalDays; d++) {
        const div = document.createElement("div");
        div.className = "day " + (disp.includes(d) ? "available" : "unavailable");
        div.textContent = d;
        if (disp.includes(d)) {
            const fullDate = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
            div.onclick = () => selectDay(d, div, fullDate);
        }
        cal.appendChild(div);
    }
}

function cambiarMes(delta) {
    hoy.setMonth(hoy.getMonth() + delta);
    generarCalendario(hoy.getMonth(), hoy.getFullYear());
}

function selectDay(d, el, fullDate) {
    document.querySelectorAll(".day").forEach(x => x.classList.remove("selected"));
    el.classList.add("selected");
    selDia = fullDate;
    feInput.value = fullDate;
    mostrarHoras(fullDate);
}

function mostrarHoras(d) {
    hours.innerHTML = ""; hoInput.value = "";
    const arr = horasPorDia[d] || [];
    arr.forEach(h => {
        const hb = document.createElement("div");
        hb.className = "hour";
        hb.textContent = h;
        hb.onclick = () => {
            document.querySelectorAll(".hour").forEach(x => x.classList.remove("selected"));
            hb.classList.add("selected");
            hoInput.value = h;
        };
        hours.appendChild(hb);
    });
}

// Formulario estudiante
document.getElementById("agenda-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!selDia || !hoInput.value) {
        return alert("Selecciona fecha y hora.");
    }
    emailjs.sendForm("service_jhu99xc", "template_rzjqc3b", this)
        .then(() => {
            alert("¡Solicitud enviada!");
            this.reset(); hours.innerHTML = ""; feInput.value = ""; hoInput.value = "";
            document.querySelectorAll(".day, .hour").forEach(x => x.classList.remove("selected"));
        }, () => {
            alert("Error al enviar, inténtalo luego.");
        });
});

generarCalendario(hoy.getMonth(), hoy.getFullYear());


// Email de confirmación para estudiante

document.getElementById("agenda-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("servicio_9xutcqf", "template_rzjqc3b", this)
      .then(function () {
        alert("Solicitud enviada con éxito. Revisa tu correo.");
      }, function (error) {
        console.error("Error:", error);
        alert("Hubo un problema al enviar la solicitud.");
      });

    this.reset(); // Limpia el formulario
  });