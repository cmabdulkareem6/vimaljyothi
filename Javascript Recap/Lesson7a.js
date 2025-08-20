// try...catch
let x = 5;

try {
    let result = x / y;    // will throw error and catch block will be executed
    console.log(result);
} catch (error) {
    console.log(error);
}



// try...catch...finally
try {
    let result = x / y;    // will throw error and catch block will be executed
    console.log(result);
} catch (error) {
    console.log(error);
} finally {
    console.log("Finally block will be executed");  // will always be executed
}



// error object
try {
    let result = x / y;    // will throw error and catch block will be executed
    console.log(result);
} catch (error) {
    console.log(error.name);    // name of the error
    console.log(error.message); // message of the error
    console.log(error.stack);   // stack trace
}


// open terminal and type "node Lesson7a.js" to run the code