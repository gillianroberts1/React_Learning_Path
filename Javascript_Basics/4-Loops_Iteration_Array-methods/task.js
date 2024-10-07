// 1. **`forEach()` Task**
//    Write a function that takes an array of strings and logs each string to the console using `forEach()`.

const strings = ['hello', 'goodbye', 'cheerio', 'see ya'];

strings.forEach(string => {
  console.log(string);
});

// 2. **`some()` Task**
//    Write a function that takes an array of numbers and checks if any number in the array is greater than 100 using `some()`.
const numbers = [1, 33, 76]; //false

const overOneHundred = numbers.some(num => num > 100);
console.log(overOneHundred);

// 3. **`every()` Task**
//    Write a function that takes an array of numbers and checks if all numbers are odd using `every()`.
const numbers2 = [1, 3, 5]; // true
const areOddNumbers = numbers2.every(num => num % 2 != 0);
console.log(areOddNumbers);

// 4. **`find()` Task**
//    Write a function that takes an array of objects representing users and finds the first user whose age is greater than 30 using `find()`.

users = [
  { name: "Gillian", age: 25 },
  { name: "Louise", age: 45 },
  { name: "Carmen", age: 7 },
  { name: "Dot", age: 40 }

];

const user = users.find(user => user.age > 30);
console.log(user);

// 5. **`sort()` Task**
//    Write a function that takes an array of numbers and returns the array sorted in ascending order using `sort()`.
const numbers3 = [4,6,2,44,76,12]

const sortedNumbers = numbers3.sort((a, b) => a - b)
console.log(sortedNumbers);
