const ingresarUsuario = document.getElementById("buttonIngresarUsuario")
const ingresoAdministrador = document.getElementById("buttonIngresarAdministrador")
const ingresarListar= document.getElementById("listar")

ingresarUsuario.addEventListener("mousemove",()=>{
          ingresarUsuario.title = "operar como usuario"
})
ingresarUsuario.addEventListener("click",()=>{
          location.href = "usuario.html"
})

ingresoAdministrador.addEventListener("mousemove",()=>{
          ingresoAdministrador.title = "operar como administrador"
})
ingresoAdministrador.addEventListener("click",()=>{
          location.href = "../administrador/administrarNuevo.html"
})

ingresarListar.addEventListener("mousemove",()=>{
          ingresarListar.title = "consulta y configura un listado"
})

ingresarListar.addEventListener("click",()=>{
          location.href = "../listados/listadoNuevo.html"
})
