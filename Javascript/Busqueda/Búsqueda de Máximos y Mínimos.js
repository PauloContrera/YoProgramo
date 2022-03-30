// Uno de los problemas académicos más comunes es el de la búsqueda del valor máximo o mínimo dentro de una lista. 
// JavaScript dispone de las funciones Math.max() y Math.min() con las que es posible obtener el máximo y mínimo respectivamente 
// de un conjunto de números, por ejemplo: 

Math.max(1, 2, 3, 4, 5); // resultado esperado: 5

Math.min(1, 2, 3, 4, 5); // resultado esperado: 1

// El problema de estas funciones es que no permiten entradas de tipo array, solamente de tipo numérico. 
// Normalmente se puede solucionar empleando diferentes aproximaciones como son los métodos reduce() o apply(). 
// La forma más fácil de aplicar una función a un array es utilizando el método apply(). 
// Simplemente se tiene que aplicar apply() a la función pasando como primer parámetro null y como segundo parámetro el array. 
// Así se puede obtener el máximo o mínimo de un array simplemente con el siguiente código.

Math.max.apply(null, values) // resultado esperado: 5

Math.min.apply(null, values) // resultado esperado: 1