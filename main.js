let administrador = "Sebas";
let usuario = "Lucas";
let entrar = false;
let contra = "clave1234";
let mensaje =
  "Bienvendo, presiona aceptar, para ingresar al sistema de conceptos y calculador de licencias";
let saludo = confirm(mensaje);

function entrada() {
  
  let intentos = 0
  debugger
  
  while (!entrar && intentos < 3) {
    perfil = prompt("ingresa tu perfil.").trim().toLowerCase();
    preguntaContra = prompt("ingresa la contraseña.").trim().toLowerCase();
    if (
      (usuario.trim().toLowerCase() === perfil &&
        contra.trim().toLowerCase() === preguntaContra) ||
      (administrador.trim().toLowerCase() === perfil &&
        contra.trim().toLowerCase() === preguntaContra)
    ) {
      alert("Bienvenido 🙋‍♂️ " + perfil);
      entrar = true;
    } else if (perfil.trim() === "" || preguntaContra.trim() === "") {
      alert("No ingresaste perfil o contraseña");

      
    } else {
      alert(
        "Lo siento,  " +
          perfil +
          "  no se encuentra registrado."); 
          }      
          intentos = intentos + 1;

    
          if (intentos > 2 ) {  
          alert("superaste los intentos")
   } 
  
    

  }
}
entrada();

/*class Efectivo {
  constructor(nombre, apellido, jerarquia, legajo, dias, totalDias) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.jerarquia = jerarquia;
    this.legajo = legajo;
    this.dias = dias;
    this.totalDias = totalDias;
  }
}
const gomez = new Efectivo("Paula", "Gomez", "Oficial", 111, 15);

//FUNCION PARA RESTAR LOS DIAS

function restaDias() {
  let pregunta = Number(prompt("ingresa la cantidad de dias a solicitar"));
  let resta = pregunta - gomez.dias;
  confirm(
    "solicitaste" +
      pregunta +
      "dias, si presiones aceptar, te van a quedar" +
      resta +
      "dias"
  );
}*/

//restaDias();
