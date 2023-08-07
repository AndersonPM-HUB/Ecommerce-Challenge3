const logeado = () => {
  document.addEventListener("DOMContentLoaded", (e) => {
      const loginForm = document.querySelector(".btn__form");

      loginForm.addEventListener("click", (event) => {
          event.preventDefault();
          const username = document.querySelector("#user").value;
          const password = document.querySelector("#pass").value;

          if (username === "ander@gmail.com" && password === "admin") {
              // Crear una cookie después de un inicio de sesión exitoso
              document.cookie = "userLoggedIn=true";

              window.location.href = "../pages/dashboard.html";
          } else {
              Swal.fire({
                  title: "Credenciales Inválidas",
                  icon: "error",
              });
          }
      });
  });
}

(() => {
  logeado();
})();
