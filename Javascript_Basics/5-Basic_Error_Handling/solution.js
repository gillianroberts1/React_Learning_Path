const parseJSON = (str) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}

console.log(parseJSON('{"name": "Dot"}'));
console.log(parseJSON('this is not JSON')); // null

const checkAge = (age) => {
  if (age < 18) {
    throw new Error('You must be at least 18 years old.');
  }
  return 'Access granted';
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.log(error.message);
}

const connectToServer = (isConnected) => {
  try {
    if (!isConnected) {
      throw new Error('Failed to connect to server.');
    }
    return 'Connected';
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Cleaning up connection');
  }
}

connectToServer(false);