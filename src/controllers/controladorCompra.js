//llamo la memoriapara acceder a los datos guardados 
let infoProducto=JSON.parse(localStorage.getItem("producto"))

console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let nombre=document.getElementById("title")
nombre.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio