import * as form from './formulario.js';
import * as tienda from './tiendas.js';
import * as pintar from './diseño.js';
import * as fetch from './fetch.js'
import * as jquery from './jquery.js'
var contenedorPadre = document.getElementsByClassName('container')[0];
var botonesIniciales = document.getElementsByTagName('button');
var eleccion = "";
const url = "https://webapp-210130211157.azurewebsites.net/webresources/mitienda/"

document.getElementsByClassName("nuevaTienda")[0].addEventListener("click", form.obtenerFormulario)

document.getElementById("nuevaTienda").addEventListener("click", (e) => {
  e.preventDefault();
})

//al borrar clonar nodo para volver atras?


botonesIniciales[2].addEventListener('click', () => {
  fetch.getFetch(contenedorPadre,false,url)
})
botonesIniciales[1].addEventListener('click', () => {
  jquery.getJquery(contenedorPadre,false,url)
})









