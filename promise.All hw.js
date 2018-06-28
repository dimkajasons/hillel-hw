let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(5);
    }, 1000)
})

let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2);
    }, 3000)
})



Promise.all([p1, p2].map(p => p.catch(x => x))).then(
    r => {
        console.log(r);
    }
);