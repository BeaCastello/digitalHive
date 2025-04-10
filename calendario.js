 const calendar = document.getElementById("calendar");

    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    days.forEach(day => {
      const div = document.createElement("div");
      div.textContent = day;
      div.style.fontWeight = "bold";
      calendar.appendChild(div);
    });

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = new Date(year, month, 1);

    for (let i = 0; i < date.getDay(); i++) {
      calendar.appendChild(document.createElement("div"));
    }

    while (date.getMonth() === month) {
      const dayDiv = document.createElement("div");
      dayDiv.className = "day";
      dayDiv.textContent = date.getDate();
      calendar.appendChild(dayDiv);
      date.setDate(date.getDate() + 1);
    }

    document.getElementById("meetingForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("studentName").value;
      const time = document.getElementById("meetingTime").value;
      const link = document.getElementById("zoomLink").value;

      alert(`Reunión agendada:\nEstudiante: ${name}\nHora: ${time}\nZoom: ${link}`);

      // Aquí puedes guardar la información en localStorage o enviarla a un servidor.
      this.reset();
    });