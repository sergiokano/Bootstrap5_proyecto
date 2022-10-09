// declaro constantes

const username = document.querySelector("#username");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password2");
const boton = document.querySelector("#btn");
const reset = document.querySelector("#delete");

let spinner = document.getElementById("spinner");
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

const alertSuccess = document.querySelector("#alertSuccess");
const textAlertSuccess = document.querySelector("#textAlertSuccess");


// Meter datos al LocalStorage y que se mantengan entre las diferentes urls
let users = JSON.parse(localStorage.getItem("Usuarios")) || [];

// Función para que arranquen todas las microfunciones al darle a enviar

boton.addEventListener("click", function (e) {
  e.preventDefault();
  userData();
  checkUser();
  redirigir();
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

// Validación que los campos estén llenos, que el email esté de la forma correcta y que ambas contraseñas coincidan + Mensaje alerta

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
  } else if (validationPass.test(password.value) === false) {
    alertPassword.className = "alert alert-danger d-flex align-items-center";
    textAlertPassword.innerHTML =
      "La contraseña debe tener entre 4 y 8 carácteres e incluir al menos un número";
  } else if (password.value !== passConfirm.value) {
    alertPassword.className = "alert alert-danger d-flex align-items-center";
    textAlertPassword.innerHTML = "Las contraseñas deben coincidir";
  } else {
    alertSuccess.className = "alert alert-success d-flex align-items-center";
    textAlertSuccess.innerHTML = "¡Usuario registrado correctamente!";
  }
//   Tiempo para que desaparezca el mensajeAlerta, 3 segundos.
// La animación fadein fadeout está en el CSS
  setTimeout(() => {
    alertMessage.className = "d-none";
  }, 4000);
  setTimeout(() => {
    alertPassword.className = "d-none";
  }, 4000);
  setTimeout(() => {
    alertSuccess.className = "d-none";
  }, 4000);

}

function redirigir() {
    if (    username.value !== "" &&
    email.value !== "" &&
    password.value !== "" &&
    passConfirm !== "" &&
    validationEmail.test(email.value) == true &&
    validationPass.test(password.value) == true &&
    password.value == passConfirm.value) {

// Al enviar el formulario se redirige a la zona usuarios si se han completado las condiciones
        window.setTimeout(() => { 
            window.location.href = "usuarios.html";
        }, 3500);

    }
}