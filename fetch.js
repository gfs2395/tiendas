import * as tienda from './tiendas.js';
import * as pintar from './diseño.js';
import * as formulario from './formulario.js'

function getFetch(contenedorPadre, filtro) {
    fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/")
        .then(response => {
            filtro ? null : tienda.esperarTiendas(contenedorPadre);
            if (response.ok)
                return response.text();
        })
        .then(data => {
            console.log("varias veces", filtro)
            let contenido;
            /** Procesar los datos **/
            if (filtro) {
                console.log("aaa",document.getElementsByClassName("busqueda")[0].getElementsByTagName("input")[0])
                contenido = tienda.filtrar(data, document.getElementsByClassName("busquedaInput")[0].value)
                 tienda.mostrarTiendas(contenido, document.getElementsByClassName('container')[0], false)
                console.log("contenido", contenido)
            } else {
                pintar.pintarBotonesExtra(), tienda.mostrarTiendas(data, document.getElementsByClassName('container')[0], true);
                
            }
            formulario.eventosUsuarioIconos();
            formulario.manejarFormulario();
            formulario.eventosUsuarioIconos();
            document.getElementsByClassName("containAñadir")[0].style.height = "50px";

        });

}

function setFetch(data) {
    mode: 'no-cors',

    fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }


    }).then(res => {
        document.getElementById("nuevaTienda").appendChild(pintar.crearLoader(true))

    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

export {
    getFetch,
    setFetch
}