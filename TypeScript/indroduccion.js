//Para ejecutar la complitacion de este archivo se debe ejecutar el siguiente comando:
//tsc indroduccion.ts
// Pero tambien para hacerlo de tiempo indefino se usa tambien el comando:
// tsc -w indroduccion.ts
//TypeScript/indroduccion.ts
console.log("Hola mundo");
var datos = /** @class */ (function () {
    function datos(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return datos;
}());
// Write TypeScript code!
var appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>TypeScript Starter</h1>";
