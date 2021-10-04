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
let array1 = [0, 88, 34, 67, 12, 90, 23, 34, 49, 44];




//Calculamos la suma de todos los elementos del array
let suma = array1.reduce((previous, current) => current += previous);

//Calculamos la media aritmetica de los elementos del array
let avg = suma / array1.length;

//Imprimimos en consola la media aritmetica
console.log("El array contiene los siguientes elementos: " + array1);
console.log("La media aritmetica del array es: " + avg);




//Calculamos la mediana del array
if (array1.length%2 == 0) {
    pos1 = array1.length/2;
    pos2 = pos1 - 1;
    mediana = (array1[pos1] + array1[pos2]) / 2;
} else {
    pos_central = (array1.length - 1) / 2;
    mediana = array1[pos_central];
}

//Imprimimos en consola la mediana del array
console.log("La mediana del array es: " + mediana);




//Calculamos la moda del array

//Ordenamos el array
array1.sort();
console.log("El array ordenado: " + array1);


//Imprimimos la moda del array
console.log("La moda del array es: " + moda);