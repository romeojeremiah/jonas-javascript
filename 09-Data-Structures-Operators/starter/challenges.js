'use strict';

// //Challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // // create one player array for each team
// // const [players1, players2] = game.players;
// // console.log(players1, players2);
// // // first player in any player array is gk others are field players
// // let [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // [gk, ...fieldPlayers] = players2;
// // console.log(gk, fieldPlayers);

// // //create array allPlayers containing all players
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // //create new array players1Final containing all original team1 players plus 'Thiago', 'Coutinho', and 'Perisic'
// // const players1Final = [...players1, 'Thiago', 'Continho', 'Perisic'];
// // console.log(players1Final);

// // //Based on games.odds, create one variable for each odd
// // const { team1: team1, x: draw, team2: team2 } = game.odds;
// // console.log(team1, draw, team2);

// // //Write a function('printGoals') that receives arbitrary number of
// // // player names
// // const printGoals = function (...players) {
// //   for (let i = 0; i < players.length; i++) {
// //     console.log(players[i]);
// //   }
// //   console.log(players.length);
// // };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals(...game.scored);

// //Print to console team more likely to win, without using if/else
// //or ternary operator

// for (const score of game.scored.entries()) {
//   console.log(`Goal ${score[0] + 1}: ${score[1]}`);
// }

// let sumOdds = 0;

// for (const odd of Object.values(game.odds)) {
//   sumOdds += odd;
// }

// console.log(`Average odd is ${sumOdds / Object.keys(game.odds).length}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const str =
//     team === 'x'
//       ? `Odd of draw: ${odd}`
//       : `Odd of victory ${game[team]}: ${odd}`;
//   console.log(str);
// }

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risottao',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// console.log(orderSet.add('Garlic Bread'));
// console.log(orderSet.delete('Garlic Bread'));
// console.log(orderSet);

// // console.log(orderSet.clear());

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// for (const item of rest) {
//   console.log(rest);
// }

// // const question = new Map(['question', 'Best programming language']);

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// const average = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${average} minutes`);

// let str = '';
// for (const [time, event] of gameEvents) {
//   str = time < 45 ? '[FIRST HALF]' : '[SECOND HALF]';

//   console.log(`${str} ${time}: ${event}`);
// }

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const rows = flights.split('+_');
for (const row of rows) {
  const messages = row.split(';');
  let [status, from, to, time] = messages;

  status = status.replaceAll('_', ' ').trim();
  from = from.slice(0, 3).toUpperCase();
  to = to.slice(0, 3).toUpperCase();
  time = time.split(':');
  let [hour, minute] = time;

  if (status.includes('Delayed')) {
    status = '🔴 ' + status;
  }

  let message = `${status} from ${from} to ${to} (${hour}h${minute})`;
  console.log(message.padStart(45));
}
