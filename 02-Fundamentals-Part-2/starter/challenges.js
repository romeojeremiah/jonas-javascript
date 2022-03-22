"use strict";

// assignment: functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population}, million people and its capital city
//   is ${capitalCity}`;
// }

// const usa = describeCountry("usa", 330, "dc");
// const michigan = describeCountry("michigan", 34, "lansing");
// const texas = describeCountry("texas", 33, "austin");

// console.log(usa);
// console.log(michigan);
// console.log(texas);

// // assignment: function declaration vs expression

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2);
}

// const china = percentageOfWorld1(1441);
// const unitedStates = percentageOfWorld1(330);
// const portugal = percentageOfWorld1(79);
// console.log(china, unitedStates, portugal);

// const percentageOfWorld2 = function (population) {
//     return ((population / 7900) * 100).toFixed(2);
// };

// const china2 = percentageOfWorld1(1441);
// const unitedStates2 = percentageOfWorld1(330);
// const portugal2 = percentageOfWorld1(79);
// console.log(china2, unitedStates2, portugal2);

// // assignment: arrow functions

// const percentageOfWorld3 = (population) =>
//     ((population / 7900) * 100).toFixed(2);

// console.log(percentageOfWorld3(7900));

// // assignment: functions calling other functions

// const describePopulation = (country, population) =>
//     `${country} has ${population} people, which is about ${percentageOfWorld1(
//         population
//     )}% of the world.`;

// const china3 = describePopulation("china", 1441);
// const unitedStates3 = describePopulation("usa", 330);
// const portugal3 = describePopulation("portugal", 79);
// console.log(china3, unitedStates3, portugal3);

// challenge #1

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// };

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// checkWinner(avgDolphins, avgKoalas);

// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins, avgKoalas);

// checkWinner(avgDolphins, avgKoalas);

// asssignment: intro to arrays

const populations = [23, 44, 56, 78];
// console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[populations.length - 1]),
];
// console.log(percentages);

// // assignment: basic array operations

let neighbors = ["mexico", "cananda", "alaska"];
neighbors = [];
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);
// if (!neighbors.includes("Germany")) {
//     console.log("Probably not a central European country :D");
// }

// const index = neighbors.indexOf("mexico");
// neighbors[index] = "usa";
// console.log(neighbors);

// challenge #2

// let bill = 275;

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value is ${bill + tip}`);

// bill = 40;

// tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value is ${bill + tip}`);

// bill = 430;
// tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value is ${bill + tip}`);

const calcTip = (bill) =>
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

let bills = [125, 555, 44];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// intro to objects

const myCountry = {
    country: "usa",
    capital: "dc",
    language: "english",
    population: 33,
    neighbors: neighbors,
    describe: function () {
        console.log(
            `${this.country} has ${this["population"]} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        console.log(this);
        console.log(this.neighbors.length);
        return this.neighbors.length === 0 ? true : false;
    },
};

console.log(myCountry.neighbors[2]);

// dot vs bracket notation

console.log(
    `${myCountry.country} has ${myCountry["population"]} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);

// object methods
myCountry.describe();
console.log(myCountry.checkIsland());

// challenge #3

let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;
let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

const mark = {
    fullName: "mark miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / this.height ** 2;
    },
};
const john = {
    fullName: "john smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / this.height ** 2;
    },
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(
        `Mark's BMI ${mark.calcBMI()} is higher than John's ${john.calcBMI()}`
    );
} else {
    console.log(
        `John's BMI ${john.calcBMI()} is higher than Mark's ${mark.calcBMI()}`
    );
}

// the for loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting.`);
}

// looping arrays, breaking and continuing
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

for (let i = 0; i < percentages2.length; i++) {
    console.log(percentages2[i] === percentages[i]);
}

console.log(percentages2);

// looping backwards and loops in loops

const listOfNeighbors = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++)
    for (let y = 0; y < listOfNeighbors[i].length; y++)
        console.log(`Neighbor: ${listOfNeighbors[i][y]}`);

const percentages3 = [];

let z = 0;
while (z < populations.length) {
    percentages3.push(percentageOfWorld1(populations[z]));
    z++;
}

console.log(percentages3);

// challenge #4

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

tips = [];

let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

let totalSum = 0;

const calcAverage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    console.log(totalSum);
    return totalSum / arr.length;
};

console.log("average", calcAverage(totals));

const sum = totals.reduce(function (prev, curr) {
    let total = prev + curr;
    return total;
}, 0);

console.log(sum);
