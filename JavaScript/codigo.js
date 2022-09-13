var a = 5;
var b = a * 40;
console.log("los valores son:", a, b);

/* function nombreFuncion(var1, var2, ....){
    ....
    ......
    .......
    return respuesta;
} */

var varG1 = 10;
var DB_correo = "esteban.rodriguezo@udea.edu.co";

function main() {
  var x = 5;
  var y = x * 4;
  console.log("los valores son:", x, y);

  var salario1 = 0;
  var salario2 = 0;
  var prom;

  salario1 = parseFloat(prompt("ingrese salario 1"));
  salario2 = parseFloat(prompt("ingrese salario 2"));
  prom = promediarSalarios(salario1, salario2);
  console.log("promedio del salario es:", prom * varG1);

  var correo = prompt("ingrese su correo:");
  console.log(correo);

  var correo_Up = correo.toLocaleUpperCase();
  console.log(correo_Up);

  var correo_Low = correo.toLocaleLowerCase();
  console.log(correo_Low);

  if (correo_Low == DB_correo) {
    console.log("usuario registrado:");

    var pos_S = correo_Low.indexOf("s");
    console.log("primer caso de la letra s", pos_S);

    var pos_S = correo_Low.lastIndexOf("s");
    console.log("ultimo caso de la letra s", pos_S);

    var pos_a = correo_Low.indexOf("@");
    console.log("primer caso de la letra @", pos_a);

    var usuario = correo_Low.substring(0, pos_a);
    console.log("Nombre usuario", usuario);

    usuario = correo.toLocaleLowerCase().substring(0, correo.indexOf("@"));
    console.log("Nombre usuario", usuario);

    var nombre_completo = usuario.split(".");
    console.log("Nombre y apellidos del usuario son", nombre_completo);

    var nombre = nombre_completo[0];
    var apellido = nombre_completo[1];
    console.log("Nombre:", nombre, "Apellido:", apellido);

    url = "www.pagina.com/home/main/index/next";
    var path = url.substring(url.indexOf("/")).split("/");
    console.log(path);
    console.log(path.length);
    console.log(path.join("/-* "));

    path.push("product");
    console.log(path);

    var notas = [];
    for (var i = 0; i < 5; i++) {
      notas.push(i + 1);
    }
    /* notas.pop(); */
    console.log(notas);
    var mayor = 0;
    notas.forEach(function callback(/* elemento, indice, arreglo */) {
      console.log("notas:", notas);
      if(notas[1]>mayor){
        mayor=notas[1];
        console.log("nueva nota mayor",notas[1]);
      }
    });
  } else {
    console.log("usuario no registrado:");
  }
}
function promediar(v1, v2) {
  var suma = v1 + v2;
  var p = suma / 2 + v2;

  console.log("variable global", varG1);

  return p;
}

//llamado
main();
