"use strict";

// const arr = [2, 3, 4];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [italian, , vegetarian] = restaurant.categories;

// [vegetarian, italian] = [italian, vegetarian];

// console.log(italian, vegetarian);

// const nested = [2, 4, [5, 6]];

// const [, , [five, six]] = nested;

// console.log(five);

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

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

const { openingHours } = restaurant;
console.log(openingHours);

const {
    fri: { open, close },
} = openingHours;
console.log(open);
