function validateLogin() {
    // Para loguearse
    const validUsername = "admin";
    const validPassword = "12345";

    // Obtener valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación del formulario
    if (username === validUsername && password === validPassword) {
        window.location.href = "plataforma.html"; // Redirige a la página principal
    } else {
        alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
}
