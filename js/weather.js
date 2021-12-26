const API_KEY = "c2fe343d8e94c1b322e339d123b4cbf8";
const API_URL = "api.openweathermap.org/data/2.5/weather";
let weatherDiv;
let cityName;
let myWeather;

document.addEventListener("DOMContentLoaded", function() {
    weatherDiv = document.querySelector("#weatherDiv");
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});

function onGeoError(error) {
    console.log(error);
    alert("위치를 가져올 수 없습니다.");
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const cityNameSpan = document.createElement("span");
            const myWeatherSpan = document.createElement("span");

            cityNameSpan.innerText = data.name;
            myWeatherSpan.innerText = data.weather[0].main;
            weatherDiv.innerHTML = "";
            weatherDiv.appendChild(cityNameSpan).appendChild(myWeatherSpan);
        });
}