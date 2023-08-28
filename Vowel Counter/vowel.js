const text = document.getElementById("input");
const submit = document.getElementById("submit");

const vowels = ["a", "e", "i", "o", "u", "y"];
const checker = function () {
  let textValue = text.value;
  const smth = textValue.toLowerCase().split("");
  let counter = 0;
  console.log(smth);
  smth.forEach(function (a) {
    if (vowels.includes(a)) {
      counter++;
    }
  });
  alert(`Your sentence has ${counter} vowels`);
  console.log(`${counter}`);
};

submit.addEventListener("click", checker);
