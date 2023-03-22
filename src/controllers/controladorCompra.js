

//llamo la memoriapara acceder a los datos guardados 
let infoProducto=JSON.parse(localStorage.getItem("producto"))

//console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

let nombre=document.getElementById("nombre")
nombre.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio




let infoCarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")
if(infoCarrito!=null){
    carrito=infoCarrito
    pildora.textContent=carrito.length
    
}else{
    carrito=[]
}




let botonagregarProducto=document.getElementById("btnagregarcarrito")


botonagregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})

//Limpiar carrito de compras 

let btnlimpiarcarrito=document.getElementById("btnLimpiarcarrito")



btnlimpiarcarrito.addEventListener("click", function(){
    carrito=[]
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})


