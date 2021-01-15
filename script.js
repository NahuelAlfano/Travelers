// Foursquare API Info

const clientId = 'WJFXTRDQPPM5W4M514W5COWMLXHGL3FCBYKKCKRTO1UFRGWU';
const clientSecret = 'OCDR0W2TPPDLIEENXCUTAEUQYLKLBTPROGMJXNNG5J0N5VSD';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather API Info

const openWeatherKey = '6ffaca22cba7d7f80e932c7b260f260f';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// elementos de la pagina

const input = document.getElementById('city');
const submit = document.getElementById('button');
const destination = document.getElementById('destination');
const container = document.querySelector('info-container');

// array de dias para mostrar el clima

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// ASYNC FUNCTION PARA EL PRONOSTICO

const getForecast = async () => {
  
  const weatherInput = input.value;

  const urlToFetch = weatherUrl + '?q=' + weatherInput + '&APPID='+ openWeatherKey;
  
  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
  }
  catch(err){
    console.log(err);
  }
}

// template para el html para la seccion de destination (clima)

const createWeatherHTML = (currentDay) => {
    return `<h2>${weekDays}[(new Date()).getDay()]</h2>
    <h2>Temperature: ${kelvinToCelsius(currentDay.main.temp)}&deg;C</h2>
    <h2>Condition: ${currentDay.weather[0].description}</h2>`
}

// formula para pasar los grados kelvin que devuelve el json a celcius 

const kelvinToCelsius = k => (k - 273.15).toFixed(0);

getForecast()