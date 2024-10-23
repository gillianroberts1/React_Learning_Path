export const ADD = 'add';
export const TOGGLE = 'toggle';
export const REMOVE = 'remove';

export const initialState = { todos: [] };

export const reducer =(state, action) => {
  switch (action.type) {
    case ADD:
      return { todos: [...state.todos, { text: action.payload, completed: false }] };
    case TOGGLE:
      return {
        todos: state.todos.map((todo, index) =>
        // if the index equals the index in the action, spread out the existing properties
        // of the todo and update the completed value with the opposite of what its previous value was
        // otherwise if the index does not match return that todo with no changes
          index === action.index ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case REMOVE:
      return { todos: state.todos.filter((_, index) => index !== action.index) };
    default:
      throw new Error();
  }
}