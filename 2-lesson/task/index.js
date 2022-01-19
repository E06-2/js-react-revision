const getVoteCount = ({ upvotes, downvotes }) => upvotes - downvotes;

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

const getBudgets = (users) =>
    users
        .filter(({ age }) => age < 25)
        .map(({ budget }) => budget)
        .reduce((a, b) => a + b, 0);

console.log(
    getBudgets([
        { name: 'John', age: 21, budget: 23000 },
        { name: 'Steve', age: 32, budget: 40000 },
        { name: 'Martin', age: 16, budget: 2700 },
    ])
);

const user = { name: 'John', age: 21, isMember: false };

const addEntry = (obj) => ({ ...user, isMember: true });

console.log(addEntry(user));
