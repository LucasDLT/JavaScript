function eventosBuscador() {
  const botonBuscador = document.getElementById("botonBuscador")
  botonBuscador.addEventListener("mousemove",()=>{
    botonBuscador.title="presiona para buscar"
  })
  botonBuscador.addEventListener("click",()=>{
    buscarPorLegajo()
  })
  
}
eventosBuscador()

function buscarPorLegajo(){
  const buscador = Number(document.getElementById("inputBuscador").value)
  let resultadoBusqueda = listaPersonal.find((efectivo)=> efectivo.legajo === Number(buscador))
  if (resultadoBusqueda) {
    CargadorDeBusqueda(resultadoBusqueda)
  } else {
    console.log("no se encontro ningun legajo");   
  }
}

function CargadorDeBusqueda(efectivo){
  const contenedorConcepto = document.getElementById("contenedorConcepto")
  contenedorConcepto.innerHTML=``
  const div = document.createElement(`div`)
  const contenido =`
  <tr>
    <td>${efectivo.jerarquia}</td>
    <td>${efectivo.legajo}</td>
    <td>${efectivo.nombre}</td>
    <td>${efectivo.apellido}</td>
    <td>${efectivo.funcion}</td>
    <td>
    <button class="botonFaltas" id="${efectivo.legajo}"
    type="submit">FALTAS</button>
    </td>
    <td>
    <button class="botonConcepto" id="${efectivo.legajo}"
    "submit">CONCEPTO</button>
    </td>
    <td>
    <button class="botonSanciones" id="${efectivo.legajo}"
    "submit">SANCIONES</button>
    </td>
  </tr>`

  div.innerHTML=contenido;
  contenedorConcepto.append(div)

  const botonFaltas = document.querySelector(`.botonFaltas`)
  const botonConcepto = document.querySelector(`.botonConcepto`)
  const botonSanciones = document.querySelector(`.botonSanciones`)

  botonFaltas.addEventListener("click",()=>{
    verificarFaltas(efectivo)
  })
  botonConcepto.addEventListener("click",()=>{
    verificarConcepto(efectivo)
  })
  botonSanciones.addEventListener("click",()=>{
    verificarSanciones(efectivo)
  })
}



        
        
function verificarFaltas(efectivo){        
console.log(efectivo.apellido + " tiene " + efectivo.faltas + " faltas");
}

function verificarSanciones(efectivo){   
  console.log(efectivo.apellido + " tiene " + efectivo.sanciones + " sanciones");
}

function verificarConcepto(efectivo){ 
if ((efectivo.sanciones < 7) && (efectivo.faltas < 7)) {
  console.log(efectivo.apellido + " posee concepto BUENO");
  }
if ((efectivo.sanciones === 0) && (efectivo.faltas === 0)) {
    console.log(efectivo.apellido + " posee concepto EXCELENTE")  
  }
if (((efectivo.sanciones < 7) && (efectivo.faltas > 7)) || ((efectivo.sanciones > 7) && (efectivo.faltas < 7))) {
    console.log(efectivo.apellido + " posee concepto REGULAR");
  } 
  
if ((efectivo.sanciones > 7) && (efectivo.faltas > 7)) {
    console.log(efectivo.apellido + " posee concepto MALO");
}
}


