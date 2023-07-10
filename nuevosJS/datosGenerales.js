const URL = '../nuevosJS/objetos.json'
const listadoDePersonal = []
const listaMap = []

function recuperarObjetos() {
  fetch(URL)
  .then((response)=>response.json())
  .then((data)=>listadoDePersonal.push(...data))
  .then(()=>localStorage.setItem("listadoDePersonal",JSON.stringify(listadoDePersonal)))
  .then(()=>JSON.parse(localStorage.getItem("listadoDePersonal")))  
}
recuperarObjetos()
