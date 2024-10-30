// Promises in JavaScript

// Promise is an object that represents the eventual completion of an async task 

// Promise has 3 stages

// fulfilled / resolved
// pending
// rejected

// resolve -> .then()
// reject -> .catch()
// finally() -> always executes

// creating a promise 

let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise one");
        resolve()
    }, 1000)
})

// // consuming a promise

promiseOne.then(() => {
    console.log("promise one consumed")
})

//  

new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log("promise 2")
       resolve()
    }, 1000)
}).then(() => console.log("promise consumed"))

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise one");
        let error = true;
        if(!error){
            resolve({
                username : "abc",
                email : "abc@gmail.com"
            })
        }else{
            reject("couldn't fetch user details")
        }

    }, 1000)
})

// consuming a promise

promiseTwo.then((data) => {
    console.log("promise one consumed", data)
}).catch((err) => {
    console.log(err)
})

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise one");
        let error = true;
        if(!error){
            resolve({
                username : "abc",
                email : "abc@gmail.com"
            })
        }else{
            reject("couldn't fetch user details")
        }

    }, 1000)
})

promiseThree.then((data) => {
     return data.username
}).then((username) => {
    console.log(username)
}).catch((err) => console.log(err))

// Making an Api call using fetch, handling with promises
// fetch list of 10 users

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  return response.json()
}).then((data) => {
    console.log(data)
})

// using async await to do the same task (fetching list of 10 users)

const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)
}

console.log("fetching users", fetchUsers())
