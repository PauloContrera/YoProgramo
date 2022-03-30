//Para ejecutar la complitacion de este archivo se debe ejecutar el siguiente comando:
//tsc indroduccion.ts
// Pero tambien para hacerlo de tiempo indefino se usa tambien el comando:
// tsc -w indroduccion.ts

//TypeScript/indroduccion.ts

console.log("Hola mundo"); 


class datos{
    public  nombre: string;
    public  apellido: string;
    private edad: number;
    constructor (nombre: string,apellido: string){
        this.nombre = nombre;   
        this.apellido = apellido;

    }
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;