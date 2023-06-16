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
  }
  cantidadFaltas() {
    console.log(this.apellido + " TIENE " + this.faltas + " FALTAS");
  }

  cantidadSanciones() {
    console.log(this.apellido + " TIENE " + this.sanciones + " SANCIONES");
  }
}


//DOS OBJETOS PARA PUSHEAR AL ARRAY VACIO


const gomez = new Efectivo("paula", 'gomez', "oficial", 1114, 11, "faccion", 8, 5);
const perez = new Efectivo("sebastian", "perez", "oficial", 222, 11, "faccion", 5, 8);
const sastre = new Efectivo("lucas", "sastre", "oficial", 1234, 11, "faccion", 1, 1)
const soto = new Efectivo("paula", 'soto', "oficial", 1131, 11, "faccion", 4, 5);
const persa = new Efectivo("paula", 'persa', "oficial", 1141, 11, "faccion", 4, 5);
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
  
    
//gomez.cantidadFaltas()
//gomez.cantidadSanciones()

//FUNCION PARA AGREGAR OBJETOS MEDIANTE PROMPT

function crearPersonal(){
          //debugger
          let nombre = prompt("ingresa el nombre:") 
          let apellido = prompt("ingresa el apellido:")
          let jerarquia = prompt("ingresa la jerarquia:")
          let legajo = prompt("ingresa el legajo")
          let totalDias = prompt("ingresa el total de dias:")
          let funcion = prompt("ingresa la funcion: ")
          let faltas = prompt("ingresa la cantidad de faltas")
          let sanciones = prompt("ingresa la cantidad de sanciones") 
          
          const nuevoIngreso = new Efectivo(nombre, apellido, jerarquia,
            legajo, totalDias, funcion, faltas, sanciones)
            return nuevoIngreso
          }
        
//FUNCION PARA AGREGAR AL ARRAY CON PUSH
        
function ingresarAlListado () {
         const paraIngresar=crearPersonal()
         listaPersonal.push(paraIngresar)
        }
//ingresarAlListado()



//FUNCION BUSQUEDA EN ARRAY POR LEGAJO (CON FIND)

function buscarPorLegajo(){
  
  debugger
  let busqueda = Number(prompt("ingresar el legajo"))
  let resultadoBusqueda = listaPersonal.find((efectivo)=> efectivo.legajo === parseInt(busqueda))
  //console.log(resultadoBusqueda.apellido + " tiene " + resultadoBusqueda["sanciones"] + " sanciones")
  if (resultadoBusqueda) {
    console.log(resultadoBusqueda);
    verificarFaltas(resultadoBusqueda)
    verificarSanciones(resultadoBusqueda)
    verificarConcepto(resultadoBusqueda)
  } else {
    console.log("no se encontro ningun legajo");   
  }
}

function verificarFaltas(efectivo){

  debugger
  if (efectivo.faltas === 5) {
    console.log("tiene 5 faltas");
  
  } 
  if(efectivo.faltas < 5) {
    console.log("tiene menos de 5 faltas");
  }
  
  if (efectivo.faltas > 5) {
    console.log("tiene mas de 5 faltas");    
  } 
  if (efectivo.faltas === 0) {
    console.log("no tiene faltas");
  }
}

function verificarSanciones(efectivo){

  debugger
  if (efectivo.sanciones === 5) {
    console.log("tiene 5 sanciones");
  }
  
  if (efectivo.sanciones > 5) {
    console.log("tiene mas de 5 sanciones");
  }
  if (efectivo.sanciones < 5) {
    console.log("tiene menos de 5 sanciones");    
  }
  if (efectivo.sanciones === 0) {
    console.log("no tiene sanciones");    
  }
}

function verificarConcepto(efectivo){
  debugger
  
if ((efectivo.sanciones < 7) && (efectivo.faltas < 7)) {
  console.log("bueno");
  }
if ((efectivo.sanciones === 0) && (efectivo.faltas === 0)) {
    console.log("excelente")  
  }
  if (((efectivo.sanciones < 7) && (efectivo.faltas > 7)) || ((efectivo.sanciones > 7) && (efectivo.faltas < 7))) {
    console.log("regular");
  } 
  
if ((efectivo.sanciones > 7) && (efectivo.faltas > 7)) {
    console.log("malo");
}
}

//FUNCION FILTRAR ARRAY POR PROPIEDADES DEL OBJETO (CON FILTER) SE PUEDE HACER UN WHILE CON LA VALIDACION DE ENTRADA QUE SEA MIENTRAS TAL COSA SEA TRUE, Y QUE SE CORTE SI ENTRA EN ALGUNA OPCION.






//FUNCION PARA RESTAR LOS DIAS

 /* function restaDias() {
    let solicitados = Number(prompt("ingresa la cantidad de dias a solicitar"));
    let resta = gomez.dias - solicitados;
  debugger;

  if (solicitados === 0) {
    alert("no ingresaste nada");
    return;
  }
  if (solicitados > gomez.dias) {
    alert("ingresaste mas dias de los que tenes");
  }
  if (solicitados < gomez.dias) {
    confirm(
      "solicitaste " +
        solicitados +
        " dias, si presiones aceptar, te van a quedar" +
        resta +
        " dias"
    );
  }

  if (isNaN(solicitados)) {
    alert("no ingresaste un valor numerico");
    let pregunta = confirm("si queres intentar nuevamente presiona aceptar");
  }
}

//restaDias();*/




