'use strict';

// data1
const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1)
  dogsJuliaCorrected.splice(-2)
  console.log(dogsJuliaCorrected)

  const dogs = dogsJuliaCorrected.concat(dogsKate)
  console.log(dogs)

  dogs.forEach(function(dog, i) {
    if(dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old `)
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`)
    }
  })
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// CC#2
const dogAge = [5, 2, 4, 1, 15, 8, 3]
// console.log(humanAge)


const calcAverageHumanAge= function(ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAge.filter(age => age >= 18)
  // console.log(humanAge)
  // console.log(adults)
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
// same above
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0)

  return average
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2.toFixed(0))

// CC#3
const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const avg3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg3, avg4)

// CC#4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Micheal"] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
console.log(dogs)

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`)

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)
// .flat();
console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
// .flat();
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join( ' and  ')}'s dogs eat too much`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`)

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood))

// 6.
// current > (recomended * .90) && current <  (recommeded * 1.10)
const checkEatingOkay = dog => dog.curFood * 0.9 && dog.curFood < dog.recFood * 1.1

console.log(dogs.some(checkEatingOkay));

// 7. 
console.log(dogs.filter(checkEatingOkay))

// 8.
// sort it by recommeded food portion in an ascending order
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsCopy)