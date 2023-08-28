'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Data needed for a later exercise
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  // console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// Object Keys(), Values(), Entries()

// Property NAMES()
const propeprties = Object.keys(openingHours);
// console.log(propeprties);
let openStr = `We are open on ${propeprties.length}:`;
for (const day of propeprties) {
  openStr += `${day},`; // with '+=' we add days to the string openStr to the end
}
// console.log(openStr);

// Property VALUES()
const values = Object.values(openingHours);
// console.log(values);

// Object ENTRIES ()
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  // bc value is an object, we can destructure it
  // console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, we open at ${open}`);
}
// for (let i = 0; i < days.length; i++) {
//   console.log(i);
// }
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas' }];
// console.log(users[0]?.name ?? 'User array empty'); // '?." check if a variable exists if yes then it proceeds forward, if not returns'undefined' "

// // 1) Destrcuturing

// // SPREAD bc on RIGHT side of  '='
// const arr = [1, 2, ...[3, 4]];

// // REST bc on LEFT side of '='
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 6, 7, 8);
// add(8, 3, 6, 1, 3, 6);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives,', 'spinach');
/*
console.log('----------');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----'); // returns first false, but if all true, returns the last truth
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// Alternative
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
// For of
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${player}`);
}

// for (const x of game.values) {
//   console.log(x);
// }
const odd = Object.values(game.odds);
let average = 0;
for (const x of odd) {
  average += x;
}
average /= odd.length;
console.log(average);

const names = Object.entries(game.odds);
for (const [x, y] of names) {
  const teamStr = x === 'x' ? 'draw' : `victory ${game[x]}`;
  console.log(`Odd of ${teamStr}:  ${y}`);
}

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1} `);
// console.log(`Odd of victory draw: ${game.odds.x} `);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2} `);

const scorers = {};
*/

// SETS (iterables),all elements are unique.  you cannot get an element from set.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size); // similiar to .length
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Challenge 3 Maps/Sets

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// #1
const events = [...new Set(gameEvents.values())];
// console.log(events);

// #2
gameEvents.delete(64);
// console.log(gameEvents);

// #3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// #4
for (const [key, value] of gameEvents.entries()) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  // console.log(`${half} half ${key}: ${value}`);
}

// STRINGS
const airline = ' TAP Air Portugal ';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// FIX capitalization in name
const passenger = 'joNaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n ';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));
// console.log(plane.endsWith('neo'));

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snack and a gun for protection');

// console.log(`a+very+nice+string`.split('+'));
// console.log(`Jonas Schemasldf`.split(' '));
const [firstName, lastName] = `Jonas Schemasldf`.split(' ');
// console.log(firstName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

// capitalizeName('jessica ann smith davis');

// Padding
const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+')); // the length of this entire string here should be 25 + 10 for the end padEnd

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// console.log(maskCreditCard(432345892341234));
// console.log(maskCreditCard(8979756142342344));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈️`.repeat(n)}`);
};

// planesInLine(5);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value.toLowerCase();
  const row = text.split(`\n`);
  // console.log(row);
  for (const [i, word] of row.entries()) {
    const [first, second] = word.toLowerCase().trim().split('_');
    // const output = `${first}${second.replace(
    //   second[0],
    //   second[0].toUpperCase()
    // )}`;
    const output = `${first}${second[0].toUpperCase() + second.slice(1)} `;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

let random = Math.trunc(Math.random() * 11) + 1;
let x = 2;
if (x === random) {
  console.log('Correct');
} else {
  console.log('Try again');
}
console.log(random);
