// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message1, message2){
    console.log(message1, message2)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>Have you ever had COVID-19? </h3> </p>${message1}</p>  <h3>What is your COVID-19 vaccination status? </h3> </p>${message2}</p>`)
    return message1, message2
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSUqE0lgJjHaj4wL7Nty9SnrqA6nEDfKnaG7dEDKEGCCysuDRVjZLBcEWLAs2W6OeDhQ7PoJElstJ3U/pub?output=csv"

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
        addMarker(data.lat,data.lng, data["3. Where do you currently live?"], data["1. Have you ever received a positive COVID-19 diagnosis?"], data["2. Which of the following options describes your COVID-19 vaccination status?"])
    })
}

loadData(dataUrl)

