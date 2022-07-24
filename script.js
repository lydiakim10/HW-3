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

// Constant Arrays
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Variable Statements
var passwordChar;
var chooseLength = "";
var passwordInput = []; 

// Fuction when Generate Password is clicked
function generatePassword() {
  var chooseLength = window.prompt("Choose between 8 and 128 characters");
  console.log(chooseLength);

  // Choosing Length of Password
  if ((chooseLength < 8) || (chooseLength > 128)) {
    alert("Please choose a number between 8 and 128");
    return;
  }

// Confirming Different Characters
  else {
  var chooseNumber = confirm("Do you want to include numbers?");
  var chooseLower = confirm("Do you want to include lowercase letters?");
  var chooseUpper = confirm("Do you want to include uppercase letters?");
  var chooseSpecial = confirm("Do you want to include special characters?");
  };

// Different Combination Possibilities through "IF" statements
  if (chooseNumber && chooseLower && chooseUpper && chooseNumber) {
    passwordChar = numbers.concat(lowerCase, upperCase, specialChar);
  } 
  else if (chooseNumber && chooseLower && chooseUpper) {
    passwordChar = numbers.concat(lowerCase, upperCase);
  } else if (chooseNumber && chooseLower && chooseSpecial) {
    passwordChar = numbers.concat(lowerCase, specialChar);
  } else if (chooseNumber && chooseUpper && chooseSpecial) {
    passwordChar = numbers.concat(upperCase, specialChar);
  } else if (chooseLower && chooseUpper && chooseSpecial) {
    passwordChar = lowerCase.concat(upperCase, specialChar);
  }
  else if (chooseNumber && chooseLower) {
    passwordChar = numbers.concat(lowerCase);
  } else if (chooseNumber && chooseUpper) {
    passwordChar = numbers.concat(upperCase);
  } else if (chooseNumber && chooseSpecial) {
    passwordChar = numbers.concat(specialChar);
  } else if (chooseLower && chooseUpper) {
    passwordChar = lowerCase.concat(upperCase);
  } else if (chooseLower && chooseSpecial) {
    passwordChar = lowerCase.concat(specialChar);
  } else if (chooseUpper && chooseSpecial) {
    passwordChar = upperCase.concat(specialChar);
  }
  else if (chooseNumber) {
    passwordChar = numbers;
  } else if (chooseLower) {
    passwordChar = lowerCase;
  } else if (chooseUpper) {
    passwordChar = upperCase;
  } else if (chooseSpecial) {
    passwordChar = specialChar;
  }
  else {
    alert("Please choose at least one of the criterias");
    return;
  };

// Creating Random Characters
  console.log(passwordChar);
  for (var i = 0; i < chooseLength; i++) {
    var diffOptions = passwordChar[Math.floor(Math.random() * passwordChar.length)];
    passwordInput.push(diffOptions);
  };

// Input into Password id in HTML
  var password = passwordInput.join("");
  console.log(password);
  return password;

}
