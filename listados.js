function selectorListado (){           
          eventosBotonFunciones()
          eventosBotonJerarquias()
          eventosBotonListadoGeneral()              
}
selectorListado ()


function eventosBotonFunciones(){
          botonListadoFunciones.addEventListener("mousemove",()=>{
          botonListadoFunciones.title = "acceder al listado por funciones"
          })
          botonListadoFunciones.addEventListener("click",()=>{
          location.href = "seccionDeListas.html"
          })      
}

function eventosBotonJerarquias(){
          botonListadoJerarquias.addEventListener("mousemove",()=>{
          botonListadoJerarquias.title = "acceder al listado por jerarquias"          
          })        
          botonListadoJerarquias.addEventListener("click",()=>{
          })
}

function eventosBotonListadoGeneral(){
          botonConfeccionarListados.addEventListener("mousemove",()=>{
          botonConfeccionarListados.title = "confeccionar listado personalizado"
          })
          botonConfeccionarListados.addEventListener("click",()=>{
          confeccionaListadoGeneral()         
          })
}
/*-------------------------------------------------------------------------------*/

function confeccionaListadoGeneral() {
          seccionListas.innerHTML=``
          const listaGeneral = listaPersonal.map((efectivo) =>  {
          seccionListas.innerHTML += cargarListados(efectivo);
          });
          return listaGeneral
}     

function cargarListados(efectivo) {
  return `<br></br>
          <tr>
            <td>${efectivo.jerarquia}</td>
            <td>${efectivo.legajo}</td>
            <td>${efectivo.nombre}</td>
            <td>${efectivo.apellido}</td>
            <td>${efectivo.funcion}</td>
            <td>${efectivo.totalDias}</td>
            <td>${efectivo.faltas}</td>
            <td>${efectivo.sanciones}</td>
            <td>
            <button id=type="${efectivo.legajo}"
            "submit">AGREGAR</button>
            </td>
          </tr>`;
}

     

function confeccionaListadosFunciones (){
          seccionListas.innerHTML = ``
          listaPersonal.filter((efectivo)=>efectivo.funcion)
          const listaDeFunciones = listaPersonal.map((efectivo)=>{
          seccionListas.innerHTML += cargarListadoFuncion (efectivo)
                  
                  })
                  console.table(listaDeFunciones.sort().reverse());
          }

function cargarListadoFuncion(efectivo) {
                    return `<br></br>
                            <tr>
                            <td>${efectivo.funcion}</td>
                              <td>${efectivo.jerarquia}</td>
                              <td>${efectivo.legajo}</td>
                              <td>${efectivo.nombre}</td>
                              <td>${efectivo.apellido}</td>
                              <td>
                              <button id=type="${efectivo.legajo}"
                              "submit">AGREGAR</button>
                              </td>
                            </tr>`;
                  }

function confeccionaListadosJerarquias(){
          const listaDeJerarquias = listaPersonal.map((efectivo)=>{
                    return{
                      legajo: efectivo.legajo,
                      nombre: efectivo.nombre,
                      apellido: efectivo.apellido, 
                      funcion: efectivo.jerarquia
                    }
                  })
                  console.table(listaDeJerarquias.sort().reverse());
}