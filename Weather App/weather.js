"use strict";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";
const apiLatLon =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&";
const apiKey = "2fafef054b0f5136f17447a4c59a7f67";
const searchBtn = document.querySelector(".search-btn");
let input = document.querySelector(".search-bar");
const weatherStatus = document.querySelector(".weather");
const defaultCity = "Krakow";

const starter = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(position);

        console.log(lat, lon);
        console.log(new Date(position.timestamp));
        const hour = new Date(position.timestamp).getHours();
        console.log(hour.toString());
        dayTime(hour);
        // dayTime(23);
        checkWeatherByLatLon(lat, lon);
        // latitude longitude
      },
      function () {
        checkWeatherByName();
        console.log("No access");
        // alert("Could not get your position");
      }
    );
  }
};
starter();

// Checks weather by city name
async function checkWeatherByName(name = " Krakow") {
  const response = await fetch(apiUrl + `q=${name}` + `&appid=${apiKey}`);

  const data = await response.json();
  console.log(data);
  //1695487936
  console.log(new Date(1695488668));
  dataCheck(data);
  /*
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
        */
}

// Checks weather by longitude and latitude
async function checkWeatherByLatLon(lat, lon) {
  const response2 = await fetch(
    apiLatLon + `lat=${lat}` + `&lon=${lon}` + `&appid=${apiKey}`
  );
  const geoData = await response2.json();
  dataCheck(geoData);
}

// checkWeather();

const dataCheck = function (data) {
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
};
/*
1. Set a default geolocation by requesting an user's permission.  
*/

searchBtn.addEventListener("click", function (e) {
  const cityName = input.value;
  checkWeatherByName(cityName);
  // console.log(cityName);
});
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const cityName = input.value;
    checkWeatherByName(cityName);
  }
  // console.log(cityName);
});

// Check the day time
/*
2. change background color relative to a city location and time. From 5am to 12pm - morning. 
From 12pm to 6pm a day. From 6pm to 8pm - sunset. From 9pm to 5am night
*/
const dayTime = function (hour) {
  const root = document.querySelector(":root");
  const body = document.body;
  let gcs = getComputedStyle(root);

  let background = gcs.getPropertyValue("--bg-color");
  let dawn = gcs.getPropertyValue("--dawn");
  let afernoon = gcs.getPropertyValue("--afernoon");
  let dusk = gcs.getPropertyValue("--dusk");
  let night = gcs.getPropertyValue("--night");
  // console.log(dawn);
  // body.style.background = "var(--dawn)";
  if (hour >= 5 && hour <= 11) {
    body.style.background = "var(--dawn)";
  } else if (hour >= 12 && hour <= 18) {
    body.style.background = "var(--afernoon)";
  } else if (hour >= 19 && hour <= 21) {
    body.style.background = "var(--dusk)";
  } else if (hour >= 22 && hour <= "5") {
    body.style.background = "var(--night)";
  }
};
