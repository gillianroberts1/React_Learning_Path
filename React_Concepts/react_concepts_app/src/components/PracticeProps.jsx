import { useState } from 'react';

/* eslint-disable react/prop-types */
const PracticeProps = () => {
  // 1. **Passing Multiple Props Task**
  // Create a `ProductCard` component that takes two props: `productName` and `price`. Render an `h2` element for the product name and a `p` element for the price.
  const ProductCard = ({ productName, price }) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          fontSize: '40px',
        }}
      >
        <span>{productName}</span>
        <span>Price: £{price}</span>
      </div>
    );
  };

  // 2. **Default Props Task**
  // Create a `WelcomeMessage` component that accepts a `username` prop and displays `"Welcome, [username]!"`. If no `username` is provided, it should display `"Welcome, Guest!"` using default props.
  const WelcomeMessage = ({ username }) => {
    return (
      <>
        <h1>Welcome, {username ? username : 'Guest'}!</h1>
      </>
    );
  };

  // 3. **Passing Functions as Props Task**
  // Create a `Counter` component that takes an `onIncrement` function as a prop and renders a button. When the button is clicked, it should call `onIncrement`.

  const Counter = ({ onIncrement }) => {
    return <button onClick={onIncrement}>Add one</button>;
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("incremented");
    
  };

  // 4. **Children Prop Task**
// Create a `Wrapper` component that renders its children inside a `div` with a class of `"wrapper"`.
const Wrapper = ({ children }) => {
    return <div className='wrapper'>{children}</div>
}

// 5. **Spread Operator Task**
// Create a `PersonProfile` component that accepts `name` and `age` props. Use the spread operator to pass these props from a `person` object.
const profile = { name: "Gillian", age: 46 }

const PersonProfile = ({ name, age }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </>
    )

}

  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: 80, textDecoration: 'underline' }}>
        Practicing Props
      </h1>
      <div>
        <ProductCard productName="Standing Desk" price={199} />
      </div>
      <WelcomeMessage username="Gillian" />
      <WelcomeMessage />
      <Counter onIncrement={handleIncrement} />
      <h2>Count: {count}</h2>
      <Wrapper>
        <h2>Wrapper</h2>
        <p>content of wrapper</p>
      </Wrapper>
      <PersonProfile {...profile}/>
    </div>
  );
};

export default PracticeProps;
