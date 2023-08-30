"use strict";

const h1 = document.querySelector("h1");

let newYear = new Date(2023, 11, 31, 23, 59);

const counter = setInterval(() => {
  let now = new Date();
  let countDown = newYear.getTime() - now.getTime();
  let second = Math.floor(countDown / 1000) % 60;
  let minute = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let hours = Math.floor(countDown / 1000 / 60 / 60) % 24;
  let days = Math.floor(countDown / 1000 / 60 / 60 / 24);
  h1.innerHTML =
    days +
    ":" +
    `${hours}`.padStart(2, 0) +
    ":" +
    `${minute}`.padStart(2, 0) +
    ":" +
    `${second}`.padStart(2, 0);
}, 1000);

console.log((600000 / 1000) % 60);
