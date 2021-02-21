import * as tienda from './tiendas.js';
import * as pintar from './diseño.js';
const cliente = new XMLHttpRequest();

export function getXHR(contenedorPadre, filtro, url) { //donde instanciar el spinenr
    filtro ? null : tienda.esperarTiendas(contenedorPadre);

    cliente.addEventListener("readystatechange", () => { //La propiedad .readyState de nuestra instancia client es un valor numérico (representado por una constante) que indica en el punto de progreso en que se encuentra la petición HTTP.
            if (cliente.readyState === 4 && cliente.status === 200) {
                tienda.logicaTienda(filtro, cliente.response, x=>{
                    getXHR(contenedorPadre, true, url)
                })

            }
        }

        );
        cliente.open("GET", url);
        cliente.send();
    
}

export function sendXHR(data, url) {
    cliente.open("POST", url);
    cliente.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    cliente.withCredentials = false;
    document.getElementById("nuevaTienda").appendChild(pintar.crearLoader(true))
    document.getElementById("nuevaTienda").disabled = true
    if (cliente.send(data)) {
        console.log("Enviado con XHR")

    } else {
        console.log("ERROR")
    }
};