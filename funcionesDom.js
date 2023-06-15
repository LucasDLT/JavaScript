
function botonDeIngreso() {
          
          boton.addEventListener("click", () => {
          agregarSelector()            
});
          boton.addEventListener("mousemove", () => {
          boton.title = "PRESIONA PARA INGRESAR";
});
}
botonDeIngreso()

function agregarSelector() {
  mainDeCarga.innerHTML = ` 
          <nav>
          <ul>
          <li><button type="submit" id = "botonLicencias">LICENCIAS</button></li>
          <li><button type="submit" id="botonConceptos">CONCEPTOS</button></li>
          <li><button type="submit" id="botonListados">LISTADOS</button></li>
          </ul>
          <button id="irAtras">regresar</button>
          </nav>`;
          
          let botonLicencias = document.getElementById("botonLicencias")
          botonLicencias.addEventListener("click", ()=>{
          location.href="licencias.html"
          })
          botonLicencias.addEventListener("mousemove",()=>{
          botonLicencias.title ="ingresar a la seccion licencias"
          })
          
          let botonRegresar = document.getElementById("irAtras")
          botonRegresar.addEventListener("click", ()=>{
          location.href="inicio.html"
          })
          botonRegresar.addEventListener("mousemove",()=>{
          botonRegresar.title = "ir al inicio"
          })
          
          let botonConcepto = document.getElementById("botonConceptos")
          botonConcepto.addEventListener("click",()=>{
          location.href="conceptos.html"
          })
          botonConcepto.addEventListener("mousemove",()=>{
          botonConcepto.title="ingresar a la seccion conceptos"
          })
          
          let botonListado = document.getElementById("botonListados")
          botonListado.addEventListener("click",()=>{
          location.href="listados.html"
          })
          botonListado.addEventListener("mousemove",()=>{
          botonListado.title="ingresar a listados"
          })
}


function cargarListados(efectivo) {
  return `
          <tr>
            <td>${efectivo.jerarquia}</td>
            <td>${efectivo.legajo}</td>
            <td>${efectivo.nombre}</td>
            <td>${efectivo.apellido}</td>
            <td>${efectivo.funcion}</td>
            <td>
            <button id=type="${efectivo.legajo}"
            "submit">AGREGAR</button>
            </td>

          </tr>`;
}
//cargarListados()

//FOR EACH
function mostrarListadoCompleto() {
  tablaDeListas.innerHTML = "";
  listaPersonal.forEach((efectivo) => {
    tablaDeListas.innerHTML += cargarListados(efectivo);
    console.log(efectivo);
  });
}
//mostrarListadoCompleto()

//LISTADO GENERAL
function confeccionaListadoGeneral() {
  tablaDeListas.innerHTML = ``;

  const listaGeneral = listaPersonal.map((efectivo) => {
    tablaDeListas.innerHTML += cargarListados(efectivo);
    return {
      legajo: efectivo.legajo,
      jerarquia: efectivo.jerarquia,
      nombre: efectivo.nombre,
      apellido: efectivo.apellido,
      funcion: efectivo.funcion,
    };
  });
  console.table(listaGeneral.sort().reverse());
}
//confeccionaListadoGeneral()












function cargarFormularioCarga() {
  contenedorFormularioCarga.innerHTML = `
          <form action="">
          <ul>
             <li>
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="Nombre">
             </li>
             <li>
                    <label for="apellido">Apellido:</label>
                    <input type="text" name="Apellido">
             </li>
             <li>
                    <label for="jerarquia">Jerarquia:</label>
                    <input type="text" name="jerarquia">
             </li> 
             <li>
                    <label for="legajo">Legajo:</label>
                    <input type="text">
             </li>
             <li>
                    <label for="total dias">Total de dias:</label>
                    <input type="text">
             </li>
             <li>
                    <label for="funcion">Funcion:</label>
                    <input type="text">
             </li>
             <li>
                    <label for="faltas">Faltas:</label>
                    <input type="text">
             </li>
             <li>
                    <label for="sanciones">Sanciones:</label>
                    <input type="text">
            </li>
            </ul>
                    <button type="submit">CARGAR FORMULARIO</button>
                    <button type="reset">LIMPIAR FORMULARIO</button>

          </form>`;
}
//cargarFormularioCarga()

function cargarBarraDeBusqueda() {
  barraBusqueda.innerHTML = `
          <div>
            <label for="Busqueda">Ingresa el legajo:</label>
            <input type="text">
            <button type="button">BUSCAR</button>
          </div>`;
}
//cargarBarraDeBusqueda()

function cargarSelectorBusqueda() {
  selectorParaBusqueda.innerHTML = `
          <div>
              <label for="Busqueda">Ingresa la funcion que deseas filtrar:</label>
              <button type="button">APELLIDO</button>
              <button type="button">JERARQUIA</button>
              <button type="button">FUNCION</button>
          </div>`;
}
//cargarSelectorBusqueda()

function cargarSeccionConceptos() {
  seccionConceptos.innerHTML = `
          <h1>CONCEPTO</h1>
          <h2>Para optimizar tu busqueda, la misma se realizara mediante el Nro. de Legajo</h2>
          <div>
              <label for="Busqueda">Ingresa el numero de legajo:</label>
              <input type="number">
              <button type="button">BUSCAR</button>
          </div>`;
}

//cargarSeccionConceptos()

function cargarSeccionLicencias() {
  seccionLicencias.innerHTML = `
          <h1>LICENCIAS</h1>
          <h2>Para optimizar tu busqueda, la misma se realizara mediante el Nro. de Legajo</h2>
          <div>
              <label for="Busqueda">Ingresa el numero de legajo:</label>
              <input type="number">
              <button type="button">BUSCAR</button>
          </div>
          `;
}
//cargarSeccionLicencias()

function cargarSeccionListas() {
  seccionListas.innerHTML = `
          <h1>LISTAS</h1>
          <h2>Selecciona el parametro para la lista que utilizaras: </h2>
          <div>
          <button type="button">JERARQUIAS</button>
          <button type="button">FUNCIONES</button> 
          <h2>o confecciona tu propio listado: </h2>      
          <button type="button">CONFECCIONAR LISTADO</button>
          </div>`;
}
//cargarSeccionListas()

