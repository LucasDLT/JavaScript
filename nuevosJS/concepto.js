const conenedorConcepto = document.getElementById("contenedorConcepto")
const contenedorResConcepto = document.getElementById("contenedorResConcepto")
const contenedorResultados = document.getElementById("contenedorResultados")      


function eventosBuscador() {
          const buttonConcepto = document.getElementById("buttonConcepto")
          buttonConcepto.addEventListener("mousemove",()=>{
            buttonConcepto.title="presiona para buscar"
          })
          buttonConcepto.addEventListener("click",()=>{
            buscadorConcepto()
          })  
        }
        eventosBuscador()
        function buscadorConcepto(){
                  const inputConcepto = Number(document.getElementById("inputConcepto").value)
                  let resultadoBusqueda = listadoDePersonal.find((efectivo)=> efectivo.legajo === Number(inputConcepto))
                  if (resultadoBusqueda) {
                            cargaEstructura(resultadoBusqueda)
                    } else {
                              console.log("no se encontro ningun legajo");   
                    } 
          }       
function cargaEstructura(efectivo){
          const contenedorConcepto = document.getElementById("contenedorConcepto")
          contenedorConcepto.innerHTML=``
          const div = document.createElement(`div`)
          const contenido =`
          <main>
            <td>${efectivo.jerarquia}</td>
            <td>${efectivo.legajo}</td>
            <td>${efectivo.nombre}</td>
            <td>${efectivo.apellido}</td>
            <td>${efectivo.funcion}</td>
            <td>
            <button class="botonConsultar" id="${efectivo.legajo}"
            "submit">VERIFICAR SANCIONES Y FALTAS</button>
            </td>
          </main>`
        
          div.innerHTML=contenido;
          contenedorConcepto.append(div)
          const botonConsultar = document.querySelector(`.botonConsultar`)
          botonConsultar.addEventListener("click",()=>{
                    cargarConsulta(efectivo)
          })
        } 
function verificarConcepto(efectivo){                  
                    if ((efectivo.sanciones < 7) && (efectivo.faltas < 7)) {
                              contenedorResConcepto.innerHTML =`<p>
                              Mediante la presente se informa que el ${efectivo.jerarquia} ${efectivo.legajo} ${efectivo.apellido} ${efectivo.nombre},merece el concepto: BUENO
                              </p>` 
                            console.log(efectivo.apellido + " posee concepto BUENO");
                    }
                    if ((efectivo.sanciones === 0) && (efectivo.faltas === 0)) {
                              contenedorResConcepto.innerHTML =`<p>
                              Mediante la presente se informa que el ${efectivo.jerarquia} ${efectivo.legajo} ${efectivo.apellido} ${efectivo.nombre},merece el concepto: EXCELENTE
                              </p>` 
                              console.log(efectivo.apellido + " posee concepto EXCELENTE")  
                    }
                    if (((efectivo.sanciones < 7) && (efectivo.faltas > 7)) || ((efectivo.sanciones > 7) && (efectivo.faltas < 7))) {
                              contenedorResConcepto.innerHTML =`<p>
                              Mediante la presente se informa que el${efectivo.jerarquia} ${efectivo.legajo} ${efectivo.apellido} ${efectivo.nombre},merece el concepto: REGULAR
                              </p>` 
                              console.log(efectivo.apellido + " posee concepto REGULAR");
                    } 
                    
                    if ((efectivo.sanciones > 7) && (efectivo.faltas > 7)) {
                              contenedorResConcepto.innerHTML =`<p>
                              Mediante la presente se informa que el${efectivo.jerarquia} ${efectivo.legajo} ${efectivo.apellido} ${efectivo.nombre},merece el concepto: MALO
                              </p>` 
                              console.log(efectivo.apellido + " posee concepto MALO");
                    }
          }

function cargarConsulta(efectivo){
            contenedorResultados.innerHTML =`
            <p class="contenedorConcepto">
            Mediante la presente se informa que el ${efectivo.jerarquia} ${efectivo.legajo}, posee ${efectivo.faltas} faltas
            y ${efectivo.sanciones} sanciones.
          
            <button class="consultarConcepto" id="${efectivo.legajo}"
            "submit">CONSULTAR CONCEPTO</button>
            </td>  </p>`
            const botonConsultarConcepto = document.querySelector(`.consultarConcepto`)
                    botonConsultarConcepto.addEventListener("mousemove",()=>{
                              botonConsultarConcepto.title = "a ver"
                    })
                    botonConsultarConcepto.addEventListener("click",()=>{
                              verificarConcepto(efectivo)     
                           
                    })
          }