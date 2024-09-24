# Functions
[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

We use functions to encapsulate logic and a means of code reuse. In react all components are just javascript functions that return some output printed to the UI.

**Function Components (people also call these Functional Components)**
Whether you create components like this:
```js
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```
or like this

```js
const Greeting = ({name}) => (
  <h1>Hello, {name}!</h1>
)
```

Is just personal preference. However you would follow the pattern of existing codebases.

There are 3 ways to declare functions in javacript:
- `function declaration` defines a named function using the function keyword. It can be called before it is defined due to [hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
```js
function greet(name) {
  return `Hello, ${name}!`;
}
```
- `function expression` involves defining a function and assigning it to a variable. This method can be written using the function keyword but is not hoisted like function declarations. Its not that common to see functions declared like this

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};
```
- `arrow function` a shorter syntax to define a function. It does not have its own [this context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) and is always an expression
```js
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Shorter version for single expressions
const greet = name => `Hello, ${name}!`;
```

**Event Handler functions**
```js
function Button() {
  function handleClick() {
    navigate('/new-page');
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}
```
**Utility Functions**

You can define utility functions inside a component to perform specific tasks but often these would live outside components in a utils file/folder and imported in. Doing it that way makes the functions easier to test and resuable to use in multiple places.

Sometimes though you will see them local to components like this:

```js
function Temperature({ celsius }) {
  function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  return (
    <div>
      <p>{celsius}°C is equal to {toFahrenheit(celsius)}°F</p>
    </div>
  );
}
```

**Function Parameters**

When we declare functions the values passed between the parenthesis are called parameters and when the function is evoked they are called arguments.

Here we refer to a and b as parameters
```js
const add = (a, b) => a + b
```

Here we refer to 1 and 2 as arguments
```js
add(1, 2)
```

We can pass default values to functions, which means if when its evoked the argument is not passed the default value is used.

**Default Function Parameters**

Default function parameters allow us to assign default values to parameters in case no argument is provided when the function is invoked. Here's an example:

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("John")); // Output: Hello, John!
```

In the above example, if no argument is passed to the `greet` function, the default value of `"Guest"` will be used for the `name` parameter.

**Rest Parameters**

Rest parameters allow us to represent an indefinite number of arguments as an array. This is useful when we want to pass multiple values to a function without knowing the exact number of arguments. Here's an example:

```js
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

In the above example, the `sum` function accepts any number of arguments and calculates their sum using a `for...of` loop.

**Destructuring Parameters**

Destructuring parameters allow us to extract values from objects or arrays and assign them to variables. This can make our code more concise and readable and you see it a lot in react where we destructure props passed into a component. Here's an example:

```js
function printUser({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const user = { name: "John", age: 30 };
printUser(user);
```

In the above example, the `printUser` function expects an object with `name` and `age` properties. Instead of accessing these properties using dot notation, we can destructure them directly in the function parameter.
