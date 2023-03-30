function handleSubmit(event){
    event.preventDefault()

    let travelCity = document.getElementById('city').value
    let departingDate = document.getElementById('departingDate').value
    let flightInfo = document.getElementById('flightInfo').value


    if(travelCity != "" && departingDate != "" && flightInfo != ""){
        Client.createTrip(travelCity, departingDate, flightInfo)
    }else{
        alert('Please complete all necessary fields');
    }

    


    console.log(": form submitted :")

    const userName = 'aridebby'
    const url = `http://api.geonames.org/searchJSON?q=${travelCity}&maxRows=1&username=${userName}`;
    const weatherbitApiKey = 'd020e05431684dc6876da039788f9424'
    const today = new Date();
    const date = today.getDate(); 
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const startDate = `${year}-${month}-${date} `
  
    fetch(url).then(res => {
        console.log(res);
        return res.json()}).then(data => {
            //get latitude and longitude form data
            const lat = data.geonames[0].lat;
            const lng = data.geonames[0].lng;
        console.log(`This is ${lat} and this is ${lng}`)
        //fecth the weather forecast from weatherbit api
        const weatherbitUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&start_date=${startDate}&end_date=${departingDate}&key=${weatherbitApiKey}`
        fetch(
            weatherbitUrl
        ).then(res => {
            console.log(res);
            return res.json()
        }).then(data => {
            //get weather temperature and description
            const temperature = data.data[0].temp;
            const description = data.data[0].weather.description;
            document.getElementById('weatherInfo').innerHTML = `The temperature in the location is ${temperature}°C and the weather description is ${description}.`
          })
        }).catch(error => console.error(error))

}




export { handleSubmit }