const contacto = `
    <div class="contacto__menu">
        <img src="../media/Logo.png" alt="" class="imagen__logo">
        <ul class="menu">
        
            <li class="menu__item">Quienes somos</li>
            <li class="menu__item">Política de privacidad</li>
            <li class="menu__item">Programa de fidelidad</li>
            <li class="menu__item">Nuestras tiendas</li>
            <li class="menu__item">Quiero ser franquiciado</li>
            <li class="menu__item">Anúncie aquí</li>
        </ul>
    </div>
    <form action="" class="formulario">
        <h4 class="form__titulo">Hable con nosotros</h4>
        <input class="form_inputs" type="text" name="nombre" id="nombre" placeholder="Nombre" maxlength="40" required>
        <textarea class="form_inputs" name="" id="" cols="30" rows="10"maxlength="120" required></textarea>
        <button class="form__boton" type="submit" onClick="validar()">Enviar</button>
    </form>`;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".contacto").innerHTML = contacto;
});

const validar = ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Datos enviados',
    })
}
