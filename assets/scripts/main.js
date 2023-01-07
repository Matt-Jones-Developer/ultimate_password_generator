// |----------------------------------|
// |*** password generator program ***|
// |----------------------------------|

// Globals

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

// variable to store password length
let pwLength = 0;

// new array to store user options 
let optionsArray = [];

// additional tracker array to store types - for fun!
let typesSelected = [];

// Buttons

// add user login name btn
let loginBtn = document.querySelector('#btn-user');
// button to heading selector
let welcomeHeading = document.querySelector('div.header-welcome #user');

// get started button feature 
let getStartedBtn = document.querySelector('#btn-start');

// genBtn: references the #generate element
let genBtn = document.querySelector('#generate');

// start program
startApp()

// user login
// on-click -> login handler 
loginBtn.onclick = () => {
    setUserName();
}

// call startApp on-load
function startApp() {
    // if localstorage empty 
    if (!localStorage.getItem('name')) {
        // update user with welcome alert
        alert('Welcome to Ultimate Password Generator!\nPlease login to get started.');

    } else {
        // retrieve stored name and display it
        let storedName = localStorage.getItem('name');
        welcomeHeading.innerHTML = 'Welcome,  ' + storedName + '!';
    }
}

// set up a username
function setUserName() {
    // constant myName which prompts on btn press
    const myName = prompt('Please enter your username.');

    // if myName === true;
    if (myName) {
        // store new value
        localStorage.setItem('name', myName);
        // update the welcome element
        welcomeHeading.innerHTML = 'Welcome,  ' + myName + '!';

    } else {
        // re-call function
        recallUserName()
    }
}

// function to re-call setUserName
function recallUserName() {
    // re-run setUserName()
    setUserName();
}

// A get started button that allows user a choice when to start 
// on-click 'get started' handler 
getStartedBtn.onclick = () => {
    getPasswordLength();
}

// setting a password length 
function getPasswordLength() {
    // while
    let num = 0
    // 'do' first
    do {
        num = prompt('Please enter a password length (10-64):')
        if (num < 10) {
            alert("Password must be more than 10 characters!")
        } else if (num > 64) {
            alert("Password must be less than 64 characters!")
        } else if (!Number.isInteger(+num)) {
            alert("Hey! No special characters or other funny business!")
        }
    } while (num < 10 || num > 64 || !Number.isInteger(+num));

    // debug
    console.log(`num typeOf: ${typeof (num)}`)
    console.log(`chosen length: ${num}`)
    // update the user 
    alert(`Great! Your password length will be ${num}.`)

    // call getPasswordOptions
    getPasswordOptions()
    //return as an integer 
    return parseInt(num);

}

// create another function for the boolean options 
// (unless I can merge?) [TODO]
function getPasswordOptions() {

    // conditional to control booleans selected 
    let lower = confirm('Do you want lowercase characters?')
    let upper = confirm("Do you want uppercase characters?")
    let special = confirm("Do you want special characters?")
    let numeric = confirm("Do you want numeric characters?")

    if (lower) {
        // add lowercase chars to the new array 
        optionsArray = optionsArray.concat(lowerCasedCharacters);
        console.log('current option1', optionsArray)
        // add type to types array
        typesSelected.push('lower');
        console.log(typesSelected)
    } if (upper) {
        // add uppercase chars to new array 
        optionsArray = optionsArray.concat(upperCasedCharacters);
        console.log('current option2', optionsArray)
        // add type to types array
        typesSelected.push('upper');
        console.log(typesSelected)
    } if (special) {
        // add special chars to new array
        optionsArray = optionsArray.concat(specialCharacters);
        console.log('current option3', optionsArray)
        // add type to types array
        typesSelected.push('special');
        console.log(typesSelected)
    } if (numeric) {
        // add numerical chars to new array
        optionsArray = optionsArray.concat(numericCharacters);
        console.log('current option4', optionsArray)
        // add type to types array
        typesSelected.push('numeric');
        // debug: types selected
        console.log(typesSelected)
        // debug: check array size 
        console.log(optionsArray.length)

    } else {
        // invoked IF NO TYPES == TRUE (0)
        // debug 
        console.log('empty array - no types selected', optionsArray)
        // restart
        recallOptions()
    }

    // call optionsOK
    optionsOK()
}

// create a function to re-call the last: 

function recallOptions() {
    // IF no types are selected 
    if (optionsArray.length === 0) {
        // debug 
        console.log('Array is empty; please select at least 1 type')
        console.log(`getPasswordOptions function re-called: ${optionsArray}`)
        // alert user at the appropriate point
        alert("You must choose at least 1 type of character.")
        // re-call options function if array empty
        getPasswordOptions()
    }
}

// new 'options OK' function -force user feedback once selected types OK
function optionsOK() {
    // update the user with choices
    alert(`Awesome! You have selected ${optionsArray.length} possible characters.\nYou selected types: ${typesSelected}.`)
    // update user with chosen types (for fun, why not!)
    alert('You can now hit the GENERATE button below.  Good work!')
    // testing getRandom
    getRandom()

}

let stringChar = '';

// get a random element from chosenOptions array
function getRandom() {
    // pick a character from optionsArray
    let singleChar = Math.floor(Math.random() * optionsArray.length);
    // debug: it prints a single character each time
    console.log('random char was picked:', optionsArray[singleChar]);
    stringChar = optionsArray[singleChar];
    // debug; yes, it's the same char as this function picks
    console.log(stringChar)
}

// generatePassword()

// Function to generate password with user input
function generatePassword() {
    // debug - calls
    // console.log('accessed generatePassword OK')
    // create the empty STRING to hold the password
    let passwordArray = "";
    // iterate pwLength times 
    for (let i = 0; i < pwLength; i++) {
        // can we even call a function within an expression?
        // call it to get each random digit 
        // getRandom()
        // why are we using random here?? We have already randomised
        // passwordArray.push(Math.floor(Math.random() * getRandom()));
        // what do we want to do??
        // add the generated random to pwArray, each pass
        // passwordArray.push(stringChar)
        passwordArray += "Hello!";
    }
    // once finished, show the generated password string 
    // console.log(passwordArray)
    // an essential return 
    return passwordArray;
}

// let practicePassword = "";
// for (let i = 0; i < 100; i++) {

//     practicePassword += "j"

// }


// return practicePassword;


// // Get references to the #generate element
// let genBtn = document.querySelector('#generate');

// their logic is actually:
// -> hit the genBtn -> invoke writePassword -> which assigns var 'password' = generatePW
// the passwordText var then adds the pw to the textfield 

// Write password to the #password input
function writePassword() {
    // this var ASSIGNS AND CALLS genPW here 
    let password = generatePassword();
    // var text sent to textfield (#password element)
    let passwordText = document.querySelector('#password');
    // assign that value to var password 
    passwordText.value = password;

    // // testing getRandom
    // getRandom()
}

// Add event listener to generate button
genBtn.addEventListener('click', writePassword);





