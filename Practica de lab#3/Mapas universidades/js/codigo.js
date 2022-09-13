window.onload = function () {
  //UBICACION
  console.log(navigator.geolocation);
  nav = navigator.geolocation;
  if (nav) {
    nav.getCurrentPosition(visualizarPosicion, funcionError);
  }

  const selectUniv = document.getElementsByName("univ");
  for (let i = 0; i < selectUniv.length; i++) {
    selectUniv[i].onclick = mostrar;
  }

  console.log(selectUniv[1]);
};
//Funcion para mostrar la informacion de carreras de cada informacion
function mostrar() {
  const carreras = document.getElementsByName("carrera");

  for (let i = 0; i < carreras.length; i++) {
    carreras[i].className = "active";
  }

  //Cambio de universidad seleccionada
  switch (this.id) {
    case "UDEA":
      carreras[0].className = "";
      var pos = {
        lat: 6.268665063820647,
        lng: -75.56901326138225,
      };

      var zoom = 16;
      map.setCenter(pos);
      map.setZoom(zoom);
      break;
    case "UDEM":
      carreras[1].className = "";
      var pos = {
        lat: 6.232536588928982,
        lng: -75.60993558465444,
      };

      var zoom = 16;
      map.setCenter(pos);
      map.setZoom(zoom);

      break;
    case "UPB":
      carreras[2].className = "";
      var pos = {
        lat: 6.243087565100231,
        lng: -75.58927676930888,
      };
      var zoom = 16;
      map.setCenter(pos);
      map.setZoom(zoom);
      break;
    case "TEC":
      carreras[3].className = "";
      var pos = {
        lat: 6.282912639045804,
        lng: -75.58250695339068,
      };
      var zoom = 16;
      map.setCenter(pos);
      map.setZoom(zoom);
      break;
    case "EAFIT":
      carreras[4].className = "";
      var pos = {
        lat: 6.200498689949552,
        lng: -75.5790535232722,
      };
      var zoom = 16;
      map.setCenter(pos);
      map.setZoom(zoom);
      break;
  }
}
//Ubicaciones de la universidades
var ubicaciones = [
  { lat: 6.282912639045804, lng: -75.58250695339068 }, //TECNOLOGICO DE ANTIOQUIA
  { lat: 6.268665063820647, lng: -75.56901326138225 }, //UDEA
  { lat: 6.232536588928982, lng: -75.60993558465444 }, //UDEM
  { lat: 6.200498689949552, lng: -75.5790535232722 }, //EAFIT
  { lat: 6.243087565100231, lng: -75.58927676930888 }, //UPB
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
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.HYBRID,
  };
  map = new google.maps.Map(mapa, opcionesMapa);
  console.log(coord);

  //MARCADOR USUARIO
  var opcionesMarcador = {
    position: coord,
    map: map,
    icon: "./marcadores/user1.png",
    animation: google.maps.Animation.BOUNCE,
  };
  var marcaUsuario = new google.maps.Marker(opcionesMarcador);

  //Creacion de marcadores
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

  //Marcadores personalizados
  marcadores[0].setIcon({
    url: "./logos/tdea.png",
    scaledSize: new google.maps.Size(40, 40),
  });
  marcadores[1].setIcon({
    url: "./logos/udea.png",

    scaledSize: new google.maps.Size(40, 40),
  });
  marcadores[2].setIcon({
    url: "./logos/udm.png",

    scaledSize: new google.maps.Size(40, 40),
  });
  marcadores[3].setIcon({
    url: "./logos/eafit.png",

    scaledSize: new google.maps.Size(40, 40),
  });
  marcadores[4].setIcon({
    url: "./logos/upb.png",

    scaledSize: new google.maps.Size(40, 40),
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
  var polionosUNIV = [];
  for (var i = 0; Poligonos.length > i; i++) {
    var opcionesPoligono = {
      path: Poligonos[i],
      map: map,
      strokeColor: "#FF0000",
      strokeWeight: 5,
      fillColor: "#FF0000",
      fillOpacity: 0.2,
    };
    polionosUNIV.push(new google.maps.Polygon(opcionesPoligono));
  }

  console.log(polionosUNIV);

  //EVENTOS

  polionosUNIV[0].addListener("mouseover", mostrarInfo);
  polionosUNIV[0].addListener("mouseout", () => {
    info.close();
  });
  polionosUNIV[0].addListener(
    "dblclick",
    () => (window.location.href = "http://www.udea.edu.co")
  );
  polionosUNIV[1].addListener("mouseover", mostrarInfo1);
  polionosUNIV[1].addListener("mouseout", () => {
    info.close();
  });
  polionosUNIV[1].addListener(
    "dblclick",
    () => (window.location.href = "https://udemedellin.edu.co/")
  );
  polionosUNIV[2].addListener("mouseover", mostrarInfo2);
  polionosUNIV[2].addListener("mouseout", () => {
    info.close();
  });
  polionosUNIV[2].addListener(
    "dblclick",
    () => (window.location.href = "https://www.upb.edu.co/es/home")
  );
  polionosUNIV[3].addListener("mouseover", mostrarInfo3);
  polionosUNIV[3].addListener("mouseout", () => {
    info.close();
  });
  polionosUNIV[3].addListener(
    "dblclick",
    () => (window.location.href = "https://www.eafit.edu.co")
  );
  polionosUNIV[4].addListener("mouseover", mostrarInfo4);
  polionosUNIV[4].addListener("mouseout", () => {
    info.close();
  });
  polionosUNIV[4].addListener(
    "dblclick",
    () => (window.location.href = "https://www.tdea.edu.co/")
  );
}
var info;
function mostrarInfo(event) {
  var contenido =
    "<h3>Universidad de Antioquia</h3>" +
    "<img src=./logos/udeainfo.jpg width=20%></img>"
    +
    "<p>La Universidad de Antioquia es considerada como una de las mejores de todo el país. Desde su creación en 1803 ha brindado grandes aportes a la sociedad colombiana. Hoy en día esto se mantiene gracias a su variada oferta académica de calidad a todos los niveles de la educación superior. ,ubicada en " +
    event.latLng +
    "</p>" +
    "<p>sitio web <a href='http://www.udea.edu.co'>UdeA</a></p>";

  var opcionesInfo = {
    content: contenido,
    position: event.latLng,
  };
  info = new google.maps.InfoWindow(opcionesInfo);
  info.open(map);
}
function mostrarInfo1(event) {
  var contenido =
    "<h3>Universidad de Medellin</h3>" +
    "<img src=./logos/udemInfo.jpg width=20%></img>"
    +
    "<p>La Universidad de Medellín (UDEM), es una prestigiosa institución de carácter privado, sin fines de lucro. La cual, cuenta con la inspección y vigilancia del Ministerio de Educación de Colombia, ubicada en " +
    event.latLng +
    "</p>" +
    "<p>sitio web <a href='https://udemedellin.edu.co/'>UdeM</a></p>";

  var opcionesInfo = {
    content: contenido,
    position: event.latLng,
  };
  info = new google.maps.InfoWindow(opcionesInfo);
  info.open(map);
}
function mostrarInfo2(event) {
  var contenido =
    "<h3>Universidad Pontificia Bolivariana</h3>" +
    "<img src=./logos/upbInfo.jpg width=20%></img>"
    +
    "<p>La Universidad Pontificia Bolivariana o UPB fue fundada en el año de 1936 por la jurisdicción eclesiástica Arquidiócesis de Medellín, siendo esta la primera Universidad Bolivariana de América Latina, actualmente su población estudiantil asciende a más de 25,823 alumnos en sus distintas facultades y sedes. Ademas se encuentra ubicada en " +
    event.latLng +
    "</p>" +
    "<p>sitio web <a href='https://www.upb.edu.co/es/home'>UPB</a></p>";

  var opcionesInfo = {
    content: contenido,
    position: event.latLng,
  };
  info = new google.maps.InfoWindow(opcionesInfo);
  info.open(map);
}
function mostrarInfo3(event) {
  var contenido =
    "<h3>Universidad EAFIT</h3>" +
    "<img src=./logos/eafitInfo.jpg width=20%></img>"
    +
    "<p>La Universidad Eafit nace en 1960, como una universidad de carácter privada, inspirada en ideales educativos enfocados en valores de Libertad, Orden y Justicia.</p> " +
    "<p>La Universidad Eafit en su propósito de contribuir al desarrollo sostenible de la humanidad, se proyecta en ser una universidad que inspira y transforma. Ubicada en:"+
    event.latLng +
    "</p>" +
    "<p>sitio web <a href='https://www.eafit.edu.co'>EAFIT</a></p>";

  var opcionesInfo = {
    content: contenido,
    position: event.latLng,
  };
  info = new google.maps.InfoWindow(opcionesInfo);
  info.open(map);
}
function mostrarInfo4(event) {
  var contenido =
    "<h3>Tecnológico de Antioquia</h3>" +
    "<img src=./logos/tdeaInfo.jpg width=20% ></img>"
    +
    "<p>La Institución Universitaria Tecnológico de Antioquia (TdeA) fue fundada en 1983 e inicio sus labores como una institución pública dedicada específicamente a la formación tecnológica. Sus principios fundamentales se basan en la responsabilidad social, el espíritu humanista y la construcción del conocimiento. Y  se encuentra ubicado en " +
    event.latLng +
    "</p>" +
    "<p>sitio web <a href='https://www.tdea.edu.co/'>TdeA</a></p>";

  var opcionesInfo = {
    content: contenido,
    position: event.latLng,
  };
  info = new google.maps.InfoWindow(opcionesInfo);
  info.open(map);
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
