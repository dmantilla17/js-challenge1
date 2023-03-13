// Assignment Code
var generateBtn = document.querySelector("#generate");
// Placing the function to create the passcode
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var passwordLength=prompt("How long would you like your password to be?");
  passwordText.value = password;
}
//making qualifications for the password
function getPasswordLength() {
  var length = parseInt(
    prompt("Choose a password between 8 and 128 characters.")
  );
  //if statement for the length of the password
  if (length < 8 || length > 128 || isNaN(length)) {
    return getPasswordLength();
  }

  return length;
}
//adding characters to be able to generate the password
function generatePassword() {
  //adding characters for the password
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersCharacters = "0123456789";
  var symbolsCharacters = "!@#$%^&*()_+=";
  var chosenCharacters = "";
  var password = "";

  var passwordLength = getPasswordLength();
  console.log(passwordLength);
//if statements to ask user if they would like to use numbers,upper case and lower case and special characters.
  if (confirm("Would you like to use numbers?"))
    chosenCharacters += numbersCharacters;
  if (confirm("Would you like to use lowercase characters?"))
    chosenCharacters += lowercaseCharacters;
  if (confirm("Would you like to use uppercase characters?"))
    chosenCharacters += uppercaseCharacters;
  if (confirm("Would you like to use special characters?"))
    chosenCharacters += symbolsCharacters;
  console.log(chosenCharacters);
//returning the password using a for loop to base how much the user wanted to put
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter =
      chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    password += randomCharacter;
  }

  return password;
}

//password library
generateBtn.addEventListener("click", writePassword);
