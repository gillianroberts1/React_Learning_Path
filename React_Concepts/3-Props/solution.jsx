//  Create a `ProductCard` component that takes two props: `productName` and `price`. Render an `h2` element for the product name and a `p` element for the price.
function ProductCard({ productName, price }) {
  return (
    <div>
      <h2>{productName}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

// Create a `WelcomeMessage` component that accepts a `username` prop and displays `"Welcome, [username]!"`. If no `username` is provided, it should display `"Welcome, Guest!"` using default props.
function WelcomeMessage({ username = "Guest" }) {
  return <h1>Welcome, {username}!</h1>;
}

// Create a `Counter` component that takes an `onIncrement` function as a prop and renders a button. When the button is clicked, it should call `onIncrement`.
function Counter({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}

function App() {
  const handleIncrement = () => {
    console.log("Incremented!");
  };

  return <Counter onIncrement={handleIncrement} />;
}

// Create a `Wrapper` component that renders its children inside a `div` with a class of `"wrapper"`.
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

// Usage
   <Wrapper>
  <h1>This is wrapped content</h1>
   </Wrapper>

// Create a `PersonProfile` component that accepts `name` and `age` props. Use the spread operator to pass these props from a `person` object.
const person = { name: "Bob", age: 30 };

function PersonProfile({ name, age }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<PersonProfile {...person} />
