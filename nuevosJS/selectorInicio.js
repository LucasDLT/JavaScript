const ingresarLicencias = document.getElementById("licencias")
const ingresarConceptos= document.getElementById("conceptos")

ingresarLicencias.addEventListener("mousemove",()=>{
          ingresarLicencias.title = "gestionar licencias"
})
ingresarLicencias.addEventListener("click",()=>{
          location.href = "licenciasNuevo.html"
})

ingresarConceptos.addEventListener("mousemove",()=>{
          ingresarConceptos.title = "consultar conceptos"
})
ingresarConceptos.addEventListener("click",()=>{
          location.href = "conceptoNuevo.html"
})

