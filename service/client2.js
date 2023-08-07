//fucnion comunicacion 

//get
const datainfo = ()=>
     fetch("http://localhost:3000/productos_gamer").then((respuesta) => respuesta.json());//promesas
     
const http = ()=>
     fetch("http://localhost:3000/productos_gamer").then((r) => r.json());

//post
const createProduct=(ulr, np, p,d)=>{
    return fetch("http://localhost:3000/productos_gamer",{
        method:"post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imagen:ulr, product:np, precio:p, descripcion:d ,id:uuid.v4()}),
    });
}

//delete
const borrarProducto =(id)=>{
    return fetch(`http://localhost:3000/productos_gamer/${id}`,{
        method:"delete",
    })
}

//actualizar
const buscarProducto =(nombre)=>
    fetch(`http://localhost:3000/productos_gamer/${encodeURIComponent(nombre)}`).then((r) => r.json());

//update
const detalleProducto =(id)=>{ return fetch(`http://localhost:3000/productos_gamer/${id}`).then((r)=>r.json())} 
const update =(id, im, n,p, d) =>{
    return fetch(`http://localhost:3000/productos_gamer/${id}`,{
        method:"put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imagen:im, product:n, precio:p, descripcion:d }),//objeto en texto
    }).then((r)=>r).catch((e)=>console.log(e));
}
export const clienteServices ={
    datainfo,
    http,
    createProduct,
    borrarProducto,
    detalleProducto,
    update,
};