// Objects in Javascript

const person = {
    name : "abc",
    lastname : "xyz",
    age : 20,
    printHello : function(){
        console.log("Hello World")
    },
    names : ["a", "b", "c"]
}

console.log(person.names);

// For in Loop

for(let key in person) {
    console.log(`${key}: ${person[key]}`);
}


    

