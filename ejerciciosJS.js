console.log("hola, el archivo se vinculo correctamente");


// EJERCICIOS 


// 1.  Hacer un programa que reciba 2 números del usuario y los sume.

// Es una secuencia
/*let numero1 = 0;
let numero2 = 0;
let resultado = 0;*/

// variable = asignacion
// TODO LO QUE VIENE DE PROMPTS O DEL USUARIO VIENE COMO STRING
/*
// Vamos a convertir el texto en numero
numero1 = prompt("Ingrese el primer numero");
numero2 = prompt("Ingrese el segundo numero");

// el parseInt --> convierte enteros
// el parseFloat --> convierte a decimales
resultado = parseFloat(numero1) + parseFloat(numero2);

alert("El resultado de la suma de: " + numero1 + "+" + numero2 + " " + "es"+ " " + resultado);
*/

//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'

// if --> si se cumple una condicion haga
// else --> sino se cumple haga otra cosa

/*variable = " " -> false -> NO
  variable = "Luisa" -> true -si
*/

// SOLO SE EJECUTA LO DE EL IF CUANDO LA CONDICION SE CUMPLE -> VERDADERA

/*let nombreUsuario = prompt("Ingrese su nombre");
if(nombreUsuario){
    alert("HOLA:" + nombreUsuario);
    console.log("se cumple la condicion");
}else{
    alert("hola");
    console.log("no se cumple la condicion");
}
*/

//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.
/*let numero = parseInt(prompt("Ingrese un numero entero"));
for(let i = 0 ; i<= numero ; i++){
    console.log(i);
}*/

//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.

let texto = "";
texto = prompt("Ingrese un texto");
while (texto == "") {
    texto = prompt("Porfavor, ingresa un texto");
}
alert("El texto ingresado es: " + texto);


//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.

let numero1 = parseFloat(prompt("Ingresar el primer numero"));
let numero2 = parseFloat(prompt("Ingresar el segundo numero"));

let suma = numero1 + numero2;
let resta = numero1 - numero2;

alert("El resultado de la suma de: " + numero1 + "+" + numero2 + " " + "es" + " " + suma);
alert("El resultado de la resta de: " + numero1 + "+" + numero2 + " " + "es" + " " + resta);


//5. Hacer un programa que muestre los días de la semana.
/*
let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// mosntrando el arreglo 
console.log(diasSemana);
// monstrando un elemento dentro del arreglo, usando su indice
// monstrando un elemento dentro del arreglo 
console.log(diasSemana[0])
console.log(diasSemana[1])
console.log(diasSemana[2])
console.log(diasSemana[3])
console.log(diasSemana[4])
console.log(diasSemana[5])
console.log(diasSemana[6])

// OPCION OPTIMIZADA CON CICLOS
// forEach -> es un ciclo para recorrer arreglos de datos
// el ciclo termina cuando no hayan mas elementos dentro de mi arreglo de datos

// forEach() -> es un metodo UNICAMENTE PARA ARREGLOS
diasSemana.forEach(
    // funcion flecha -> FUNCIONES -> Acciones que se deben ejecutar
    (dia) => {
        console.log(dia);
    }
)
*/



