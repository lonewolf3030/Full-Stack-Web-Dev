// Objects in JavaScript

// key-value pairs

// creating object

const person = {
    name : "abc",
    lastname : "xyz",
    age : 25,
    cartItems : ["Item1", "Item2", "Item3"],
    printHello : function(){
        return "Hello World"
    },
}
// accessing object's keys and values

console.log(person.secondPerson.lastname)
console.log(person["secondPerson"]["lastname"]);

// Iterating over an object

// For in loop

for(let key in person){
    console.log(`key : ${key}, value : ${person[key]}`)
}

    

