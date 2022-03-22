// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const printForecast = (arr) => {
    let forecast = "";
    let day = "day";
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 > 1) {
            day = "days";
        }
        forecast += `${arr[i]}\xB0C in ${i + 1} ${day}...`;
    }
    return forecast;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
