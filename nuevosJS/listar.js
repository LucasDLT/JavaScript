const jerarquias = document.getElementById("jerarquias")
const funciones = document.getElementById("funciones")

jerarquias.addEventListener("click",()=>{
          location.href = "listaDeJerarquias.html"
})
jerarquias.addEventListener("mousemove",()=>{
          jerarquias.title = "listado de personal por jerarquias"
})
funciones.addEventListener("click",()=>{
          location.href = "listaDeFunciones.html"
})
funciones.addEventListener("mousemove",()=>{
          funciones.title = "listado de personal por funciones"
})

