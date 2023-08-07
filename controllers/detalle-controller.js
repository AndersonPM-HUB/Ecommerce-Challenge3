import { clienteServices } from "../service/client2.js";

console.log('hloladffrwe')
const detalle =async()=> {

  const url = new URL(window.location);
  console.log(url);
  const idp = url.searchParams.get("id");
  console.log(idp);


  const container = document.querySelector(".card__detalle");

  const titulo = document.querySelector(".titulo__detalle");
  const im = document.querySelector(".img__detalle");
  const precio = document.querySelector(".precio__detalle");
  const dp = document.querySelector(".d__detalle");

  try {
    const info = await clienteServices.detalleProducto(idp);
    console.log(info)
    im.src= info.imagen;
    titulo.innerText = info.product;
    precio.textContent= info.precio;
    dp.textContent = info.descripcion;

  } catch (error) {
    
  }
 

}

detalle();