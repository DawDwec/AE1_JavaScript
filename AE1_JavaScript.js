/**
 * Actividad 1 - JavaScript
 * 
 * Definimos un array con 10 elementos numericos llamado array1.
 * Creamos los siguientes 3 metodos:
 *      1. Obtener la media aritmetica de los elementos del array.
 *      2. Calcular la moda o valor modal de los elementos del array.
 *      3. Calcular la mediana de los elementos del array.
 */

//Definimos el array
let array1 = [0, 88, 34, 67, 12, 90, 23, 34, 49 ,44];

//Calculamos la suma de todos los elementos del array
let suma = array1.reduce((previous, current) => current += previous);

//Calculamos la media aritmetica de los elementos del array
let avg = suma / array1.length;

//Imprimimos en consola la media aritmetica
console.log("El array contiene los siguientes elementos: " + array1);
console.log("La media aritmetica del array es: " + avg);

//Calculamos la mediana del array
let medio = array1.length / 2;
console.log(medio);
let mediana = array1.slice(medio);
console.log(mediana);