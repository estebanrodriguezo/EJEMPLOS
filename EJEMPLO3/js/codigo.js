//window.onclick = function(){
window.onload = function () {
  var Enlaces = document.getElementsByTagName("a");
  console.log("cantidad de enlaces", Enlaces.length);
  console.log(Enlaces);
  console.log(document);

  var navegacion = document.getElementsByTagName("nav")[0];
  console.log(navegacion);

  var Enlaces = navegacion.getElementsByTagName("a");
  console.log("cantidad de enlaces", Enlaces.length);
  console.log(Enlaces);
  Enlaces[0].className = "";
  Enlaces[1].className = "active";
  Enlaces[1].innerHTML = "Cambio Contenido";

  var primerParrafo = document.getElementsByName("primer parrafo");
  console.log(primerParrafo);

  var imagen = document.getElementById("imagen2");
  console.log(imagen);

  //es lo mismo para cambiar la clase

  /* for(var i=0; i<Enlaces.length; i++){
    Enlaces[i].className = "";
} */

  var Enlaces2 = Array.from(Enlaces);
  Enlaces2.forEach(function callback(a, i, A) {
    console.log(a);
    a.className = "active";
    console.log(a, i, A);
  });

  Enlaces2.forEach(resetClassName);

  //es lo mismo para cambiar la clase

  /*  var x=3,y=5,z;
  z=suma(x,y);
  console.log(z); */

  var parrafo = document.createElement("p");
  var Contenido = document.createTextNode("parrafo de prueba");
  parrafo.appendChild(Contenido);
  parrafo.innerHTML = "parrafo de prueba";

  document.body.appendChild(parrafo);
  nuevaInfo();
};

function suma(a, b) {
  return a + b;
}

function resetClassName(a) {
  a.className = "";
}

function nuevaInfo() {
  var info = ["Bogota", "Medellin", "Popayan", "Cali"];

  for (var i = 0; i < info.length; i++) {
    var parrafo = document.createElement("p");
    var Contenido = document.createTextNode(info[i]);
    parrafo.appendChild(Contenido);

    document.body.appendChild(parrafo);
  }
}