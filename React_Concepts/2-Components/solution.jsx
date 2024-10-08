// Write a functional component called UserProfile that accepts a username prop and renders a h2 tag with the message "User: [username]". If no username is provided, it should render "User: Anonymous".
function UserProfile({ username = "Anonymous" }) {
  return <h2>User: {username}</h2>;
}

// Create a Page component that renders a Header component and a Footer component. Pass a prop to Header to display the title of the page, and pass a prop to Footer to display the current year.
function Header({ title }) {
  return <h1>{title}</h1>;
}

function Footer({ year }) {
  return <p>© {year}</p>;
}

function Page() {
  return (
    <div>
      <Header title="Welcome to My Page" />
      <Footer year={2024} />
    </div>
  );
}

// Create a Button component that accepts a children prop and renders a button element. The content of the button should be whatever is passed as the children prop.
function Button({ children }) {
  return <button>{children}</button>;
}

// Write a SubscriptionStatus component that accepts a subscribed prop (boolean). If subscribed is true, it should display "You are subscribed!". Otherwise, it should display "You are not subscribed!".
function SubscriptionStatus({ subscribed }) {
  return <h2>{subscribed ? "You are subscribed!" : "You are not subscribed!"}</h2>;
}

// Create a class component called Welcome that renders "Welcome, [name]", where the name is passed via props. If no name is passed, display "Welcome, Guest!".
class Welcome extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name || "Guest"}!</h1>;
  }
}