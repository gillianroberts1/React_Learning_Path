# React Components

[React Components](https://react.dev/reference/react/Component) are the building blocks of any React application. Components allow you to break down your UI into independent, reusable pieces that can be managed separately. Each component in React is essentially a JavaScript function or class that returns JSX describing the UI.

## Types of Components

There are two primary types of React components:

1. **Functional Components**: The modern way to define components, using functions.
2. **Class Components**: The traditional way to define components, using ES6 classes. While they are still used in some legacy codebases, functional components are the standard for modern React development.

### 1. Functional Components

A **functional component** is a plain JavaScript function that returns JSX. It accepts `props` as an argument and returns JSX to render the UI.

#### Example of a Functional Component:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

With ES6 destructuring, you can simplify it:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

Functional components can be written using arrow functions as well:

```jsx
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
```

### 2. Class Components

A **class component** is defined using a JavaScript class that extends `React.Component`. Class components have more features than functional components, such as state and lifecycle methods. However, with the introduction of React Hooks, functional components can now handle state and lifecycle logic, making class components less common in modern React.

Before react hooks (useState, useEffect) functiontional components could only accept props.

#### Example of a Class Component:

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Props in Components

**Props** (short for "properties") are how you pass data into React components. They are read-only, which means that components cannot modify their own props. Props are passed to components via attributes, similar to HTML attributes.

#### Example of Passing Props:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="Alice" />
```

Here, the `Greeting` component is receiving a `name` prop and using it to display `"Hello, Alice!"`.

### Default Props

You can define **default props** for a component in case no prop is passed similar to how we can pass default arguments in JavaScript functions.

#### Example:

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// If no name is provided
<Greeting />; // Output: Hello, Guest!

// If name is provided
<Greeting name="Louise" />; // Output: Hello, Louise!
```

### Children Prop

In React, `props.children` is a special prop that is used to pass **nested JSX elements** to a component. It allows a component to wrap other components or elements.

#### Example of Using `children`:

```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}

<Container>
  <h1>This is a title</h1>
  <p>This is some content inside the container.</p>
</Container>;
```

In this example, the `Container` component renders any children that are passed between its opening and closing tags.

### Components in Components

React encourages you to build complex UIs by **composing components**. This means you can use one component inside another component to build more complex structures.

#### Example of Composing Components:

```jsx
function App() {
  return (
    <div>
      <Greeting name="Louise" />
      <Greeting name="Carmen" />
    </div>
  );
}
```

Here, the `App` component renders two `Greeting` components with different props.

### Conditional Rendering in Components

React components can conditionally render elements based on certain conditions using JavaScript logic like `if-else`, ternary operators, or logical `&&` operators.

#### Example of Conditional Rendering:

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

### Key Differences Between Functional and Class Components

- **Functional Components**: These are stateless by default but can manage state with React Hooks (`useState`, `useEffect`, etc.). They are more concise and easier to test.
- **Class Components**: These are stateful and come with lifecycle methods like `componentDidMount` and `componentDidUpdate`. However, Hooks provide similar functionality in functional components.

In modern React development, **functional components** are the preferred choice because they are simpler and more powerful with Hooks.
