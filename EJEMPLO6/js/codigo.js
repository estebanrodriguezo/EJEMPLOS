window.onload = function () {
    //var formLogin = document.getElementById("form_login")
    var formLogin = document.forms[0];
    console.log(formLogin);

    //Acceder a todos los formularios
    var Formularios = document.forms;
    console.log(Formularios);

    //Acceso a los datos
    var nombre = document.getElementsByName("nombre")[0];
    console.log(nombre.value);

    var index = 0; // Primera posicion

    console.log(Formularios[2].elements[index].value);

    index = Formularios[2].elements.length - 1; // Ultima posicion
    console.log(Formularios[2].elements[index]);

    //Acceso a través del name
    var formRegistro = document.registro;
    console.log(formRegistro);
    console.log(formRegistro.nombre.value);
    console.log(formRegistro.apellido.value);
    console.log(formRegistro.cedula.value);

    //Obtener informacion
    //document.onclick = verInfo;

    var Elementos = formRegistro.elements;
    for (var i = 0; i < Elementos.length; i++) {
        Elementos[i].onkeypress = restringir2;
    }
};

function restringir(evento) {
    var caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz1234567890";

    var letra = String.fromCharCode(evento.charCode);
    console.log(letra, caracteresPermitidos.indexOf(letra));
    /*     if(letra >= 'a' && letra <= "z" ){
        return true
    } */

    /*     if( caracteresPermitidos.indexOf(letra) != -1){
        return true
    } */

    return caracteresPermitidos.indexOf(letra) != -1;
}

function restringir2(evento) {
    var caracteresPermitidos;
    var letra = String.fromCharCode(evento.charCode);
    switch (this.type) {
        case "text":
            caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz";
            break;
        case "number":
            caracteresPermitidos = "1234567890";
            break;
        case "email":
            caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz1234567890@+.";
            break;
        case "password":
            caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz1234567890@+.";
            break;
    }
    return caracteresPermitidos.indexOf(letra) != -1;
}

//Acceder a la informacion relevante
function verInfo() {
    console.log(" * * * * * Accesos * * * * * ");
    var formRegistro = document.registro;

    //Text (pass, num, email): value
    var nombre = formRegistro.nombre.value;
    console.log("texto(value): ", nombre);

    var cedula = formRegistro.cedula.value;
    console.log("pass(value): ", cedula);

    var pass = formRegistro.pass.value;
    console.log("pass(value): ", pass);

    //Radio : value, checked
    var Genero = formRegistro.genero;
    var generoSeleccionado;
    for (var i = 0; i < Genero.length; ++i) {
        console.log(Genero[i].value + ":", Genero[i].checked);
        if (Genero[i].checked) {
            generoSeleccionado = Genero[i].value;
            break;
        }
    }
    console.log(generoSeleccionado);

    var Deporte = formRegistro.deporte;
    for (var i = 0; i < Deporte.length; ++i) {
        console.log(Deporte[i].value + ":", Deporte[i].checked);
    }

    //Select : value , text, selectedIndex , options[]
    var transporte = formRegistro.transporte;
    var index = transporte.selectedIndex;
    var seleccion = transporte.options[index];
    console.log(seleccion.text + ":", seleccion.value);
}