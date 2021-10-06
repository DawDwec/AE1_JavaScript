//Actividad 1 - JavaScript
//Requerimiento 1
//Definimos el array 
let array = [1, 55, 82, 32, 66, 21, 35, 89, 47, 55];
//Sumamos todos los valores del array
let sumar = array.reduce((previous, current) => current + previous, 0);
//Y calculamos su media aritmética
let media = sumar / array.length;

//Requerimiento 2
//Calculamos la moda del array
var moda = function mode(array){
    var numMapping = {};
    var greatestFreq = 0;
    var moda;
    array.forEach(function findMode(numero) {
        numMapping[numero] = (numMapping[numero] || 0) + 1;

        if (greatestFreq < numMapping[numero]) {
            greatestFreq = numMapping[numero];
            moda = numero;
        }
    });
    return +moda;
}

//Requerimiento 3
//Obtenemos la mediana del array



//Imprimimos todos los valores para comprobarlo
//Ordenamos el array
array.sort();
console.log("Elementos del array ordenados: " + array);
console.log("Suma del array: " + sumar);
console.log("Media aritmética: " + media);
console.log("Mediana: " + mediana);
console.log("Moda: " + moda);