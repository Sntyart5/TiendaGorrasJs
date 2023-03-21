
document.getElementById("BtnDolares").onclick = function() {
    //Obtener la cantidad de productos seleccionados
    var cantidad = parseInt(document.getElementById("cantidad").value);
  
    var precioGorraElement = document.getElementById("precio");
    var precioGorraTexto = precioGorraElement.innerHTML; 
    var precioGorra = parseFloat(precioGorraTexto.substring(1)); 

    //Obtener el precio unitario del JSON
    var precioUnitario = precioGorra;
  
    //Calcular el subtotal
    var subtotal = cantidad * precioUnitario;
  
    //Mostrar el subtotal en el HTML
    document.getElementById("subtotal").innerHTML = "$" + subtotal;

    // Convertir a dólares
    var tasaCambio = 0.00021 ; // Supongamos que esta es la tasa de cambio actual
    var subtotalDolares = subtotal * tasaCambio;

    // Actualizar el HTML con el subtotal en dólares
    document.getElementById("dolares").innerHTML = subtotalDolares.toFixed(2) + "$";
  }

