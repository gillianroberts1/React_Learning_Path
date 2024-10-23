import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
