import apiKey from "./apiKey.js";

// Get weather data from API
export default async function getWeatherByCity(city, elementId, weatherElement, symbol) {
    try {
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await api.json();
        console.log(data);
        return showWeather(data, elementId, weatherElement, symbol);
    } catch (error) {
        console.log('Error');
    }
}

// Inner weather data by id
function showWeather(data, elementId, weatherElement, symbol) {
    const keys = weatherElement.split('.');
    let value = data;
    for (const key of keys) {
        value = value[key];
    }

    if (typeof value === 'number') {
        value = String(Math.floor(value));
    } else {
        value = String(value);
    }

    const tempElement = document.getElementById(elementId);
    tempElement.innerHTML = value;
}