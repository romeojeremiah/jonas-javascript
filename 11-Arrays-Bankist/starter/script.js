'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// ARRAY PRACTICE
// How much in total deposited in the bank
// 1. Make one giant array

const totalMovements = [];
accounts.forEach(function (account) {
  totalMovements.push(account.movements);
});
const totalMoves = totalMovements.flat(1);
const totalDeposits = totalMoves
  .map(function (move) {
    return move;
  })
  .filter(x => x > 0)
  .reduce((prev, curr) => prev + curr, 0);
console.log('totalDepsoits', totalDeposits);

// Deposits in the bank with at least $1000

const totalBankDeposits = accounts
  .flatMap(account => account.movements)
  .filter(account => account >= 1000).length;
console.log(totalBankDeposits);

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

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const request = Number(inputLoanAmount.value);
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

// CODING CHALLENGE #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// #1
dogs.forEach(function (dog) {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

// #2
const dogsSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    dogsSarah.curFood > dogsSarah.recommendedFood ? 'much' : 'litte'
  }!`
);

// #3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(owner => owner.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(owner => owner.owners);

console.log(ownersEatTooLittle);

// #4
const tooMuch = ownersEatTooMuch.join(' and ');
console.log(`${tooMuch}'s dogs eats too much!`);
const tooLittle = ownersEatTooLittle.join(' and ');
console.log(`${tooLittle}'s dogs eats too little!`);

// #5
const isJustRight = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(isJustRight);

// #6
const isOk = dogs.some(
  dog =>
    dog.curFood < dog.recommendedFood * 1.1 &&
    dog.curFood > dog.recommendedFood * 0.9
);
console.log(isOk);

// #7
const eatingOk = dogs.filter(
  dog =>
    dog.curFood < dog.recommendedFood * 1.1 &&
    dog.curFood > dog.recommendedFood * 0.9
);
console.log(eatingOk);

// #8
const dogs2 = Array.from(dogs);
console.log(dogs);
dogs2.sort(function (a, b) {
  return a.recommendedFood - b.recommendedFood;
});
console.log(dogs2);
