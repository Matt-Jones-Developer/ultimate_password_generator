
// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '=',
  '\\',
  '/',
  '|',
  '*',
  '&',
  '§',
  '`',
  "'",
  '"',
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// function CALLS

// getPasswordOptions PROMPT
let num = prompt("Please choose a password length (10-64):")
console.log(num)

alert(`You chose a password length of ${num}`)

// Function to prompt user for password options
// function getPasswordOptions() {
//   // prompt("Please choose a password length (10-64):")
//   // store the entry as a variable 
//   let num = prompt("Please choose a password length (10-64):")
//   // print value entered to console 
//   console.log(num)
//   // if (num < 10) {
//   //   // alert 
//   //   console.log("ERROR: must be a number between 10 and 64")
//   //   alert("ERROR: must be a number between 10 and 64")
//   //   // retry
//   //   getPasswordOptions()
//   }
// }
// call getPassword function 
// getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);