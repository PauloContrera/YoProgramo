const texto = document.getElementById('texto');

// texto.innerHTML = "Hola mundo";

var text2=["H","o","l","a"," ","M","u","n","d","o"];
var i;

var timer;
// texto= text2;
var aux=0;

var dateControl = document.querySelector('input[type="date"]');
var date = new Date();
var minuto = date.getMinutes();
var segundo = date.getSeconds();
var milisegundo = date.getMilliseconds();

    
    var aux2=text2.length;
    var aux3=null;
    var texto3
        aux=text2
        aux3=aux[0];
        texto3=Vectorizar_acumulativo(text2);
        // console.log("holu:");
        console.log(texto3);
     
        texto.innerHTML=texto3[milisegundo%aux2];

        //TODO: Para que funcione el texto animado, utiliza angular.js 



function Vectorizar_acumulativo(texto){
    var vector=[];
    var aux3 = null;
    for(var i=0;i<texto.length;i++){
        aux3=texto[0];
        for(var j=1;j<=i;j++){
            aux3+=texto[j];
        }
        vector.push(aux3);
        // console.log(vector);
    }
      return     vector;    
  }