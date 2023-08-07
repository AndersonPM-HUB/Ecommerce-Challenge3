import { clienteServices } from "../service/client2.js";

const obtieneInfo = () => {
  const url = new URL(window.location);
  console.log(url);
  const idp = url.searchParams.get("id");
  console.log(idp);
  const formulario = document.querySelector("[data-form]");
  if (idp === null) {
    //registrar
  
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      const url = document.querySelector("[url-form]").value;
      const productoName = document.querySelector("[np-form]").value;
      const precio = document.querySelector("[valor-form]").value;
      const dp = document.querySelector("[d-form]").value;

      //promise
      clienteServices
        .createProduct(url, productoName, precio, dp)
        .then((respuesta) => {
          Swal.fire("Producto agregado!", "", "success");
        })
        .catch((err) => console.log(err));
    });
  } else {
    //editar
    const titulo = document.querySelector(".form__title");
    titulo.textContent = `Editar`;
    const im = document.querySelector("[url-form]");
    const productoName = document.querySelector("[np-form]");
    const precio = document.querySelector("[valor-form]");
    const dp = document.querySelector("[d-form]");

    clienteServices.detalleProducto(idp).then((p) => {
      im.value = p.imagen;
      productoName.value = p.product;
      (precio.value = p.precio), (dp.value = p.descripcion);
    });

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const url = document.querySelector("[url-form]").value;
        const productoName = document.querySelector("[np-form]").value;
        const precio = document.querySelector("[valor-form]").value;
        const dp = document.querySelector("[d-form]").value;

        clienteServices.update(idp,url, productoName,precio,dp).then(()=>{
            Swal.fire("Producto editado!", "", "success");
        });
    });
  }
};

obtieneInfo();
