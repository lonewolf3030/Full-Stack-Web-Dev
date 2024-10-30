// callbacks in JavaScript

// The function that is passed as an argument inside other function is called callback fn()

const addition = (num1, num2) => {
  return num1 + num2;
}

const sumOfNumbers = (num1, num2, callback) => {
   return callback(num1, num2)
}

console.log(sumOfNumbers(5, 5, addition));

// another eg

function fetchDataFromServer(callback) {
  setTimeout(function() {
  const data = {
  name: "John",
  age: 30
  };
  callback(data); 
  }, 1000);
}

  
function displayData(data) {
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}

fetchDataFromServer(displayData);

// Callback Hell / Pyramid Of Doom

const ApiCall = (task, callback) => {
  setTimeout(() => {
    console.log(task);
    if(callback){
      callback()
    }
  }, 2000)
}

ApiCall("placing order", () => {
  ApiCall("processing payment", () => {
    ApiCall("generating bill")
  })
})
  


