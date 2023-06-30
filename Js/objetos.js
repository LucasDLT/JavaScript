//CONSTRUCTOR

class Efectivo {
  constructor(nombre, apellido, jerarquia, legajo, totalDias,
    funcion, faltas, sanciones) {
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.jerarquia = jerarquia.toUpperCase();
    this.legajo = legajo;
    this.totalDias = totalDias;
    this.funcion = funcion.toUpperCase();
    this.faltas = faltas; // cuando vea como guardar datos voy a tener que usarlo aca para cargar desde el perfil administrador las faltas que tenga
    this.sanciones = sanciones; //idem faltas
    this.actualizardor = function(efectivo) {

        const solicitados = Number (document.querySelector(`.inputCalculador`).value)
        
        debugger
        let resta = efectivo.totalDias - solicitados
        
        if (solicitados === 0) {
        alert("no ingresaste nada");
        return;
        }
        if (solicitados > efectivo.totalDias) {
        alert("ingresaste mas dias de los que tenes");
        }
        if (solicitados < 0){
        alert("no ingresaste un valor numerico valido")
        }
        else{
        console.log(
        "solicitaste " +
        solicitados +
        " dias, si presiones aceptar, te van a quedar" +
        resta +
        " dias"
        );
        }
        
        if (isNaN(solicitados)) {
        alert("no ingresaste un valor numerico");
        }
        }
        
      
    }

  }



//DOS OBJETOS PARA PUSHEAR AL ARRAY VACIO


const gomez = new Efectivo("paula", 'gomez', "oficial", 1114, 11, "faccion", 8, 5);
const perez = new Efectivo("sebastian", "perez", "oficial", 222, 11, "faccion", 5, 8);
const sastre = new Efectivo("lucas", "sastre", "oficial", 1234, 11, "faccion", 1, 1)
const soto = new Efectivo("paula", 'soto', "oficial", 1131, 11, "faccion", 4, 5);
const persa = new Efectivo("paula", 'persa', "oficial primero", 1141, 11, "faccion", 4, 5);
const monte = new Efectivo("nahuel", "monte", "oficial mayor", 3453, 15, "chofer", 0, 0)
const navarro = new Efectivo("cristian", "navarro", "oficial mayor", 1155, 15, "chofer", 3, 3)
const chamorro = new Efectivo("nahuel", "chamorro", "oficial mayor", 1355, 15, "chofer", 6, 6)
const paz = new Efectivo("cristian", "paz", "oficial mayor", 1145, 15, "chofer", 0, 1)
const galarza = new Efectivo("alejandro", "galarza", "inspector", 1955, 21, "encargado", 0, 0)
const benitez = new Efectivo("carlos", "benitez", "inspector", 1105, 21, "encargado", 0, 0)
const toribio = new Efectivo("celeste", "toribio", "inspector", 105, 21, "encargado", 0, 0)
const plantez = new Efectivo("pablo", "plantez", "inspector", 4105, 21, "encargado", 6, 0)
const pereyra = new Efectivo("ariel", "pereyra", "inspector", 1553, 21, "encargado", 0, 0)
const rodriguez = new Efectivo("pablo", "rodriguez", "principal", 1765, 25, "jefe de servicio", 4, 2)

//PUSH DE OBJETOS

listaPersonal.push(gomez, perez, sastre, persa, soto, monte, navarro, chamorro, paz, galarza, benitez, toribio, plantez, pereyra, rodriguez);
localStorage.setItem("listaExistente", JSON.stringify(listaPersonal))

function eventosBuscadorLicencia(){
  const botonBuscadorLicencia = document.getElementById("botonBuscadorLicencia")
  botonBuscadorLicencia.addEventListener("mousemove", ()=>{
            botonBuscadorLicencia.title = "presiona para buscar"
  })
  botonBuscadorLicencia.addEventListener("click", ()=>{
            buscarLegajoLicencia()
  })
}
eventosBuscadorLicencia()

function buscarLegajoLicencia(){
 const buscadorLicencia = Number(document.getElementById("inputBuscadorLicencia").value)
  let resultadoBusqueda = listaPersonal.find((efectivo)=> efectivo.legajo === Number(buscadorLicencia))
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
 <tr>
      <td>${efectivo.jerarquia}</td>
      <td>${efectivo.legajo}</td>
      <td>${efectivo.nombre}</td>
      <td>${efectivo.apellido}</td>
      <td>${efectivo.funcion}</td>
 <td>
 </td>
      <input type="number" class="inputCalculador">
 <td>
      <button class="botonCalcularLicencia" id="${efectivo.legajo}"
      type="submit">CALCULAR LICENCIA</button>
 </td>

 </tr>`

 div.innerHTML = contenidoLicencia
 contenedorLicencia.append(div)

 const botonCalcularLicencia = document.querySelector(`.botonCalcularLicencia`)

 botonCalcularLicencia.addEventListener("click",()=>{
  efectivo.actualizardor(efectivo)
 })
 botonCalcularLicencia.addEventListener("mousemove",()=>{
  botonCalcularLicencia.title = "presiona para calcular"
 })


}

