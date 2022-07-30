window.onload = function(){
	//seleccion parrafo
	var parrafo1 = document.getElementsByTagName('p')[0];
	//parrafo1.onmouseover = resaltar;
	
	var seleccionar = document.getElementsByName("seleccionar")[0];
	seleccionar.addEventListener('click', function(){
		if(seleccionar.checked){
			parrafo1.className = "resaltar";
		}else{
			parrafo1.className = "";
		}
	});

	var parrafo2 = document.getElementsByTagName('p')[1];
	parrafo2.onmouseover = resaltar2;
	parrafo2.onmouseout  = normalizar;


	var tablaNombres = document.getElementsByTagName("tr");
    console.log(tablaNombres);
	

	tablaNombres.onmouseover = controladorEventosTabla;
	tablaNombres.onmouseout  = controladorEventosTabla;
	tablaNombres.onclick	 = controladorEventosTabla;

}

function controladorEventosTabla(event){
	console.log(event.type);
	switch(event.type){
		case 'mouseover':
			this.className = "resaltar2";
			break;

		case 'mouseout':
			this.className = "";
			break;

		case 'click':
			this.className = "resaltar2";
			break;
	}
}

function resaltar(){
	usuario = "admin";
	if(usuario=="admin"){
		this.className = "resaltar";
	}
}

function resaltar2(event){
	console.log(event)
	this.className = "resaltar2";
}

function normalizar(){
	this.className = "";
}