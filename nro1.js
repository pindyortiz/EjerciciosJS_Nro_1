console.log("Ejercicio nro 1"); // Titulo del script

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

let respuesta = prompt("Ingrese un texto: "); //Asigna el valor ingresado en la variable respuesta

function longitud(str) {
  let regex = new RegExp("[0-9]"); // Expresion regular que busca solo texto

  //if (str.length != 0 && str != null && regex.test(str) == false) {
  // comprueba la integridad de la la cadena

  if (typeof str === "string" && str != 0 && str != null) {
    console.log(
      `La cadena ingresada es: ${str} y tiene ${str.length} caracteres`
    ); // Muestra mensaje si todo salio bien
  } else {
    console.log(`La cadena ingresada es: ${str} y no es válida`);
  } // Muestra mensaje de error
}

longitud(respuesta); // Llama a la funcion que hace la comprobacion
