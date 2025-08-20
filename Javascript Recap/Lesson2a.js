let age = 25;
let votingAge = 18;


// if/else
    // simple if
    if(age >= votingAge) {
        // do something if condition is true
        console.log("You can vote");
    }



    // if...else
    if(age >= votingAge) {
        // do something if condition is true
        console.log("You can vote");
    } else {
        // do something if condition is false
        console.log("You cannot vote");
    }




    // if...else if...else
    if(age >= votingAge) {
        // do something if condition is true
        console.log("You can vote");
    } else if(age == votingAge) {
        // do something if condition is true
        console.log("You can vote");
    } else {
        // do something if condition is false
        console.log("You cannot vote");
    }



    
    // nested if...else
    if(age >= votingAge) {
        // do something if condition is true
        console.log("You can vote");
    } else {
        if(age == votingAge) {
            // do something if condition is true
            console.log("You can vote");
        } else {
            // do something if condition is false
            console.log("You cannot vote");
        }
    }



    // open terminal and type "node Lesson2a.js" to run the code