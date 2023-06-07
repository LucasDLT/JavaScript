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


const gomez = new Efectivo("paula", 'gomez', "oficial", 111, 15, "chofer",
4, 5);
const perez = new Efectivo("sebastian", "perez", "mayor", 222, 15, "encargado",
6, 7);
const sastre = new Efectivo("lucas", "sastre", "mayor", 1234, 15, "encargado", 1, 1)
const soto = new Efectivo("paula", 'soto', "oficial", 111, 15, "chofer",
4, 5);
const persa = new Efectivo("paula", 'persa', "oficial", 111, 15, "chofer",
4, 5);
    
    //PUSH DE OBJETOS
    
listaPersonal.push(gomez, perez, sastre, persa, soto);
  
    
  //gomez.cantidadFaltas()
  //gomez.cantidadSanciones()

//FUNCION PARA AGREGAR OBJETOS MEDIANTE PROMPT
/*
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
ingresarAlListado()



//FOR EACH
function recorrerListado(){
          listaPersonal.forEach((efectivo)=>{
            console.log(efectivo);
          })
}*/

//FUNCION BUSQUEDA EN ARRAY POR LEGAJO (CON FIND)

function buscarPorLegajo(){
  
  debugger
  let busqueda = prompt("ingresar el legajo")
  let resultadoBusqueda = listaPersonal.find((efectivo)=> efectivo.legajo === parseInt(busqueda))
  console.log(resultadoBusqueda.apellido + " tiene " + resultadoBusqueda["sanciones"] + " sanciones")
  
  if ((resultadoBusqueda.sanciones > 5) && (resultadoBusqueda.faltas > 5)) {
    console.log("tiene mas de 5 sanciones y mas de 5 faltas");

  } else if((resultadoBusqueda.sanciones < 5) && (resultadoBusqueda.faltas < 5)) {
    console.log("tiene 5, o menos sanciones y faltas");
  }

  if (resultadoBusqueda.faltas > 5) {
    console.log("tiene mas de 5 faltas");    
  } else {
    console.log("tiene 5, o menos faltas");
  }
}


//FUNCION FILTRAR ARRAY POR PROPIEDADES DEL OBJETO (CON FILTER)

function filtrarListado (){
debugger
  
  let preguntaParaFiltrar = prompt("ingresa el parametro a buscar entre: JERARQUIA, APELLIDO y FUNCION")

  if (preguntaParaFiltrar.toUpperCase() === "FUNCION") {
    let preguntaFuncion = prompt("ingresa la funcion que buscas: CHOFER, ENCARGADO, ETC")
        let resultadoFuncion = listaPersonal.filter((efectivo)=>efectivo.funcion.toUpperCase() === preguntaFuncion.toUpperCase())
        console.log(resultadoFuncion);
  }

  else if (preguntaParaFiltrar.toUpperCase() === "APELLIDO") {
    let preguntaApellido = prompt("ingresa el apellido: ")
    let resultadoApellido = listaPersonal.filter((efectivo)=>efectivo.apellido.toUpperCase() === preguntaApellido.toUpperCase())
    console.log(resultadoApellido);
  }

  else if (preguntaParaFiltrar.toUpperCase() === "JERARQUIA") {
    let preguntaJerarquia = prompt("ingresa la jerarquia buscada: ")
    let resultadoJerarquia = listaPersonal.filter((efectivo)=>efectivo.jerarquia.toUpperCase() === preguntaJerarquia.toUpperCase())
    console.log(resultadoJerarquia);
  }
  
  else if (preguntaParaFiltrar === ""){
    console.log("no ingresaste ningun parametro que buscar"); 
  }

  else if(preguntaParaFiltrar !== isNaN()){
    console.log("el parametro ingresado es numerico, no es valido");
  }
}





 
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




//FUNCION PARA CONCEPTO

//TIENE QUE TENER PARAMETROS COMO, DIAS DE LICENCIA MEDICA, FUNCION Y SANCIONES,

//hacer un if else con INFORMACION lo que esta declarado arriba
//ahi se guardotodoa la informacion de GOMEZ
// entonces evaluas lo que guardo esa CONSTANTE
//y si ahi adentro hay FALTAS Y SANCIONES*/