// declaro constantes

const form = document.getElementById("userForm");
const username = document.querySelector("#username");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password2");
const boton = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
// let msg3 = document.querySelector("#msg3");
let spinner = document.getElementById("spinner");
let generalCheck = document.getElementById("generalCheck");
let validationEmail = /(\w+?@\w+?\x2E.+)/;
let validationPass = /^(?=.*\d).{4,8}$/;
// Password must be between 4 and 8 digits long and include at least one numeric digit. ej:aaa123
const alertMessage = document.querySelector("#alertMessage");
const alert = document.querySelector("#alert");


// let borrado = document.querySelector("#delete");
// let validationEmail = /(\w+?@\w+?\x2E.+)/;
// let usuarios = [];
// let listarUsuario = document.querySelector("#lista");
// let mensajeAlerta = document.querySelector("#mensajeAlerta");
// let mensajeAlertaVerde = document.querySelector("#mensajeAlertaVerde");

// Meter datos al LocalStorage y que se mantengan entre las diferentes urls
let users = JSON.parse(localStorage.getItem("Usuarios")) || [];

// Función para que arranquen todas las microfunciones al darle a enviar

boton.addEventListener("click", function (e) {
  e.preventDefault();
  userData();
  confirmUser();
});

// Funcion para crear los usuarios, validar la información y guardarlo en LocalStorage

function userData(e) {
  if (
    username.value !== "" &&
    email.value !== "" &&
    password.value !== "" &&
    passConfirm !== "" &&
    validationEmail.test(email.value) == true &&
    validationPass.test(password.value) == true &&
    password.value == passConfirm.value
  ) {
    const user = {
      nombre: username.value,
      email: email.value,
      password: password.value,
      passConfirm: passConfirm.value,
    };
    users.push(user);
    localStorage.setItem("usuarios", JSON.stringify(users));
  }
}

// Validar que los campos no están vacíos

function confirmUser() {
    if (
        username.value === "" ||
       email.value === "" ||
       password.value === "" ||
       passConfirm.value === "") {
        alertMessage.className = "alert alert-danger d-flex align-items-center"
        alert.innerHTML = "Rellena todos los campos"
       }

}