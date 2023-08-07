// Verificar si el usuario está logueado al cargar la página
console.log('login')
document.addEventListener("DOMContentLoaded", () => {
    if (!isUserLoggedIn()) {
        window.location.href = "../pages/login.html"; // Redirigir a la página de inicio de sesión
    }
});

// Función para verificar si el usuario está logueado (basado en la cookie)
function isUserLoggedIn() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        console.log(name, value);
        if (name === "userLoggedIn" && value === "true") {
            return true;
        }
    }
    return false;
}
