"use strict";

const slides = document.querySelectorAll(".slides");
const allSections = document.querySelectorAll(".to-hide");
const navMenu = document.querySelector(".navigation-menu");

// Scrolling
navMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// Image slider
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

slides.forEach((s, i) => {
  s.style.transform = `translate(${100 * i}%)`;
});

let curSlide = 0;
const slidesLength = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translate(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);
btnNext.addEventListener("click", function () {
  if (curSlide === slidesLength - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
});

btnPrev.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = slidesLength - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
});

// sticky naviagtion menu
const header = document.querySelector("header");

const intialCoords = header.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY > intialCoords.height) {
    navMenu.classList.add("sticky");
  } else {
    navMenu.classList.remove("sticky");
  }
});

// revealing on scroll
const observer = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("hidden");
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0.2,
  }
);

allSections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Astronomy picture of the day
const key = "2tVlYwgZKQe86G2WqSfMV7dciI2bfN38wHCHSZcC";

const apod = async function () {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
  const data = await res.json();
  console.log(data);

  document.querySelector(".apod-img").src = data.hdurl;
  document.querySelector(".apod-text").textContent = data.explanation;
};

apod();
