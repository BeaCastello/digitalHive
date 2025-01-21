<?php
// Para conectarse a la base de datos
$host = 'localhost';
$db = 'login_DigitalHive';
$user = 'root';
$password = '';
$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Para que el usuario no deje campos vacios
if (empty($username) || empty($password)) {
  die("Por favor completa todos los campos.");
}

// Consulta la base de datos
$query = $conn->prepare("SELECT password_hash FROM users WHERE username = ?");
$query->bind_param("s", $username);
$query->execute();
$query->store_result();

if ($query->num_rows > 0) {
  $query->bind_result($password_hash);
  $query->fetch();

  // Verificación de contraseña
  if (md5($password) === $password_hash) {
    echo "¡Login exitoso! Bienvenido, $username.";
  } else {
    echo "Contraseña incorrecta.";
  }
} else {
  echo "Usuario no encontrado.";
}

$query->close();
$conn->close();
?>
