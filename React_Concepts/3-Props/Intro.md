# Props in React

In React, **props** (short for "properties") are a fundamental way to pass data from one component to another. Props allow components to be **dynamic and reusable** by accepting input data, which is then used to render different outputs. Props are read-only and cannot be modified by the component that receives them.

## What are Props?

Props are similar to function parameters. When you pass data to a component, it can be accessed through the `props` object. This allows you to customise how each instance of a component behaves or looks.

### Example of Props:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

In this example, the `Greeting` component receives a prop called `name`. When you use the component, you pass the prop as an attribute:

```jsx
<Greeting name="Louise" />  // Output: Hello, Louise!
<Greeting name="Carmen" />    // Output: Hello, Carmen!
```

### Props Are Read-Only

Props are immutable, meaning that once they are passed to a component, the component **cannot modify** them. Instead, components should use the props as they are or pass them down to other components.

### Destructuring Props

Instead of accessing props through `props.propertyName`, you can use **destructuring** to simplify the syntax.

#### Example of Destructuring Props:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

This is equivalent to the earlier example but is cleaner and more concise.

### Passing Multiple Props

You can pass multiple props to a component. Each prop becomes an individual key in the `props` object.

```jsx
function UserProfile({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}
```

Usage:

```jsx
<UserProfile name="Carmen" age={7} />
// Output:
// <h1>Carmen</h1>
// <p>Age: 7</p>
```

### Default Props

You can define **default props** for a component, which will be used if no value is provided for a prop.

#### Example of Default Props:

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting />  // Output: Hello, Guest!
<Greeting name="Louise" />  // Output: Hello, Louise!
```

### Props with Functions

You can pass functions as props to allow a child component to trigger actions or send data back to a parent component.

#### Example of Passing Functions as Props:

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <Button onClick={handleClick} />;
}
```

In this example, the `Button` component receives an `onClick` prop, which is a function passed from the parent component (`App`). When the button is clicked, it triggers the function in the parent.

### The `children` Prop

`props.children` is a special prop that represents the content nested between the opening and closing tags of a component.

#### Example of `children` Prop:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Title</h2>
  <p>This is some card content.</p>
</Card>
```

Here, the `Card` component wraps any content passed as `children`, making it reusable for different layouts.

### Spread Operator with Props

You can use the **spread operator** (`...`) to pass all the properties of an object as props to a component. This is particularly useful when passing multiple props from a single object.

#### Example of Using Spread Operator:

```jsx
const user = { name: "Carmen", age: 7 };

function UserProfile({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<UserProfile {...user} />
```

The spread operator `...user` passes the `name` and `age` properties from the `user` object as individual props to the `UserProfile` component.

### Prop Types (Prop Validation)

When working with complex components, you can validate the types of props passed to your component using `prop-types`. This helps ensure that the correct data types are passed.

This was used a lot before TypeScript became popular but you are less likely to see it now as TypeScript does the prop validaion.

#### Example of Prop Types:

First, install the `prop-types` package:

```bash
npm install prop-types
```

Then, you can define prop types for your component:

```jsx
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return <h1>Hello, {name}. You are {age} years old.</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
```

With `PropTypes`, if the wrong data type is passed or a required prop is missing, React will issue a warning in the console.
