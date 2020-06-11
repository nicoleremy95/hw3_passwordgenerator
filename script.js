// PART 1
//variables 
var charUpper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charLower ='abcdefghijklmnopqrstuvwxyz';
var num ='0123456789';
var sym ='!@#$%^&*=-_';

function  generatePassword (){


// after you ask the length prompt, you want the computer to limit the length of the password.Text.
var passLength = prompt("how long would you like your password(no more than 120, no less than 8)?");{
  // 8<=passwordText=>120
  // do {
    if (8<=passLength && passLength<=120){
      console.log(passLength);
    }
    else {
      console.log("value not valid");
      alert("value not valid. choose a number between 8 and 120")
   }
  }
  // while (8<=passLength && passLength<=120);

var passwordCharSet = " ";
// after you ask the charType, you want the computer to only use certain variables. using booleans 
var yesLower = confirm("would you like lowercase?");
  // if yes, include charLower
    if (yesLower) {
      console.log(charLower);
      passwordCharSet += charLower;
    }
  // if no, do not include charLower
    else {
      console.log("no lowercase");
    }
var yesUpper = confirm("would you like uppercase?");
  // if yes, include charUpper
  if (yesUpper) {
    console.log(charUpper);
    passwordCharSet += charUpper
  }
  // if no, do not include charUpper
  else {
    console.log("no uppercase");
  }
var yesNum = confirm ("would you like numbers?");
  // if yes, include num
  if (yesNum) {
    console.log(num);
    passwordCharSet += num
  }
  // if no, do not include num
  else {
    console.log("no numbers");
  }
var yesSym = confirm ("would you like symbols?");
  // if yes, include sym
  if (yesSym) {
    console.log(sym);
    passwordCharSet += sym
  }
  // if no, do not include sym
  else {
    console.log("no symbols");
  }
}

// PART 2
var generateBtn = document.querySelector("#generate");
// WRITE PASSWORD TO THE #PASSWORD INPUT
// computer should take the results from passLength and charType and run a function to give a password 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // i want a random character for each slot of my passLength. This means I would do a mathrandom for each slot. 
    var passwordText = passwordCharSet[Math.floor(Math.random()*passLength)];
    // for loop
    for (i=0; i<passLength; i++) {
      userPassword += passwordCharSet.charAt(Math.floor(Math.random() * passLength));
    }
    passwordText.value = password;

}

// ADD EVENT LISTENER TO GENERATE BUTTON
generateBtn.addEventListener("click", writePassword);




