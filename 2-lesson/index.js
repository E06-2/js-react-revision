// () => returnValue

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const dubbled = numbers.map((x) => x * 2);

const sum = numbers.reduce((a, b) => a + b, 0);
const mult = numbers.reduce((a, b) => a * b, 1);

const arr = [10, 20, 30, 40, 50, 60, 'hshsh'];

const firstElem = arr[0];

// const secondElem = arr[1];

const [firstElem, secondElem, ...rest] = arr;

const user = {
    name: 'John',
    age: 30,
    isLoggedIn: true,
};

//const name = user.name;

//const { name, isLoggedIn, age } = user;

//const { name, ...sally } = user;

let name = 'John';
let surname = 'Smith';
let job = 'Teacher';

const obj = {
    name,
    surname,
    job,
};

console.log(obj);

//console.log(arr);
