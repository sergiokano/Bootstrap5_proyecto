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

// Alertas y mensajes alerta
const alertMessage = document.querySelector("#alertMessage");
const textAlert = document.querySelector("#textAlert");

const alertEmail = document.querySelector("#alertEmail");
const textAlertEmail = document.querySelector("#textAlertEmail");

const alertPassword = document.querySelector("#alertPassword");
const textAlertPassword = document.querySelector("#textAlertPassword");



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
  checkUser();
//   checkEmail();
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

// Validar que los campos están rellenados

// function checkUser() {
//   let validUser = false;
//   if (
//     username.value === "" ||
//     email.value === "" ||
//     password.value === "" ||
//     passConfirm.value === ""
//   ) {
//     alertMessage.className = "alert alert-danger d-flex align-items-center";
//     textAlert.innerHTML = "Rellena todos los campos";
//   } else if (validationEmail.test(email.value) == false) {
//     alertEmail.className = "alert alert-danger d-flex align-items-center";
//     textAlertEmail.innerHTML =
//       "Formato correo electrónico incorrecto 'ejemplo@mail.com' ";
//   } 
  
//   console.log(validUser);
// }

// Validación que los campos estén llenos, que el email esté de la forma correcta y que ambas contraseñas coincidan

function checkUser() {
      if (
        username.value === "" ||
        email.value === "" ||
        password.value === "" ||
        passConfirm.value === ""
      ) {
        alertMessage.className = "alert alert-danger d-flex align-items-center";
        textAlert.innerHTML = "Rellena todos los campos";
      } else if (validationEmail.test(email.value) === false) {
        alertEmail.className = "alert alert-danger d-flex align-items-center";
        textAlertEmail.innerHTML =
          "Formato correo electrónico incorrecto 'ejemplo@mail.com' ";
      } 
     else if (validationPass.test(password.value) === false) {
        alertPassword.className = "alert alert-danger d-flex align-items-center";
        textAlertPassword.innerHTML =
          "La contraseña debe tener entre 4 y 8 carácteres e incluir al menos un número";
      } 
    }

