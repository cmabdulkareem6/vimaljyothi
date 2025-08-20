// variables
    // let : cannot be redeclared, can be updated
        let name = "John";
        console.log(name);

        name = "Jane";          //updating name variable value
        console.log(name);      //output: "Jane"
    
   

        
    // const : cannot be updated or redeclared
        const age = 25;
        console.log(age);

        // age = 26;             //will give an error as it cannot be updated




    // var : can be updated or redeclared, should be avoided as it confuses developers
        var job = "teacher";
        console.log(job);

        var job = "driver";     //can be redeclared 
        console.log(job);

    
    // open terminal and type "node Lesson1a.js" to run the code