// Task 1 Function Declaration: Write a function called calculateRectangleArea that takes two parameters, width and height, and returns the area of a rectangle.

// Write your code here

// console.log(calculateRectangleArea(3, 4)); // Output: 12


// Task 2 Function Expression: Create a function expression named isEven that takes a single parameter, number, and returns true if the number is even, and false if it's odd.

// Write your code here

// console.log(isEven(4)); // Output: true
// console.log(isEven(5)); // Output: false

// Task 3 Arrow Function: Write an arrow function named multiply that takes two parameters, a and b, and returns their product.

// Write your code here

// console.log(multiply(3, 4)); // Output: 12

// Task 4 Default Parameters:  Create a function named calculateTotal that takes two parameters:

// price (number): The price of an item.
// taxRate (number, default value = 0.05): The tax rate to apply to the price.
// The function should return the total amount by applying the tax rate to the price.

const calculateTotal = (price, taxRate = 0.05) => {
  // Write your code here
}

// console.log(calculateTotal(20)); // Output: 21
// console.log(calculateTotal(20, 0.1)); // Output: 22

// Task 5 Rest Parameter: Create a function named concatenateStrings that takes any number of string arguments and returns a single string by concatenating all the provided strings with a space in between.

const concatenateStrings = (...strings) =>{
  // Write your code here
}

// console.log(concatenateStrings("Hello", "world!")); // Output: "Hello world!"
// console.log(concatenateStrings("I", "love", "Louise!")); // Output: "I love Louise!"