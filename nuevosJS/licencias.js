function  eventosBotonLicencias(){
          const botonLicencia = document.getElementById("botonLicencias")
          botonLicencia.addEventListener("mousemove", ()=>{
          botonLicencia.title = "presiona para buscar"
          })
          botonLicencia.addEventListener("click", ()=>{
          buscadorLicencia()
          }) 
        }
eventosBotonLicencias()
        
function buscadorLicencia(){
          const inputLicencia = Number(document.getElementById("inputLicencias").value)
          let resultadoBusqueda = listadoDePersonal.find((efectivo)=> efectivo.legajo === Number(inputLicencia))
          if (resultadoBusqueda){
                    cargadorDeBusquedaLicencia(resultadoBusqueda)
          }else{
                    console.log("no se encontro ningun legajo");
          }
          }        
        
function cargadorDeBusquedaLicencia(efectivo) {
         const contenedorLicencia = document.getElementById("contenedorLicencia") 
         contenedorLicencia.innerHTML=``
         const div = document.createElement(`div`)
         const contenidoLicencia =`
         <div class="">
         <h5 class="tituloLicencia">DATOS PERSONALES</h5>
         <div class="contenedorLicencia">

         <td>${efectivo.legajo}</td>
         <td>${efectivo.jerarquia}</td>
         <td>${efectivo.nombre}</td>
         <td>${efectivo.apellido}</td>
         <td>${efectivo.funcion}</td>
         <label for="">ingresa los dias solicitados</label>
         <input type="text" class="inputCalculador">
         <label  for="">direccion</label>
         <input class="direccion"type="text" class="direccion">
         <label  for="">localidad</label>
         <input class="localidad" type="text" class="localidad">
         <label for="">provincia</label>
         <input  class="provincia" type="text" class="provincia">
         </div>
         </div>
         <td>
              <button class="botonCalcularLicencia" id="${efectivo.legajo}"
              type="submit">GENERAR NOTA</button>
         </td>
         `  
         div.innerHTML = contenidoLicencia
         contenedorLicencia.append(div)
        
         const botonCalcularLicencia = document.querySelector(`.botonCalcularLicencia`)
        
         botonCalcularLicencia.addEventListener("click",()=>{
          resta (efectivo)
         })
         botonCalcularLicencia.addEventListener("mousemove",()=>{
          botonCalcularLicencia.title = "presiona para calcular"
         })
        
        
}

function resta (efectivo) {
          const solicitados = Number (document.querySelector(`.inputCalculador`).value)
          let resta = efectivo.totalDias - solicitados
                    if (solicitados === 0) {
                     Swal.fire('no ingresaste nada')
                    return;
                    }
                    if (solicitados > efectivo.totalDias) {
                      Swal.fire('ingresaste mas dias de los que tenes')
                    return;
                    }
                    if (solicitados < 0){
                      Swal.fire('no ingresaste un valor numerico valido')
                    }
                    if (isNaN(solicitados)) {
                      Swal.fire('no ingresaste un valor numerico')
                      return;
                    }
                    else{
                    cargarNota(efectivo)
                  
                    }
}
function cargarNota(efectivo){
          const direccion = document.querySelector(`.direccion`).value
          const localidad = document.querySelector(`.localidad`).value
          const provincia = document.querySelector(`.provincia`).value
          const solicitados = Number (document.querySelector(`.inputCalculador`).value)
          const nota = document.getElementById("nota")
          nota.innerHTML = `<p  class="notaLicencia">
          Mediante la presente quien suscribe,${efectivo.jerarquia} legajo personal ${efectivo.legajo}, ${efectivo.nombre} ${efectivo.apellido}, 
          solicito, ${solicitados} dias de licencia anual, para ser usufruados en: ${direccion}, localidad de ${localidad}, ${provincia} </p>
          `
          return nota
}