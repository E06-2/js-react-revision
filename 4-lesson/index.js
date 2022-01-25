const myPromise = new Promise((resolve, reject) => {
    let a = 1 + 3;
    setTimeout(() => {
        if (a === 3) {
            resolve('success');
        } else {
            reject('failed');
        }
    }, 1000);
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
