// Synchronous javascript
// Synchronous javascript is a type of javascript where the code is executed line by line

console.log("task 1");
console.log("task 2");
console.log("task 3");



// asynchronous javascript
// Asynchronous javascript is a type of javascript where the code is executed in parallel

console.log("task 1");
setTimeout(() => {
    console.log("task 2");
}, 2000);
console.log("task 3");


// callback function
// A callback function is a function that is passed as an argument to another function
function add(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
}

add(1, 2, (result) => {
    console.log(result);
});



// callback hell
// Callback hell is a situation where multiple nested callbacks are used to handle asynchronous operations

function add(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
}

add(1, 2, (result) => {
    console.log(result);
    add(result, 3, (result) => {
        console.log(result);
        add(result, 4, (result) => {
            console.log(result);
        });
    });
});



// Promise
// A promise is an object that represents the result of an asynchronous operation

let isDataAvailable = false;
let data = setTimeout(() => {
    return {
        movie: "Bangalore Days",
        actor: "Dulqar Salman",
        year: 2019
    }
}, 2000)

function getData(isDataAvailable) {
    return new Promise((resolve, reject) => {
        if (isDataAvailable) {
            resolve(data);
        } else {
            reject(new Error("Data is not available"));
        }
    });
}

getData(isDataAvailable)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// open terminal and type "node Lesson8a.js" to run the code