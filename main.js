/*Requerimientos Ejercicio:

1.Realiza un programa en JavaScript que recorra un array de 10 números y calcule la media aritmética de 
diez números. Los números deben de estar comprendidos entre el 0 y 100, si se detectará algún número fuera 
de ese rango no se tendría en cuenta para su cálculo.

2.Calcular la moda.

3.Calcular la mediana.


//1.Calculo de la media aritmetica.

/*Una alternativa que también funciona es:
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum/arr.length;
*/

function media(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

//2.Calculo de la Mediana.
function mediana(arr){
    const arrOrdenado = arr.sort((a,b) => a - b);
    return arrOrdenado.length % 2 === 0 ? (arrOrdenado[arrOrdenado.length/2 - 1] + arrOrdenado[arrOrdenado.length/2]) / 2 : arrOrdenado[Math.floor(arrOrdenado.length/2)];

}

//3.Calculo de la Moda.
function moda(arr){
    const tablaFrecuencia = {}
    arr.forEach(elem => tablaFrecuencia[elem] = tablaFrecuencia[elem] + 1 || 1);

    let modas = [];
    let maxFrecuencia = 0;
    for(const key in tablaFrecuencia) {
        if(tablaFrecuencia[key] > maxFrecuencia){
            modas = [Number(key)];
            maxFrecuencia = tablaFrecuencia[key]
    }
    else if(tablaFrecuencia[key] === maxFrecuencia) {
        modas.push(Number(key));
    }
}

if(modas.length === Object.keys(tablaFrecuencia).length) modas = [];

return modas;
}

//Sacamos los datos por pantalla y definimos el array de 10 numeros.
const datos = [25,16,22,52,66,25,62,73,25,1];

console.log(`Los datos introducidos son: ${datos}`);
console.log(`La media aritmetica es: ${media(datos)}`);
console.log(`Datos ordenados: ${datos.sort((a,b) => a - b)}`);
console.log(`La mediana es igual a: ${mediana(datos)}`);
console.log(`La moda es igual a: ${moda(datos)}`);
