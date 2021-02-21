import * as form from './formulario.js';
import * as fetch from './fetch.js'
import * as jquery from './jquery.js'
import * as XHR from './xhr.js'

var contenedorPadre = document.getElementsByClassName('container')[0];
var botonesIniciales = document.getElementsByTagName('button');

const url = "https://webapp-210130211157.azurewebsites.net/webresources/mitienda/"


document.getElementById("nuevaTienda").addEventListener("click", (e) => {
  e.preventDefault();
})

//al borrar clonar nodo para volver atras?

botonesIniciales[1].addEventListener('click', () => {
  XHR.getXHR(contenedorPadre,false,url)
  form.añadirMetodoInsercion(x=>{form.obtenerFormulario(XHR.sendXHR,url)})

})
botonesIniciales[2].addEventListener('click', () => {
  fetch.getFetch(contenedorPadre,false,url)
  form.añadirMetodoInsercion(x=>{form.obtenerFormulario(fetch.setFetch,url)})

})
botonesIniciales[3].addEventListener('click', () => {
  jquery.getJquery(contenedorPadre,false,url)
  form.añadirMetodoInsercion(x=>{form.obtenerFormulario(jquery.postJquery,url)})

})












