const cargaListaDeJerarquias = document.getElementById("cargaJerarquias");
const botonOficial = document.getElementById("botonOficial");
const botonOficialPrimero = document.getElementById("botonOficialPrimero");
const botonOficialMayor = document.getElementById("botonOficialMayor");
const botonInspector = document.getElementById("botonInspector");
const botonPrincipal = document.getElementById("botonPrincipal");

function selectorJerarquias() {
  eventosBotonOficial();
  eventosBotonOficialPrimero();
  eventosBotonOficialMayor();
  eventosBotonInspector();
  eventosBotonPrincipal();
}
selectorJerarquias();

function eventosBotonOficial() {
  botonOficial.addEventListener("mousemove", () => {
    botonOficial.title = "acceder al listado de Oficiales";
  });
  botonOficial.addEventListener("click", () => {
    confeccionaListaOficiales();
  });
}
function eventosBotonOficialPrimero() {
  botonOficialPrimero.addEventListener("mousemove", () => {
    botonOficialPrimero.title = "acceder al listado de Oficial Primero";
  });
  botonOficialPrimero.addEventListener("click", () => {
    confeccionaListaOficialPrimero();
  });
}
function eventosBotonOficialMayor() {
  botonOficialMayor.addEventListener("mousemove", () => {
    botonOficialMayor.title = "acceder al listado de Oficial Mayor";
  });
  botonOficialMayor.addEventListener("click", () => {
    confeccionaListaOficialMayor();
  });
}
function eventosBotonInspector() {
  botonInspector.addEventListener("mousemove", () => {
    botonInspector.title = "acceder al listado de Inspectores";
  });
  botonInspector.addEventListener("click", () => {
    confeccionaListaInspector();
  });
}

function eventosBotonPrincipal() {
  botonPrincipal.addEventListener("mousemove", () => {
    botonPrincipal.title = "acceder al listado de Principales";
  });
  botonPrincipal.addEventListener("click", () => {
    confeccionaListaPrincipal();
  });
}

function confeccionaListaOficiales() {
  cargaListaDeJerarquias.innerHTML = ``;
  const listaOficiales = listadoDePersonal.filter(
    (efectivo) => efectivo.jerarquia === "oficial"
  );
  const listaSoloOficiales = listaOficiales.map((efectivo) => {
    cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo);
  });
  return listaSoloOficiales;
}

function confeccionaListaOficialPrimero() {
  cargaListaDeJerarquias.innerHTML = ``;
  const listaOficialPrimero = listadoDePersonal.filter(
    (efectivo) => efectivo.jerarquia === "oficial primero"
  );
  const listaSoloOficialPrimero = listaOficialPrimero.map((efectivo) => {
    cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo);
  });
  return listaSoloOficialPrimero;
}

function confeccionaListaOficialMayor() {
  cargaListaDeJerarquias.innerHTML = ``;
  const listaOficialMayor = listadoDePersonal.filter(
    (efectivo) => efectivo.jerarquia === "oficial mayor"
  );
  const listaSoloOficialMayor = listaOficialMayor.map((efectivo) => {
    cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo);
  });
  return listaSoloOficialMayor;
}

function confeccionaListaInspector() {
  cargaListaDeJerarquias.innerHTML = ``;
  const listaInspector = listadoDePersonal.filter(
    (efectivo) => efectivo.jerarquia === "inspector"
  );
  const listaSoloInspector = listaInspector.map((efectivo) => {
    cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo);
  });
  return listaSoloInspector;
}

function confeccionaListaPrincipal() {
  cargaListaDeJerarquias.innerHTML = ``;
  const listaPrincipal = listadoDePersonal.filter(
    (efectivo) => efectivo.jerarquia === "principal"
  );
  const listaSoloPrincipal = listaPrincipal.map((efectivo) => {
    cargaListaDeJerarquias.innerHTML += estructuraListaJerarquias(efectivo);
  });
  return listaSoloPrincipal;
}

function estructuraListaJerarquias(efectivo) {
  return `<br></br>
          <tr>
          <td>${efectivo.jerarquia}</td>
          <td>${efectivo.legajo}</td>
          <td>${efectivo.nombre}</td>
          <td>${efectivo.apellido}</td>
          </tr>`;
}