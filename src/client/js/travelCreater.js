
var listOfTrips = []
function createTrip(travelCity, departingDate, flightNote){

    const apiKey = "34859144-9b3d8f728da901731fe17ddf4";
const query = travelCity;

const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&category=places&image_type=photo&pretty=true`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.hits[0].largeImageURL;
    ///create a  new data object
    var trip = {
        "travelCity": travelCity,
        "departingDate": departingDate,
        "flightNote": flightNote,
        "imageUrl": imageUrl
    }
    //add the new data object to the list of trips
    listOfTrips.push(trip);
    console.log(listOfTrips)
    alert('Your trip has been created')
    ///default the value of the input fields 
     document.getElementById('city').value = ''
     document.getElementById('departingDate').value = ''
     document.getElementById('flightInfo').value =''

     ///set the value of the html elements to the saved data
     document.getElementById('locationImage').src = listOfTrips[0]['imageUrl']
     document.getElementById('location').innerHTML = `Your trip to ${listOfTrips[0]['travelCity'] } is on ${listOfTrips[0]['departingDate']}`
     document.getElementById('flightNote').innerHTML = `Flight note: ${listOfTrips[0]['flightNote']}`
     document.getElementById('departureDate').innerHTML = `Departure: ${listOfTrips[0]['departingDate']}`
     document.getElementById('departingLocation').innerHTML = `My trip to : ${listOfTrips[0]['travelCity']}`
    return listOfTrips;
  })
  .catch(error => console.error(error));

}


function deleteTrip(event) {
    event.preventDefault()
    if(listOfTrips.length != 0){
        listOfTrips.shift()
        alert('Your trip has been removed')
    }else{
        alert('You don\'t have any trips')
    }
   
    console.log(listOfTrips)
}

export { createTrip,
    deleteTrip
 }