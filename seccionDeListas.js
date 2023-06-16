function selectorFunciones(){
          eventosBotonChoferes()
          eventosBotonEncargados()
          eventosBotonJefeDeServicio()
          eventosBotonFaccion()
          eventosBotonTareasInternas()
}
selectorFunciones()

function eventosBotonChoferes(){
          botonChoferes.addEventListener("click",()=>{
          console.log("accede al listado de choferes")
          })          
}

function eventosBotonEncargados(){
          botonEncargados.addEventListener("mousemove",()=>{
          botonEncargados.title = "accede al listado de encargados"
          })
}

function eventosBotonJefeDeServicio(){
          botonJefeDeServicios.addEventListener("mousemove",()=>{
          botonJefeDeServicios.title = "accede al listado de Jefes de Servicios"
          })
}

function eventosBotonFaccion(){
          botonFaccion.addEventListener("mousemove",()=>{
          botonFaccion.title = "accede al listado del personal de faccion"
          })
}

function eventosBotonTareasInternas(){
          botontareasInternas.addEventListener("mousemove",()=>{
          botontareasInternas.title = "accede al listado de personal interno"
          })
}


/*-------------------------------------------------------------------------------*/
