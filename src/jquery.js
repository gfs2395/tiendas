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
            tienda.logicaTienda(filtro,JSON.stringify(data),url)
            

        },
        failure: function (data) {
         alert(data.responseText);
        },
        error: function (data) {
         alert(data.responseText);
        }
       });
   }

   export{
       getJquery
   }