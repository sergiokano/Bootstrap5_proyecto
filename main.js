// declaro constantes

const nombre = document.querySelector("#name");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password2");
const boton = document.querySelector("#btn");
let borrado = document.querySelector("#delete");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let validationEmail = /(\w+?@\w+?\x2E.+)/;
let usuarios = [];
let listarUsuario = document.querySelector("#lista");
let mensajeAlerta = document.querySelector("#mensajeAlerta");
let mensajeAlertaVerde = document.querySelector("#mensajeAlertaVerde");

//Subir usuarios al LocalStorage


function enviarDatos(userData) {
  usuarios.push(userData);
  localStorage.setItem("info", JSON.stringify(usuarios));
}

// Validaciones

function validar() {
    let isValid = false;
    if (
      nombre.value === "" ||
      email.value === "" ||
      password.value === "" ||
      passConfirm.value === ""
    ) {
      mensajeAlerta.style.opacity = 1;
      printMsg("Por favor, rellena todos los campos.");
    } else if (validationEmail.test(email.value) !== true) {
      printMsg("Por favor, introduce un email válido.");
      email.value = "";
      mensajeAlerta.style.opacity = 1;
    } else if (password.value !== passConfirm.value) {
      printMsg("Las contraseñas tienen que coincidir");
      mensajeAlerta.style.opacity = 1;
      password.value = "";
      passConfirm.value = "";
    } else {
      msg.style.color = "#fff";
      printMsg("Usuario creado correctamente!");
      mensajeAlertaVerde.style.opacity = 1;
      isValid = true;
    }
    return isValid;
  }

  // Mensajes de alerts bootstrap

function printMsg(mensaje) {
  msg.innerHTML = mensaje;
  msg2.innerHTML = mensaje;

  setTimeout(function () {
    mensajeAlertaVerde.style.opacity = 0;
    mensajeAlerta.style.opacity = 0;
    msg.innerHTML = "";
  }, 3000);
}

  // funcion para crear usuario

function crearUsuario(e) {
  e.preventDefault();
  if (!validar()) {
    return;
  }
  let userData = {
    nombre: nombre.value,
    correo: email.value,
    contraseña: password.value,
  };
  enviarDatos(userData);
  addNewUser(userData);
  resetForm();
}