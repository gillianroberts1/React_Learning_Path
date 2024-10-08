// Create a component called `ToggleButton` that toggles between `"ON"` and `"OFF"` states using the `useState` hook.
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

// Create a component called `Timer` that starts a timer when the component mounts and logs the elapsed time every second. When the component unmounts, it should stop the timer.
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return <h1>Time: {seconds}s</h1>;
}

// Create a `ThemeContext` that provides a theme color (`"dark"` or `"light"`) to a `ThemeButton` component that displays the current theme and changes the background color accordingly.
const ThemeContext = React.createContext();

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ backgroundColor: theme === "dark" ? "#333" : "#FFF" }}>
      Current theme: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}

// Create a counter using the `useReducer` hook that allows the user to increment, decrement, and reset the count.
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
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

// Create a component that contains an input field and a button. When the button is clicked, the input field should automatically gain focus using the `useRef` hook.
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
