function retornaJsonNuevaLista(){
  
  if ((localStorage.getItem("nuevaListaPersonal"))) {
    return JSON.parse(localStorage.getItem("nuevaListaPersonal"))
  }else{
    return[]
  }
} 

const nuevaListaDePersonal =  retornaJsonNuevaLista()
if (nuevaListaDePersonal.length > 0) {
        nuevaListaDePersonal.forEach(efectivo=>{
        verificacionCarga.innerHTML += estructuraVerificaLista(efectivo)     
        })          
      }  
//FUNCION PARA PASAR JSON A ARRAY

 
function crearPersonal(){
        
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let jerarquia = document.getElementById("jerarquia").value;
  let legajo = Number (document.getElementById("legajo").value);
  let totalDias = Number (document.getElementById("totalDias").value);
  let funcion = document.getElementById("funcion").value;
  let faltas = Number (document.getElementById("faltas").value);
  let sanciones = Number (document.getElementById("sanciones").value);
 
  if (nombre === "") {
      document.getElementById("nombre").focus();
  } 
  else if (apellido === "") {
      document.getElementById("apellido").focus();
  } 
  else if (jerarquia === "") {
      document.getElementById("jerarquia").focus();
  }
  else if (Number(legajo) === 0) {
      document.getElementById("legajo").focus();
  }
  else if (Number(totalDias) === 0) {
      document.getElementById("totalDias").focus();
  }
  else if (funcion === "") {
      document.getElementById("funcion").focus();
  }
  else if (Number(faltas) === 0) {
      document.getElementById("faltas").focus();
  } 
  else if (Number(sanciones) === 0) {
    document.getElementById("sanciones").focus();
  } 
  const nuevoIngreso = new Efectivo(nombre, apellido, jerarquia, legajo, totalDias, funcion, faltas, sanciones)
  return nuevoIngreso
}
     
function ingresarAlListado () {       
      const paraIngresar=crearPersonal()
      nuevaListaDePersonal.push(paraIngresar)
      //const listaIntegrada = listaPersonal.concat(nuevaListaDePersonal)
      
      localStorage.setItem("nuevaListaPersonal", JSON.stringify(nuevaListaDePersonal))
      }

function estructuraVerificaLista(efectivo){
      return`
      <section class="muestraListado">
      <tr>
      <td>${efectivo.funcion}</td>
        <td>${efectivo.jerarquia}</td>
        <td>${efectivo.legajo}</td>
        <td>${efectivo.nombre}</td>
        <td>${efectivo.apellido}</td>
        <td>
      </tr>
      </section>`
}

function eventosBotonCargar(){
       botonCargaFormulario.addEventListener("mousemove",()=>{
       botonCargaFormulario.title ="boton"
       })
       botonCargaFormulario.addEventListener("click",()=>{
       console.log("click en cargaformulario");
       ingresarAlListado()       
       })
       
}
eventosBotonCargar()


function eventosBotonLimpiar() {
  botonLimpiarFormulario.addEventListener("click",()=>{
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("jerarquia").value = "";
    document.getElementById("legajo").value = "";
    document.getElementById("totalDias").value = "";
    document.getElementById("funcion").value ="";
    document.getElementById("faltas").value = "";
    document.getElementById("sanciones").value = "";
  }) 
  botonLimpiarFormulario.addEventListener("mousemove",()=>{
  botonLimpiarFormulario.title="limpiar formulario"
  })
}
eventosBotonLimpiar()

function botonInicio() {
          botonAlInicio.addEventListener("mousemove",()=>{
          botonAlInicio.title ="regresar al inicio"
  })
  botonAlInicio.addEventListener("click",()=>{
    location.href="inicio.html"
  })
}

botonInicio()



 