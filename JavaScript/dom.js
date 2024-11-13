// getElementById()

// let title = document.getElementById("title");
// // console.log(title)

// // getElementsByClassName()

// let paras = document.getElementsByClassName("para")

// console.log(paras[0]);

// getElementsByTagName()

// let myBtn = document.getElementsByTagName("button");

// console.log(myBtn[0]);

// query Selector

// let heading = document.querySelector("#title");

// console.log(heading);

// let para = document.querySelector(".para");

// console.log(para);

// let para = document.querySelectorAll(".para");

// console.log(para);

// let btn = document.querySelector("button");
// console.log(btn);

// let myBox = document.querySelector(".box");


let heading = document.querySelector("#title");

// styling through javascript

// setTimeout(() => {
//     heading.style.color = "red";
// }, 5000);

//

let mode = "light";

function enableDarkMode(){
    if(mode === "light"){
        document.body.style
        .backgroundColor = "black";
        mode = "dark"
        document.querySelector("#title")
        .style.color = "white"
        console.log("mode", mode)
    }else if(mode === "dark"){
        document.body.style
        .backgroundColor = "white";
        mode = "light"
        document.querySelector("#title")
        .style.color = "black"
        console.log("mode", mode)
    }
}

let btn = document
.querySelector("button");

// btn.onclick = enableDarkMode;

// btn.addEventListener("click", enableDarkMode);















