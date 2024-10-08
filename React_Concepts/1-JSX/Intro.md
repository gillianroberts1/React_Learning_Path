# JSX (JavaScript XML)

[JSX](https://react.dev/learn/writing-markup-with-jsx) stands for **JavaScript XML**, and it’s the syntax extension used in React to describe what the UI should look like. JSX allows you to write HTML-like code directly in your JavaScript, which React then compiles into JavaScript under the hood.

## What is JSX?

JSX is a syntax extension for JavaScript, allowing you to mix HTML-like code with JavaScript logic. Although it looks like HTML, JSX is not exactly HTML. It’s JavaScript code that is transformed into React elements.

**JSX Example**:

```jsx
const element = <h1>Hello, world!</h1>;
```

This JSX code is transformed into the following JavaScript code by React:

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

`React.createElement` is comprised like

```js
React.createElement(
  type,        // The type of element (e.g., 'h1')
  props,       // An object containing the element's props (null if no props)
  ...children  // The child elements or content inside the element
);
```

### Embedding JavaScript Expressions

You can embed JavaScript expressions within JSX using curly braces `{}`.

```jsx
const name = 'Alice';
const element = <h1>Hello, {name}!</h1>;
```

In this example, `{name}` is a JavaScript expression that will be evaluated, and the value will be injected into the JSX.

You can also use more complex JavaScript expressions:

```jsx
const getGreeting = (name) => `Hello, ${name}!`;
const element = <h1>{getGreeting('Alice')}</h1>;
```

### JSX Is Not HTML

Although JSX looks similar to HTML, there are a few key differences:

1. **className instead of class**:
   In HTML, you use the `class` attribute to define CSS classes. In JSX, since `class` is a reserved keyword in JavaScript, you use `className` instead.

   ```jsx
   const element = <div className="container"></div>;
   ```

2. **CamelCase for Attributes**:
   HTML attributes like `onclick`, `onchange`, and `tabindex` are written in camelCase in JSX: `onClick`, `onChange`, `tabIndex`.

   ```jsx
   const button = <button onClick={handleClick}>Click Me</button>;
   ```

3. **Self-Closing Tags**:
   In JSX, elements that don't have children must be self-closed, just like in XML.

   ```jsx
   const image = <img src="image.jpg" alt="Description" />;
   ```

### JSX with Conditional Rendering

You can conditionally render elements in JSX by embedding JavaScript conditional logic inside the curly braces.

#### Using Ternary Operator:

```jsx
const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
  </div>
);
```

#### Short-Circuit Evaluation:

```jsx
const data = [{title: 'something'}];
const element = (
  <div>
    {data && <p>{data.title}</p>}
  </div>
);
```

### JSX with Loops

You can render lists in JSX by using JavaScript array methods like `map()`.

```jsx
const fruits = ['Apple', 'Banana', 'Cherry'];
const fruitList = (
  <ul>
    {fruits.map(fruit => (
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
);
```

In this example, `map()` is used to iterate over the `fruits` array and generate a list item for each fruit.

### JSX Children

JSX allows you to nest elements within other elements.

```jsx
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is a paragraph inside a div.</p>
  </div>
);
```

Elements nested inside other elements are referred to as **children**. In React, the children are passed as a special prop called `children`.

```js
const Person = ({person, children}) => (
  <div>
    <p>{person.name}</p>
    {children}
  </div>
)
```
`children` can be absolutley anything as long as its JSX

### JavaScript Expressions and Statements

You can embed **JavaScript expressions** inside JSX, but not statements like loops or `if` conditions. For complex logic, you can move the statements outside the JSX and use the result inside the JSX.

**Valid (JavaScript expression)**:
```jsx
const total = 5 + 5;
const element = <p>Total: {total}</p>;
```

**Invalid (JavaScript statement)**:
```jsx
const element = <p>Total: {if (true) { return 5 + 5 }}</p>; // This is invalid
```

To use statements like `if` or `for`, place them outside the JSX block:

```jsx
let content;
if (isLoggedIn) {
  content = <h1>Welcome back!</h1>;
} else {
  content = <h1>Please sign in.</h1>;
}

const element = <div>{content}</div>;
```
