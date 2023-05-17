let administrador = "Sebas";
let usuario = "Lucas";
let contra = "clave1234";
let intentos = 0;
let mensaje = "Bienvendo, presiona aceptar, para ingresar al sistema de conceptos y calculador de licencias";
let saludo = confirm(mensaje);
let perfil = prompt("ingresa tu perfil.").trim().toLowerCase();
let preguntaContra = prompt("ingresa la contraseña.").trim().toLowerCase();

function entrada() {
  do {
    if (
      (usuario.trim().toLowerCase() === perfil &&
        contra.trim().toLowerCase() === preguntaContra) ||
      (administrador.trim().toLowerCase() === perfil &&
        passW.trim().toLowerCase() === preguntaContra)
    ) {
      alert("Bienvenido 🙋‍♂️ " + perfil);
    } else if (perfil.trim() === "" || preguntaContra.trim() === "") {
      alert("No ingresaste perfil o contraseña");
    } else {
      alert("Lo siento, " + perfil + " no se encuentra registrado.");
    }

    intentos += 1;
    perfil = prompt("ingresa tu perfil.").trim().toLowerCase();
    preguntaContra = prompt("ingresa la contraseña.").trim().toLowerCase();
  } while (intentos < 2);
  alert(perfil + " superaste la cantidad de intentos, adios");
}

entrada();
