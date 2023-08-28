"use strict";
const name1 = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");

let table = document.getElementById("table");
// let row = document.getElementById("row");

const nameData = document.getElementById("namedata");
const dateData = document.getElementById("date-data");
const amountData = document.getElementById("amount-data");
const deleteData = document.getElementById("delete-data");

const addBtn = document.querySelector(".add-expense");
// 1. get values from Name, Date, Amount
// 2. Past the values into table data

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
let newdate = day + "/" + month + "/" + year;

const getValue = function () {
  let nameValue = name1.value;
  let dateValue = date.value;
  let amountValue = amount.value;
  // console.log(nameValue);
  // console.log(dateValue);
  // console.log(amountValue);
  addingValue(nameValue, dateValue, amountValue);
};

// console.log(nameData);
// table.insertCell(2);
// console.log(nameData.innerText);
function addingValue(name = "food", date = newdate, amount = 1) {
  // nameData.innerText = name;
  const deleteBtn = document.createElement("button");

  deleteBtn.innerHTML = "x";
  deleteBtn.style.padding = "5px";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";

  let row = table.insertRow(-1);
  let c0 = row.insertCell(0);
  let c1 = row.insertCell(1);
  let c2 = row.insertCell(2);
  let c3 = row.insertCell(-1);
  c0.innerHTML = name;
  c1.innerHTML = date;
  c2.innerHTML = `${amount}$`;
  c3.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    row.remove();
  };
}

addBtn.addEventListener("click", getValue);
