// no hay espacios entre el document, el punto y el metodo
// getElementById -> es traer un elemento del HTML por su ID

// SELECCIONAR ELEMENTOS DEL DOM
let nameInput = document.getElementById("nombre");
console.log(nameInput);

// querySelector me trae cualquier tipo de selector -> etiqueta, id, clase
let saludoSpan = document.querySelector(".mostrarSaludo");
console.log(saludoSpan);


// FUNCIONES SON BLOQUES QUE ENCAPSULAN CODIGO, Y EJECUTAN ACCIONES

// los () --> significa que es para ejecutar la funcion y no estanvacias cuando se van a invocar alguna funcion
function saludarUsuario() {
    // value es para acceder al contenido de nuestra etiquetas
    let name = nameInput.value;
    // Aca va el codigo que quiero ejecutar 
    console.log(name)

    let mensaje = "";
    if (name) {
        // si se ingreso nombre -> IF -> si
        mensaje = "Hola, " + name;
        // textContent -> me premite cambiar el texto dentro de etiquetas
        saludoSpan.textContent = mensaje
        //  si no se ingresp nombre -> else -> sino
    } else {
        mensaje = "Hola, desconocido";
        saludoSpan.textContent = mensaje;
    }
}




