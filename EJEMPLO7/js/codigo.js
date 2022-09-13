/*class Rectagulo{
    base=5;
    altura=10;

    area(){
        var a = base*altura;
        return a
    }
}


window.onload = function () {
  var base = 5;
  var alruta = 10;

  a1 = areaRect(base, alruta);
  a2 = areaTri(base, alruta);

  console.log(a1, a2);

  p1 = perimetroRect(base, alruta);
  p2 = perimetroTri(base, alruta);
  console.log(p1, p2);

  var rect = new Rectagulo();

var Figuras = [rect, "tria", "circle", "elipse"]; 
  var Figuras = [rect];
  for (var i = 0; i < Figuras.length; i++) {
    /* if (Figuras[i] == "rect") {
      a = areaRect(base, alruta);
    }else if(Figuras[i] == "tria"){
        a2 = areaTri(base, alruta);
    }else if(Figuras[i] == "circle"){
        a=areaCircle(base);
    } 
    a= Figuras[i].area();
    console.log(a)
}
};

function areaRect(b, h) {
  var a = b * h;
  return a;
}

function areaTri(b, h) {
  var a = (b * h) / 2;
  return a;
}

function areaCircle(b) {
    var a = 3.14*b^2
    return a;
  }

function perimetroRect(b, h) {
  var p = 2 * b + 2 * h;
  return p;
}
function perimetroTri(b, h) {
  var hipo = 0;
  var p = b + h + hipo;
  return p;
}
*/

class Estudiante {
    nombre = "";
    id ="";
    edad =0;
    promedio =0;
    Notas =[];

    calcularPrmedio(){
        var suma =0;
        /* for(var i = 0; i<this.Notas.length;i++){
            suma += Notas[i];
        }
        this.promedio = suma/this.Notas.length;
        return this.promedio; */

        this.Notas.forEach(n=>suma+=n);
        this.promedio = suma/this.Notas.length
        return this.promedio;
      }
}

window.onload =function(){
    var e1 = new Estudiante();
    console.log(e1);
    var p =e1.calcularPrmedio();
    console.log(p);
    
}

