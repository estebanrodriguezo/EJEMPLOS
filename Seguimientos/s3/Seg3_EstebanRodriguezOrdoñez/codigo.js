window.onload = function () {


  var Enlaces2 = document.links;
  //Número de enlaces de la página
  console.log("cantidad de enlaces en la pagina web: ", Enlaces2.length);
  //Dirección a la que enlaza el penúltimo enlace
  console.log("El penultimo enlace es:", Enlaces2[Enlaces2.length - 2].href);
  
  var j = 0;
  var k = 0;

  //Numero de enlaces que enlazan a http://prueba
  for (var i = 0; i < Enlaces2.length; i++) {
    if (Enlaces2[i].href == "http://prueba/") {
      j += 1;
    }
  }
  console.log("Numero de enlaces que enlazan a http://prueba es : ", j);

  //Número de enlaces del tercer párrafo
  var parrafoE = document.getElementsByTagName("p")[2].getElementsByTagName("a");
  console.log("Numero de enlaces en el parrafo parrafo 3: ", parrafoE.length);
  //Agregar un Titulo
  var titleNew = document.createElement("h1");
  var contenido = document.createTextNode("Nuevo Titulo");
  titleNew.appendChild(contenido);
  document.body.appendChild(titleNew);

  //Agregar un párrafo
  var ParrafoN = document.createElement("p");
  var contenido2 = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed mattis enim vitae orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec, commodo ultricies, turpis. Quisque sapien nunc, posuere vitae, rutrum et, luctus at, pede. Pellentesque massa ante, ornare id, aliquam vitae, ultrices porttitor, pede. Nullam sit amet nisl elementum elit convallis malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi. Fusce porta. Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque, vehicula in, eleifend vitae, venenatis ac, felis. Donec arcu. Nam sed tortor nec ipsum aliquam ullamcorper. Duis accumsan metus eu urna. Aenean vitae enim. Integer lacus. Vestibulum venenatis erat eu odio. Praesent id metus."
  );
  ParrafoN.appendChild(contenido2);
  document.body.appendChild(ParrafoN);

  //Agregar elementos a una lista de selección
  var select = document.createElement("select");
  select.setAttribute("id", "Deportes");
  document.body.appendChild(select);

  var option1 = document.createElement("option");
  option1.innerText = "Opcion 1";
  var option2 = document.createElement("option");
  option2.innerText = "Opcion 2";
  var option3 = document.createElement("option");
  option3.innerText = "Opcion 3";
  var option4 = document.createElement("option");
  option4.innerText = "Opcion 4";

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);

  //Seleccione todos los checkbox de la página a través de un script.
  var checkb = document.getElementsByName("deporte");
  console.log(checkb);
  for (var i = 0; i < checkb.length; i++) {
    checkb[i].checked = true;
  }

};
