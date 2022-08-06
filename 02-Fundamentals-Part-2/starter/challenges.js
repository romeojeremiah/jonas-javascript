// // coding challenge #1

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// };
// const checkWinner = (dolphinsAvg, koalasAvg) => {
//     const doubleDolphins = dolphinsAvg * 2;
//     const doubleKoalas = koalasAvg * 2;

//     if (dolphinsAvg >= doubleKoalas) {
//         return `winner is Dolphins`;
//     }

//     if (koalasAvg >= doubleDolphins) {
//         return "winner is Koalas";
//     }
// };

// const dolphinsAvg = calcAverage(44, 23, 71);
// const koalasAvg = calcAverage(65, 54, 49);

// const dolphinsAvg2 = calcAverage(85, 54, 41);
// const koalasAvg2 = calcAverage(23, 34, 27);

// console.log(checkWinner(dolphinsAvg, koalasAvg));
// console.log(checkWinner(dolphinsAvg2, koalasAvg2));

// coding Challenge 2

// const calcTip = (bill) => {
//     return (tip =
//         bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100);
// };

// const bills = new Array(125, 555, 44);
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(calcTip(100));
// console.log(bills, tips, total);

// const friends = ["Michael", "Tom", "John"];

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 46,
//     job: "teacher",
//     friends,
//     hasDriversLicense: false,
//     getSummary: function () {
//         return `${this.firstName}, is a ${this.age}-year old ${
//             this.job
//         }, an he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     },
// };

// console.log(
//     `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas["friends"][0]}`
// );

// console.log(jonas.getSummary());

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };
// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };

// const answer =
//     mark.bmi > john.bmi
//         ? console.log(
//               `${mark.fullName}'s BMI (${mark
//                   .calcBMI()
//                   .toFixed(2)}) is higher than ${john.fullName}'s (${john
//                   .calcBMI()
//                   .toFixed(2)})!`
//           )
//         : console.log(
//               `${mark.fullName}'s BMI (${mark
//                   .calcBMI()
//                   .toFixed(2)}) is higher than ${john.fullName}'s (${john
//                   .calcBMI()
//                   .toFixed(2)})!`
//           );

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = (bill) => {
    return bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

const calcAverage = (arr) => {
    //calc average of all numbers in the array
    let arrTotal = 0;

    for (i = 0; i < arr.length; i++) {
        arrTotal += arr[i];
    }

    return arrTotal / arr.length;
};

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
