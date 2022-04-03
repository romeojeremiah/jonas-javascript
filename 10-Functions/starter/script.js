'use strict';
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// poll.registerNewAnswer = function () {
//   let answer = Number(
//     prompt(`${this.question}\n${this.options.join('\n')}\n
//     (write option number)`)
//   );
//   typeof answer === 'number' &&
//     answer <= this.options.length &&
//     this.answers[answer]++;

//   poll.displayResults('string');
// };

// const pollBtn = document.querySelector('.poll');
// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults = function (type) {
//   if (type === 'array') {
//     console.log(this.answers);
//   }
//   if (type === 'string') {
//     console.log(`Poll results are ${this.answers.join(',')}.`);
//   }
// };

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// // mistypeVariable = 17;

// // console.log(window.mistypeVariable);
// var undefined = 'hello';
// console.log(undefined);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
