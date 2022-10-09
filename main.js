// declaro constantes

const form = document.getElementById("userForm");
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



//Subir usuarios al LocalStorage (corregido)
// function onSubmit(e) {
//   e.preventDefault()
//   const user = {
//     Name: nombre.value,
//     Email: email.value,
//     Password: password.value,
//   }
//   usuarios.push(user);
//   console.log(usuarios)
//   localStorage.setItem("User", JSON.stringify(usuarios));
// }
// boton.addEventListener('click', onSubmit);

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
   
   // Mensajes de alerts bootstra
   function printMsg(mensaje) {
     msg.innerHTML = mensaje;
     msg2.innerHTML = mensaje;
     setTimeout(function () {
       mensajeAlertaVerde.style.opacity = 0;
       mensajeAlerta.style.opacity = 0;
       msg.innerHTML = "";
     }, 3000);
   }
   //funcion para subir al LocalStorage
   function enviarDatos(userData) {
     usuarios.push(userData);
     localStorage.setItem("info", JSON.stringify(usuarios));
   }
   // funcion para crear el usuario 
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

//Subir usuarios al LocalStorage (version anterior)


    function enviarDatos(userData) {
      // crearUsuario();
    usuarios.push(userData);
    localStorage.setItem("info", JSON.stringify(usuarios));
  }

  boton.addEventListener('click', enviarDatos);

   //Funcion resetear form
    function resetForm() {
      nombre.reset;
      email.reset;
      password.reset;
      passConfirm.reset;
    }
    borrado.addEventListener("click", resetForm);

  // //  Funcion de borrar toda la memoria y pantalla (reset)
  // //   Creo que esta funcion habria que quitarla porque se carga el local storage y no queremos eso

  //   function borrar() {
  //     localStorage.clear();
  //     console.clear();
  //     listarUsuario.remove();
  //   }
  //   borrado.addEventListener("click", borrar);
  //  function addNewUser(userData) {
  //    listarUsuario.innerHTML += `<div class="card" style="width: 18rem;">
  //    <img src="https://equipopara.org/sites/equipopara.org/files/styles/large/public/field/image/sangre-sudor-lagrimas-300x212.jpg?itok=uz7V6JBC> class="card-img-top" alt="...">
  //    <div class="card-body">
  //      <p class="card-text"><b>Nombre de usuario:</b> ${userData.nombre}<br> <b>Correo:</b> ${userData.correo} </p>
  //    </div>
  //  </div></br>`;
  //  }
  