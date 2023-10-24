import apiKey from "./apiKey.js";

async function getWeatherByCity(city, callback, elementId, weatherElement, symbol) {
    try {
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await api.json();
        console.log(data);
        return callback(data, elementId, weatherElement, symbol);
    } catch (error) {
        console.log('Error');
    }
}

function showWeather(data, elementId, weatherElement, symbol) {
    const keys = weatherElement.split('.');
    let value = data;
    for (const key of keys) {
        value = value[key];
    }
    const tempElement = document.getElementById(elementId);
    tempElement.innerHTML = String(value) + symbol;
}

getWeatherByCity('Marseille', showWeather, 'temp', 'main.temp', ' °C');
getWeatherByCity('Marseille', showWeather, 'humidity', 'main.humidity', ' %');
getWeatherByCity('Marseille', showWeather, 'pressure', 'main.pressure', ' hPa');