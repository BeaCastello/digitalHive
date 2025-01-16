document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para pruebas

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
        // Redirigir al sitio completo
        window.location.href = "dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
    }
});
