// array methods
    fruits.push("kiwi");        // adds an element to the end of the array
    fruits.pop();               // removes the last element from the array
    fruits.shift();             // removes the first element from the array
    fruits.unshift("kiwi");     // adds an element to the beginning of the array
    fruits.slice(1, 3);         // returns a new array with the elements from index 1 to index 2
    fruits.splice(1, 2);        // removes the elements from index 1 to index 2


// array.map method
    let numbers = [1, 2, 3, 4, 5];
    let newNumbers = numbers.map((number) => number * 2);
    console.log(newNumbers);    // output: [2, 4, 6, 8, 10]



// array.filter method
    let numbers2 = [1, 2, 3, 4, 5];
    let newNumbers2 = numbers.filter((number) => number > 3);
    console.log(newNumbers2);    // output: [4, 5]


// open terminal and type "node Lesson3b.js" to run the code