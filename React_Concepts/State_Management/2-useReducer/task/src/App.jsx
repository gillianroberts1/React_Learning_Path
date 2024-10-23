import { useState, useReducer } from 'react'
import { initialState, reducer, ADD, TOGGLE, REMOVE } from './todosReducer'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) { // trim just removes whitespace from the end of the input string
      dispatch({ type: ADD, payload: input });
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
            <button onClick={() => dispatch({ type: TOGGLE, index })}>Toggle</button>
            <button onClick={() => dispatch({ type: REMOVE, index })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
