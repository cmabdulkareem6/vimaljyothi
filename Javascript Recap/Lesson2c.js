// Loops
    // for loop
    // for loop is used to iterate over a block of code a specific number of times
    // here the loop will run 5 times as long as the condition is true
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // while loop
    // while loop is used to iterate over a block of code as long as a specific condition is true
    // here the loop will run as long as the condition is true
    // the condition is checked before each iteration
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

    // do...while loop
    // do...while loop is used to iterate over a block of code as long as a specific condition is true
    // here the loop will run at least once and then check the condition
    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 5);



    // for..of loop
    // for..of loop is used to iterate over an iterable object
    // here the loop will run for each element in the iterable object
    let arr = [1, 2, 3, 4, 5];
    for (let num of arr) {
        console.log(num);
    }


    // for..in loop
    // for..in loop is used to iterate over an object
    // here the loop will run for each property in the object
    let obj = {a: 1, b: 2, c: 3};
    for (let key in obj) {
        console.log(key);
    }


    // open terminal and type "node Lesson2c.js" to run the code