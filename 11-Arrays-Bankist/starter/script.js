'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/*
1. compare username and pin to accounts in the array
2. if correct, display correct account
  - change log in sign
  - call all the functions using the appropriate account info
3.if not, create an alert

*/

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// CREATING USERNAMES
const user = 'Steven Thomas Williams';

// DISPLAY MOVEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
    const type = movement <= 0 ? 'withdrawal' : 'deposit';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${movement}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// DISPLAY BALANCE
const displayCurrentBalance = function (account) {
  const movements = account.movements;
  const balance = movements.reduce(function (prev, curr) {
    return prev + curr;
  }, 0);
  labelBalance.textContent = `${balance} €`;
  currentAccount.balance = balance;
};

// DISPLAY SUMMARIES

const calcDisplaySummary = function (account) {
  const movements = account.movements;
  const interest = account.interestRate / 100;
  const totalDeposits = movements
    .filter(movement => movement > 0)
    .reduce((prev, curr) => prev + curr, 0);

  const totalWithdrawals = movements
    .filter(movement => movement < 0)
    .reduce((prev, curr) => prev + curr, 0);

  const totalInterest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${totalDeposits}€`;
  labelSumOut.textContent = `${Math.abs(totalWithdrawals)}€`;
  labelSumInterest.textContent = `${totalInterest}€`;
};

// FUNCTION CALLS
// calcDisplaySummary(account1);
// displayMovements(account1.movements);
// displayCurrentBalance(account1.movements);

// const movements = [200, 450, -400, 3000, 6520, -130, 70, 1300];

// const getMax = movements.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// });

// // console.log('max', getMax);

// const deposits = movements.filter(function (movement) {
//   return movement > 0;
// });

// const withdrawals = movements.filter(function (movement) {
//   return movement < 0;
// });

// // console.log(deposits, withdrawals);

// const balance = movements.reduce(function (prev, curr) {
//   return prev + curr;
// }, 0);
// console.log(balance);

// UPDATE UI
const updateUI = function (account) {
  displayMovements(account.movements);
  displayCurrentBalance(account);
  calcDisplaySummary(account);
};

const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
};

createUserNames(accounts);
// console.log(account3);

// EVENT HANDLERS
let currentAccount;

//CHECK LOGIN Credentials
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const userName = inputLoginUsername.value;
  const userPin = Number(inputLoginPin.value);
  currentAccount = accounts.find(function (account) {
    return account.username === userName && account.pin === userPin;
  });
  if (currentAccount) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100';

    updateUI(currentAccount);
    //Display movements, balance, and summary

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

// IMPLEMENT TRANSFER FUNCTIONALITY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferTo = inputTransferTo.value;
  const transferAmount = Number(inputTransferAmount.value);
  const accountToFind = accounts.find(function (account) {
    return transferTo === account.username;
  });
  inputTransferTo.value = inputTransferAmount.value = '';

  if (transferAmount < 0 || transferAmount > currentAccount.balance) {
    console.log('Insufficient funds to transfer');
    inputTransferTo.value = inputTransferAmount.value = '';
  } else if (
    accountToFind &&
    accountToFind.username !== currentAccount.username
  ) {
    accountToFind.movements.push(transferAmount);
    currentAccount.movements.push(-transferAmount);
    updateUI(currentAccount);
  }
});

// deposit that is at least 10% greater than requested loan amount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const request = Number(inputLoanAmount.value);
  //
  if (
    request > 0 &&
    currentAccount.movements.some(function (movement) {
      return movement >= request * 1.1;
    })
  ) {
    currentAccount.movements.push(request);
  }
  updateUI(currentAccount);
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeInput = inputCloseUsername.value;
  const closePin = Number(inputClosePin.value);
  if (
    closeInput === currentAccount.username &&
    closePin === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (account) {
      return account.username === closeInput;
    });
    accounts.splice(index, 1);
    console.log('Account deleted');
    containerApp.style.opacity = 0;
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// Video lesson scripts *************************************************************

// const movements = account1.movements;

// const euroToUsd = 1.1;

// const movementsUSD = movements.map(mov => euroToUsd * mov);
// console.log(movementsUSD);

// console.log(movements);

// const movementDescriptions = movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementDescriptions);

// console.log(accounts);
const user2 = accounts.find(
  account => account.owner === 'Steven Thomas Williams'
);
// console.log(user2);

//************CODING CHALLENGES***********************************************
// CODING CHALLENGE #1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaNoCats = dogsJulia.slice(1, -2);
  const allDogs = dogsJuliaNoCats.concat(dogsKate);
  allDogs.forEach(function (dogAge, index) {
    dogAge >= 3
      ? console.log(`Dog ${index + 1} is an adult, and is ${dogAge} years old`)
      : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
  });
};

// CODING CHALLENGE #2
const calcAverageHumanAge = function (dogAges) {
  //array of ages
  const ageInHumanYears = dogAges.map(function (dogAge) {
    return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
  });

  const dogsOverEighteen = ageInHumanYears.filter(function (age) {
    return age > 18;
  });

  const totalAllAges = dogsOverEighteen.reduce(function (prev, curr) {
    return prev + curr;
  });

  return totalAllAges / dogsOverEighteen.length;
};

// CODING CHALLENGE #3
const calcAverageHumanAge2 = dogAges =>
  dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age > 18)
    .reduce((prev, curr, i, arr) => prev + curr / arr.length, 0);

// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

//checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
