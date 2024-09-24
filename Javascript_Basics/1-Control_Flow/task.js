// run this file using node task.js in the terminal

// Task 1 If-Else Statement: Write a function called checkAge that takes an age parameter and prints:
// "You are a minor." if the age is less than 18,
// "You are an adult." if the age is 18 or older.

function checkAge(age) {
  // Write your code here

  if (age < 18) {
    console.log('You are a minor');
  } else {
    console.log('You are an adult');
  }
}

console.log(checkAge(16)); // Output: "You are a minor."
console.log(checkAge(20)); // Output: "You are an adult."

// Check to see if the array contains weekdays
// "This is a weekday" if the day is during the week
// "This is a weekend" if the day is not included in the array of weekdays

function weekday(day) {
  const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  if (weekdays.includes(day)) {
    console.log('This is a weekday');
  } else {
    console.log('This is a weekend');
  }
}

console.log(weekday('saturday')); // output - "This is a weekend"
console.log(weekday('tuesday')); // Output "This is a weekday"

// check to see if your tel no valid by being 11 digits long
// "Your tel no is not valid" if it is more or less than 11 digits
// "Your tel no is valid" if it is exactly 11 digits long

function checkValidTelNo(telno) {
  if (telno.length == 11) {
    console.log('Your tel no is Valid');
  } else {
    console.log('Your tel no is not valid');
  }
}

console.log(checkValidTelNo('07825959795')); // Output "Your tel no is valid"
console.log(checkValidTelNo('0876')); // Output "Your tel no is not valid"
console.log(checkValidTelNo('08763355442222')); // Output "Your tel no is not valid"

// check to see if a name contains the letter C
// "This name does not contain a C" if there is no C in the name
// "This name does contain a C" if there is a C in the name

function checkForC(name) {
  if (name.includes('c')) {
    console.log('This name does include a c');
  } else {
    console.log('This name does not include a c');
  }
}

console.log(checkForC('carmen')); // Output "This name does include a c"
console.log(checkForC('gillian')); // Output "This name does not include a c"

// check to see if a country starts with the letter S
// "this country starts with a S"
// "this country does not start with a letter S"

function startsWithS(country) {
  if (country.startsWith("S")) {
    console.log('This country starts with S');
  } else {
    console.log('This country does not start with S');
  }
}

console.log(startsWithS("Scotland"));// Output "This country does start with S"
console.log(startsWithS("England"));// Output "This country does not start with S"



// Task 2 Ternary Operator: Create a function named getDiscount that takes a customerType parameter and returns:

// 20 if customerType is "member",
// 5 if customerType is something else.

function getDiscount(customerType) {
  // Write your code here
}

console.log(getDiscount('member')); // Output: 20
console.log(getDiscount('guest')); // Output: 5

// Task 3 Short-Circuit Evaluation: Create a function named displayMessage that takes a boolean parameter isLoggedIn and prints:

// "Welcome back!" if isLoggedIn is true,
// If isLoggedIn is false, it does nothing.

function displayMessage(isLoggedIn) {
  // Write your code here
}

console.log(displayMessage(true)); // Output: "Welcome back!"
console.log(displayMessage(false)); // Output: nothing

// Task 4 Switch Statement: Create a function named getDay that takes a number parameter day and returns the day of the week in words. For example, if day is 1, the function should return "Monday".

function getDay(day) {
  // Write your code here
}

console.log(getDay(1)); // Output: "Monday"
console.log(getDay(4)); // Output: "Thursday"
console.log(getDay(7)); // Output: "Sunday"
