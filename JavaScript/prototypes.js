// Prototypes in JavaScript

// Constructor function

function createUser(name, age){
    this.name = name;
    this.age = age;
}

createUser.prototype.printName = function(){
    return `Hi my name is ${this.name}`
}

// // creating an object from constructor function
let person1 = new createUser("abhishek", 20)

console.log(person1.printName());

// creating a polyphil

const array = [1,2,3,4,5];
const words = ['a', 'b', 'c'];

// console.log(array)

// array.map((item, idx) => {
//     console.log(item)
// })

Array.prototype.returnAllElements = function(){
    for(let i = 0; i < this.length; i++){
        console.log(this[i])
    }
}

words.returnAllElements();

array.returnAllElements();

// trim () polyphil

const person = {
    firstname : "   Lakshay",
    lastname : "Singh"
}

Object.prototype.returnActualLength = function(){
    return this.trim().length
}

console.log(person.firstname.returnActualLength())


//  Prototype Inheritance

const obj1 = {
    name : "abhishek",
    city : "Delhi",
    intro : function(){
        return `Hi I am ${this.name} and I am from ${this.city}`
    }
}

const obj2 = {
    name : "lakshay",
    city : "Dehradun"
}

Object.setPrototypeOf(obj2, obj1)

console.log(obj1.intro());
console.log(obj2.intro());

