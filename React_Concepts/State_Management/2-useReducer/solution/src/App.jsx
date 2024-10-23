import { useState, useReducer } from 'react'
import { initialState, reducer, ADD, TOGGLE, REMOVE, EDIT, CLEAR_COMPLETED } from './todosReducer'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input.trim()) { // trim just removes whitespace from the end of the input string
      dispatch({ type: ADD, payload: input });
      setInput('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditInput(state.todos[index].text);
  };

  const saveEdit = () => {
    if (editInput.trim()) {
      dispatch({ type: 'edit', index: editIndex, payload: editInput });
      setEditIndex(null);
      setEditInput('');
    }
  };


  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED });
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
            {editIndex === index ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            {editIndex === index ? (
              <button onClick={saveEdit}>Save</button>
            ) : (
              <>
                <button onClick={() => dispatch({ type: 'toggle', index })}>Toggle</button>
                <button onClick={() => dispatch({ type: 'remove', index })}>Remove</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default App;
