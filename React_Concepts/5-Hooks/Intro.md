# React Hooks

[React Hooks](https://react.dev/reference/react/hooks) are a feature introduced in React 16.8 that allow you to use **state** and other React features in functional components, which were previously only available in class components. Hooks simplify how you write components and manage state and side effects, making functional components the preferred way to build React apps.

## Why Hooks?

Before hooks, **functional components** were stateless and could not manage lifecycle events like mounting, updating, and unmounting. If you needed state or lifecycle methods, you had to use **class components**. Hooks solve this problem by providing a way to use state and lifecycle features inside **functional components**.

The two most commonly used hooks are:
- `useState`: For managing local state in a component.
- `useEffect`: For managing side effects like data fetching, subscriptions, and timers.

## 1. `useState` Hook

The `useState` hook allows you to add local state to functional components. When you call `useState`, you get two things:
- The current state value.
- A function to update the state.

#### Syntax of `useState`:

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: The current state value.
- `setState`: A function to update the state.
- `initialValue`: The initial value of the state.

### Example of `useState`:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example:
- `useState(0)` initializes the `count` state variable with a value of `0`.
- `setCount(count + 1)` updates the state whenever the button is clicked.

### Multiple `useState` Hooks

You can use multiple `useState` hooks within a single component to manage different pieces of state.

```jsx
function UserProfile() {
  const [name, setName] = useState('Carmen');
  const [age, setAge] = useState(7);

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}
```

## 2. `useEffect` Hook

The `useEffect` hook is used to **perform side effects** in your components. Side effects include things like:
- Fetching data from an API.
- Subscribing to services (e.g., WebSocket).
- Manually manipulating the DOM.
- Setting up timers.

`useEffect` runs after the component renders and can optionally clean up after itself when the component unmounts.

#### Syntax of `useEffect`:

```jsx
useEffect(() => {
  // Side effect code (e.g., fetching data, setting timers)

  return () => {
    // Optional cleanup code (e.g., clearing timers, unsubscribing)
  };
}, [dependencies]); // Optional array of dependencies
```

- The effect runs after the first render and after every update, unless you provide a dependencies array.
- If you provide an empty array `[]`, the effect will only run **once** when the component mounts.
- The return function (optional) runs when the component unmounts or when the effect is cleaned up (for example, when dependencies change).

### Example of `useEffect`:

```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json));

    // Cleanup function (if needed)
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>Data:</h1>
      {data ? <p>{data.value}</p> : <p>Loading...</p>}
    </div>
  );
}
```

### Dependency Array

The second argument to `useEffect` is the **dependency array**. If you pass an empty array (`[]`), the effect runs only once, when the component mounts. If you pass an array with values, the effect will re-run whenever one of those values changes.

```jsx
useEffect(() => {
  console.log('Effect ran!');
}, [count]); // Runs every time `count` changes
```

### Cleanup Function

Sometimes you need to clean up side effects (e.g., clearing timers, unsubscribing from services). This is done using a **cleanup function** returned from `useEffect`.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer running');
  }, 1000);

  // Cleanup the interval when the component unmounts
  return () => clearInterval(timer);
}, []);
```

## Other Common Hooks

### 3. `useContext`

`useContext` allows you to access context values in functional components, which provides a way to share state across multiple components without passing props down manually.

```jsx
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="Louise">
      <User />
    </UserContext.Provider>
  );
}

function User() {
  const username = useContext(UserContext);
  return <h1>Username: {username}</h1>;
}
```

### 4. `useReducer`

`useReducer` is useful for managing more complex state logic that involves multiple sub-values or when the next state depends on the previous state.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

### 5. `useRef`

`useRef` allows you to persist values across renders or directly access a DOM element.

```jsx
function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```
