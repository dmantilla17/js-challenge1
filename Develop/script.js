// Assignment Code
// how to randomize the password
//Created Variables for the passsword to generate different options 
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsChar = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];

//Created the generate button to select random numbers
var generateBtn = document.querySelector("#generate");
// Placing the function to create the passcode 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength=prompt("How long would you like your password to be?");
  passwordText.value = password;
}
if (passwordLength <8 || passwordLength > 128) {
  alert ("Must be atlest 8 characters and no more than 128 characters.");
  return null; 
}
//Setting up the questions that will be generated
var symbolsChar= confirm("Would you like Symbols in your password?");
var uppercaseChar=confirm("Would you like Uppercase Letters in your password?");
var lowercaseChar=confirm("Would you like Lowercase Letters in your password?");
var numbersChar=confirm("Would you like numbers in your password?");
// Add event listener to generate button
//Setting up the questions that will be generated
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

