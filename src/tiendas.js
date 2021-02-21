import {
  crearLoader,
  limpiarPantalla,
  pintarPantalla,
  pintarBotonesExtra
} from './diseño.js';
import {limpiarTiendas,eventosUsuarioIconos,manejarFormulario} from './formulario.js';
import {getFetch} from './fetch.js';
let jsonTiendas ;

let boxContainer=document.getElementsByClassName("boxContainer"[0]);

export function mostrarTiendas(tiendas, contenedorPadre,primeraRecarga) {
if(primeraRecarga){
  limpiarPantalla(contenedorPadre, document.getElementsByClassName('opciones')[0]);
  limpiarPantalla(contenedorPadre, document.getElementsByClassName('loader')[0]);
   boxContainer = pintarPantalla('div', '', 'boxContainer');
   jsonTiendas=JSON.parse(tiendas)

}else{
  limpiarTiendas(document.getElementsByClassName("box"))
  jsonTiendas = tiendas;

}


  //jsonTiendas.map(e => console.log(e))
 

  Object.entries(jsonTiendas).forEach(([key, value]) => {
    
    let caja = pintarPantalla('div', '', 'box');
    let nombreTienda = pintarPantalla('span', value.nombreTienda, 'text');
    let telefono = pintarPantalla('span', value.telefono, 'text');
    let direccion = pintarPantalla('span', value.direccion, 'text');

    caja.appendChild(nombreTienda);
    caja.appendChild(direccion);
    caja.appendChild(telefono)


    boxContainer.appendChild(caja);
    //console.log(`${key} ${value.telefono} ${value.direccion}`);
    contenedorPadre.appendChild(boxContainer);

  });
  
}


export function esperarTiendas(padre) {

  let tag = crearLoader(false);
  padre.appendChild(tag)
}



export function filtrar(data,id){
  let newData = JSON.parse(data)
  console.log(newData)
  let v =newData.filter(e=>id==e.idTienda)
  console.log("es",v)
  return v
  //Para filtrar por nombre   let v =newData.filter(e=>console.log(e.idTienda))

}

export function logicaTienda(filtro,data,url){
  let contenido;
  if (filtro) {
      contenido = filtrar(data, document.getElementsByClassName("busquedaInput")[0].value)
      mostrarTiendas(contenido, document.getElementsByClassName('container')[0], false)
  } else {
      pintarBotonesExtra(), mostrarTiendas(data, document.getElementsByClassName('container')[0], true);
      eventosUsuarioIconos(()=>{ getFetch(document.getElementsByClassName("containAñadir")[0], true,url)})
      
        eventosUsuarioIconos();
        manejarFormulario();
      
    }

}