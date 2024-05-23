  // Llamar a la función para validar las credenciales
document.getElementById('iniciarSesion').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    validarUsuario();
});

// una vez llamado validarUsuario(); lo siguente es:
// Usamos function para validar credenciales si es correcto nos redirige al catalodo de productos
function validarUsuario() {
    let email = document.getElementById('inputEmail').value;
    let pass = document.getElementById('inputPassword').value;

    if (email === "example@gmail.com" && pass === "123456") {
        // Redirigir al usuario a la página de catálogo
        window.location.href = "Productos.html"; // Redirige a la página de catálogo de productos
    } else {
        alert("Correo electrónico o contraseña incorrectos");
        // Realiza alguna acción si el correo electrónico o la contraseña no son válidos
    }
}



