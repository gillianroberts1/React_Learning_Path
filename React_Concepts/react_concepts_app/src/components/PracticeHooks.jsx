import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';

const PracticeHooks = () => {
  /// 1. **`useState` Task**
  // Create a component called `ToggleButton` that toggles between `"ON"` and `"OFF"` states using the `useState` hook.

  const ToggleButton = ({ colour }) => {
    const [isOn, setIsOn] = useState(false);

    return (
      <button
        style={{ backgroundColor: colour }}
        onClick={() => setIsOn(!isOn)}
      >
        {isOn ? 'On' : 'Off'}
      </button>
    );
  };

  // 2. **`useEffect` Task**
  // Create a component called `Timer` that starts a timer when the component mounts and logs the elapsed time every second. When the component unmounts, it should stop the timer.

  const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      let timer;
      if (!isRunning) {
        timer = setInterval(() => {
          setSeconds(prev => prev + 1);
        }, 1000);
      }

      return () => clearInterval(timer);
    }, [isRunning]);

    const toggleTimer = () => {
      setIsRunning(!isRunning);
    };

    return (
      <div>
        <button onClick={toggleTimer}>{!isRunning ? 'Stop' : 'Start'}</button>
        <h1>Time: {seconds}s</h1>
      </div>
    );
  };

  // 3. **`useContext` Task**
  // Create a `ThemeContext` that provides a theme color (`"dark"` or `"light"`) to a `ThemeButton` component that displays the current theme and changes the background color accordingly.

  const theme = useContext(ThemeContext);
  const buttonColour = theme === 'dark' ? 'blue' : 'yellow';

  return (
    <div>
      <h1 style={{ color: 'pink', fontSize: 80, textDecoration: 'underline' }}>
        Practicing Hooks
      </h1>
      <ToggleButton colour={buttonColour} />
      <Timer />
    </div>
  );
};

export default PracticeHooks;
