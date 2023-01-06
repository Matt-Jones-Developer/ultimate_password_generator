// password generator program

// Global scope variables

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

// pwLength
let pwLength;

// PROMPTS

// call getPassword function 
getPasswordOptions()

// // Function to prompt user for password options
function getPasswordOptions() {
    // store the prompt entry as a variable 
    let num = Number(prompt("Please choose a password length (10-64):"))
    // debug
    console.log(num)
    // console.log(typeof(num)) //number
    // console.log(typeof(pwLength)) // undefined obvs
    // so Number catches NaN - YES 
    // expression to determine whether correct number entered
    if (num < 10 || num > 64 || !Number.isInteger(+num)) {
        // alert and debug
        console.log("ERROR: must be a number between 10 and 64")
        alert("ERROR: must be a number between 10 and 64")
        // retry:recall f
        getPasswordOptions()
    }

    else {
        // assign num entry to pwLength variable 
        // alert and debug
        pwLength += num;
        console.log(typeof(num)) // still a number
        console.log(typeof(pwLength)) // NUMBER !! WTF
        // BUG: I receive NaN as the number accepted now??
        console.log(`Your selected pw length is ${toString(pwLength)}.`)
        alert(`Great! Your password length will be ${toString(pwLength)}.`) // object undefined 
        alert(pwLength) // prints as NaN ??
        alert(`Great! Your password length will be ${parseInt(pwLength)}.`) // object undefined 
    }
}

console.log(typeof(pwLength)) 

// a do while is better for this, plus it catches the NaNs
// BUT, how do we add an ELSE here to alert for wrong input??
// const intPrompt = () => {
//     let num = 0
//     do {
//         num = prompt('Please enter a password length (10-64):')
//     } while (num < 10 || num > 64 || !Number.isInteger(+num));
    
//     return parseInt(num);
// }

// console.log(intPrompt())

function getOtherOptions() {

    let optionsArray = [];
    // request boolean prompts
    let special = confirm("Do you want special characters?")
    let lower = confirm("Do you want lowercase?")
    let upper = confirm("Do you want uppercase?")
    let nums = confirm("Do you want numbers?")

    if (special) {
        optionsArray+specialCharacters.concat();
        console.log(optionsArray)
    }
    else if (lower) {
        optionsArray+lowerCaseCharacters.concat();
        console.log(optionsArray)
    }
    else if (upper) {
        optionsArray+upperCaseCharacters.concat();
        console.log(optionsArray)
    }
    else if (nums) {
        optionsArray+numericCharacters.concat();
        console.log(optionsArray)
    }
    else {
        alert("You must have at least 1 type")
    }
    
}

// call extra options 
// getOtherOptions()

// get random 
getRandom(specialCharacters,lowerCasedCharacters,upperCasedCharacters,numericCharacters)
// Function for getting a random element from an array
function getRandom(arr) {
    // empty arr to store all the available chars (will be USER CHOSEN EVENTUALLY)
    let newArray = specialCharacters+lowerCasedCharacters+upperCasedCharacters+numericCharacters.concat();
    // console.log(newArray)
    // pick a char from newArray pwLength times ??

    // picks a single char
    let singleChar = newArray[Math.floor(Math.random() * newArray.length)];
    // console.log(singleChar);

    // add another (for loop until pwLength === value)
    // repeat until === pwLength 
    // for (let i = 0; i < pwLength; i++) {
    //     const element = singleChar++;
    // }
    // console.log(element)
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
