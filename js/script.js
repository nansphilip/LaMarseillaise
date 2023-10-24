import imageResize from "./imageResize.js";
import getWeatherByCity from "./getWeatherByCity.js";

// Initial sizing
imageResize();

// Auto resizing
window.addEventListener("resize", () => {
    imageResize();
});

// Refresh data
getWeatherByCity('Marseille', 'temp', 'main.temp', ' °C');
getWeatherByCity('Marseille', 'humidity', 'main.humidity', ' %');
getWeatherByCity('Marseille', 'pressure', 'main.pressure', ' hPa');