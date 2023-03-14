
export function pintarProductos(productos){
    
    productos.forEach(function(producto){
    //creando columnas para alojar los productos 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //create tarjeta para alamacenar la info del producto
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let imagen=document.createElement("img")
    imagen.classList.add("img-Fluid","w-100")
    imagen.src=producto.fotos[0]

    //crear un titulo 
    let nombre=document.createElement('h3')
    nombre.classList.add("text-center")
    nombre.textContent=producto.nombre

    //Crear una descripción
    let descripcion=document.createElement('h2')
    descripcion.classList.add("text-center","d-none")
    descripcion.textContent=producto.descripcion

    //crear un Precio 
    let precio=document.createElement('h5')
    precio.classList.add('text-center','text-success',"fw-bold")
    precio.textContent=('$')+producto.precio


    // detectando evento 
    tarjeta.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })
    // detectando evento 
    tarjeta.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })



    //padres e hijos 
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    })
    
}