// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let covid = L.featureGroup();
let no_covid = L.featureGroup();

let layers = {
    "Has had COVID": covid,
    "Has never had COVID": no_covid
}

let circleOptions = {
    radius: 6,
    fillColor: "#40E0D0",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSUqE0lgJjHaj4wL7Nty9SnrqA6nEDfKnaG7dEDKEGCCysuDRVjZLBcEWLAs2W6OeDhQ7PoJElstJ3U/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

Esri_WorldGrayCanvas.addTo(map);

function addMarker(data){
    if(data["1. Have you ever received a positive COVID-19 diagnosis?"] == "Yes"){
        circleOptions.fillColor = "#FFBF00"
        covid.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Has had COVID</h2>`))
        createButtons(data.lat,data.lng,data["3. Where do you currently live?"])
        }
    else{
        circleOptions.fillColor = "#DE3163"
        no_covid.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Has never had COVID</h2>`))
        createButtons(data.lat,data.lng,data["3. Where do you currently live?"])
    }
    return data
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    covid.addTo(map) // add our layers after markers have been made
    no_covid.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([covid,no_covid]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
