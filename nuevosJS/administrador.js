const listadoDePersonal = []
const listaIntegrada =[]
const listaGeneral = []
const URL = '../nuevosJS/objetos.json'
const contenedorListaNueva = document.getElementById("listadoCompleto")
function retornaJsonNuevaLista(){
          if ((localStorage.getItem("listadoDePersonalNuevo"))) {
                    return JSON.parse(localStorage.getItem("listadoDePersonalNuevo"))
          }else{
                    return[] 
          }
} 
const listadoDePersonalNuevo = retornaJsonNuevaLista()

function recuperarObjetos() {
  fetch(URL)
  .then((response)=>response.json())
  .then((data)=>listadoDePersonal.push(...data))
 .then(()=>localStorage.setItem("listadoDePersonal",JSON.stringify(listadoDePersonal)))
 .then(()=>JSON.parse(localStorage.getItem("listadoDePersonal")))
  .then(()=>listaGral()) 
}
recuperarObjetos(listaGeneral)

function listaGral() {
  const listaIntegrada = listadoDePersonal.concat(listadoDePersonalNuevo)
  const listaGeneral = listaIntegrada.map((efectivo)=> {
    contenedorListaNueva.innerHTML += retornaEstructuraVerificadora(efectivo) 
      
  })
  return listaGeneral
}

class Efectivo {
          constructor(nombre, apellido, jerarquia, legajo, totalDias,
            funcion, faltas, sanciones) {
            this.nombre = nombre.toUpperCase();
            this.apellido = apellido.toUpperCase();
            this.jerarquia = jerarquia.toUpperCase();
            this.legajo = legajo;
            this.totalDias = totalDias;
            this.funcion = funcion.toUpperCase();
            this.faltas = faltas; 
            this.sanciones = sanciones;
          }
}

function formularioDeCarga() {          
          let nombre = document.getElementById("nombreForm").value;
          let apellido= document.getElementById("apellidoForm").value;
          let jerarquia= document.getElementById("jerarquiaForm").value;
          let legajo= Number(document.getElementById("legajoForm").value);
          let totalDias= Number(document.getElementById("totalDiasForm").value);
          let funcion = document.getElementById("funcionForm").value;
          let faltas = Number(document.getElementById("faltasForm").value);
          let sanciones = Number(document.getElementById("sancionesForm").value);     
          const nuevoEfectivo = new Efectivo(nombre, apellido, jerarquia, legajo, totalDias, funcion, faltas, sanciones)
          return nuevoEfectivo
}
function ingresoListadoyJson() {
          const efectivoParaIngresar = formularioDeCarga()
                    listadoDePersonalNuevo.push(efectivoParaIngresar)
                    localStorage.setItem("listadoDePersonalNuevo",JSON.stringify(listadoDePersonalNuevo))
}
function retornaEstructuraVerificadora(efectivo){   
          return`         <section class="contenedorListado">

          <li>${efectivo.legajo}</li>
          <li>${efectivo.jerarquia}</li>
          <li>${efectivo.nombre}</li>
          <li>${efectivo.apellido}</li>
          <li>${efectivo.funcion}</li>  
          </section>          
           `
}

function eventosCargarFormulario() {
          
          const cargarFormulario = document.getElementById("cargarForm")
          cargarFormulario.addEventListener("click",()=>{
                    ingresoListadoyJson()          
          })
          cargarFormulario.addEventListener("mousemove",()=>{
                    cargarFormulario.title = "ingresar al formulario"
          })       
}
eventosCargarFormulario()

function eventosLimpiarFormulario(){
          const limpiarFormulario = document.getElementById("limpiarForm")
          limpiarFormulario.addEventListener("mousemove",()=>{
                    limpiarFormulario.title = "limpiar formulario"
          })
          limpiarFormulario.addEventListener("click",()=>{
                    document.getElementById("nombreForm").value = ""          
                    document.getElementById("apellidoForm").value = ""
                    document.getElementById("jerarquiaForm").value = ""
                    document.getElementById("legajoForm").value = ""
                    document.getElementById("totalDiasForm").value = ""
                    document.getElementById("funcionForm").value = ""
                    document.getElementById("faltasForm").value = ""
                    document.getElementById("sancionesForm").value = ""     
          })
}
eventosLimpiarFormulario()
