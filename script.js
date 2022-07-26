// Assignment code here
var numbers = "0123456789";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*"

var passwordCharSet;
var passwordLength;

// var numbers = numbers.split("");
// var lowercaseLetters = lowercaseLetters.split("");
// var uppercaseLetters = uppercaseLetters.split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function passwordParam() {

  passwordLength = prompt("Length of password? (Between 8-128 Characters)") 
  if (isNaN(passwordLength) === true || passwordLength > 128 || passwordLength < 8) {
    alert("Please enter a valid length.")
    return passwordParam()
  }

  var upperCase = confirm("Include: UPPERCASE? Ok for yes, cancel for no")
  if (upperCase = true) {
    passwordCharSet = uppercaseLetters.concat(passwordCharSet)
  }
  var lowerCase = confirm("Include: Lowercase? Ok for yes, cancel for no")
  if (lowerCase === true) {
    passwordCharSet = lowercaseLetters.concat(passwordCharSet)
  }
  var numeric = confirm("Include: Numerical Digits? Ok for yes, cancel for no")
    if (numeric === true) {
      passwordCharSet = numbers.concat(passwordCharSet)
    }
  var special = confirm("Include: Special Chacters? Ok for yes, cancel for no")
    if (special === true)
    passwordCharSet = specialCharacters.concat(passwordCharSet)

  genPassword()
  }

// Add event listener to generate button
generateBtn.addEventListener("click", passwordParam)



function genPassword() {
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * passwordCharSet.length);
  password += passwordCharSet.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
  }