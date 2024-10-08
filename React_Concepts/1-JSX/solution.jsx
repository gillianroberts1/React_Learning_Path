//    Write a JSX snippet that takes a `name` variable and displays a greeting message: `"Hello, [name]!"`.
const name = 'Louise';
const greeting = <h1>Hello, {name}!</h1>;

//    Write a JSX snippet that conditionally displays `"Welcome!"` if a user is logged in (using a boolean `isLoggedIn` variable), or `"Please sign in"` if not.
const isLoggedIn = true;
const message = <h1>{isLoggedIn ? 'Welcome!' : 'Please sign in'}</h1>;

// Write a JSX snippet that takes an array of strings `['React', 'JavaScript', 'CSS']` and renders each item in an unordered list.
const skills = ['React', 'JavaScript', 'CSS'];
const skillList = (
  <ul>
    {skills.map(skill => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
);
