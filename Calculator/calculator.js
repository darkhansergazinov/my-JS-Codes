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

const calculator = document.querySelector(".calculator");

const display = document.querySelector(".result-p");

const keys = document.querySelector(".calculator__keys");

// let zero = document.querySelector(".number-0");
// let one = document.querySelector(".number-1");
// let two = document.querySelector(".number-2");
// let three = document.querySelector(".number-3");
// let four = document.querySelector(".number-4");
// let five = document.querySelector(".number-5");
// let six = document.querySelector(".number-6");
// let seven = document.querySelector(".number-7");
// let eight = document.querySelector(".number-8");
// let nine = document.querySelector(".number-9");

// zero.addEventListener("click", function () {
//   console.log(Number(zero.value));
// });
let isPlusClicked = false;
console.log(isPlusClicked);

const topNum = [];

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }
    if (action === "clear") {
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      }
    }
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      display.textContent = calculate(firstValue, secondValue);
    }
  }
});

const calculate = (a, b) => parseFloat(a) + parseFloat(b);
// const btnsValue = function (btns) {
//   for (const btn of button) {
//     btn.addEventListener("click", function () {
//       // console.log(Number(btn.value));
//       result.textContent += Number(btn.value);
//       // secondNum = result.textContent;
//       // console.log(secondNum);
//       topNum.push(Number.parseInt(result.textContent));
//       console.log(topNum);
//     });
//   }

//   // btns.forEach(function (btn) {
//   //   btn.addEventListener("click", function (e) {
//   //     // console.log(e.target);
//   //     // console.log(Number(btn.value));
//   //     result.textContent += Number.parseInt(btn.value);
//   //     topNum.push(Number.parseInt(result.textContent));

//   //     console.log(topNum);
//   //     // console.log(secondNum);
//   //   });
//   // });
// };

// btnsValue(button);

// const plusValue = function () {
//   result.textContent = " ";
//   isPlusClicked = true;
//   console.log(result.i);
//   // btnsValue(button);
//   // if (isPlusClicked === true) {
//   //   // for (const btn of button) {
//   //   //   btn.addEventListener("click", function () {
//   //   //     // console.log(Number(btn.value));
//   //   //     result.textContent += Number(btn.value);
//   //   //     secondNum = result.textContent;
//   //   //   });
//   //   // }
//   // }
//   // if (isPlusClicked) {
//   //   button.forEach(function (btn) {
//   //     btn.addEventListener("click", function () {
//   //       // console.log(Number(btn.value));
//   //       result.textContent += Number(btn.value);
//   //       secondNum = result.textContent;
//   //       console.log(Number(secondNum));
//   //     });
//   //   });
//   // }
// };
// plus.addEventListener("click", plusValue);

// after clicking buttong + it will activate function that takes second value from Nums
// console.log(calcPlus(1, 1));
