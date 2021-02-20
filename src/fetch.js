import * as tienda from './tiendas.js';
import * as pintar from './diseño.js';
import * as formulario from './formulario.js'

function getFetch(contenedorPadre, filtro) {
    filtro ? null : tienda.esperarTiendas(contenedorPadre);
    fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/")
        .then(response => {
            if (response.ok)
                return response.text();
        })
        .then(data => {
            console.log("varias veces", filtro)
            let contenido;
            /** Procesar los datos **/
            if (filtro) {
                contenido = tienda.filtrar(data, document.getElementsByClassName("busquedaInput")[0].value)
                tienda.mostrarTiendas(contenido, document.getElementsByClassName('container')[0], false)
            } else {
                pintar.pintarBotonesExtra(), tienda.mostrarTiendas(data, document.getElementsByClassName('container')[0], true);
                
            }
            formulario.eventosUsuarioIconos();
            formulario.manejarFormulario();
            document.getElementsByClassName("containAñadir")[0].style.height = "50px";
            formulario.eventosUsuarioIconos();

        });

}

function setFetch(data) {
    mode: 'no-cors',
    document.getElementById("nuevaTienda").appendChild(pintar.crearLoader(true))
    document.getElementById("nuevaTienda").disabled = true

    fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }


    }).then(res => {
        

    })
    .catch(error => console.error('Error:', error))
    .then(response =>formulario.exitoAñadir(response));
}

export {
    getFetch,
    setFetch
}