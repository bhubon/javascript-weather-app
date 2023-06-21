const result = document.getElementById('result');
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city');

const cityName = document.querySelector('.weather-city');
const sky = document.querySelector('.description');
const skyDetails = document.querySelector('.description-details');
const weatherIcon = document.querySelector('.result-wrapper img');
const temp = document.querySelector('.result-wrapper .temp');
const min_temp = document.querySelector('.result-wrapper .details-temp.min');
const max_temp = document.querySelector('.result-wrapper .details-temp.max');
const feels_like = document.querySelector('.result-wrapper .details-temp.feels-like');
const error = document.querySelector('.error');


/**
 * Init the weather using openweathermap api
 */
const getWeather = () => {
    const cityValue = cityInput.value;
    if (cityValue.length > 0) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=b4336e17ec9ff6998276f592154ffa10`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setError(data)
                assignWeather(data);

            })
            .catch(error => {
                setError()
                assignWeather()

            })
    } else {
        setError()
        assignWeather()
    }
}

searchBtn.addEventListener('click', getWeather);
window.addEventListener('load', getWeather);

/**
 * Convert farenheit to celcius
 * @param int temperature 
 * @returns int
 */
const convertToCelsius = (temperature) => (temperature - 273.15).toFixed(2);

/**
 * Assign the weather fetch data innto html 
 * @param {object} data 
 */
const assignWeather = (data) => {
    if (data) {
        cityName.innerHTML = data.name
        sky.innerHTML = data.weather[0].main
        skyDetails.innerHTML = data.weather[0].description
        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        temp.innerHTML = `${convertToCelsius(data.main.temp)}&#176;`
        min_temp.innerHTML = `${convertToCelsius(data.main.temp_min)}&#176;`
        max_temp.innerHTML = `${convertToCelsius(data.main.temp_max)}&#176;`
        feels_like.innerHTML = `${convertToCelsius(data.main.feels_like)}&#176;`
    } else {
        setError()
    }
}

/**
 * Handle the errors
 * @param {object} data 
 */
const setError = (data) => {
    if (!data) {
        result.style.display = 'none'
        if (cityInput.value == '') {
            error.innerHTML = 'Please enter a city name'
        } else {
            error.innerHTML = 'Not a valid city name'
        }
    } else {
        result.style.display = 'block'
        error.innerHTML = ''
    }
}