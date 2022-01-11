# Lesson 1

## Block Scope

The block statement is often called **compound statement** in other languages. It allows you to use multiple statements where JavaScript expects only one statement. Combining statements into blocks is a common practice in JavaScript. The opposite behavior is possible using an [empty statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty), where you provide no statement, although one is required.

Blocks are commonly used in association with `if...else` and `for loops` statements.

```jsx
//Block Statement
{
  // Block Scope
  StatementList
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope
}

function doSomething() {
  // Function Scope
}
```

### Scope

The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

Function scope works slightly different as any variable declared inside `var` or otherwise doesn't leak out to the global scope.

- [More info about scope in computer science](https://en.wikipedia.org/wiki/Scope_(computer_science))

### Var, let and const

JavaScript has three different keywords to declare a variable, which adds an extra layer of intricacy to the language. The differences between the three are based on scope, hoisting, and reassignment.

Block scope works different with variables declared with var, let and const. The var keyword not in strict mode does not have a scope, as seen in the example below.

- var → can be reassigned, can be redeclared, can be hoisted.
- let  → can be reassigned, cannot be redeclared, cannot be hoisted.
- const → cannot be reassigned, cannot be redeclared, cannot be hoisted.

```jsx
var x = 1;
let y = 2;
const c = 3;
{
	var x = 10;
	let y = 20;
	const c = 30;
}
console.log(x); // logs 10
console.log(y); // logs 2 and does not throw SyntaxError...
console.log(c); // logs 3 and does not throw SyntaxError...
```

### Function Expression

As we can store the value of the function in a variable, we can also pass the whole function and into an value like so:

```
const sum = function (x, y) {
	return x + y;
}
sum(100, 3) 
```

### Arrow Function

As of 2016, there is a new and shorter way to use functions with a fat arrow `=>` instead of the keyword `function`.

```
//Parenthesis must be include if no value or more than one
const multiply = (x, y) => {
	return x * y;
}

// parenthesis may be ommited with single value
const square = x => {
	return x * x
}

//When writing a single line function without curly brackets, the return values
// is implicite
const square = x => x * x
```

### Function as Components in React

```jsx
function (props) {
  return view;
}

// JavaScript ES5 function
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}

// JavaScript ES6 arrow function
const Greeting = (props) => {
  return <h1>{props.greeting}</h1>;
}

// JavaScript ES6 arrow function
// without body and implicit return
const Greeting = (props) =>
  <h1>{props.greeting}</h1>;
```

