window.onload = function () {
  enlaces = document.getElementsByClassName("btn-more");
  for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].onclick = alternarActivo;
  }
  var Formularios = document.forms;
  console.log(Formularios);
  var form = document.formulario;
  console.log(form);
  var Elementos = form.elements;
  console.log(Elementos[1].value.length);
  for (var i = 0; i < Elementos.length; i++) {
    Elementos[i].onkeypress = restringir;
    console.log(restringir);
  }
};

function alternarActivo() {
  var parrafo = this.previousElementSibling;
  var enlace = this;
  cambiarFormato(parrafo, enlace);
}

function cambiarFormato(elemento, elemento2) {
  switch (elemento.className) {
    case "active":
      elemento.className = "";
      break;
    case "":
      elemento.className = "active";
  }
}

function restringir(evento) {
  var caracteresPermitidos;
  var letra = String.fromCharCode(evento.charCode);
  switch (this.name) {
    case "name":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBN M";
      break;
    case "email":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM.@01231456789";
      break;
    case "phone":
      caracteresPermitidos = "01231456789";
      break;
  }
  return caracteresPermitidos.indexOf(letra) != -1;
}

document.addEventListener("DOMContentLoaded", function () {
  document.formulario.addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = formulario.name.value;
  var email = formulario.email.value;
  var tel = formulario.phone.value;

  if (usuario.length == 0 || tel.length == 0 || email.length == 0) {
    alert("Debes rellenar todos los campos");
    return;
  }

  this.submit();
}
