//llamado
parImpar();

function parImpar(numero) {
  
  numero = parseInt(prompt("Ingrese un numero:"));
  

  if (numero % 2 === 0) {
   alert("El número " + numero + " es par");
  } else {
    alert("El número " + numero + " es impar");
  }
}

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

palindromo()

function palindromo(){

    var palabra2="";
    palabra2 = prompt("ingrese una palabra o una frase:");
    var palabra3 =palabra2.replace(/\s+/g, '');
    palabra3.toLocaleLowerCase();
    var esPalindromo = true;
    var arreglo = palabra3.split("");
    var arreglo2 = palabra3.split("");
    
    for(let i =0; i<=arreglo.length;i+=1){

        if(arreglo[i] != arreglo2[i]){
            esPalindromo = false;

        }
         
    }
    if(esPalindromo === false){
    alert("la frase o palabra: " + palabra2+", no es palindromo "); 

    }
    else{
    alert("la frase o palabra: " + palabra2+", es palindromo "); 
  
    }
    return esPalindromo;
   
}