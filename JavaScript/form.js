// Form Validation

function submitForm(){
    let username = document.querySelector("#username")
    .value;
    let email = document.querySelector("#email")
    .value;
    let password = document.querySelector("#password")
    .value;

    if(username.length < 5){
        // alert("username must be 5 chars long")
        document.querySelector("#usernameErr")
        .innerHTML = "username must be 5 chars long"
    }

    if(email.length < 5){
        // alert("Email must be 5 chars long")
         document.querySelector("#emailErr")
        .innerHTML = "Email must be 5 chars long"
    }

    if(password.length < 5){
        // alert("Password must be 5 chars long")
         document.querySelector("#passwordErr")
        .innerHTML = "Password must be 5 chars long"
    }

    console.log({
        username, email, password
    })

    return false
}
