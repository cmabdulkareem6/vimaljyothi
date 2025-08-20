// Objects
    // object creation & accessing properties
    let person = {
        name: "John",
        age: 25,
        city: "New York"
    };
    console.log(person.name);   // output: "John"
    console.log(person.age);    // output: 25
    console.log(person.city);   // output: "New York"


    // updating object properties
    person.name = "Jane";
    person.age = 30;
    person.city = "Los Angeles";
    console.log(person);        // output: {name: "Jane", age: 30, city: "Los Angeles"}

    // deleting object properties
    delete person.city;
    console.log(person);        // output: {name: "Jane", age: 30}