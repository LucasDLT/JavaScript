function retornaJsonListaPersonal(){
          const retornoJsonListaPersonal = JSON.parse(jsonNuevaLista)
          return retornoJsonListaPersonal          
}

function retornaJsonNuevaLista(){
          const retornoJsonNuevaLista = JSON.parse(jsonListaPersonal)
          return retornoJsonNuevaLista
}

/*FUNCION BUSQUEDA EN ARRAY POR LEGAJO (CON FIND)

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
*/  
        