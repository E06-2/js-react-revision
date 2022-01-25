/**
 * 1. Fix the fetch, to handle error,
 * 2. Create the text file and write something to it and.
 */
fetch('/readme.txt')
    .then((response) => response.text())
    .then((data) => console.log(data));

/**
 * 1. Create a async/await function and log the data to the console.
 */
