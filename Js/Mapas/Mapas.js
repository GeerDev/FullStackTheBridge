// Obtener ubicación actual
// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(position => {
//         console.log(`Latitud: ${position.coords.latitude}\nLongitud: ${position.coords.longitude}`);
//         let datos = `<h1>Aquí estás!</h1>
//         <p>Lat: ${position.coords.latitude.toFixed(4)}</p>
//         <p>Long: ${position.coords.longitude.toFixed(4)}</p>`
//         document.body.innerHTML = datos;
//     });
// } else {
//   console.warn("Tu navegador no soporta Geolocalización!! ");
// }

// Seguir a un usuario
// navigator.geolocation.watchPosition(position => {
//     console.log(`${position.coords.latitude}, ${position.coords.longitude}`)
// }, error => {
//    console.warn(`Error! - ${error}`);
// });

// Leaflet
const mapId = 'map';
const initialCoordinates = [39.5731, -1.2218]; // Plaza Sol en Madrid [lat, lng]
const map = L.map(mapId).setView(initialCoordinates, 1);

// Mapbox
const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

const ATTRIBUTION =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
// Este token será el que obtengamos en la web de Mapbox
const ACCESS_TOKEN =
  'pk.eyJ1IjoiZ2VyMTciLCJhIjoiY2t5MGVyNW94MDB4bzJ2cXRoamlxanBrMiJ9.tO_7YzSVR-EY2e1yDK_eEw';

  L.tileLayer(MAPBOX_API, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
  }).addTo(map);

// Marcadores 
// Añadimos el marcador a nuestra posición inicial
// L.marker(initialCoordinates).bindPopup("<b>Plaza Sol</b><br>Posición inicial del mapa").addTo(map);
// Ejemplo añadiendo otras coordenadas:
// const plazaMayorCoordinates = [40.415511, -3.7095896];
// L.marker(plazaMayorCoordinates).bindPopup("<b>Plaza Mayor</b><br>Posición adicional").addTo(map);

// --- Ejercicios ---

// Coordenadas de mi ubicación y marcador en un mapa
// const coordenadasGer = [39.573112, -1.2217552];
// L.marker(coordenadasGer).bindPopup("<b>Aqui no se encuentra</b><br>Ger").addTo(map);

// Vamos a ver vuelos en tiempo real en un mapa
// Crack solo tienes 100 peticiones a esta API jaja usalas con cabeza jaja
let elemento = []
let identi = []
fetch('http://api.aviationstack.com/v1/flights?access_key=e22e08c6c3fdd8c964fad37dbb48b7c1')
  .then(response => response.json())
  .then(datos => {
    const { data } = datos
    data.forEach(dato => {
      if (dato.live !== null){
        const { live, flight } = dato
        const { latitude, longitude } = live
        elemento.push([latitude, longitude]) 
        identi.push(flight)
      }
    })
    console.log (elemento)
    for (let i = 0; i < elemento.length; i++) {
      let coordenadasAvion = elemento[i];
      console.log(coordenadasAvion)
      L.marker(coordenadasAvion).bindPopup(`<b>Vuelo con numero ${identi[i].number}</b>`).addTo(map);
    }
  });

  // Crack hay que empezar a manejar los errores para el buen funcionamiento del programa .catch o un try/catch en funciones asíncronas
  // Vamos a empezar a utilizar mas el .map para jugar con la inmutabilidad y sintetizar los bucles y crear variables nuevas
  // Si pudieramos hacer el ejercicio bien utilizariamos un serInterval() para llamar a la funcion cada x tiempo