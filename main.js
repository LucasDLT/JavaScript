function saludar() {
 // debugger;
  let mensaje = confirm(
    "Bienvendo, presiona aceptar, para ingresar al sistema de conceptos y calculador de licencias"
  );
  if (mensaje === true) {
    ingreso();
  } else {
    alert("adios");
  }
}
//saludar();

function ingreso() {
  let intentos = 0;
 // debugger;

  while (!entrar && intentos < 3) {
    let perfil = prompt("ingresa tu perfil.").trim().toLowerCase();
    let preguntaContra = prompt("ingresa la contraseña.").trim().toLowerCase();
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
      alert("Lo siento,  " + perfil + "  no se encuentra registrado.");
    }
    intentos = intentos + 1;

    if (intentos > 2) {
      alert("superaste los intentos");
    }
  }
}
//ingreso();
