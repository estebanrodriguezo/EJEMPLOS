//llamado
palindromo()

function palindromo(){

    var palabra2="";
   palabra2 = prompt("ingrese una palabra o una frase:");
    var palabra3 =palabra2.replace(/\s+/g, '');
    palabra3 = palabra3.toLocaleLowerCase();
    var esPalindromo = true;
    var arreglo = palabra3.split("");
    var arreglo2 = palabra3.split("");
    arreglo.reverse();
    
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