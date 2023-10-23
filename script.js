require('dotenv').config({path: '.env'});
const apiKey = process.env.API_KEY;

async function getWeatherByCity(city, callback, elementId) {
    try {
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await api.json();
        return callback(data, elementId);
    } catch (error) {
        console.log('Error');
    }
}

function showWeather(data, elementId) {
    const tempElement = document.getElementById(elementId);
    tempElement.innerHTML = data.main.temp + ' °C';
}

getWeatherByCity('Marseille', showWeather,'temp');