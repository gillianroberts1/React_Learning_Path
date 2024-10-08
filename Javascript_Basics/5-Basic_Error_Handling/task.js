// 1. **Basic `try...catch` Task**
//    Write a function called `parseJSON` that takes a string and attempts to parse it as JSON. If it fails, catch the error and return `null`.

const parseJSON = str => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return null;
  }
};

console.log(parseJSON('{"name": "Gillian"'));
console.log(parseJSON('{ name: "Louise" }'));
console.log(parseJSON('this is not JSON'));

// 2. **Throwing Custom Errors Task**
//    Write a function called `checkAge` that takes a number representing a person's age. If the age is less than 18, throw an error with the message `"You must be at least 18 years old."`. If the age is valid, return a message saying `"Access granted"`.

const checkAge = age => {
  if (age < 18) {
    throw new Error('You must be at least 18 years old');
  }
  return 'Access Granted';
};

try {
  console.log(checkAge(19));
} catch (error) {
  console.log(error.message);
}
// 3. **Using `finally` Task**
//    Write a function that attempts to connect to a server (simulate this with a boolean flag). If the connection is successful, return `"Connected"`. If the connection fails, throw an error. Ensure that the `finally` block always logs `"Cleaning up connection"`.

const connectToServer = (isConnected) => {
  try {
    if (!isConnected) {
      throw new Error('Failed to connect to server');
    }
    return 'Connected';
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Cleaning up connection');
  }
};
connectToServer(false);
