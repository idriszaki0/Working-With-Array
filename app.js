'use strict';

// Bankist app

// Data
const account1 = {
  owner: 'Idris Zaki',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 2222,
};

const account2 = {
  owner: 'Norman Tukiman',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: "Bustamam",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Alimu Bin",
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
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__input--user')
const btnTransfer = document.querySelector('form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
  movements.forEach(function(mov, i) {
    
  })
}
displayMovements(account1.movements)




// ////////////////////////////////////////////////////////////////////////////////////
// Lectures

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['MYR', 'Malaysia Ringgit'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4))
// console.log(arr.slice(-2))
// console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);


// SPLICE
// console.log(arr.splice(2));
arr.splice(-1)
console.log(arr)
arr.splice(1, 2);
console.log(arr);

// reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse())
console.log(arr2);

// Concat
const letter = arr.concat(arr2)
console.log(letter)
console.log(...arr, ...arr2)

// JOIN
console.log(letter.join(' - '))

// ///////////////////////////////////////////
const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of
// for (const [i, movement] of movementss.entries()) { //[item, index]
//   if(movement > 0) {
//     console.log(`Mpvement ${i + 1}: You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// }

// forEach method
console.log('----FOREACH----')
movementss.forEach(function(movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)

// forEach with MAPS and SETS
// MAPS
const currencies1 = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["MYR", "Malaysia Ringgit"],
]);

currencies1.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`)
})

// SET 
const currenciesUnique = new Set(['USD', 'MYR', 'GBP', 'EUR', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`)
})

// Data transformations: MAP, FIlter, REDUCE
// Map methods
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// })

const movementsUSD = movements.map(mov => mov * eurToUsd)
console.log(movements)
console.log(movementsUSD)

const movementsUSDfor = []
for (const mov of movements) movementsUSD.push(mov * eurToUsd)
console.log(movementsUSD)

const movementsDescription = movements.map((mov, i) => 
  `Movement ${ i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`
  // } else {
  //   return`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
  // }
)
console.log(movementsDescription)

// computing usernames
const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  })
}
createUsernames(accounts)
console.log(accounts)

// Filter methods
const deposits = movements.filter(function(mov) {
  return mov > 0;
})
console.log(movements)
console.log(deposits)

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov)
console.log(depositsFor)

const withdrawal = movements.filter(function(mov) {
  return mov < 0;
})
console.log(withdrawal)
// const withdrawal = movements.filter(mov => mov < 0)
const withdrawalFor = [];
for (const mov of movements) if (mov < 0) withdrawalFor.push(mov)
console.log(withdrawalFor)

// reduce methods

console.log(movements)

// accumulator is like a snowball
const balance = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance)

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2)

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;

  } else {
    return mov
  }
}, movements[0])

console.log(max)

// magic of chaining methods
console.log(movements)
// PIPELINE
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map((mov, i , arr) => {
  // console.log(arr);
  return mov * eurToUsd
})
// .map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0)

console.log(totalDepositsUSD)

// the find method
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log(firstWithdrawal)

console.log(accounts)

const account = accounts.find(acc => acc.owner === 'Idris Zaki')
console.log(account)

// some and every method
console.log(movements);
// Equality
console.log(movements.includes(-130))

// Condition
console.log(movements.some(mov => mov === -130))

const anyDeposits = movements.some(mov =>  mov > 1500)
console.log(anyDeposits)

// Every method
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit))
console.log(movements.every(deposit));
console.log(account1.movements.filter(deposit));

// flat and flatMap
const arry = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(arry.flat())

const arryDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arryDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements)
console.log(accountMovements)

const allMovements = accountMovements.flat()
console.log(allMovements)

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
console.log(overalBalance)

// flat
const overalBalances = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log(overalBalances)

// flatMap
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
console.log(overalBalance2)

// Sorting array
const owners = ['Idris', 'Zaki', 'Droman', 'Drehen'];
console.log(owners.sort());

// Number
console.log(movements)
// console.log(movements.sort())

// return < 0, a, b (keep order)
// return > 0, b, a (switch order)
// Ascending
// movements.sort((a, b) => {
//   if(a > b) 
//   return 1;
//   if(b > a)
//   return -1
// })
movements.sort((a, b) => a - b)
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b- a);
console.log(movements)

// more ways of creating and filling array
const arrs = [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7)
console.log(x)
console.log(x.map(() => 5))
console.log(x.fill(1, 3, 5))
console.log(x.fill(1))
console.log(arrs.fill(23, 2, 6))

// array.from
const y = Array.from({length: 7}, () => 1)
console.log(y)

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z)


labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace("€", '')));
  console.log(movementsUI);
// same 
  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
  console.log(movementsUI2)
})