"use strict";
const clean = document.querySelector(".number-AC");
const plusMinus = document.querySelector(".number-plus_Minus");
const percentage = document.querySelector(".number-percent");
const divide = document.querySelector(".number-divide");
const multiple = document.querySelector(".number-multiple");
const minus = document.querySelector(".number-minus");
const plus = document.querySelector(".number-plus");
const coma = document.querySelector(".number-coma");
const equal = document.querySelector(".number-equal");
const button = document.querySelectorAll(".btn-num");

const result = document.querySelector(".result-p");

let zero = document.querySelector(".number-0");
let one = document.querySelector(".number-1");
let two = document.querySelector(".number-2");
let three = document.querySelector(".number-3");
let four = document.querySelector(".number-4");
let five = document.querySelector(".number-5");
let six = document.querySelector(".number-6");
let seven = document.querySelector(".number-7");
let eight = document.querySelector(".number-8");
let nine = document.querySelector(".number-9");

// zero.addEventListener("click", function () {
//   console.log(Number(zero.value));
// });
let isPlusClicked = false;
console.log(isPlusClicked);

let secondNum = 0;
let topNum = 0;
const btnsValue = function (btns) {
  /*
  for (const btn of button) {
    btn.addEventListener("click", function () {
      // console.log(Number(btn.value));
      result.textContent += Number(btn.value);
      secondNum = result.textContent;
      console.log(secondNum);
    });
  }
  */

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.target);
      // console.log(Number(btn.value));
      result.textContent += Number.parseInt(btn.value);
      topNum = Number.parseInt(result.textContent);

      secondNum = Number.parseInt(result.textContent);
      console.log(topNum);
      // console.log(secondNum);
    });
  });
};

btnsValue(button);

const plusValue = function () {
  result.textContent = " ";
  let secondNum = 0;
  isPlusClicked = true;
  console.log(result.i);
  // btnsValue(button);
  // if (isPlusClicked === true) {
  //   // for (const btn of button) {
  //   //   btn.addEventListener("click", function () {
  //   //     // console.log(Number(btn.value));
  //   //     result.textContent += Number(btn.value);
  //   //     secondNum = result.textContent;
  //   //   });
  //   // }
  // }
  // if (isPlusClicked) {
  //   button.forEach(function (btn) {
  //     btn.addEventListener("click", function () {
  //       // console.log(Number(btn.value));
  //       result.textContent += Number(btn.value);
  //       secondNum = result.textContent;
  //       console.log(Number(secondNum));
  //     });
  //   });
  // }
  console.log(topNum + secondNum);
};
plus.addEventListener("click", plusValue);

// after clicking buttong + it will activate function that takes second value from Nums
const calcPlus = (a, b) => a + b;
// console.log(calcPlus(1, 1));
