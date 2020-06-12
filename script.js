//variables 
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "@", "#", "$", "%", "^", "*", "'", "=", "-", "_"];

//function
function generatePassword() {

  var password = "";
  // after you ask the length prompt, you want the computer to limit the length of the password.
  var passLength = prompt("how long would you like your password (no more than 120, no less than 8)?");
  if (8 <= passLength && passLength <= 128) {
    console.log(passLength);
  }
  // if not a correct value
  else {
    console.log("value not valid");
    alert("Value not valid. Choose a number between 8 and 128")
  } 
  // create while loop that says if the answer is invalid, try again. 
    while (passLength<8 || passLength>128) {
    var passLength = prompt("how long would you like your password(no more than 120, no less than 8)?"); 
      // 8<=passwordText=>128
    
      if (8 <= passLength && passLength <= 128) {
        console.log(passLength);
      }
      // if not a correct value
      else {
        console.log("value not valid");
        alert("Value not valid. Choose a number between 8 and 128")
      }
    }
  

  var passwordCharSet = [];
  // after you ask the charType, you want the computer to only use certain variables. using booleans 
  var yesLower = confirm("Would you like lowercase characters?");
  // if yes, include array yesLower, start spread of array indexes
  if (yesLower) {
    passwordCharSet = [...charLower]
  }

  var yesUpper = confirm("Would you like uppercase characters?");
  // if yes, include array charUpper, create spread that allows for the array to build on the previous array 
  if (yesUpper) {
    passwordCharSet = [...passwordCharSet, ...charUpper]
  }
 
  var yesNum = confirm("Would you like numbers?");
  // if yes, include array num, create spread that allows for the array to build on the previous array 
  if (yesNum) {
    passwordCharSet = [...passwordCharSet, ...num]
  }

  var yesSym = confirm("Would you like symbols?");
  // if yes, include sym, create spread that allows for the array to build on the previous array 
  if (yesSym) {
    passwordCharSet = [...passwordCharSet, ...sym]
  }
  
  // while loop if user selects "cancel" on all prompts 
  while (!yesLower && !yesUpper && !yesNum && !yesSym) {
    alert("You must select at least 1 character choice");
    var passwordCharSet = [];

    var yesLower = confirm("Would you like lowercase characters?");
    if (yesLower) {
      passwordCharSet = [...charLower]
    }
  
    var yesUpper = confirm("Would you like uppercase characters?");
    if (yesUpper) {
      passwordCharSet = [...passwordCharSet, ...charUpper]
    }
   
    var yesNum = confirm("Would you like numbers?");
    if (yesNum) {
      passwordCharSet = [...passwordCharSet, ...num]
    }
  
    var yesSym = confirm("Would you like symbols?");
    if (yesSym) {
      passwordCharSet = [...passwordCharSet, ...sym]
    }
  }
  
  // run for loop that sets i equal to the first index of your array passCharSet, that is less than the length that the user wants because that would result in the last index, and that keeps adding to itself. It also establishes the password equal to the password plus the value of the random set. this will output it as a string. 
  for (i = 0; i < passLength; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  // return the string value of the password 
  return password
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
