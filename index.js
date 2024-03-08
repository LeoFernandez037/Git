console.log("Hola mundo");
function Suma(a, b) {
  let c = a + b;
  // debugger;
  return c;
}
// averiguar de scope porque var no se utiliza solo let y const

let botoncito = document.querySelector("button");
botoncito.name = "maicra";

// para elegir mas botones selecionamos lo siguiente

//let boton = document.querySelector("button");

let facebook = document.createElement("button");
let facebookTexto = document.createTextNode("Facebook");
facebook.appendChild(facebookTexto);
let contenedor = document.querySelector(".container");
//. porque es el nombre de una clase
contenedor.appendChild(facebook);
