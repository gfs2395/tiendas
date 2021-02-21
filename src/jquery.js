import * as tienda from './tiendas.js';
import * as pintar from './diseño.js';
import * as formulario from './formulario.js'
   
   function getJquery(contenedorPadre,filtro,url){
    filtro ? null : tienda.esperarTiendas(contenedorPadre);
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            tienda.logicaTienda(filtro,JSON.stringify(data),url,x=>getJquery(contenedorPadre,true,url))
           

        },
        failure: function (data) {
         alert(data.responseText);
        },
        error: function (data) {
         alert(data.responseText);
        }
       });
   }

   function postJquery(data, url) {
    document.getElementById("nuevaTienda").appendChild(pintar.crearLoader(true))
    document.getElementById("nuevaTienda").disabled = true
    $.ajax
    ({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        type: "POST",
        //the url where you want to sent the userName and password to
        url: url,
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (e) {
            formulario.exitoAñadir(e)
        console.log("Enviado con Jquery") 
        }
    })
   }
   export{
       getJquery,
       postJquery
   }