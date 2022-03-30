// Crear objetos simples de pruebas:
//     Los objetos JSON se pueden crear con JavaScript.Veamos las diversas formas de crear objetos JSON usando JavaScript:

//-Creación de un objeto vacío
var JSONObj = {};

// -Creación de un nuevo objeto -
var JSONObj = new Object();

// -Creación de un objeto con atributo nombrelibro con valor en cadena, atributo precio con valor numérico.Se accede al atributo usando '.'
// Operador -
    var JSONObj = {
        "nombrelibro": "El hacedor",
        "precio": 500
    };
    console.log(JSONObj);

    
const nombre = document.getElementById('Nombre');
nombre.innerHTML = JSONObj.nombrelibro;
const Precio = document.getElementById('Precio');
Precio.innerHTML = JSONObj.precio;



//Para Transformar un objeto a una cadena JSON
console.log(JSon.stringify(JSONObj));

//Para Transformar una cadena JSON a un objeto
console.log(JSon.parse(JSONObj));


