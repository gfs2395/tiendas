import * as tienda from './tiendas.js';
import * as pintar from './diseño.js';
import * as formulario from './formulario.js'

function getFetch(contenedorPadre, filtro,url) {
    filtro ? null : tienda.esperarTiendas(contenedorPadre);
    fetch(url)
        .then(response => {
            if (response.ok)
                return response.text();
        })
        .then(data => {
            /** Procesar los datos **/
            tienda.logicaTienda(filtro,data,url,x=>{getFetch(contenedorPadre,true,url)})})
}

function setFetch(data,url) {
    document.getElementById("nuevaTienda").classList.add("darken")

    mode: 'no-cors',
    document.getElementById("nuevaTienda").appendChild(pintar.crearLoader(true))
    document.getElementById("nuevaTienda").disabled = true

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }


    }).then(res => {
        

    })
    .catch(error => console.error('Error:', error))
    .then(response =>formulario.exitoAñadir(response),console.log("Enviado con Fetch") 
    );
}

export {
    getFetch,
    setFetch
}