// Arrays in JavaScript

// Creating an array in javascript

let fruits = ['apple', 'banana', 'orange'];
// indexing -     0        1        2  

// Array Constructor in JavaScript

// const array = [];

const arr = new Array(3);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[9] = 10;

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// iterating fruits array


for(let i = 0; i < fruits.length; i++){  // array.length = 3
    console.log(fruits[i])
}


// for of loop

// const array = [1, 2, 3, 4, 5]

/*
for(let num of array){ // 1
    console.log(num)
}
*/


// Array Methods in JavaScript

// Push Method

const array = [1,2,3];

array.push(4); // [1,2,3,4]
// console.log(array[3])

// Pop Method

let lastElem = array.pop();
// console.log(lastElem);

// Shift Method

let firstElem = array.shift();;
// console.log(firstElem)

// unshift Method

array.unshift(10);

for(let num of array){
    console.log(num);
}

// sort method

array.sort((a, b) => a - b);

console.log("After sort method")

for(let num of array){
    console.log(num);
}

// complex array structure

let myArray = [
    1, "Hello", true, [2, 4, 6],
    {
    name: "John",
    age: 30
    },
    function() {
    console.log("This is a function inside an array");
    }
];

console.log(myArray[5]()); // output -> This is a function inside an array








