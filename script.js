// PART 1
//variables 
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "@", "#", "$", "%", "^", "*", "'", "=", "-", "_"];

function generatePassword() {

var password = "";
  // after you ask the length prompt, you want the computer to limit the length of the password.
  var passLength = prompt("how long would you like your password(no more than 120, no less than 8)?"); {
    // 8<=passwordText=>128
    // do {
    if (8 <= passLength && passLength <= 128) {
      console.log(passLength);
    }
    // if not a correct value
    else {
      console.log("value not valid");
      alert("value not valid. choose a number between 8 and 128")
    }
  }
  // while (8<=passLength && passLength<=120);

  var passwordCharSet = [];
  // after you ask the charType, you want the computer to only use certain variables. using booleans 
  var yesLower = confirm("would you like lowercase?");
  // if yes, include charLower
  if (yesLower) {
    passwordCharSet = [...charLower]
    // passwordCharSet.push(charLower);
    // console.log(passwordCharSet);

  }
  // if no, do not include charLower
  else {
    console.log("no lowercase");
  }
  var yesUpper = confirm("would you like uppercase?");
  // if yes, include charUpper
  if (yesUpper) {
    passwordCharSet = [...passwordCharSet, ...charUpper]


    // console.log(charUpper);
    // passwordCharSet.push(charUpper);
  }
  // if no, do not include charUpper
  else {
    console.log("no uppercase");
  }
  var yesNum = confirm("would you like numbers?");
  // if yes, include num
  if (yesNum) {
    create spread that 
    passwordCharSet = [...passwordCharSet, ...num]
  }
  // if no, do not include num
  else {
    console.log("no numbers");
  }
  var yesSym = confirm("would you like symbols?");
  // if yes, include sym
  if (yesSym) {
    passwordCharSet = [...passwordCharSet, ...sym]
    // console.log(sym);
    // passwordCharSet.push(sym);
  }
  else {
    console.log("no symbols");
  }
  console.log(passwordCharSet);

  for (i = 0; i < passLength; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password
}
// // set passwordCharSet var   
// var passwordCharSet = [yesLower+yesUpper+yesNum+yesSym]
// // mix array shuffle. let array equal passwordCharSet
// function shuffle(passwordCharSet){
// }
//   // trim array .length
// var passLength = passLength.length
//   // use .join this turns array into string 
// var newPassword = passLength();
// }

// PART 2

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// PART 3
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





