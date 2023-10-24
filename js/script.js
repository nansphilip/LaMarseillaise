import imageResize from "./imageResize.js";
import getWeatherByCity from "./getWeatherByCity.js";

// Initial sizing
imageResize("back");
imageResize("front");

// Auto resizing
window.addEventListener("resize", () => {
	imageResize("back");
	imageResize("front");
});

// Refresh data
getWeatherByCity("Marseille", "temp", "main.temp");
getWeatherByCity("Marseille", "humidity", "main.humidity");
getWeatherByCity("Marseille", "pressure", "main.pressure");
getWeatherByCity("Marseille", "wind", "wind.speed");
getWeatherByCity("Marseille", "meteo", "weather.0.main");
