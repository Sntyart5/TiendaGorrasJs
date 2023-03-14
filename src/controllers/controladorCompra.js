

//llamo la memoriapara acceder a los datos guardados 
let infoProducto=JSON.parse(localStorage.getItem("producto"))

//console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

let nombre=document.getElementById("nombre")
nombre.textContent=infoProducto.nombre

//let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio



// Convertidor

import{productos}from '../helpers/BaseDatos.js'
let dolares=document.getElementById("dolares")
//pintarProductos(productos)


dolares.addEventListener("click",function(dolares){


    
    let precio1 = JSON.stringify(productos.precio);
    console.log(precio1);
    //localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionar))

    let datosProductoSeleccionar = {}
    //let tarjeta=evento.target.parentElement

    let cantidad=(document.getElementById("cantidad").value)
    //let precio=(document.getElementById("precio").)

    console.log("Se hizo clic en el botón");
    
    console.log(cantidad);
    
   // console.log(precio);

    let resultado = cantidad * precio;
    console.log(resultado);
});
