//Podemos usar el método Array.filter() para encontrar los elementos dentro de un arreglo que cumplan con cierta condición.
//Por ejemplo, si queremos obtener todos los elementos de un arreglo de números que sean mayores a 10, podemos hacer lo siguiente:

    let arreglo = [10, 11, 3, 20, 5];

let mayorQueDiez = arreglo.filter(element => element > 10);

console.log(mayorQueDiez) // resultado esperado: [11, 20]