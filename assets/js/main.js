let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let city = document.getElementById('city');


let cityName = document.querySelector('.weather-city');
let sky = document.querySelector('.description');
let weatherIcon = document.querySelector('.result-wrapper img');
let temp = document.querySelector('.result-wrapper .temp');
let min_temp = document.querySelector('.result-wrapper .details-temp.min');
let max_temp = document.querySelector('.result-wrapper .details-temp.max');


let getWeather = () => {
    let cityValue = city.value;
    if (cityValue.length > 0) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=b4336e17ec9ff6998276f592154ffa10`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                console.log(data.weather[0].icon)
                console.log(data.weather[0].main)
                console.log(data.weather[0].description)
                console.log(data.name)
                console.log(data.main)
                console.log(data.main.temp_min)
                console.log(data.main.temp_max)

                cityName.innerHTML = data.name;
                sky.innerHTML = data.weather[0].main;
                weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                temp.innerHTML = data.main.temp;
                min_temp.innerHTML = data.main.temp_min;
                max_temp.innerHTML = data.main.temp_max;
            })
    }
}
searchBtn.addEventListener('click', getWeather);
window.addEventListener('load', getWeather);