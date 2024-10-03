const getEvenNumbers = (numbers) => {
  return numbers.filter(number => number % 2 === 0);
}

const greetUsers = (names) => {
  return names.map(name => `Hello, ${name}!`);
}

const getUserDetails = (user) => {
  const { name, age } = user;
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

const logBookDetails = (book) => {
  const { title, author, year } = book;
  console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
}