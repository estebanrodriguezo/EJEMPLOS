window.onload = function () {
	var op_js="";//cadena en la que se concatena la expresion escrita pero en notacion de js
	var aux=0; //Variable que guarda el valor de ans
	var ban=false;//indica si se está visualizando un resultado(F) o si se está editando(T)
	var ver_oper = document.getElementById("operacion")//span donde se visualizara la operacion al presionar el igual
	var resul = document.getElementById("pantalla");//span donde se visualizara lo escrito y el resultado

	
	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onmouseover = darFormato;
		buttons[i].onmouseout = darFormato;
	}

	//Botones
	var val_abs = document.getElementById("abs");
	var al_cuadrado = document.getElementById("cuadrado");
	var borrar = document.getElementById("borrar");
	var abrir_p = document.getElementById("abrir_p");
	var cerrar_p = document.getElementById("cerrar_p");
	var porcentaje = document.getElementById("porcentaje");
	var clear = document.getElementById("clear");
	var inv = document.getElementById("inversa");
	var seno = document.getElementById("seno");
	var logn = document.getElementById("logn");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var division = document.getElementById("division");
	var pi = document.getElementById("pi");
	var coseno = document.getElementById("coseno");
	var log = document.getElementById("log");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var multiplicacion = document.getElementById("multiplicacion");
	var euler = document.getElementById("euler");
	var tangente = document.getElementById("tangente");
	var raiz = document.getElementById("raiz");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var resta = document.getElementById("resta");
	var ans = document.getElementById("Ans");
	var exp = document.getElementById("exp");
	var pot = document.getElementById("potencia");
	var cero = document.getElementById("cero");
	var punto = document.getElementById("punto");
	var igual = document.getElementById("igual");
	var suma = document.getElementById("suma");

	//Asignacion de funciones a cada boton

	//fila 1
	val_abs.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}

		//Para que se pueda hacer uso de eval sin problema tendremos que asegurarnos 
		//de concatenar bien, poniendo * cuando sea encesario
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			resul.textContent+="abs("; //cadena que se visualiza en pantalla
			op_js+="Math.abs(";  //cadena en js
		}
		else if (op_js.substr(-1)!="*") {
			resul.textContent+="abs("; //cadena que se visualiza en pantalla
			op_js+="*Math.abs(";  //cadena en js
		}
	}
	al_cuadrado.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ans^2"; op_js+=aux+"**2";
		}
		else {
			resul.textContent+="^2"; op_js+="**2";
		}
	}
	borrar.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent=resul.textContent.slice(0,-1); //Se elimina el ultimo caracter de la cadena
	}
	abrir_p.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="("; op_js+="(";
	}
	cerrar_p.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+=")"; op_js+=")";
	}
	porcentaje.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ans%"; op_js+=aux+"*1/100";
		}
	}
	clear.onclick = function() {limpiar();}



	//fila 2
	inv.onclick = function() { //boton que cambia funciones de otros botones
		console.log(this.className)
		if (inv.className=="resaltar") { //Se verifica su estado para asignar las funciones
			inv.className=""
			seno.innerHTML="asin";
			coseno.innerHTML="acos";
			tangente.innerHTML="atan";
		}
		else {
			inv.className="resaltar"
			seno.innerHTML="sin";
			coseno.innerHTML="cos";
			tangente.innerHTML="tan";
		}
	}
	seno.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			if (inv.className=="fun") { //Se verisica el estado de la tecla Inv para asignar la funcion adecuada
				resul.textContent+="sin(";
				op_js+="Math.sin(";
			}
			else{
				resul.textContent+="asin(";
				op_js+="Math.asin(";
			}
		}
		else {
			if (inv.className=="fun") { //Se verisica el estado de la tecla Inv para asignar la funcion adecuada
				resul.textContent+="sin(";
				op_js+="*Math.sin(";
			}
			else{
				resul.textContent+="asin(";
				op_js+="*Math.asin(";
			}
		}
	}
	logn.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			resul.textContent+="ln(";
			op_js+="Math.log(";
		}
		else if (op_js.substr(-1)!="*") {
			resul.textContent+="ln(";
			op_js+="*Math.log(";
		}
	}
	siete.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		} 
		resul.textContent+="7"; 
		op_js+="7";
	}
	ocho.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		} 
		resul.textContent+="8"; 
		op_js+="8";
	}
	nueve.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		} 
		resul.textContent+="9"; 
		op_js+="9";
	}
	division.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ans÷"; //como la pantalla está vacia se utiliza el resultado anterior
			op_js+=aux+"/";
		}
		else{
			resul.textContent+="÷"; 
			op_js+="/";
		}
	}



	//fila 3
	pi.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			resul.textContent+="π";
			op_js+="Math.PI";
		}
		else if (op_js.substr(-1)!="*") {
			resul.textContent+="π";
			op_js+="*Math.PI";
		}
	}
	coseno.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			if (inv.className=="fun") { //Se verifica el estado de la tecla Inv para asignar la funcion adecuada
				resul.textContent+="cos(";
				op_js+="Math.cos(";
			}
			else{
				resul.textContent+="acos(";
				op_js+="Math.acos(";
			}
		}
		else {
			if (inv.className=="fun") { //Se verifica el estado de la tecla Inv para asignar la funcion adecuada
				resul.textContent+="cos(";
				op_js+="*Math.cos(";
			}
			else{
				resul.textContent+="acos(";
				op_js+="*Math.acos(";
			}
		}
	}
	log.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			resul.textContent+="log(";
			op_js+="Math.log10(";
		}
		else if (op_js.substr(-1)!="*") {
			resul.textContent+="log(";
			op_js+="*Math.log10(";
		}
	}
	cuatro.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="4"; 
		op_js+="4";
	}
	cinco.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="5"; 
		op_js+="5";
	}
	seis.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="6"; 
		op_js+="6";
	}
	multiplicacion.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ansx"; //Como la pantalla esta vacia se utiliza el resultado guardado
			op_js+=aux+"*";
		}
		else{
			resul.textContent+="x"; 
			op_js+="*";
		}
	}



	//fila 4
	euler.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			resul.textContent+="e";
			op_js+="Math.exp(1)";
		}
		else {
			resul.textContent+="e";
			op_js+="*Math.exp(1)";
		}
	}
	tangente.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			if (inv.className=="fun") { //Se verifica el estado de la tecla Inv para asignar la funcion adecuada
				resul.textContent+="tan(";
				op_js+="Math.tan(";
			}
			else{
				resul.textContent+="atan(";
				op_js+="Math.atan(";
			}
		}
		else {
			if (inv.className=="fun") { //Se verifica el estado de la tecla Inv para asignar la funcion adecuada
				resul.textContent+="tan(";
				op_js+="*Math.tan(";
			}
			else{
				resul.textContent+="atan(";
				op_js+="*Math.atan(";
			}
		}
	}
	raiz.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			resul.textContent+="√(";
			op_js+="Math.sqrt(";
		}
		else {
			resul.textContent+="√(";
			op_js+="*Math.sqrt(";
		}
	}
	uno.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="1"; 
		op_js+="1";
	}
	dos.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="2"; 
		op_js+="2";
	}
	tres.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="3"; 
		op_js+="3";
	}
	resta.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ans-"; 
			op_js+=aux+"-";
		}
		else{
			resul.textContent+="-"; 
			op_js+="-";
		}
	}


	//fila 5
	ans.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		if (resul.textContent == "" || resul.textContent.substr(-1) == "(" || resul.textContent == "*") {
			resul.textContent+="ans";
			op_js+=eval(aux);
		}
		else {
			resul.textContent+="ans";
			op_js+="*"+eval(aux);
		}
	}
	exp.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ansx10^";
			op_js+=aux+"*10**";
		}
		else{
			if (resul.textContent == "" || resul.textContent.substr(-1) == "(") {
				resul.textContent+="x10^";
				op_js+="1*10**";
			}
			else {
				resul.textContent+="x10^";
				op_js+="*10**";
			}
		}
	}
	pot.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ans^"; 
			op_js+=aux+"**";
		}
		else{
			resul.textContent+="^"; 
			op_js+="**";
		}
	}
	cero.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="0"; 
		op_js+="0";
	}
	punto.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
		}
		resul.textContent+="."; 
		op_js+=".";
	}
	igual.onclick = function() {
		try {eval(op_js)} //se intenta corregir algunos errores antes de evaluar, por ejemplo si no se cerraron algunos parentesis
		catch(error){
			op_js+=")"; 
			resul.textContent+=")";
			try{eval(op_js)}  //Una vez agregado un parentesis se vuelve a evaluar
			catch(error2){
				op_js+=")";
				resul.textContent+=")";
				try{eval(op_js)}  //Se repite la evaluacion luego de agregar otro parentesis
				catch(error3){
					console.error(error3);
					resul.textContent="ERROR";
				}
				finally{
					if (ver_oper.textContent==""){
						ver_oper.textContent=resul.textContent; //Se muestra la operacion en el otro span
					}
					resul.textContent=eval(op_js); 
					op_js=resul.textContent;
					console.log(op_js)
					if(op_js!="NaN" && op_js!="Infinity"){
						aux=op_js;
					}
					ban=true;
				}
			}
			finally{
				if (ver_oper.textContent==""){
					ver_oper.textContent=resul.textContent; //Se muestra la operacion en el otro span
				}
				resul.textContent=eval(op_js); 
				op_js=resul.textContent;
				if(op_js!="NaN" && op_js!="Infinity"){
					aux=op_js;
				}
				ban=true;
			}
		}
		finally {
			if (ver_oper.textContent==""){
				ver_oper.textContent=resul.textContent; //Se muestra la operacion encima del resultado
			}
			resul.textContent=eval(op_js); 
			op_js=resul.textContent;
			if(op_js!="NaN" && op_js!="Infinity"){
				aux=op_js;
			}
			ban=true;
		}
	}
	suma.onclick = function() {
		if (ban) {//si se está visualizando un resultado se limpia la pantlla antes de escribir
			limpiar();
			ban=false;
			resul.textContent+="ans+"; 
			op_js+=aux+"+";
		}
		else{
			resul.textContent+="+"; 
			op_js+="+";
		}
	}

	function limpiar() { //Funcion que deja en blanco la pantalla
		resul.textContent="";
		op_js="";
		ver_oper.textContent="";
	}
}

function darFormato(event) {
	switch(event.type){
		case "mouseover":
			if (this.innerHTML == "="){
				this.className = "resaltar-igual";
				break;
			}
			else if (this.className == "fun"){
				this.className = "resaltar";
				break;
			}
			else {
				this.className = "resaltar-num";
				break;
			}
		case "mouseout":
			if (this.innerHTML == "="){
				this.className = "igual";
				break;
			}
			else if (this.className == "resaltar"){
				this.className = "fun";
				break;				
			}
			else {
				this.className = "";
				break;
			}

	}
}