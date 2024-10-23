// 4. **`useReducer` Task**
// Create a counter using the `useReducer` hook that allows the user to increment, decrement, and reset the count.



const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    case 'RESET':
      return {count: 0};
      default:
        return state
  }
};





export default counterReducer;

