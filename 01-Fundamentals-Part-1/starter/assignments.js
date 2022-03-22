// // values and variables
const country = "USA";
const continent = "north america";
let population = 330;
// console.log({ country, continent, population });

// // data types
let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // let, const, var
language = "chinese";
isIsland = true;

// // basic operators
let countrySplit = population / 2;
population++;
// console.log({ population });
let finlandPopulation = 6;
// console.log(population > finlandPopulation);
let average = 33;
// console.log(population < average);
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(description);

// // strings and template literals
// description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

// // taking decisions
// if (population > 33) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${average - population}`);
// }

// //type conversion and coersion
// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); // 6 + '17' --> 617
// console.log("19" - "13" + 17); // 6 + 17 --> 23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1149 - 4 -2 --> 1143

// truthy and false
// 5 falsy values: 0, "", undefined, null, NaN

// equality operators: == vs ===
// let numNeighbours = Number(
//     prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 0) {
//     console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }
// logical operators
// if (language === "English" && population < 50 && isIsland === false) {
//     console.log("You should live in " + country + " :)");
// } else {
//     console.log(country + " does not meet your criteria :(");
// }
// switch Statement
// switch (language) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers");
//         break;
//     case "spanish":
//         console.log("2nd place in number of navite speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
// }
// conditional (tenary) operator

// population > 33
//     ? console.log(`${country}'s population is above average`)
//     : console.log(`${country}'s population is below average`);
