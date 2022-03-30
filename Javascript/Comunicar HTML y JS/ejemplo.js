// Ejemplo:

function addElement () {

  // obtener el elemento div con id = "div_example"

  const existDiv = document.getElementById("div_example");

  // crear un nuevo elemento div 

  const newDiv = document.createElement("div");

  // agregar el nuevo elemento div existente

  existDiv.appendChild(newDiv);

} 