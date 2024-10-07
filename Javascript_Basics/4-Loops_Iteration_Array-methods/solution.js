const logStrings = (strings) => {
  strings.forEach((string) => {
    console.log(string);
  });
}

console.log(logStrings(['Hello', 'There', 'Javascript']));

const checkForNumberGreaterThan100 = (numbers) => {
  return numbers.some((number) => number > 100);
}

console.log(checkForNumberGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(checkForNumberGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 101]));

const checkIfAllNumbersAreOdd = (numbers) => {
  return numbers.every((number) => number % 2 !== 0);
}

console.log(checkIfAllNumbersAreOdd([1, 3, 5, 7, 9]));
console.log(checkIfAllNumbersAreOdd([1, 3, 5, 7, 9, 10]));

const findFirstUserOver30 = (users) => {
  return users.find((user) => user.age > 30);
}

console.log(findFirstUserOver30([{ name: 'Dot', age: 25 }, { name: 'Carmen', age: 35 }, { name: 'Lousie', age: 45 }]));

const sortNumbersAscending = (numbers) => {
  return numbers.sort((a, b) => a - b);
}

console.log(sortNumbersAscending([5, 3, 8, 1, 2, 9, 4, 6, 7]));


