"use strict";

const body = document.querySelector("body");
const container = document.querySelector(".container-2");
const hiddenWord = document.querySelector(".hidden-word");
const yourGuess = document.querySelector(".your-guess");
const triesText = document.querySelector(".tries-text");
const triesAttempts = document.querySelector(".tries-word");
const guessInput = document.getElementById("guess-input");
const playerInput = document.querySelector(".player-input");
const submit = document.querySelector(".submit");
const congratulations = document.querySelector(".hidden-text");
let correctGuesses = document.querySelector(".correct-guesses");
let correctText = document.querySelector(".correct-text");
let correctLetters = document.querySelector(".correct-letters");
let wrongLetters = document.querySelector(".wrong-letters");

let secretWord = "";
const wordGenerator = async function () {
  const wordRando = await fetch(
    "https://random-word-api.vercel.app/api?words=1"
  );
  const data = await wordRando.json();
  console.log(data);
  secretWord = data.toString();
  split(secretWord);
  hideTheWord();
};
wordGenerator();

console.log(secretWord);

let tries = 0;

// Secret Word
let hidden;
// HIDING A WORD INTO SYMBOLS
function split(word) {
  hidden = word.split("");

  for (let i = 0; i < hidden.length; i++) {
    hidden[i] = "*";
  }
  console.log(hidden);
}
function hideTheWord() {
  const content = ` <div class="word">${hidden.join("")} || ${
    secretWord.length
  } letters</div>`;

  hiddenWord.insertAdjacentHTML("beforeend", content);
}

// Correct guesses array. Prints letters if the player guessed the letter;
let correctArray = [];

// Gets the value from inputbox
let x = guessInput.value;
const getValue = function () {
  x = guessInput.value;
  checkLetters(x);
  tries = tries + 1;
  triesText.textContent = tries;
  checkWord(x);
};

// Searches for a letter in the secret word
function checkLetters(letter) {
  if (secretWord.includes(letter)) {
    correctArray.push(letter);
    console.log(correctArray);
    correctLetters.innerHTML += letter + ",";
  } else if (letter === secretWord) {
    console.log(letter);
  } else {
    wrongLetters.innerHTML += letter + ",";
  }
}

// Check if the word correct
function checkWord(word) {
  if (word === secretWord) {
    congratulations.classList.remove("hidden-text");
    container.classList.add("hide");
    body.classList.add("hidden-winner");
  }
}

function inputCleaner() {
  guessInput.value = "";
}

submit.addEventListener("click", (btn) => {
  console.log(btn);
  if (btn.type == "click" || btn.key === "Enter") {
    getValue();
    inputCleaner();
  }
});
guessInput.addEventListener("keypress", (btn) => {
  if (btn.key === "Enter") {
    getValue();
    inputCleaner();
  }
});
