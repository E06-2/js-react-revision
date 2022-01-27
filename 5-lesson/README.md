## Higher Order Function

Higher Orders Functions (HOF) are functions that perform operations on other functions.

Basically a HOF is a function which returns a function.

```js
const add = (x) => (y) => x + y;

const addTwo = add(2);

addTwo(3); // returns 5
```

In React we could extract a function in a similar manner to simplify our code, make it more reusable and easier to test it.

Starting here:

```jsx
import React from 'react';

const App = () => {
    const users = [{ name: 'Mario' }, { name: 'Luigi' }];
    const [query, setQuery] = React.useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <ul>
                {users
                    .filter((user) => user.name === query)
                    .map((user) => (
                        <li>{user.name}</li>
                    ))}
            </ul>

            <input type='text' onChange={handleChange} />
        </div>
    );
};

export default App;
```

To this:

```jsx
import React from 'react';

// Extract function
const doFilter = (query) => (user) => user.name === query;

const App = () => {
    const users = [{ name: 'Mario' }, { name: 'Luigi' }];
    const [query, setQuery] = React.useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <ul>
                {users.filter(doFilter(query)).map((user) => (
                    <li>{user.name}</li>
                ))}
            </ul>

            <input type='text' onChange={handleChange} />
        </div>
    );
};

export default App;
```

## importing libraries
