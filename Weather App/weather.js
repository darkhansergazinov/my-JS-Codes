"use strict";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";
const apiKey = "2fafef054b0f5136f17447a4c59a7f67";
const searchBtn = document.querySelector(".search-btn");
let input = document.querySelector(".search-bar");
const weatherStatus = document.querySelector(".weather");

searchBtn.addEventListener("click", function (e) {
  const cityName = input.value;
  checkWeather(cityName);
  // console.log(cityName);
});
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const cityName = input.value;
    checkWeather(cityName);
  }
  // console.log(cityName);
});

async function checkWeather(name) {
  const response = await fetch(apiUrl + `q=${name}` + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(
    ".humidity"
  ).innerHTML = `Humidity: ${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `Wind: ${Math.round(
    data.wind.speed
  )} km/h`;

  console.log(data.weather[0].main);

  // Changing img depends on the weather
  // rain, clouds, clear,drizzle,snow,
  if (data.weather[0].main === "Clear") {
    weatherStatus.src = "img/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherStatus.src = "img/cloud.png";
  } else if (data.weather[0].main === "Rain") {
    weatherStatus.src = "img/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherStatus.src = "img/drizzle.png";
  } else if (data.weather[0].main === "Snow") {
    weatherStatus.src = "img/snow.png";
  }
}
// checkWeather();
