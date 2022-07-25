
window.onload = function () {
    enlaces = document.getElementsByTagName("a");
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].onclick = alternarActivo;
    }
   
}

function alternarActivo(){
    var parrafo =  this.previousElementSibling;
    var enlace = this;
    cambiarFormato(parrafo, enlace);
    
}

function cambiarFormato(elemento,elemento2) {
  switch (elemento.className) {
    case "active":
      elemento.className = "";
      elemento2.innerHTML = "Ocultar contenido";
      break;
    case "":
      elemento.className = "active";
      elemento2.innerHTML = "Mostar contenido";
  }
}
