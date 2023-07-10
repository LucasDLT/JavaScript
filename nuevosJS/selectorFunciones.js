const cargaListaDeFunciones = document.getElementById("cargaFunciones")
const botonChoferes = document.getElementById("botonChofer")
const botonEncargados = document.getElementById("botonEncargado")
const botonJefeDeServicios = document.getElementById("botonJefeDeServicios")
const botonFaccion = document.getElementById("botonFaccion")
const botonTareasInternas = document.getElementById("botonTareasInternas")

function selectorFunciones(){
          eventosBotonChoferes()
          eventosBotonEncargados()
          eventosBotonJefeDeServicio()
          eventosBotonFaccion()
          eventosBotonTareasInternas()
}
selectorFunciones()

function eventosBotonChoferes(){
          botonChoferes.addEventListener("mousemove",()=>{
          botonChoferes.title = "accede al listado de choferes"
          })
          botonChoferes.addEventListener("click",()=>{
          confeccionaListadoChoferes()
          console.log("click choferes")
          })          
}

function eventosBotonEncargados(){
          botonEncargados.addEventListener("mousemove",()=>{
          botonEncargados.title = "accede al listado de encargados"
          })
          botonEncargados.addEventListener("click",()=>{
          console.log("click encargados")
          confeccionaListadoEncargados()

          })
}

function eventosBotonJefeDeServicio(){
          botonJefeDeServicios.addEventListener("mousemove",()=>{
          botonJefeDeServicios.title = "accede al listado de Jefes de Servicios"
          })
          botonJefeDeServicios.addEventListener("click",()=>{
          console.log("click jefe de servicio")
          confeccionaListadoJefeDeServicio()
          })
}

function eventosBotonFaccion(){
          botonFaccion.addEventListener("mousemove",()=>{
          botonFaccion.title = "accede al listado del personal de faccion"
          })
          botonFaccion.addEventListener("click",()=>{
            confeccionaListadoFaccion()
          console.log("click faccion")
          })
}

function eventosBotonTareasInternas(){
          botonTareasInternas.addEventListener("mousemove",()=>{
          botonTareasInternas.title = "accede al listado de personal interno"
          })
          botonTareasInternas.addEventListener("click",()=>{
          confeccionaListadoTareasInternas()
          console.log("click tareas internas")          
          })
}



/*-------------------------------------------------------------------------------*/

function confeccionaListadoChoferes(){
          cargaListaDeFunciones.innerHTML=``;
          const listaChoferes = listadoDePersonal.filter((efectivo)=>efectivo.funcion === "chofer")
          const listaSoloChoferes = listaChoferes.map((efectivo)=>{
          cargaListaDeFunciones.innerHTML += estructuraListaFunciones(efectivo)
          })
          return listaSoloChoferes
}

function confeccionaListadoEncargados(){
          cargaListaDeFunciones.innerHTML=``;
          const listaEncargados = listadoDePersonal.filter((efectivo)=>efectivo.funcion === "encargado")
          const listaSoloEncargados = listaEncargados.map((efectivo)=>{
          cargaListaDeFunciones.innerHTML += estructuraListaFunciones(efectivo)
          })
          return listaSoloEncargados
}

function confeccionaListadoJefeDeServicio(){
  cargaListaDeFunciones.innerHTML=``;
  const listaJefeDeServicios = listadoDePersonal.filter((efectivo)=>efectivo.funcion === "jefe de servicio")
  const listaSoloJefeDeServicios = listaJefeDeServicios.map((efectivo)=>{
  cargaListaDeFunciones.innerHTML += estructuraListaFunciones(efectivo)
  })
  return listaSoloJefeDeServicios
}

function confeccionaListadoFaccion(){
  cargaListaDeFunciones.innerHTML=``;
  const listaFaccion = listadoDePersonal.filter((efectivo)=>efectivo.funcion === "faccion")
  const listaSoloFaccion = listaFaccion.map((efectivo)=>{
  cargaListaDeFunciones.innerHTML += estructuraListaFunciones(efectivo)
  })
  return listaSoloFaccion
}

function confeccionaListadoTareasInternas(){
  cargaListaDeFunciones.innerHTML=``;
  const listaTareasInternas = listadoDePersonal.filter((efectivo)=>efectivo.funcion === "tareas internas")
  const listaSoloTareasInternas = listaTareasInternas.map((efectivo)=>{
  cargaListaDeFunciones.innerHTML += estructuraListaFunciones(efectivo)
  })
  return listaSoloTareasInternas
}

function estructuraListaFunciones(efectivo){
          return`<br></br>
          <tr>
          <td>${efectivo.funcion}</td>
            <td>${efectivo.jerarquia}</td>
            <td>${efectivo.legajo}</td>
            <td>${efectivo.nombre}</td>
            <td>${efectivo.apellido}</td>
          </tr>`
} 