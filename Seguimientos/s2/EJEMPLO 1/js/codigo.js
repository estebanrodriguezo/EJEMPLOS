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
