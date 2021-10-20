
const appConstants = {
    apiKey: "6cb4b3cacf695e7ae4ae2d8e8bdd34ee",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    units: "metric",
    unknownValue: "NA",
    imageUrl: "http://openweathermap.org/img/wn/",
};



window.addEventListener('load', (event) => {

    //Get Current Position
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        
        fetch(`${appConstants.baseUrl}?lat=${lat}&lon=${long}&appid=${appConstants.apiKey}`)
        .then((res) => {
            if(res.status === 200) {
                return res.json()
            } 
            throw new Error('Didn\'t get the data')
        })
        .then((data) => {
            updateDom(data)
        })
        .catch((err) => console.error(err))
    })
})

function getWeatherInformation(event) {
    event.preventDefault()
    const getLocation = document.querySelector('.change-location input').value
    fetch(`${appConstants.baseUrl}?q=${getLocation}&units=${appConstants.units}&APPID=${appConstants.apiKey}`)
        .then((res) => {
            if(res.status === 200) {
                return res.json()
            } 
            throw new Error('Didn\'t get the data')
        })
        .then((data) => {
            updateDom(data)
        })
        .catch((err) => console.error(err))
}


function updateDom(data) {
    const {day, date, month, year} = getDateInfo()

    //update day and date
    document.querySelector('.weather-day').innerHTML = day;
    document.querySelector('.weather-date').innerHTML = `${date} ${month} ${year}`

    //location update
    document.querySelector(
        ".weather .weather-information .weather-location .city"
      ).innerHTML = `${data?.name || appConstants.unknownValue}, ${
        data?.sys?.country || appConstants.unknownValue
      }`;

    //image 
    document.querySelector('.weather-image img').setAttribute('src', `${appConstants.imageUrl}${data?.weather?.[0]?.icon}.png`)
    
    //temperature
    document.querySelector('.weather-temperature').innerHTML = `${data?.main?.temp}&deg;C`

    //description
    document.querySelector('.weather-description').innerHTML = `${data?.weather?.[0]?.main || appConstants.unknownValue}`

    //information list
    const informationNodesValues = document
    .getElementById("information-list")
    .querySelectorAll(".information-type .information-type-value");
    informationNodesValues[0].innerHTML = `${
        data?.main?.humidity || appConstants.unknownValue
    }`;
    informationNodesValues[1].innerHTML = `${
        data?.wind?.speed || appConstants.unknownValue
    }`;
    informationNodesValues[2].innerHTML = `${
        data?.visibility || appConstants.unknownValue
    }`;
    informationNodesValues[3].innerHTML = `${parseInt(
        (data?.main?.["temp_min"] + data?.main?.["temp_max"]) / 2
    )}&deg;C`;

}

function getDateInfo() {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const getDate = new Date();
      const day = days[getDate.getDay()]
      const date = getDate.getDate();
      const month = months[getDate.getMonth()];
      const year = getDate.getFullYear()

      return {day, date, month, year}
 
}

