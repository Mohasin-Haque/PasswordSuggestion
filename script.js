const password = document.querySelector("#password");
const randomPassword = document.querySelector(".random-password");
var passwordLength = 14;
var passwordVal = "";

//Random Password Suggetion
window.onload = function loadPassword(){
    let randomGenerateChars = "0123456789ascdefghiijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRSTUVWXYZ!@#$%^&*";

    for(var i=0; i<passwordLength; i++){
        let randomNumber = Math.floor(Math.random()* randomGenerateChars.length);
        passwordVal+= randomGenerateChars.substring(randomNumber, randomNumber+1);

    }
    randomPassword.innerHTML = passwordVal;
}