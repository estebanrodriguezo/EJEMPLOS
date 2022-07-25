window.onload = function () {
    var Sections = document.getElementsByTagName("section");
    console.log(Sections);

    var section1 = document.getElementsByTagName("section")[0];
    console.log(section1);

    var s1 = document.getElementById("s1");
    console.log(s1);

    // 1. Crear nodo
    // 2. Modificar (Cambiar propiedades/Agregar nodos internos)
    // 3. Agregar a seccion correspondiente

    //Ejemplo 1:

    var salto = document.createElement("br");
    //Agregar al final
    document.body.appendChild(salto);
    //Agregar en otra parte
    section1.appendChild(salto);

    //Ejemplo 2:
    var select = document.createElement("select");
    select.setAttribute("id", "Deportes");
    s1.appendChild(select);

    var option1 = document.createElement("option");
    option1.setAttribute("value", "valor1");
    option1.innerText = "Baloncesto";

    var option2 = document.createElement("option");
    option1.setAttribute("value", "valor2");
    option2.innerText = "Futbol";

    var option3 = document.createElement("option");
    option1.setAttribute("value", "valor3");
    option3.innerText = "Atletismo";

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    //Otra forma
    var opciones = ["Voleibol", "Natacion", "Golf"];
    opciones.forEach((opc, i) => {
        var opcion = document.createElement("option");
        opcion.setAttribute("value", "d" + i);
        opcion.innerText = opc;
        select.appendChild(opcion);
    });

    //Propiedades

    var p1 = document.getElementById("p1");
    p1.style.borderColor = "red";
    p1.style.borderStyle = "solid";
    p1.className = "active"; // Se trabaja asi

    var enlace = p1.getElementsByTagName("a")[0];
    enlace.href = "pagina.html";



    //Eventos enlazados de forma semantica
    //1. Obtener el nodo
    var parrafo = document.getElementById('p1');
    //2. Crear la funcion
    parrafo.onclick = mostrarMensaje2;
    parrafo.onmouseout = mostrarMensaje2;

    var parrafos = document.getElementsByName('p');
    for(var i = 0; i<parrafos.length ; i++){
        parrafos[i].onclick=mostrarMensaje2;
    }

    var inputs = document.getElementsByTagName("input");
    for(var i = 0 ; i<inputs.length ; i++){
        if(inputs[i].type == "text"){
        inputs[i].onchange = verificacionInformacion;}
        if(inputs[i].type == "email"){
            inputs[i].onchange = obtenerDatos;
        }
    }

};





function mostrarMensaje(elemento) {

    /* alert('Se presiono el parrafo! ') */
    console.log("parrafo: ", elemento.id);
}


function mostrarMensaje2() {

    /* alert('Se presiono el parrafo! ') */
    console.log("parrafo: ", this.id);
}
function verificacionInformacion() {

    /* alert('Se presiono el parrafo! ') */
    console.log("input: ", this.name, "value:",this.value);
    if(this.value.length<=3){
        alert("no se puede, informacion muy corta, debe contener mas de 3 caracteres")
    }
}

function obtenerDatos() {
    var correo = this.value;
    console.log("input: ", this.name, "value:",this.value);

    var nombreCompleto = this.value.substring(0,correo.indexOf('@'));
    console.log(nombreCompleto);

    var nombre = document.getElementsByName("nombre")[0];
    nombre.value = nombreCompleto.substring(0,nombreCompleto.indexOf('.'));

    var apellido = document.getElementsByName("apellido")[0];
    apellido.value = nombreCompleto.substring(nombreCompleto.indexOf('.')+1);
}

function cambiarFormato(elemento) {
    
    switch(elemento.className){
        case 'active':
            elemento.className = "";
            break;
        case "":
            elemento.className = 'active';
    }
}
