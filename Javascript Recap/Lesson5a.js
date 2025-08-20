// Functions
    // Named functions
    // named functions are functions with a name
        function getData(){     // declaring the function (function definition)
            console.log("Your data is here")
        }

        getData();              // calling the function

    // Anonymous functions
    // anonymous functions are functions without a name
        // classic anonymous function
        let getData2 = function(){     // declaring the function and assigning it to a variable
            console.log("Your data2 is here")
        }

        getData2();              // calling the function by variable name


        // arrow function
        let getData3 = () => {     // declaring the function and assigning it to a variable
            console.log("Your data3 is here")
        }

        getData3();              // calling the function by variable name


        // arrow function with parameters
        let getData4 = (param1, param2) => {     // declaring the function and assigning it to a variable
            console.log(`Your data4 is here with ${param1} & ${param2}`)
        }
        getData4();              // calling the function by variable name


        // arrow function with return statement
        let getData5 = (param1, param2) => {     // declaring the function and assigning it to a variable
            return `Your data5 is here with ${param1} & ${param2}`
        }
        getData5("a", "b");              // calling the function by variable name

        // arrow function without return statement
        let getData6 = (param1, param2) => `Your data6 is here with ${param1} & ${param2}`
        getData6("a", "b");              // calling the function by variable name


    // open terminal and type "node Lesson5a.js" to run the code