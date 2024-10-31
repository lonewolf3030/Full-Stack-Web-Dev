// Functions in JavaScript

// creating a function

function printHello(){
    return "Hello World"
}

console.log(printHello()); // output -> Hello World

// function with parameters

function addTwo(num1, num2){
   return num1 + num2;
}

console.log(addTwo(3, 5)) // output -> 8

// Example of a simple JavaScript function which will calculate the area of a rectangle:

function calculateArea(width, height) {
    let area = width * height;
    console.log(area);
  }
  
  // Call the function with arguments
calculateArea(5, 10);  // output -> 50

// Arrow function

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// console.log("Arrow function example", addTwoNumbers(20, 30));

// Function expression

const multiply = function(num1, num2){
    return num1 * num2
}

console.log(multiply(2, 3))

// achieving the same in one line using arrow function

const addTwoNumbers = (num1, num2) => num1 + num2;

console.log(addTwoNumbers(20, 30));
