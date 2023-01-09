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

// create a new array to store user options 
let optionsArray = [];

// rather than if else - we can use a while loop 


// call it
getPasswordLength()

// the function
// function getPasswordLength() {

//     // create a while loop 
//     let num = 0

//     while (num < 10 || num > 64 || !Number.isInteger(+num));
//     // update the user 
//     console.log(`chosen length: ${num}`)
//     alert(`Great! Your password length will be ${num}.`)
//     // return num as an integer 
//     return parseInt(num);
// }

// need to add else?? -- do?

function getPasswordLength() {

    // create a while loop 
    let num = 0
    do {
        num = prompt('Please enter a password length (10-64):')
        if (num < 10) {
            alert("Password must be more than 10 characters!")
        } else if (num > 64) {
            alert("Password must be less than 64 characters!")
        }
    } while (num < 10 || num > 64 || !Number.isInteger(+num));
    // update the user 
    console.log(`chosen length: ${num}`)
    alert(`Great! Your password length will be ${num}.`)
    // return num as an integer 
    return parseInt(num);
}

// call getPasswordOptions
getPasswordOptions()

// create another function for the boolean options
function getPasswordOptions() {
    // let optionsArray = [];
    // conditional to control booleans selected 
    // use do while so they repeat, should user select NO TYPES 
    // do {
    // ask prompts 
    let lower = confirm('Do you want lowercase characters?')
    let upper = confirm("Do you want uppercase characters?")
    let special = confirm("Do you want special characters?")
    let numeric = confirm("Do you want numeric characters?")

    if (lower) {
        // add lowercase chars to the new array 
        optionsArray = optionsArray.concat(lowerCasedCharacters);
        console.log('current option1', optionsArray)
    } if (upper) {
        // add uppercase chars to new array 
        optionsArray = optionsArray.concat(upperCasedCharacters);
        console.log('current option2', optionsArray)
    } if (special) {
        // add special chars to new array
        optionsArray = optionsArray.concat(specialCharacters);
        console.log('current option3', optionsArray)
    } if (numeric) {
        // add numerical chars to new array
        optionsArray = optionsArray.concat(numericCharacters);
        console.log('current option4', optionsArray)
    } else {
        console.log('empty array - no types selected' + optionsArray)
        alert("You must choose at least 1 type of character.")
        // re-call test - not within function
        // getPasswordOptions()
        // call the caller Function!?
        callOptions()
    }
}

// create a function to re-call the last no types are selected 

function callOptions() {
    if (optionsArray.length === 0) {
        console.log('Array is empty; please select 1 type')
        // re-call options function if array empty
        getPasswordOptions() 
        //debug
        console.log('getOptions function re-called' + optionsArray)
    }
}

// call main
callOptions()



