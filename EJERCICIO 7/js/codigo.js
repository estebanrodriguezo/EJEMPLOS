window.onload = function () {
  //Acceder a todos los formularios
  var Formularios = document.forms;
  console.log(Formularios);

  //Acceso a los datos
  var nombre = document.getElementsByName("nombre")[0];
  console.log(nombre.value);

  var index = 0; // Primera posicion
  console.log(Formularios[1].elements[index].value);

  index = Formularios[1].elements.length - 1; // Ultima posicion
  console.log(Formularios[1].elements[index]);

  //Acceso a través del name
  var form = document.formulario;
  console.log(form);
  console.log(form.nombre.value);
  console.log(form.fNac.value);
  console.log(form.dni.value);

  //Obtener informacion
  //document.onclick = verInfo;

  var Elementos = form.elements;
  for (var i = 0; i < Elementos.length; i++) {
    Elementos[i].onkeypress = restringir;
    console.log(restringir);
  }
};

function restringir(evento) {
  var caracteresPermitidos;
  var letra = String.fromCharCode(evento.charCode);
  switch (this.name) {
    case "text":
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
      caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890@!?,':;-.";
      break;
  }
  return caracteresPermitidos.indexOf(letra) != -1;
}
