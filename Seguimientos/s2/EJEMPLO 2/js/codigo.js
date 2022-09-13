//llamado
mayMin()

function mayMin(palabra){

   
    var palabra = "";
    palabra = prompt("ingrese una palabra o una frase:");

    if(palabra === palabra.toUpperCase()){
        alert("Esta linea de texto: "+palabra+", esta compuesta por solo mayusculas");  
    }
    else if(palabra === palabra.toLocaleLowerCase()){
        alert("Esta linea de texto: "+palabra+", esta compuesta por solo minusculas");  
    }
    else{
        alert("Esta linea de texto: "+palabra+", esta compuesta por letras mayusculas y minusculas");  
    }

}