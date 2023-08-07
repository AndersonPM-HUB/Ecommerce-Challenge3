
import { clienteServices } from "../service/client2.js";
console.log(clienteServices);
//targeta 
const tarjetas = (id,producto, precio, photo)=>{
    const cont = document.createElement('div');
    cont.classList.add('producto'); 
    const tarjeta =`
       <img src="${photo}" alt="" class="producto__img">
    <div class="producto__descripcion">
        <h4 class="producto__titulo">${producto}</h4>
        <p class="producto__precio">${precio}</p>
        <a href="http://127.0.0.1:5500/pages/productos.html?id=${id}" class="producto__detalle">ver detalle</a>
    </div>`;

    cont.innerHTML = tarjeta;
    return cont;
}

const secciont = document.querySelector('[data-cards]');

clienteServices.datainfo().then((data)=>{
    for (let index = 0; index < data.length; index++) {
        const linea = tarjetas(data[index].id, data[index].product,data[index].precio,data[index].imagen);
        secciont.appendChild(linea);
    };
}).catch((error)=>console.log(error));