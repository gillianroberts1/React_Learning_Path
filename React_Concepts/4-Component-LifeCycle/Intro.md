# React Component Lifecycle

**This section is a nice to know as you are unlikely to see it often now that class components aren't as popular**

In React, components go through several phases in their lifecycle as they are created, updated, and removed from the DOM. Understanding the **component lifecycle** is important for managing side effects, data fetching, subscriptions, and cleaning up resources.

With the introduction of **React Hooks**, lifecycle methods are mostly handled through `useEffect`, but it’s still useful to understand the lifecycle of both **class components** (which use lifecycle methods) and **functional components** (which rely on hooks).

## Component Lifecycle Phases

There are three main phases in the lifecycle of a React component:

1. **Mounting**: When the component is first created and added to the DOM.
2. **Updating**: When the component is re-rendered due to changes in state or props.
3. **Unmounting**: When the component is removed from the DOM.

### Lifecycle Methods in Class Components

In **class components**, each phase has associated **lifecycle methods** that allow you to run specific code at particular points in the component’s lifecycle.

### 1. Mounting

The mounting phase is when a component is created and inserted into the DOM. There are four lifecycle methods in this phase:

- `constructor()`: Called when the component is first initialised. It’s commonly used to set up initial state or [bind event handlers (look at the Toggle class example)](https://legacy.reactjs.org/docs/handling-events.html).

- `static getDerivedStateFromProps()`: Rarely used, this method allows the state to be updated based on changes in props before rendering.

- `render()`: This method is required in every class component. It returns the JSX to be rendered on the screen.

- `componentDidMount()`: This method is called after the component is inserted into the DOM. It’s commonly used for side effects like fetching data or setting up subscriptions.

#### Example of Mounting Methods:

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Guest' };
  }

  componentDidMount() {
    console.log('Component mounted!');
    // Example: Fetching data or setting up subscriptions here
  }

  render() {
    return <h1>Welcome, {this.state.name}!</h1>;
  }
}
```

### 2. Updating

A component updates when its state or props change, triggering a re-render. The following lifecycle methods are involved in this phase:

- `static getDerivedStateFromProps()`: Called right before rendering when new props are received. It can be used to update state based on the new props.

- `shouldComponentUpdate()`: Used to determine whether the component should re-render or not. It’s useful for optimizing performance by preventing unnecessary re-renders.

- `render()`: The component re-renders in response to changes.

- `getSnapshotBeforeUpdate()`: Allows you to capture information (e.g., the scroll position) from the DOM before the update happens.

- `componentDidUpdate()`: Called after the component has updated. It’s commonly used to operate on the DOM after updates or to make network requests based on changes in state or props.

#### Example of Updating Methods:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Counter updated!');
      // Example: Perform side effects here
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

### 3. Unmounting

The unmounting phase occurs when a component is removed from the DOM. There is one key lifecycle method in this phase:

- `componentWillUnmount()`: This method is called right before the component is destroyed and removed from the DOM. It’s commonly used to clean up resources such as timers, event listeners, or subscriptions.

#### Example of Unmounting:

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('Component unmounted and timer cleared');
  }

  render() {
    return <h1>Timer is running</h1>;
  }
}
```

### Lifecycle in Functional Components with Hooks

In **functional components**, React Hooks are used to manage the lifecycle instead of lifecycle methods. The `useEffect` hook can handle the behavior of multiple lifecycle phases, such as mounting, updating, and unmounting.

#### Example of `useEffect` Handling Lifecycle:

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    // Cleanup function runs during unmounting
    return () => {
      clearInterval(interval);
      console.log('Timer stopped');
    };
  }, []);  // Empty dependency array to ensure it runs only once (on mount)

  return <h1>Timer is running</h1>;
}
```

In this example:
- The code inside `useEffect` runs after the component is mounted.
- The cleanup function inside `useEffect` (returned by `useEffect`) runs when the component is unmounted.

### Common Uses of the Lifecycle Methods / `useEffect`

- **Data fetching**: Fetch data from an API in `componentDidMount` or `useEffect` to populate the component with dynamic content.

- **Subscriptions and Event Listeners**: Set up event listeners or subscriptions (like WebSocket connections) in `componentDidMount` or `useEffect`, and clean them up in `componentWillUnmount` or the cleanup function of `useEffect`.

- **Timers**: Initialise timers in `componentDidMount` or `useEffect` and clear them in `componentWillUnmount` or the cleanup function of `useEffect`.

- **Optimizing Performance**: Use `shouldComponentUpdate` to prevent unnecessary renders or optimise re-renders based on certain conditions.
