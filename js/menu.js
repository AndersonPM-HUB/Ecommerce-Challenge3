
const menu=`
    <a href="../index.html"><img src="../media/Logo.png" alt="" class="logo"></a>
    <a class="login__buton" href="../pages/login.html">LOGIN</a>
    <div class="barra_search">
        <input type="text" class="cabecera__busqueda" placeholder="¿Qué deseas buscar?">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>`;

document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".cabecera").innerHTML = menu; });