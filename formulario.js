import {
    setFetch,
    getFetch
} from './fetch.js';
import * as pintar from './diseño.js'

function obtenerFormulario() {
    let enviar = true;
    let pos = 0;
    let datos = [document.getElementById("nombreTienda"), document.getElementById("direccion"), document.getElementById("localidad"), document.getElementById("telefono")]

    datos.forEach(item => {

        !item.checkValidity() ? enviar = false : datos[pos] = `${item.value}`;
        pos++;
    })
    datos.splice(0, 0, `idTienda:42`)
    enviar == true ? console.log("Enviamos") : console.log("no enviamos")
    setFetch({
        idTienda: 60,
        nombreTienda: datos[1],
        direccion: datos[2],
        localidad: datos[3],
        telefono: datos[4]
    });

}


let tlf = document.getElementById("telefono");
tlf.setAttribute("pattern", "[689]{1}[1-9]{8}")

tlf.addEventListener("input", function (event) {
    if (tlf.validity.valueMissing) {
        tlf.setCustomValidity("¡No puede dejar este campo vacío!");
        tlf.reportValidity();
        event.preventDefault();
    } else if (tlf.validity.patternMismatch) {
        tlf.setCustomValidity("El telefono ha de tener 9 cifras y empezar por 6,8 o 9");
        tlf.reportValidity();
        event.preventDefault();
    } else {
        tlf.setCustomValidity("");
        tlf.reportValidity();
        event.preventDefault();
    }
});

function manejarFormulario() {
    document.getElementsByClassName("desplegar")[0].addEventListener("click", (e) => {
        e.target.parentNode.style.height = pintar.getHeight(e.target.parentNode.style.height, "padre") + "px",
            e.target.parentNode.getElementsByTagName('form')[0].style.height = pintar.getHeight(e.target.parentNode.getElementsByTagName('form')[0].style.height, "hijo") + "px"

    })
    document.getElementsByClassName("containAñadir")[0].style.height = "50px";

}

function eventosUsuarioIconos() {
    document.getElementsByTagName("icon")[0].addEventListener("click", (e) => {
        getFetch(document.getElementsByClassName("containAñadir")[0], true)
    })

}

function limpiarTiendas(datae) {
    console.log(datae.length)
    console.log(datae)
    if(datae.length>0){
        for (let i = datae.length - 1; i => 1; i--) {
            document.getElementsByClassName("boxContainer")[0].removeChild(datae[i])
            if (i == 0) {
                break
            }
        }
    }
}

export {
    obtenerFormulario,
    manejarFormulario,
    eventosUsuarioIconos,
    limpiarTiendas
}