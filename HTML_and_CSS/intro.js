// alert("Hello World");

// let a = prompt("Enter number 1", 20);

// let b = prompt("Enter number 2", 20);

// let confirmInput = confirm("Do you want to print a?")

// // a = parseInt(a);

// // b = parseInt(b);

// if(confirmInput){
//     document.write(a)
// }else{
//     document.write("not printing a")
// }

const person = {
    name : "nehal",
    gender : "male",
    printName : () => {
        console.log(this.name)
        return;
    }
}

person.printName()