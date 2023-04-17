// declare variables
let zoomLevel = 4;
const mapCenter = [39.099728, -94.578568];

// use the variables
const map = L.map('the_map').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng], {icon: greenIcon}).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  

// use our marker functions
addMarker(34.052235, -118.243683, "Los Angeles, CA", "I came to UCLA for college")
addMarker(40.730610, -73.935242, "New York, NY", "I grew up in the NYC area")
addMarker(42.361145, -71.057083, "Boston, MA", "I've visited many times")
addMarker(39.952583, -75.165222, "Philadelphia, PA", "I've visited many times")
addMarker(38.897957, -77.036560, "Washington D.C.", "I've visited a few times")
addMarker(39.2904, -76.6122, "Baltimore, MD", "I've visited a few times")
addMarker(28.538336, -81.379234, "Orlando, FL", "I've visited twice")
addMarker(41.505493, -81.681290, "Cleveland, OH", "I've visited many times")
addMarker(41.0998, -80.6495, "Youngstown, OH", "I've visited many times to see family")
addMarker(41.8500, -87.6501, "Chicago, IL", "I've visited once")
addMarker(40.3573, -74.6672, "Princeton, NJ", "I've visited many times")
addMarker(37.773972, -122.431297, "San Francisco, CA", "I've visited twice, and I have family who lives here")
addMarker(34.684930, -82.814777, "Clemson, SC", "I've visited once")
addMarker(41.825226, -71.418884, "Providence, RI", "I've visited many times")
addMarker(43.680031, -70.310425, "Portland, ME", "I've visited once")
addMarker(41.310726, -72.929916, "New Haven, CT", "I've visited many times")
addMarker(41.7658, -72.6734, "Hartford, CT", "I've visited many times")
addMarker(43.7022, -72.2896, "Hanover, NH", "I've visited once")
addMarker(43.0831, -73.7846, "Saratoga Springs, NY", "I've visited many times")
addMarker(43.0962, -79.0377, "Niagara Falls, NY", "I've visited once")
addMarker(21.3099, -157.8581, "Honolulu, HI", "I've visited once")
addMarker(44.3876, -68.2039, "Bar Harbor, ME", "I've visited once")
addMarker(41.6688, -70.2962, "Cape Cod, MA", "I've visited many times")
addMarker(41.0534, -73.5387, "Stamford, CT", "I've visited many times")