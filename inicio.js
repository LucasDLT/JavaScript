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

