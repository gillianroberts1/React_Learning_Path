import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to clear input fields
  const clearFields = () => {
    setName('');
    setEmail('');
  };

  // Simple email validation function
  const isValidEmail = email => {
    return email.includes('@');
  };

  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          borderColor: email && !isValidEmail(email) ? 'red' : '',
        }}
      />
      <button onClick={clearFields}>Clear</button>
      <DisplayInfo name={name} email={email} />
    </div>
  );
}

function DisplayInfo({ name, email }) {
  return (
    <div>
      <h2>Display Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Form;
