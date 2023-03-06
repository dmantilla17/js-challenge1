// Assignment Code
var generateBtn = document.querySelector("#generate");

// Placing the function to create the passcode 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var passwordLength=prompt("How long would you like your password to be?");
  passwordText.value = password;
}
function getPasswordLength(){
  var length=parseInt(prompt("Choose a password between 8 and 128 characters."));
//if statement
if(( length< 8 || length > 128) || isNaN(length)) {
  return getPasswordLength();
}
  return length;
}
function generatePassword(){
  var lowercaseCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsCharacters = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];
var chosenCharacters= ['',];
var password=[''];

var passwordLength= getPasswordLength();
console.log(passwordLength);

return password;
}


//do you want those numbers?
//Setting up the questions that will be generated
if(confirm("Would you like to use numbers?")) chosenCharacters += numbersCharacters;
if(confirm("Would you like to use lowercase characters?")) chosenCharacters += lowercaseCharacters;
if(confirm("Would you like to use uppercase characters?")) chosenCharacters += uppercaseCharacters;
if(confirm("Would you like to use special characters?")) chosenCharacters += symbolsCharacters;
console.log(chosenCharacters);

for (var i=0; i< passwordLength; i++ ){
  var randomCharacter= chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  password += randomCharacter;
}




if ( 
  symbolsChar === false &&
  uppercaseChar === false &&
  lowercaseChar === false &&
  numbersChar === false &&
     );
 {
  alert("Must choose atleast one character type");
  return null;
}
console.log(symbolsChar,uppercaseChar,lowercaseChar,numbersChar);

//password library 
var passwordLibrary = [];
if (symbolsChar) {
  passwordLibrary= passwordLibrary.concat(symbolsChar);
}
if (uppercaseChar) {
  passwordLibrary = passwordLibrary.concat(uppercaseChar);
}
if (lowercaseChar) {
  passwordLibrary = passwordLibrary.concat (uppercaseChar);
}
if (numbersChar) {
  passwordLibrary = passwordLibrary.concat(numbersChar);
}
//loop
var generatePassword="";
for (var i=0;i < passwordLength; i++) {
  var randomCharacter = passwordLibrary [Math.floor(Math.random() * passwordLibrary.length)];
  generatePassword = generatePassword + randomCharacter;
}

return generatePassword;
//password input//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value= password

}
generateBtn.addEventListener("click", writePassword);

