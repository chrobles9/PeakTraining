// Script for MapBox API for Peak Training Gym location

// Public Access Token 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyb2JsZXMiLCJhIjoiY2xpb3Z5eWZuMGk0dDNxcGd2dWdvMm5zbSJ9.UPYb5dcrvBEmpfwAu0S9eA';

// New map 
let map = new mapboxgl.Map({
  container: 'peakMap', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [-78.647762, 35.734885], // starting position [lng, lat]
  zoom: 13 // starting zoom
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([-78.647762, 35.734885])
.addTo(map);
 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());