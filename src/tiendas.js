import {
  crearLoader,
  limpiarPantalla,
  pintarPantalla,
  pintarBotonesExtra
} from './diseño.js';
import {limpiarTiendas,eventosUsuarioIconos,manejarFormulario,cancelarBusqueda} from './formulario.js';
let jsonTiendas ;

let boxContainer=document.getElementsByClassName("boxContainer"[0]);

export function mostrarTiendas(tiendas, contenedorPadre,primeraRecarga) {
if(primeraRecarga){
  console.log("e")
if(document.getElementsByClassName("opciones")[0]!=undefined){
  limpiarPantalla(contenedorPadre, document.getElementsByClassName('opciones')[0]);
  limpiarPantalla(contenedorPadre, document.getElementsByClassName('loader')[0]);
}
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




    /**
    * @method
    * @desc Canaliza el flujo de tiendas cada vez que se pretende mostrar, con o sin filtros
    * @param {boolean} [filtro] Indicar mediante un booleano si se filtra o no
    * @param {JSON} data JSON con el conjunto de tiendas recibidas por el metodo que la ha invocado
    * @param {Function} accion Referente a la interactibilidad de los botones
    * @todo Extraer ciertas funciones de pintado u obtencion de valores
    * @returns {void} Sin return
    */

export function logicaTienda(filtro,data,url,accion){
  let contenido;
  if (filtro) {
    contenido = filtrar(data, document.getElementsByClassName("busquedaInput")[0].value)
    mostrarTiendas(contenido, document.getElementsByClassName('container')[0], false)
    cancelarBusqueda(true,data)
    
  } else {
    pintarBotonesExtra(), mostrarTiendas(data, document.getElementsByClassName('container')[0], true);
    eventosUsuarioIconos(accion)
    if(document.getElementById("cancelar")!=undefined){
      cancelarBusqueda(true,data)
    }
    manejarFormulario();
    
  }
  
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