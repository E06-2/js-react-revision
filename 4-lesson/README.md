#### Promise

A _Promise_ is an object representing the eventual completion or failure of an
asynchronous operation. Most people are consumers of already-created promises.

Essentially, a promise is a returned object to which you attach callbacks,
instead of passing callbacks into a function.

A _Promise_ is one of these three states:

-   _pending_: initial state, neither fulfilled nor rejected.
-   _fulfilled_: the operation was successful.
-   _rejected_: the operation failed.

```js
const myPromise = new Promise((resolve, reject) => {
  // do thing, then…

  if (/* everything worked */) {
    resolve("See, it worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

To consume the returning value of a promise, we need to use `then` or `catch`,
some rare occasion also `finally`.

```js
myPromise()
    .then
    // code to run if everything is ok
    ()
    .catch
    // code to run if error.
    ();
```

```js
const myPromise = new Promise((resolve, reject) => {
    let a = 1 + 3;
    if (a === 3) {
        resolve('success');
    } else {
        reject('failed');
    }
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
```

Adding time delay

```js
const myPromise = new Promise((resolve, reject) => {
    let a = 1 + 3;
    setTimeout(() => {
        let a = 1 + 3;
        if (a === 3) {
            resolve('success');
        } else {
            reject('failed');
        }
    }, 500);
});
```
