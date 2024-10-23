# `useState` hook

The `useState` hook is the most basic and essential state management tool in React. It allows you to add local state to functional components. This state is managed within the component, and when the state changes, the component automatically re-renders to reflect the new state.

`useState` is called with an initial value and returns an array with two elements:
- The current state value.
- A function to update the state.

```jsx
  const [state, setState] = useState(initialValue)
```

## When to use `useState`

`useState` is suitable for simple state management within a single component or small parts of your application. Here are common scenarios when you might use it:

1. Form Inputs: Storing and updating the value of form elements like text inputs, checkboxes, or radio buttons.

```jsx
const [username, setUsername] = useState('');
```

2. Toggle Values: Managing toggle states, such as showing/hiding a modal or toggling a theme (e.g., light/dark mode).

```jsx
const [isModalOpen, setIsModalOpen] = useState(false);
```

3. Counters: Simple counters, like a click counter, are a classic use case.

```jsx
const [count, setCount] = useState(0);
```

4. Local Component Data: When you need to store data that only matters within a single component, such as whether a dropdown menu is open.

## Sharing State Across Children via Props
While `useState` is great for managing local state, there are many cases where you need to share state between a parent and its children components. You achieve this by **lifting state up** to the parent component and passing the state and updater function as props to the child components.

### Example: Sharing State via Props
Imagine you have a parent component called Parent that manages a counter state, and two child components: DisplayCounter to display the count and CounterControls to modify it.

```jsx
import React, { useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DisplayCounter count={count} />
      <CounterControls setCount={setCount} />
    </div>
  );
}

function DisplayCounter({ count }) {
  return <h1>Count: {count}</h1>;
}

function CounterControls({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  );
}

export default Parent;
```

### Explanation
- The Parent component manages the count state using `useState`.
- It passes the count value as a prop to DisplayCounter for display.
- It passes the setCount function to CounterControls so the child can update the state directly.

### When to Lift State Up:
When multiple components need access to the same state.
When the state is relevant to a group of components rather than just a single component.

## Potential Pitfalls and Best Practices
While `useState` is simple to use, there are some things to watch out for and best practices to follow:

1. State Updates Are Asynchronous
State updates with `useState` are asynchronous. If you need to update state based on the current state, use the function form of setState to ensure you get the most recent state.

```jsx
const [count, setCount] = useState(0);

const increment = () => {
  // Correct way: Using function form
  setCount(prevCount => prevCount + 1);
};

// Incorrect way: Directly using `count`, which might be outdated
setCount(count + 1);
```
2. Avoid Overusing State in Small Components
Sometimes, you might be tempted to use `useState` for every small detail in your components. This can make your components harder to manage, especially if there are many pieces of state that depend on each other. Consider grouping related state together into a single state object.

```jsx
const [user, setUser] = useState({
  name: '',
  age: 0,
  email: ''
});

// Updating part of the state while keeping the rest
const updateEmail = (newEmail) => {
  setUser(prevUser => ({
    ...prevUser, // spread out all the existing properties to retain their values
    email: newEmail // only update the email with the new value
  }));
};
```

3. State and Re-Renders
Every time `useState` updates state, the component re-renders. Excessive re-renders can lead to performance issues. Make sure to only update state when necessary and avoid redundant or repetitive updates.

```jsx
const [username, setUsername] = useState('');

const handleChange = (e) => {
  // Only update if the value actually changes
  if (e.target.value !== username) {
    setUsername(e.target.value);
  }
};
```

4. Avoiding State in the Wrong Place
Sometimes, beginners tend to put state in components where it doesn’t belong. For example, if two sibling components need access to the same state, that state should be lifted up to their common parent.

5. Handling Complex State with useState
If you find that your state management is becoming too complex with useState, consider using useReducer, which is more suitable for complex state logic (e.g., state involving multiple sub-values).

### Tips for Effective Use of `useState`

- **Initialise State Correctly**: Make sure the initial state reflects the type of data it will hold. If it’s a number, initialize with a number (0), not a string ("0").
- **Update State Based on Previous State**: Use the function form of setState when state depends on previous values.


## Task
To practice state management with useState and passing state between components, build a mini form with two input fields: Name and Email. The parent component should manage the state and display the input values below the form.

### Task Instructions
- Add a Clear button that resets both input fields to empty strings.
- Make the email field turn red if it does not contain a valid email format (simple validation).

Hints:
- Use the setState function to reset the state values.
- For validation, you can use a simple regular expression to check if the email contains an @ symbol and a domain.
- The border should turn red if you type an email and click off the input when there is no @ symbol

Starting point as a react app within task folder - remember to npm install