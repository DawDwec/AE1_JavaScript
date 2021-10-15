/*Requerimientos Ejercicio:

1.Realiza un programa en JavaScript que recorra un array de 10 números y calcule la media aritmética de 
diez números. Los números deben de estar comprendidos entre el 0 y 100, si se detectará algún número fuera 
de ese rango no se tendría en cuenta para su cálculo.

2.Calcular la moda.

3.Calcular la mediana.


//1.Calculo de la media aritmetica.

/*Una alternativa que también funciona pero que no he aplicado finalmente ya que es menos rapida:
    let sum = 0;

    //Recorremos el array
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    //Para obtener la suma aritmética divimos la suma al número de elementos
    return sum/arr.length;
*/

function media(arr){
    let sum = arr.reduce((a, b) => a + b, 0); //-> Esta información que hace más sencilo el calculo de la media, 
    //la he obtenido en la siguiente URL: https://www.jesuscuesta.blog/como-usar-reduce-en-javascript-es6/
    
    /*A es el acumulador y B es el elemento actual del array. Añadimos cada elemento al acumulador,
    0 actúa como el inicial para el acumulador*/
    return sum/arr.length;
}

/*2.Calculo de la Mediana.
La mediana es el valor medio de los datos. Para poder obtener la mediana es necesario ordenar los datos
del array y obtener el valor medio*/

function mediana(arr){
    //Para ordenar el array numericamente en orden ascendente tenemos que hacer una funcion comparativa
    const arrOrdenado = arr.sort((a,b) => a - b);
    /*Obtenemos el elemento medio. En caso de que la longitud del array sea 0, obtenemos la media de los dos
    elementos del medio. Si tuvieramos un array de 8 elementos, sería el 4 y 5*/
    return arrOrdenado.length % 2 === 0 ? (arrOrdenado[arrOrdenado.length/2 - 1] + arrOrdenado[arrOrdenado.length/2]) / 2 : arrOrdenado[Math.floor(arrOrdenado.length/2)];
    //Anotar que cuando hay dos datos en el centro (10 valores -> 2 valores centrales a y b) Para calcularlo se suma el valor de A y B, dividido entre 2 [(A+B)/2] por esta razón como introducimos 10 valores queda un valor decimal
}

/*3.Calculo de la Moda.
Para identificar la moda tenemos que localizar aquellos valores que se repiten con mayor frecuencia.
Es posible tener más de una moda si se repiten con la misma frecuencia varios valores.

*/
function moda(arr){
    const tablaFrecuencia = {}
    /*Por cada elemento del array accedemos a la correspondiente propiedad del objeto
    Añadimos el valor 1 al final, para que en la primera ocurrencia no de el valor 0 que generará al 
    ser undefined*/
    arr.forEach(elem => tablaFrecuencia[elem] = tablaFrecuencia[elem] + 1 || 1);
    
    let modas = [];
    let maxFrecuencia = 0;

    //Para poder ver la frecuencia del objeto tabla, usamos un bucle for.

    for(const key in tablaFrecuencia) {
        //Comprobamos si corresponde que sea mayor que la frecuencia maxima para resetea moda
        if(tablaFrecuencia[key] > maxFrecuencia){
            modas = [Number(key)];
            maxFrecuencia = tablaFrecuencia[key]
    }
    else if(tablaFrecuencia[key] === maxFrecuencia) {
        //Si se cumple la condición lo añadimos al array con el método push
        modas.push(Number(key));
    }
}

// Como paso final, se comprueba si todos los datos aparecen con la misma frecuencia.
if(modas.length === Object.keys(tablaFrecuencia).length) modas = [];

return modas;
}

//Definimos el array de 10 numeros.
//El ejercicio también se puede hacer introduciendo a mano el array -> const datos = [25,16,22,52,66,25,62,73,25,1];
//*Recomendable usar el ejemplo de array puesto en la línea anterior a mano para que se repitan 2 números y se compruebe el resultado para la moda, ya que es muy dificil que aleatoriamente el programa genere 2 valores iguales.


//Nos aseguramos con la condicion que los numeros introducidos estaran comprendidos entre 1 y 100
const datos = [];
while(datos.length<10){
  //Generamos valores aleatorios comprendidos entre 1 y 100  
  var random = Math.ceil(1 + Math.floor(Math.random() * 100));
  datos.push(random);
  }

//Sacamos por pantalla los resultados de la media aritmetica, la mediana y moda.
console.log(`Los datos introducidos son: ${datos}`);
console.log(`La media aritmetica es: ${media(datos)}`);
console.log(`Datos ordenados: ${datos.sort((a,b) => a - b)}`);
console.log(`La mediana es igual a: ${mediana(datos)}`);
console.log(`La moda es igual a: ${moda(datos)}`);
