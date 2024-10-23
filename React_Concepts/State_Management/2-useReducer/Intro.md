# `useReducer` Hook

The `useReducer` hook is an alternative to `useState` for managing state in React functional components. It is useful when you have **complex state logic** involving multiple sub-values or when the next state depends on the previous state. It’s also similar to the Redux approach of state management, making it a good stepping stone toward understanding global state management libraries.

## When to Use `useReducer`

While `useState` is great for simple state, `useReducer` can be preferred when:
- You have complex state logic that involves multiple fields or objects.
- State updates depend on the current state.
- You want to consolidate state management logic in a way that scales as the application grows.

Examples where `useReducer` is a good fit:
- **Form Handling**: Managing multiple input fields in a form where you want to validate and update fields together.
- **Counters with Complex Operations**: Managing counters that have more actions than just increment and decrement (e.g., reset, double).
- **Todo List Management**: Adding, removing, and filtering items in a todo list.

## `useReducer` Syntax

`useReducer` accepts two parameters:
- A **reducer** function that determines how the state changes based on an action.
- An **initial state** value.

It returns an array with:
- The current state.
- A `dispatch` function to send actions to the reducer.

### Basic Example

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer`: A function that takes `state` and `action` and returns a new state based on the action type.
- `initialState`: The initial value of the state.

### Example: Simple Counter with `useReducer`

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;
```

### Explanation
- `initialState` sets up the initial state (`count: 0`).
- `reducer` is a function that takes `state` and `action` as parameters. It updates the state based on the `action.type`.
- The `dispatch` function sends an action (e.g., `{ type: 'increment' }`) to the reducer, triggering a state update.

## When to Use `useReducer` Instead of `useState`

1. **Complex State Management**:
   - If you have multiple related state variables, you can manage them in a single object with `useReducer` instead of using multiple `useState` calls.

2. **State Transitions Based on Previous State**:
   - When state transitions depend on the previous state, `useReducer` ensures you have a clear and centralized logic for handling these transitions.

3. **Scalability**:
   - As state logic grows more complex (like adding, removing, filtering, and toggling items), `useReducer` provides a cleaner way to manage actions through a central function (the reducer).

## Example Mini App: Todo List with `useReducer`

```jsx
import React, { useReducer, useState } from 'react';

const initialState = { todos: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { todos: [...state.todos, { text: action.payload, completed: false }] };
    case 'toggle':
      return {
        todos: state.todos.map((todo, index) =>
        // if the index equals the index in the action, spread out the existing properties
        // of the todo and update the completed value with the opposite of what its previous value was
        // otherwise if the index does not match return that todo with no changes
          index === action.index ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'remove':
      return { todos: state.todos.filter((_, index) => index !== action.index) };
    default:
      throw new Error();
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) { // trim just removes whitespace from the end of the input string
      dispatch({ type: 'add', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'toggle', index })}>Toggle</button>
            <button onClick={() => dispatch({ type: 'remove', index })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

### Explanation
- `reducer`: Manages different actions (`add`, `toggle`, `remove`) based on the action type.
- `add`: Adds a new todo item with a text payload.
- `toggle`: Toggles the `completed` status of a todo item.
- `remove`: Removes a todo item based on its index.
- `dispatch`: Triggers the reducer with an action whenever a button is clicked or an event occurs.

## Potential Pitfalls and Best Practices

While `useReducer` is powerful, there are some things to be mindful of:

### 1. **Reducer Functions Must Be Pure**
A reducer function should be **pure**, meaning it should not have side effects (like API calls or modifying the current state directly). It should always return a new state based on the input state and action.

### 2. **Avoid Overcomplicating Simple State**
If your state logic is simple (like a single counter or toggle), using `useReducer` might be overkill. Use `useState` for simplicity in these cases.

### 3. **Use Objects for Complex State**
When you manage multiple pieces of related state, group them in an object and manage them together using `useReducer`. This approach reduces the need for multiple `useState` hooks and centralises state updates in one place.

### Tips for Using `useReducer` Effectively
- **Define Action Types as Constants**: To avoid typos and maintain consistency, define action types as constants eg.
```jsx
// define type
const TOGGLE = 'toggle'

// use type in dispatch
<button onClick={() => dispatch({ type: TOGGLE, index })}>Toggle</button>

// use type in reducer
case TOGGLE:
  return {

  }
```
- **Use `useReducer` in Combination with `useContext`**: For global state management, combine `useReducer` with `useContext` to create a lightweight state management solution without the need for Redux.


### Task: Extended Todo List

To practice managing complex state with `useReducer`, extend the Todo List app to:
1. Allow users to **edit** a todo item.
2. Add a **clear completed** button to remove all completed tasks.

**Hints**:
- Add an `edit` action in the reducer for updating the text of a todo item.
- Add a `clearCompleted` action to filter out completed todos.
- To implement edit in the component you need to think about
  - showing a new input to edit an existing todo
  - on saving the edit, showing the saved text instead of the edit input

Starting point as a react app within task folder - remember to npm install