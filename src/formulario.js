import {
    setFetch,
    getFetch
} from './fetch.js';
import * as pintar from './diseño.js'
import * as tienda from './tiendas.js'

function obtenerFormulario(x,url) {
    let enviar = true;
    let pos = 0;
    let datos = [document.getElementById("nombreTienda"), document.getElementById("direccion"), document.getElementById("localidad"), document.getElementById("telefono")]

    datos.forEach(item => {

        !item.checkValidity() ? enviar = false : datos[pos] = `${item.value}`;
        pos++;
    })
    datos.splice(0, 0, `idTienda:42`)
    enviar == true ? console.log("Enviamos") : console.log("no enviamos")
    x({
        idTienda: 60,
        nombreTienda: datos[1],
        direccion: datos[2],
        localidad: datos[3],
        telefono: datos[4]
    },url);

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
    if(document.getElementById("nuevaTienda").classList==2){
        document.getElementById("nuevaTienda").classList.remove("lighten");

    }
}

function eventosUsuarioIconos(accion) {
    document.getElementsByTagName("icon")[0].addEventListener("click", accion)
    

}

function limpiarTiendas(datae) {
    if(datae.length>0){
        for (let i = datae.length - 1; i => 1; i--) {
            document.getElementsByClassName("boxContainer")[0].removeChild(datae[i])
            if (i == 0) {
                break
            }
        }
    }
}

function exitoAñadir(response){
    console.log('Success:', response);
    pintar.limpiarPantalla(document.getElementById("nuevaTienda"),document.getElementsByClassName("loader")[0])
    document.getElementById("nuevaTienda").disabled = false;
    document.getElementById("nuevaTienda").classList.remove("darken")
    document.getElementById("nuevaTienda").classList.add("lighten")
}

function añadirMetodoInsercion(func){
    document.getElementById("nuevaTienda").addEventListener("click",func)
}
function cancelarBusqueda(vuelta,data){
    if(vuelta){
        let cancelar = pintar.pintarBotonCancelar(data);
        cancelar.addEventListener("click",function x(){(tienda.mostrarTiendas(data,document.getElementsByClassName("containAñadir")[0],true),pintar.limpiarPantalla(document.getElementsByClassName("container")[0],document.getElementsByClassName("boxContainer")[1],        pintar.limpiarPantalla(document.getElementsByClassName("containAñadir")[0],document.getElementById("cancelar"))
        )
        )})
        document.getElementsByClassName("containAñadir")[0].appendChild(cancelar)
        
    }else{
        pintar.limpiarPantalla(document.getElementsByClassName("containAñadir")[0],document.getElementById("cancelar"))
        pintar.limpiarPantalla(document.getElementsByClassName("container")[0],document.getElementsByClassName("boxContainer")[1])
    }
}

export {
    obtenerFormulario,
    manejarFormulario,
    eventosUsuarioIconos,
    limpiarTiendas,
    exitoAñadir,
    añadirMetodoInsercion,
    cancelarBusqueda
}