"use strict";

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/
// const [...players1] = game.players[0];
// const [...players2] = game.players[1];
// console.log(players1, players2);

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = (...players) => {
//     let sum = 0;
//     players.forEach((player) => {
//         console.log(player);
//         sum++;
//     });
//     console.log("Total scored", sum);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

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

// // 1.
// const { scored } = game;
// for (let [goal, name] of scored.entries()) {
//     console.log(`Goal ${goal + 1}: ${name}`);
// }

// // 2.
// const { odds } = game;
// const oddsArr = Object.values(odds);
// let sum = 0;
// for (const average of oddsArr) {
//     sum += average;
// }
// const average = sum / oddsArr.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(odds)) {
//     console.log(`Odd of victory ${game[team] || "draw"}: ${odd}`);
// }

// // Bonus.

// let scorers = {};
// let score = 0;

// const scoredArr = Object.values(scored);

// for (let scorer of scoredArr) {
//     console.log((scorers[scorer] = scorer));
// }

// console.log(scorers);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//     [17, "⚽️ GOAL"],
//     [36, "🔁 Substitution"],
//     [47, "⚽️ GOAL"],
//     [61, "🔁 Substitution"],
//     [64, "🔶 Yellow card"],
//     [69, "🔴 Red card"],
//     [70, "🔁 Substitution"],
//     [72, "🔁 Substitution"],
//     [76, "⚽️ GOAL"],
//     [80, "⚽️ GOAL"],
//     [92, "🔶 Yellow card"],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// console.log(gameEvents.delete(64));
// console.log(gameEvents.entries());

// let eventTimes = 0;

// for (const eventTime of gameEvents.keys()) {
//     eventTimes += eventTime;
// }

// console.log(
//     `And event happened, on average, every ${(eventTimes / 90).toFixed(
//         2
//     )} minutes`
// );

// for (const [time, event] of gameEvents.entries()) {
//     time < 45
//         ? console.log(`[FIRST HALF] ${time}: ${event}`)
//         : console.log(`[SECOND HALF] ${time}: ${event}`);
// }

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const btn = document.querySelector(".btn-text");
const textArea = document.querySelector("#text-area");
let data = "";
let allWords = [];
let noUnder = [];
let finalWords = [];
let flags = "";

const newArr = (data) => {
    return data.split("\n");
};

btn.addEventListener("click", (e) => {
    data = textArea.value;
    const splitArr = newArr(data);

    for (const word of splitArr) {
        allWords.push(word.toLowerCase().trim());
    }

    for (const splitWords of allWords) {
        noUnder.push(splitWords.split("_"));
    }

    for (const [first, second] of noUnder) {
        finalWords.push(
            `${first}${second.replace(second[0], second[0].toUpperCase())}`
        );
    }
    finalWords.forEach((word, index) => {
        console.log(
            `${word.padEnd(20, " ")}${flags.padStart(index + 1, "✅")}`
        );
    });
});
