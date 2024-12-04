let outputDiv = document.getElementById("output");
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");

const correctPassword = "showtime";
outputDiv.innerHTML += "<h2>Using a password prompt</h2>";

submitButton.addEventListener("click", => ()=>{
    let password;
    let attempt = 0;

    do{
        password = passwordInput.value;

        if(password === correctPassword){
            outputDiv.innerHTML += "Acess Granted<br>"
            passwordInput.disabled = true;
            submitButton.disabled = true;
            break;
        }else{
            outputDiv.innerHTML += "Incorrect Password. Attempt ${++attempt}. Try again <br>";
        }
    }
});
