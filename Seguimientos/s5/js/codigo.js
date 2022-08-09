window.onload = function () {
  //Acceder a todos los formularios
  var Formularios = document.forms;
  console.log(Formularios);

  //Acceso a través del name
  var form = document.formulario;
  console.log(form);
  console.log(form.nombre.value);
  console.log(form.fNac.value);
  console.log(form.dni.value);

  var Elementos = form.elements;
  console.log(Elementos[2].value.length);
  for (var i = 0; i < Elementos.length; i++) {
    Elementos[i].onkeypress = restringir;
    console.log(restringir);
  }
  var usuario = form.nombre.value.length;
  console.log(usuario);
};

function restringir(evento) {
  var caracteresPermitidos;
  var letra = String.fromCharCode(evento.charCode);
  switch (this.name) {
    case "nombre":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBN M.";
      break;
    case "Apellidos":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBN M.";
      break;
    case "ciudad":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBN M.";
      break;
    case "provincia":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBN M.";
      break;

    case "calleNumero":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890- #";
      break;
    case "fNac":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890- #";
      break;

    case "comentarios":
      caracteresPermitidos =
        "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890@!?,':;-.";
      break;
  }
  return caracteresPermitidos.indexOf(letra) != -1;
}

document.addEventListener("DOMContentLoaded", function () {
  document.formulario.addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = formulario.nombre.value;
  var fNac = formulario.fNac.value;
  var dni = formulario.dni.value;
  var Apellidos = formulario.Apellidos.value;
  var calleNumero = formulario.calleNumero.value;
  var postlaCode = formulario.postlaCode.value;
  var ciudad = formulario.ciudad.value;
  var provincia = formulario.provincia.value;
  var tel = formulario.tel.value;
  var comentarios = formulario.comentarios.value;

  if (
    usuario.length == 0 ||
    fNac.length == 0 ||
    dni.length == 0 ||
    Apellidos.length == 0 ||
    calleNumero.length == 0 ||
    postlaCode.length == 0 ||
    ciudad.length == 0 ||
    provincia.length == 0 ||
    tel.length == 0 ||
    comentarios.length == 0
  ) {
    alert("Debes rellenar todos los campos");
    return;
  }

  this.submit();
}
