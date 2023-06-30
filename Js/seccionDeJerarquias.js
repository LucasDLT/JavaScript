function selectorJerarquias() {
          eventosBotonOficial()
          eventosBotonOficialPrimero()
          eventosBotonOficialMayor()
          eventosBotonInspector()
          eventosBotonPrincipal()      
}

selectorJerarquias()

function eventosBotonOficial(){
          botonOficial.addEventListener("mousemove",()=>{
          botonOficial.title = "acceder al listado de Oficiales"
          })
          botonOficial.addEventListener("click",()=>{
          confeccionaListaOficiales()         
          })
}

function eventosBotonOficialPrimero() {
          botonOficialPrimero.addEventListener("mousemove",()=>{
          botonOficialPrimero.title = "acceder al listado de Oficial Primero"
          })
          botonOficialPrimero.addEventListener("click",()=>{
          confeccionaListaOficialPrimero() 
          })
          
}

function eventosBotonOficialMayor() {
          botonOficialMayor.addEventListener("mousemove",()=>{
          botonOficialMayor.title = "acceder al listado de Oficial Mayor"
          })
          botonOficialMayor.addEventListener("click",()=>{
          confeccionaListaOficialMayor()
          })
          
}

function eventosBotonInspector() {
          botonInspector.addEventListener("mousemove",()=>{
          botonInspector.title = "acceder al listado de Inspectores"
          })
          botonInspector.addEventListener("click",()=>{
          confeccionaListaInspector()
          })
          
}

function eventosBotonPrincipal() {
          botonPrincipal.addEventListener("mousemove",()=>{
          botonPrincipal.title = "acceder al listado de Principales"
          })
          botonPrincipal.addEventListener("click",()=>{
          confeccionaListaPrincipal()
          })
          
}

/*------------------------------------------------------------*/

function confeccionaListaOficiales() {
          cargaListaDeJerarquias.innerHTML=``
          const listaOficiales = listaPersonal.filter((efectivo)=>efectivo.jerarquia === "oficial".toUpperCase())
          const listaSoloOficiales = listaOficiales.map((efectivo)=>{
          cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo)
          })
          return listaSoloOficiales
}

function confeccionaListaOficialPrimero() {
          cargaListaDeJerarquias.innerHTML=``
          const listaOficialPrimero = listaPersonal.filter((efectivo)=>efectivo.jerarquia === "oficial primero".toUpperCase())
          const listaSoloOficialPrimero = listaOficialPrimero.map((efectivo)=>{
          cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo)
          })
          return listaSoloOficialPrimero
}

function confeccionaListaOficialMayor(){
          cargaListaDeJerarquias.innerHTML=``
          const listaOficialMayor = listaPersonal.filter((efectivo)=>efectivo.jerarquia === "oficial mayor".toUpperCase())
          const listaSoloOficialMayor = listaOficialMayor.map((efectivo)=>{
          cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo)
          })
          return listaSoloOficialMayor
}

function confeccionaListaInspector() {
          cargaListaDeJerarquias.innerHTML=``
          const listaInspector = listaPersonal.filter((efectivo)=>efectivo.jerarquia === "inspector".toUpperCase())
          const listaSoloInspector = listaInspector.map((efectivo)=>{
          cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo)
          })
          return listaSoloInspector
}

function confeccionaListaPrincipal() {
          cargaListaDeJerarquias.innerHTML=``
          const listaPrincipal = listaPersonal.filter((efectivo)=>efectivo.jerarquia === "principal".toUpperCase())
          const listaSoloPrincipal = listaPrincipal.map((efectivo)=>{
          cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo)
          })
          return listaSoloPrincipal
}

function estructuraListaJerarquias(efectivo){
          return`<br></br>
          <tr>
          <td>${efectivo.jerarquia}</td>
          <td>${efectivo.legajo}</td>
          <td>${efectivo.nombre}</td>
          <td>${efectivo.apellido}</td>
            <td>
            <button id=type="${efectivo.legajo}"
            "submit">AGREGAR</button>
            </td>
          </tr>`
}
