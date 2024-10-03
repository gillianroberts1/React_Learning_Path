# Basic Error Handling

Error handling to gracefully manage errors and unexpected situations that may occur during the execution of your code, such as network failures, invalid user input, or code bugs. In JavaScript, we handle errors primarily using `try...catch` blocks.

Normally when something falls into a catch block we log an error to our monitoring service.

### `try...catch` for Error Handling

The `try...catch` statement allows you to write code that may throw an error inside the `try` block, and handle any errors that occur in the `catch` block. This prevents your code from breaking unexpectedly and lets you control the flow of your program.

#### Example of `try...catch`:

```js
try {
  const user = JSON.parse('{"name": "Alice"');
  console.log(user.name);
} catch (error) {
  console.log('There was an error parsing the JSON:', error.message);
}
```

In this example, the JSON string is malformed and missing a closing bracket. When the error is thrown inside the `try` block, the `catch` block catches the error and handles it by logging a message, preventing the program from crashing.

### `finally` Block

The `finally` block can be added to a `try...catch` statement. Code inside the `finally` block will always run, regardless of whether an error was caught or not. This is useful for cleaning up resources like closing files, clearing timers, or releasing connections.

#### Example of `try...catch...finally`:

```js
try {
  const data = fetchData();
  console.log('Data fetched:', data);
} catch (error) {
  console.log('Error fetching data:', error.message);
} finally {
  console.log('Cleaning up resources...');
}
```

In this example, whether or not an error occurs during data fetching, the `finally` block will still execute.

### Throwing Custom Errors

You can also manually throw custom errors using the `throw` keyword. This is useful when you want to raise an error under specific conditions.

#### Example of Throwing Custom Errors:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log('Caught an error:', error.message);
}
```

In this example, we throw a custom error if someone attempts to divide by zero. The `catch` block catches the error and handles it.

### Error Object

The `catch` block receives an `error` object, which provides useful information about the error. The most commonly used properties are:

- `message`: A string describing the error.
- `name`: The type of error (e.g., `TypeError`, `ReferenceError`).
- `stack`: A stack trace that shows where the error occurred.

```js
try {
  // Some code that throws an error
} catch (error) {
  console.log('Error name:', error.name);
  console.log('Error message:', error.message);
  console.log('Error stack:', error.stack);
}
```
