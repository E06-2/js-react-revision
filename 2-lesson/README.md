# Lesson 2

## Map, Reduce, Filter

### Array

Working with data set, Js provides an *list-like object* called **Array**. The content and length of an array is not fixed. We can modify create methods and function to work with it or use the many methods already given to us. [Array mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

Items of the array cannot be indexed with strings, we must use integers. So each member of the array is associated with an index starting from *zero*.

The Class **Array** offers us a ton of method that an instance of array inherits. Some are for reading and other are for modifying it.

```js
const numbers = [1, 2, 3, 4, 5, 6];

// Filter an array based on condition
//filter((element, index, array) => { ... } )
let evenNumbers = numbers.filter((num) => num % 2 === 0 );

// The sum of items with reduce()
//reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
let sum = numbers.reduce((prev, curr) => prev + curr, 0)

//loop over each item returning a value 
// map((element, index, array) => { ... })
let double = numbers.map(x => x * 2)
// [2, 4, 6, 8, 10, 12]

//Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead.
```

## Destructuring

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

This assignment works both for objects and array. [mdn reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

- Array Destructuring

```js
/* Array Destructuring */
const [firstElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];

/* 
*  Array index 0 alloated to a
*  index 1 allocated to b
*  remaining values allocated to rest
*/
let = [a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a) // returns 10
console.log(b) // returns 20
console.log(rest) // returns an array [30, 40, 50]
```

- Object Destructuring

```js
/* Object Destructuring */
const {key_a, key_b} = myObject;
// is equivalent to:
// const key_a = myObject.key_a;
// const key_b = myObject.key_b;

const user = {
    name: "John",
    age: 30,
    isLoggedIn: true
}
const { name, age, isLoggedIn } = user;
console.log(name) // returns "John"
console.log(age) // returns 30
console.log(isLoggedIn) // returns true

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

## Spread Operator

**Spread syntax** (`...`) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

## Shorthand Object Assignment

New in JavaScript with ES6/ES2015, if you want to define an object who's keys have the same name as the variables passed-in as properties, you can use the shorthand and simply pass the key name.

Here’s how you can declare an object with the new ES6 / ES2015 syntax:

```js
let name = 'John';
let surname = 'Smith';
let job = 'Teacher';

let someObject = {
  cat,
  dog,
  bird
}

console.log(someObject);

//{
//  name = 'John';
// surname = 'Smith';
// job = 'Teacher';
//}
```

And here’s how to do the same thing with the older ES5 syntax:

```js
let name = 'John';
let surname = 'Smith';
let job = 'Teacher';

var someObject = {
  cat: cat,
  dog: dog,
  bird: bird
}
```