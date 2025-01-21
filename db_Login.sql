CREATE DATABASE login_digitalhive;

USE login_digitalhive;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL
);

-- Insertar un usuario (contraseña: "123456")
INSERT INTO users (username, password_hash)
VALUES ('admin', MD5('123456'));


