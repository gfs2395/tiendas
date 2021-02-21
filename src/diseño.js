import * as tienda from './tiendas.js'
 
 function crearLoader(button) {
   let loader = pintarPantalla('div', '', 'loader');
   let icono = pintarPantalla('i', '', 'fas');
   !button ? icono.classList.add("fa-spinner", "fa-10x"):icono.classList.add("fa-spinner", "fa-1x");
   //let porcentaje = pintarPantalla('p', '%', 'text');
   loader.appendChild(icono);
   return loader;
 }

 function limpiarPantalla(nodoPadre, nodoHijo) {

   nodoPadre.removeChild(nodoHijo)
 }

 function pintarPantalla(elemento, mensaje, clase) {
   var tag = document.createElement(elemento);
   var texto = document.createTextNode(mensaje);
   tag.appendChild(texto);
   tag.classList.add(clase);
   return tag
 }

 function pintarBotonesExtra(){
  pintarBotonAñadir();
  document.getElementsByClassName("containAñadir")[0].insertBefore(pintarBotonBusqueda(),document.getElementsByTagName('form')[0])
}

function pintarBotonCancelar(data){
  let tag = pintarPantalla('icon','','far')
  tag.classList.add("fa-window-close")
  tag.id = "cancelar";
  return tag;
}

function pintarBotonBusqueda(){
   let searchCont = pintarPantalla("div","","busqueda");
   let inputText = pintarPantalla('input',"","busquedaInput");
   inputText.setAttribute('type','text');
   searchCont.appendChild(inputText)
   let icon = pintarPantalla('icon',"","fas")
   icon.classList.add("fa-search");
   searchCont.appendChild(icon)
   return searchCont;

   
}
function pintarBotonAñadir(){
  
  document.getElementsByClassName("containAñadir")[0].insertBefore(pintarPantalla('button', 'Añadir tienda', 'desplegar'), document.getElementsByTagName('form')[0])
 }

 function getHeight(actual,cual) {
  let futuro =0 ;
  if(cual=='padre'){
    actual == "50px" ? futuro = 850 : futuro=50;

  }if(cual=='hijo'){
    actual == "760px" ? futuro = 0 : futuro = 760;

  }
  return futuro;
}


 export {
   pintarPantalla,
   limpiarPantalla,
   crearLoader,
   pintarBotonesExtra,
   pintarBotonCancelar,
   getHeight
 }