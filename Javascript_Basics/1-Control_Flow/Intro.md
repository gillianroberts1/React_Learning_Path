# Control Flow
[Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

In react apps one of the most common things to do is to conditionally render things. This is all done via javascript logic.

**If statements**
```js
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

**Ternary Operator** for inline conditional rendering

The mark up of this is `value being evaluated` ? `return this if true` : `return this if false`

```js
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

**Short-circuit Evaluation** for rendering elements based on conditions:

Only return this if the value being evaluated is true

```js
function Notification({ hasNotifications }) {
  return (
    <div>
      {hasNotifications && <p>You have new notifications!</p>}
    </div>
  );
}
```

**Switch Statement** for handling multiple conditions:

```js
function StatusMessage({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Data loaded successfully!</p>;
    case 'error':
      return <p>There was an error loading the data.</p>;
    default:
      return <p>Status unknown.</p>;
  }
}
```

## Best Practices
- Keep conditional rendering logic concise and readable for easy maintenance.
- Choose the appropriate method based on the complexity of the condition.
- Consider separating conditional cases into their own components for modularity.
- Avoid excessive nesting of conditional rendering for better code structure. (there's an eslint rule that if enabled will prevent nested ternaries as they are hard to follow)

### nested ternary
```js
function StatusMessage({ status }) {
  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : status === 'success'
          ? 'Data loaded successfully!'
          : status === 'error'
            ? 'There was an error loading the data.'
            : 'Status unknown.'}
    </div>
  );
}
```
For better readability you would use a switch statement or an if else loop

```js
function StatusMessage({ status }) {
  if (status === 'loading') {
    return <div>Loading...</div>;
  } else if (status === 'success') {
    return <div>Data loaded successfully!</div>;
  } else if (status === 'error') {
    return <div>There was an error loading the data.</div>;
  } else {
    return <div>Status unknown.</div>;
  }
}
```
