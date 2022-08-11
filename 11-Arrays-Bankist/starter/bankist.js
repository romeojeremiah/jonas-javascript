"use strict";
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
let currentAccount;

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//-----display footer summaries
const calcDisplaySummary = (account) => {
    const totalIn = account.movements
        .filter((mov) => mov > 0)
        .reduce((acc, curr) => acc + curr, 0);
    labelSumIn.textContent = `$${totalIn}`;

    const totalOut = account.movements
        .filter((mov) => mov < 0)
        .reduce((acc, curr) => acc + curr, 0);
    labelSumOut.textContent = `$${Math.abs(totalOut)}`;

    const totalInterest = account.movements
        .filter((mov) => mov > 0)
        .map((interest) => (interest * account.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2);
    labelSumInterest.textContent = `$${totalInterest}`;
};

//----display total balance
const calcDisplayBalance = (account) => {
    const balance = account.movements.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    account.balance = balance;
    labelBalance.textContent = `$${balance}`;
};

// -----create usernames ----

const createUserNames = (accounts) => {
    accounts.forEach((account) => {
        const { owner } = account;

        const userName = owner.split(" ");
        const initials = userName
            .map((part) => {
                return `${part[0].toLowerCase()}`;
            })
            .join("");
        account.userName = initials;
    });
};

createUserNames(accounts);

// ---- display movement prices

const displayMovements = (account) => {
    containerMovements.innerHTML = "";
    const { movements } = account;
    movements.forEach((movement, i) => {
        const type = movement > 0 ? "deposit" : "withdrawal";
        const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">
                        ${i + 1} ${type}
                    </div>
                    <div class="movements__date">3 days ago</div>
                    <div class="movements__value">${movement}</div>
                </div>`;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

//-----login functionality
const findAccount = (accounts) => {
    return accounts.find((acc) => {
        return (
            acc.userName === inputLoginUsername.value.toLowerCase() &&
            acc.pin === Number(inputLoginPin.value)
        );
    });
};

const updateUI = (account) => {
    displayMovements(account);
    calcDisplayBalance(account);
    calcDisplaySummary(account);
};

// ---- event listeners ----

/// LOGIN
btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    currentAccount = findAccount(accounts);

    if (currentAccount) {
        //Display Welcome Message
        labelWelcome.textContent = `Welcome, ${currentAccount.owner}!`;
        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        updateUI(currentAccount);
    } else {
        labelWelcome.textContent = `No user found`;
    }
});

/// TRANSFER MONEY
btnTransfer.addEventListener("click", (e) => {
    e.preventDefault();
    const transferAmount = Number(inputTransferAmount.value);
    //find transfer to account
    const transferToAccount = accounts.find((account) => {
        return account.userName === inputTransferTo.value;
    });

    if (
        currentAccount.balance > transferAmount &&
        transferAmount > 0 &&
        transferToAccount &&
        transferToAccount?.userName !== currentAccount.userName
    ) {
        transferToAccount.movements.push(transferAmount);
        currentAccount.movements.push(-transferAmount);
        updateUI(currentAccount);
    }
    // Clear input fields
    inputTransferTo.value = inputTransferAmount.value = "";
    inputTransferAmount.blur();
});

/// REQUEST LOAN

btnLoan.addEventListener("click", (e) => {
    e.preventDefault();
    const loanRequest = Number(inputLoanAmount.value);
    if (
        currentAccount.movements.some(
            (movement) => movement >= 1.1 * loanRequest
        )
    ) {
        currentAccount.movements.push(loanRequest);
    }
    updateUI(currentAccount);
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
});

/// CLOSE ACCOUNT
btnClose.addEventListener("click", (e) => {
    e.preventDefault();

    if (
        currentAccount.userName === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        console.log("found");
        const index = accounts.findIndex((account) => {
            return account.userName === inputCloseUsername.value;
        });

        accounts.splice(index, 1);
        // containerApp.style.opacity = 0;
    }
});
