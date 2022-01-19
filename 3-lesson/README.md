## Ternary Operator

This operator is frequently used as an alternative to an `if...else`.

```js
// condition ? exprIfTrue : exprIfFalse
const isOld = true ? 'Enter' : 'Leave'

const getFee =(isMember) => {
  return (isMember ? '$2.00' : '$10.00');
}

```

It is also possible to create chains such as in `if ... else if .. else` . 

```js
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}

```

## && operator

React does something slightly different, as if the result of evaluating an expression inside JSX curly brackets is `true` or `false` (including `undefined` and `null`), React will completely ignore that expression. It will not be casted as strings: "true"/"false"/"null"/"undefined".

This div will have no content at all:

```jsx
<div>
  {3 === 3}
</div>
```

his is intentional. It allows using a shorter syntax to put a value (or element) behind a condition by using the `&&` operator:

The short-circuit evaluation

```jsx
<div>
  {condition && <input />}
</div>
```

If `condition` is true, the second operand will be returned. If it’s false React will ignore it. This means it will either render an input element or nothing at all. This JavaScript trick is known as the "short-circuit evaluation".

## Import and Export

The **`export`** statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the `import` statement. 

There are two types of exports:

1. Named Exports (Zero or more exports per module)
2. Default Exports (One per module)

```js
/* Named Exports */

// export features declared earlier
export { myFunction, myVariable };

// export individual features (can export var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() { /* ... */ };

/* Default Export */
// export individual features as default
export default function () { /* ... */ }
export default class { .. }
```

Named exports are useful to export several values. During the import, it is mandatory to import them within curly braces with the same name of the corresponding object.

But a default export can be imported with any name for example:

The static **`import`** statement is used to import read only live bindings which are exported by another module.

```js
import defaultExport from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
```







