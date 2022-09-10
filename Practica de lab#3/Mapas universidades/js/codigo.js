
window.onload = function () {


	//UBICACION
	console.log(navigator.geolocation);
	nav = navigator.geolocation;
	if(nav){
		nav.getCurrentPosition(visualizarPosicion,funcionError);
	}
}

var ubicaciones = [
    { lat: 6.282912639045804, lng: -75.58250695339068 },
    { lat: 6.268665063820647, lng: -75.56901326138225 },
    { lat: 6.232536588928982, lng: -75.60993558465444 },
    { lat: 6.200498689949552, lng: -75.5790535232722 },
    { lat: 6.243087565100231, lng: -75.58927676930888 },
];
var map;

function visualizarPosicion(position){
	
	// OBTENER MI UBICACION
	

	// GRAFICAR EL MAPA
	var mapa = document.getElementById('mapa');
	// var coord = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	var coord = new google.maps.LatLng(6.24, -75.57);
	var opcionesMapa = {
		center: coord,
		zoom: 12,
		// mapTypeId: 'satellite'
		mapTypeId: google.maps.MapTypeId.HYBRID,
	};
	map = new google.maps.Map(mapa,opcionesMapa);
	console.log(coord);

	//MARCADOR USUARIO
	var opcionesMarcador = {
		position: coord,
		map: map,
		//label: 'A'
		icon: "user.png",
		// animation: google.maps.Animation.DROP
		animation: google.maps.Animation.BOUNCE
	};
	var marcaUsuario = new google.maps.Marker(opcionesMarcador);

	//ARREGLO DE MARCADORES
	// var marcadores = [];
	// for (var i = 0; i < ubicaciones.length; i++) {
	// 	var opcionesMarcadores = {
	// 		position: ubicaciones[i],
	// 		map: map,
	// 		animation: google.maps.Animation.DROP
	// 	};
	// 	var marca = new google.maps.Marker(opcionesMarcadores);
	// 	marcadores.push(marca);
	// }
	// console.log(marcadores);

	var marcadores = [];
	ubicaciones.forEach(function callback(ubicacion){
		var opcionesMarcadores = {
			position: ubicacion,
			map: map,
			animation: google.maps.Animation.DROP
		};
		var marca = new google.maps.Marker(opcionesMarcadores);
		marcadores.push(marca);
	});
	console.log(marcadores);


	//POLIGONOS
	var UdeA = [
		{lat:6.264699, lng:-75.567658},
		{lat:6.269553, lng:-75.566481},
		{lat:6.270904, lng:-75.570217},
		{lat:6.266339, lng:-75.571103},
		{lat:6.264906, lng:-75.569439}
	];

	var opcionesPoligono = {
		path: UdeA,
		map: map,
		strokeColor: "#FF0000",
		strokeWeight: 5,
		fillColor: "#FF0000",
		fillOpacity: 0.2
	};
	var poligonoUdeA = new google.maps.Polygon(opcionesPoligono);
	
	//AGRUPAR MARCADORES
	var opcionesCluster = {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	};
	var cluster = new MarkerClusterer(map, marcadores, opcionesCluster);

	//EVENTOS
	map.addListener('click',nuevaMarca);

	poligonoUdeA.addListener('click',mostrarInfo);
	poligonoUdeA.addListener('dblclick',redireccionar);

	marcadores.forEach(function callback(m){
		m.addListener('mouseover',cambiarIcono);
		m.addListener('mouseout',cambiarIcono2);
	});
	
}

function mostrarInfo(event) {
	var contenido = "<h3>Universidad de Antioquia</h3>" +
					"<p>Universidad publica ubicada en "+event.latLng+"</p>"+
					"<p>sitio web <a href='http://www.udea.edu.co'>UdeA</a></p>";

	var opcionesInfo = {
		content: contenido,
		position: event.latLng 
	};
	var info = new google.maps.InfoWindow(opcionesInfo);
	info.open(map);
}

function cambiarIcono(){
	var opciones = {
		url: "pin.png",
		scaledSize: new google.maps.Size(100,100)
	};
	this.setIcon(opciones);
}

function cambiarIcono2(){
	var opciones = {
		url: "pin.png",
		scaledSize: new google.maps.Size(40,40)
	};
	this.setIcon(opciones);
}


function redireccionar() {
	window.location.href = "http://www.udea.edu.co";
}


//agrega nueva marca y genera la ruta
var ruta = [];
function nuevaMarca(event){
	ruta.push({location:event.latLng});
	if (ruta.length == 1) {
		var opcionesMarcador = {
			position: event.latLng,
			animation: google.maps.Animation.DROP,
			map: map
		};
		var m = new google.maps.Marker(opcionesMarcador);
	} else{
		crearRuta();
	}
}

function crearRuta(){
	console.log(ruta);
	var n = ruta.length-1;
		var rutaServicio = new google.maps.DirectionsService;
		var rutaGrafica  = new google.maps.DirectionsRenderer;

		rutaGrafica.setMap(map);
		var opcionesRuta = {
			origin: ruta[0],
			destination: ruta[n],
			waypoints: ruta.slice(1, n),
			travelMode: google.maps.TravelMode.WALKING
		}

		rutaServicio.route(opcionesRuta, function(response, status){
				if(status == google.maps.DirectionsStatus.OK){
					rutaGrafica.setDirections(response);
					console.log(response);
				}
		});
}

function funcionError() {
	console.log("error");
}





















