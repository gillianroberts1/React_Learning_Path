/* eslint-disable react/prop-types */
import './App.css';
import React from 'react';
import PracticeProps from './components/PracticeProps';
import PracticeHooks from './components/PracticeHooks';
import Counter from './components/Counter';
import InputFocus from './components/InputFocus';

export const ThemeContext = React.createContext();

function App() {
  const name = 'Alice';
  const isLoggedIn = true;
  const data = [{ title: 'Something' }];
  const fruits = ['Apple', 'Orange', 'Banana'];
  const strings = ['React', 'Javascript', 'JSX'];

  // eslint-disable-next-line react/prop-types
  const Greeting = ({ name }) => {
    return <h1>Goodbye, {name}</h1>;
  };

  const GetTotal = () => {
    return 5 + 8;
  };

  // 1. Functional Component Task
  // Write a functional component called UserProfile that accepts a username prop and renders a h2 tag with the message "User: [username]". If no username is provided, it should render "User: Anonymous".

  // eslint-disable-next-line react/prop-types
  const UserProfile = ({ username = 'Anonymous' }) => {
    return <h2>User: {username}</h2>;
  };

  // 2. Composing Components Task
  // Create a Page component that renders a Header component and a Footer component. Pass a prop to Header to display the title of the page, and pass a prop to Footer to display the current year.

  const Header = ({ title }) => {
    return <h1>{title}</h1>;
  };

  const Footer = ({ year }) => {
    return <p>{year}</p>;
  };

  const Page = () => {
    return (
      <>
        <Header title="Welcome to my page" />
        <Footer year={2024} />
      </>
    );
  };

  // 3. Children Prop Task
  // Create a Button component that accepts a children prop and renders a button element. The content of the button should be whatever is passed as the children prop.
  const Button = ({ children }) => {
    return <button>{children}</button>;
  };

  // 4. Conditional Rendering Task
  // Write a SubscriptionStatus component that accepts a subscribed prop (boolean). If subscribed is true, it should display "You are subscribed!". Otherwise, it should display "You are not subscribed!".
  const SubscriptionStatus = ({ subscribed }) => {
    return (
      <>
        {subscribed ? (
          <h1>You are Subscribed!</h1>
        ) : (
          <h1>You are not Subscribed</h1>
        )}
      </>
    );
  };

  // 5. Class Component Task
  // Create a class component called Welcome that renders "Welcome, [name]", where the name is passed via props. If no name is passed, display "Welcome, Guest!".
  class Welcome extends React.Component {
    render() {
      const { name } = this.props;
      return (
        <>
          <h1>Welcome, {name ? name : 'Guest'}</h1>
        </>
      );
    }
  }

  // getting users theme value from window colour preference
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // setting theme contexts value based on user preference
  const themeValue = darkThemeMq ? 'dark' : 'light';

  return (
    <>
      <h1>Hello, {name}!</h1>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>}

      {data && data.length > 0 && <h1>{data[0].title}</h1>}

      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <ul>
        {strings.map(string => (
          <li key={string}>{string}</li>
        ))}
      </ul>
      <Greeting name={name} />
      <h2>Total: {GetTotal()}</h2>

      <UserProfile username="Gillian" />
      <Page />
      <Button>Click Me!</Button>
      <Button>Submit</Button>
      <SubscriptionStatus subscribed={false} />
      <Welcome name="Gillian" />
      <Welcome />
      <ThemeContext.Provider value={themeValue}>
        <PracticeProps />
        <PracticeHooks />
      </ThemeContext.Provider>
      <Counter/>
      <InputFocus />
    </>
  );
}

export default App;
