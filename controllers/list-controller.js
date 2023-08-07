//comunicacion API
import { clienteServices } from "../service/client2.js";

const registro = (id, producto, precio, descripcion) => {
    const r = document.createElement('tr')
    const info = ` 
                    <td class="td" data-td>${producto}</td>
                    <td>${precio}</td>
                    <td>${descripcion}</td>
                    <td>
                    <ul class="table__button-control">
                        <li>
                        <a href="http://127.0.0.1:5500/pages/admin.html?id=${id}"><button class="simple-button--edit" id="${id}">Editar</button></a>
                        </li>
                        <li>
                        <button class="simple-button--delete" id="${id}">Borrar</button>
                        </li>
                    </ul>
                    </td>
                    `;

            
            r.innerHTML= info;

        const btn = r.querySelector('.simple-button--delete')
        btn.addEventListener('click',()=>{
            const id = btn.id;
            clienteServices.borrarProducto(id).then((res)=>{
                Swal.fire(
                    'Eliminado!',
                    '',
                    'success'
                  )
            }).catch((err)=>{
                Swal.fire(
                    'Eliminado!',
                    '',
                    'error'
                  ) 
            })
        })


        return r;
};

const table = document.querySelector('[data-table]');

clienteServices.http().then((data)=>{
  for (let index = 0; index < data.length; index++) {
    console.log(data[index].id);
    const linea = registro(data[index].id, data[index].product,data[index].precio,data[index].descripcion);
    table.appendChild(linea); 
}

}).catch((error)=>console.log(error));




