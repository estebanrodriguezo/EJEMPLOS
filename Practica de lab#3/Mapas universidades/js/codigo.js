window.onload = function () {
  //UBICACION
  console.log(navigator.geolocation);
  nav = navigator.geolocation;
  if (nav) {
    nav.getCurrentPosition(visualizarPosicion, funcionError);
  }
};

var ubicaciones = [
  { lat: 6.282912639045804, lng: -75.58250695339068 },
  { lat: 6.268665063820647, lng: -75.56901326138225 },
  { lat: 6.232536588928982, lng: -75.60993558465444 },
  { lat: 6.200498689949552, lng: -75.5790535232722 },
  { lat: 6.243087565100231, lng: -75.58927676930888 },
];
var map;

function visualizarPosicion(position) {
  // OBTENER MI UBICACION

  // GRAFICAR EL MAPA
  var mapa = document.getElementById("mapa");
  var coord = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude
  );
  var opcionesMapa = {
    center: coord,
    zoom: 12,
    //mapTypeId: "satellite",
    mapTypeId: google.maps.MapTypeId.HYBRID,
  };
  map = new google.maps.Map(mapa, opcionesMapa);
  console.log(coord);

  //MARCADOR USUARIO
  var opcionesMarcador = {
    position: coord,
    map: map,
    icon: "user.png ",
    animation: google.maps.Animation.BOUNCE,
  };
  var marcaUsuario = new google.maps.Marker(opcionesMarcador);

  var marcadores = [];
  ubicaciones.forEach(function callback(ubicacion) {
    var opcionesMarcadores = {
      position: ubicacion,
      map: map,
      animation: google.maps.Animation.DROP,
    };
    var marca = new google.maps.Marker(opcionesMarcadores);
    marcadores.push(marca);
  });
  console.log(marcadores);

  //POLIGONOS
  var Poligonos = [
    [
      //UDEA
      { lat: 6.264699, lng: -75.567658 },
      { lat: 6.269553, lng: -75.566481 },
      { lat: 6.270904, lng: -75.570217 },
      { lat: 6.266339, lng: -75.571103 },
      { lat: 6.264906, lng: -75.569439 },
    ],
    [
      //UDM
      { lat: 6.230189, lng: -75.612364 },
      { lat: 6.232257, lng: -75.612071 },
      { lat: 6.233313, lng: -75.611387 },
      { lat: 6.233164, lng: -75.609665 },
      { lat: 6.229909, lng: -75.609767 },
    ],
    [
      //UPB
      { lat: 6.239536, lng: -75.589943 },
      { lat: 6.243109, lng: -75.586199 },
      { lat: 6.243602, lng: -75.587765 },
      { lat: 6.244402, lng: -75.588913 },
      { lat: 6.244517, lng: -75.589916 },
      { lat: 6.24405, lng: -75.591088 },
      { lat: 6.243389, lng: -75.591632 },
      { lat: 6.242676, lng: -75.59186 },
      { lat: 6.241657, lng: -75.591753 },
      { lat: 6.241038, lng: -75.591458 },
    ],
    [
      //EAFIT
      { lat: 6.201812, lng: -75.579095 },
      { lat: 6.201801, lng: -75.577462 },
      { lat: 6.19993, lng: -75.577636 },
      { lat: 6.197514, lng: -75.578419 },
      { lat: 6.197783, lng: -75.579959 },
    ],
    [
      //TECNOLOGICO DE ANTIOQUIA
      { lat: 6.281889, lng: -75.585929 },
      { lat: 6.283254, lng: -75.582882 },
      { lat: 6.280343, lng: -75.579138 },
      { lat: 6.277304, lng: -75.58137 },
      { lat: 6.279949, lng: -75.584063 },
      { lat: 6.281442, lng: -75.584932 },
    ],
  ];

  console.log(Poligonos);
  for (var i = 0; Poligonos.length > i; i++) {
    var opcionesPoligono = {
      path: Poligonos[i],
      map: map,
      strokeColor: "#FF0000",
      strokeWeight: 5,
      fillColor: "#FF0000",
      fillOpacity: 0.2,
    };
    var polionosUNIV = new google.maps.Polygon(opcionesPoligono);
  }

  //EVENTOS

  polionosUNIV.addListener("click", mostrarInfo);
  polionosUNIV.addListener("dblclick", redireccionar);


  marcadores.forEach(function callback(m) {
    m.addListener("mouseover", cambiarIcono);
    m.addListener("mouseout", cambiarIcono2);
  });
}

function mostrarInfo(event) {
  var contenido =
    "<h3>Universidad de Antioquia</h3>" +
    "<p>Universidad publica ubicada en " +
    event.latLng +
    "</p>" +
    "<p>sitio web <a href='http://www.udea.edu.co'>UdeA</a></p>";

  var opcionesInfo = {
    content: contenido,
    position: event.latLng,
  };
  var info = new google.maps.InfoWindow(opcionesInfo);
  info.open(map);
}

function cambiarIcono() {
  var opciones = {
    url: "udea.png",
    scaledSize: new google.maps.Size(70, 70),
  };
  this.setIcon(opciones);
}

function cambiarIcono2() {
  var opciones = {
    url: "udea.png",
    scaledSize: new google.maps.Size(40, 40),
  };
  this.setIcon(opciones);
}

function redireccionar() {
  window.location.href = "http://www.udea.edu.co";
}

//agrega nueva marca y genera la ruta
var ruta = [];
function nuevaMarca(event) {
  ruta.push({ location: event.latLng });
  if (ruta.length == 1) {
    var opcionesMarcador = {
      position: event.latLng,
      animation: google.maps.Animation.DROP,
      map: map,
    };
    var m = new google.maps.Marker(opcionesMarcador);
  } else {
    crearRuta();
  }
}

function crearRuta() {
  console.log(ruta);
  var n = ruta.length - 1;
  var rutaServicio = new google.maps.DirectionsService();
  var rutaGrafica = new google.maps.DirectionsRenderer();

  rutaGrafica.setMap(map);
  var opcionesRuta = {
    origin: ruta[0],
    destination: ruta[n],
    waypoints: ruta.slice(1, n),
    travelMode: google.maps.TravelMode.WALKING,
  };

  rutaServicio.route(opcionesRuta, function (response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      rutaGrafica.setDirections(response);
      console.log(response);
    }
  });
}

function funcionError() {
  console.log("error");
}
