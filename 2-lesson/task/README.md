## Object Destructuring

Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

Example:

```js
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

note: es6 arrow function short version and Destructuring

## Map and reduce

Create the function that takes an array with objects and returns the sum of people's budgets.

Examples:

```js
getBudgets([
    { name: 'John', age: 21, budget: 23000 },
    { name: 'Steve', age: 32, budget: 40000 },
    { name: 'Martin', age: 16, budget: 2700 },
]); // ➞ 65700

getBudgets([
    { name: 'John', age: 21, budget: 29000 },
    { name: 'Steve', age: 32, budget: 32000 },
    { name: 'Martin', age: 16, budget: 1600 },
]); // ➞ 62600
```

Bonus, modify the function above to return a budget of uer under 25 years old

## Spread

Create a function `addEntry` that accepts a object as parameter and return a **new** object with the entry `isMember` set to `true`

Example:

```js
const user = { name: 'John', age: 21, isMember: false };

addEntry(user); // ➞ { name: 'John', age: 21, isMember = true}
```
