"use strict";

const input = document.getElementById("input");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const list = document.querySelector(".list");
const ulList = document.querySelector(".list-ul");

const box = document.createElement("div");
const box1 = document.createElement("div");
// box.innerHTML = 'dasfsadf';
// box1.innerHTML = '1231231';
// list.appendChild(box);
// list.appendChild(box1);

let inputValue;
let count = 0;
// Get value from input

const getInputValue = function () {
  inputValue = input.value;

  if (inputValue === "") {
    alert("Enter txt pls");
  } else {
    addList(inputValue);
    // counter();
  }
};

// const counter = () => count++; // counter of how many notes are added

//---------------------------------

// function that adds text to the list
const addList = function (smth) {
  // Creating div element to make the list and add it to 'list' class
  const box1 = document.createElement("li");
  box1.innerHTML = ` ${smth}`;
  box1.name = "list-text";

  // creating 'done' to mark a task as completed
  const done = document.createElement("button");
  done.textContent = "Done";
  done.onclick = function () {
    done.textContent = "";
    box1.textContent += ` ✅`;
  };

  // creating 'x' to delete the element from the list.
  const x = document.createElement("button");
  x.innerHTML = "x";
  x.onclick = function () {
    box1.remove(); // removes content from box1
  };

  ulList.appendChild(box1);
  box1.append(done);
  box1.append(x);
};

// console.log(submit);

// creating funtion for 'clear list' to clean the whole list
const cleanTheList = function () {
  ulList.innerHTML = "";
};

submit.addEventListener("click", getInputValue);
clear.addEventListener("click", cleanTheList);
