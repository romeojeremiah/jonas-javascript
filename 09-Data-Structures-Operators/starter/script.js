'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [2, 3, 4];

// const [a, b, c] = arr;
// console.log(a, b, c);

// const [main, , secondary] = restaurant.categories;

// const nested = [2, 3, [5.6]];

// let [first, second, last] = nested;
// console.log(first, second, last);

// destructuring (retrieving elements) an object
// const name1 = restaurant.name;
// console.log(name1);

// const openingHours2 = restaurant.openingHours;
// console.log(openingHours2);

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// //retrieving elements from an object and storing them in different variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

// //The spread operator
// const arr = [7, 8, 9];

// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr);

// const { mainMenu } = restaurant;
// console.log(mainMenu);

// const newMenu = ['newElement', ...mainMenu];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...mainMenu];
// console.log(mainMenuCopy);

// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];

// //Iterables: arrays; strings, maps, sets, NOT objects

// const str = 'Jonas';

// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const y = { d: 1, b: 3, c: 4 };

const { d: who, b: me, u: ted = 2 } = { d: 1, b: 3, c: 4 };
console.log(who, me, ted);

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

function whois({ displayName, fullName: { firstName } }) {
  return `${displayName} is ${firstName}`;
}

console.log(whois(user)); // "jdoe is John"

console.log(3 && 4);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) console.log(item);

const flights2 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const info = flights2.split('+_');
console.log(info);
