# Arrays and Objects

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) are core building blocks of JavaScript. They allow us to store and manage collections of data in a structured way. In React, we often use arrays and objects to represent state, props, or collections of components.

### Arrays
An array is an ordered collection of values, where each value is indexed by a number starting from `0`. Arrays can contain any type of value, including other arrays or objects.

```js
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Output: Apple
```

Arrays are frequently used in React for rendering lists of components.

**Example: Rendering an Array of Items in React**
```js
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### Common Array Methods
Javascript as a lot of inbuilt methods for calling on arrays but these 3 are the most common:

- **`map()`**: Creates a new array by applying a function to each element.
    ```js
    const numbers = [1, 2, 3];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // Output: [2, 4, 6]
    ```

- **`filter()`**: Creates a new array with all elements that pass a test.
    ```js
    const numbers = [1, 2, 3, 4];
    const evens = numbers.filter(num => num % 2 === 0);
    console.log(evens); // Output: [2, 4]
    ```

- **`reduce()`**: Reduces the array to a single value by executing a reducer function on each element.
    ```js
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((total, num) => total + num, 0);
    console.log(sum); // Output: 10
    ```

### Rest Parameters with Arrays
Rest parameters can be used with arrays to gather multiple values into an array.

```js
function addNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(addNumbers(1, 2, 3)); // Output: 6
```

### Objects
An object is a collection of key-value pairs, where each key (property) is unique, and the value can be any data type (string, number, function, etc.).

```js
const person = {
  name: 'Louise',
  age: 36,
  isStudent: false
};

console.log(person.name); // Output: Louise
```

Objects are frequently used in React to represent complex data structures, such as the state or props of a component.

**Example: Using Objects in a React Component**
```js
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Status: {user.isStudent ? 'Student' : 'Not a student'}</p>
    </div>
  );
}

const user = { name: 'Carmen', age: 25, isStudent: true };
<UserProfile user={user} />;
```

### Object Methods

- **Dot Notation**: Access object properties using a dot (`.`).
    ```js
    console.log(person.name); // Output: John
    ```

- **Bracket Notation**: Access object properties using square brackets (`[]`), useful for dynamic property names or keys which are strings.
    ```js
    const key = 'age';
    console.log(person[key]); // Output: 30
    ```

### Destructuring Arrays and Objects

**Array Destructuring** allows us to unpack values from an array into individual variables.
```js
const [first, second] = ['Apple', 'Banana', 'Cherry'];
console.log(first); // Output: Apple
console.log(second); // Output: Banana
```
This is whats happening on the react `useState` hook where the return value from useState is an array and we destructure it to pull out the getter and setter

```js
const [getValue, setValue] = useState()

```

**Object Destructuring** allows us to extract properties from an object and assign them to variables.
```js
const { name, age } = person;
console.log(name); // Output: John
console.log(age);  // Output: 30
```

In React, destructuring is commonly used to unpack props inside functional components.

**Example: Destructuring Props in React**
```js
function Greeting({ name, age }) {
  return <h1>Hello, {name}, you are {age} years old!</h1>;
}

const user = { name: 'Dot', age: 25 };
<Greeting {...user} />;
```

### Shorthand Properties
If the variable names match the object property names, you can use shorthand syntax to define objects.
```js
const name = 'Louise';
const age = 30;
const person = { name, age }; // Equivalent to { name: name, age: age }
```

### Spread Operator
The **spread operator (`...`)** can be used to spread the elements of an array or object into another array or object.

**Spread in Arrays**:
```js
const fruits = ['Apple', 'Banana'];
const moreFruits = [...fruits, 'Cherry'];
console.log(moreFruits); // Output: ['Apple', 'Banana', 'Cherry']
```

**Spread in Objects**:
```js
const person = { name: 'Louise', age: 30 };
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // Output: { name: 'Louise', age: 31 }
```
