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

// additional tracker array to store types - for fun! - SCOPE?? Why Global??
let typesSelected = [];

// global random password array - does this NEED to be global also??
let randomPassword = [];

// Buttons

// user login btn
let loginBtn = document.querySelector('#btn-user');
// button to heading selector
let welcomeHeading = document.querySelector('div.header-welcome #user');

// get started button feature 
let getStartedBtn = document.querySelector('#btn-start');

// the generatePassword btn

// initialize BEFORE adding selector
// genBtn: references the #generate element
let genBtn = document.querySelector('#generate');

// Add event listener to generate button
genBtn.addEventListener('click', writePassword);


// start program 
startApp()

// user login
// on-click -> login handler 
loginBtn.onclick = () => {
    setUserName();
}

// function to re-call setUserName
function recallUserName() {
    // re-run setUserName()
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
    const myName = prompt('Please enter a username.');

    // if myName === true;
    if (myName) {
        // store new value
        localStorage.setItem('name', myName);
        // update the welcome element
        welcomeHeading.innerHTML = 'Welcome,  ' + myName + '!';
        // user instruction (dummy proof)
        alert(`Great ${myName}!\nNow you can hit the Get Started button below.`)

    } else {
        // re-call function
        recallUserName()
    }
}

// USER PROMPTS START:

// A get started button that allows user a choice when to start receiving prompts
// on-click 'get started'-> event handler 
getStartedBtn.onclick = () => {
    getPasswordLength();
    // debug - to test theory that num is a string which is breaking the logic
    // BUG FOUND! Now just got to fix parseInt(num) issue 
    // getPasswordOptions()
}

// setting a password length 

// ********************** MAJOR BUG ISSUE ************************ 

// If I change pwLength to a number globally (say 10) the issue is solved
// When trying to return num here (either via parseInt() or Number input - both fail)

// Issue 1: 'prompt' will be a string - not a number
// SOLVE: make it a number!! Number(prompt("..."))
// this STILL won't fix the issue!

// Issue 2: cannot call getPasswordOptions() AFTER return parseInt(num)
// SOLVE: added a try, catch, finally -> makes no difference ?

// ***************************************************************


function getPasswordLength() {
    // while true
    let num = 0
    // 'do' until false 
    do {
        num = Number(prompt('Please enter a password length (10-64):'))
        if (num < 10) {
            alert("Password must be more than 10 characters!")
        } else if (num > 64) {
            alert("Password must be less than 64 characters!")
        } else if (!Number.isInteger(+num)) {
            alert("Hey! No special characters or other funny business!")
        }
    } while (num < 10 || num > 64 || !Number.isInteger(+num));

    // debug
    console.log(`num typeOf: ${typeof (num)}`) // number
    console.log(`chosen length: ${num}`)
    // update the user 
    alert(`Great! Your password length will be ${num}.`)

    // // olde way
    getPasswordOptions()
    // this will log number 
    console.log(`num typeOf: ${typeof (num)}`)
    // return parseInt(num);
    return num;
    // return;

    // try to fix issue with try, catch and finally?? No.
    // try {
    //     // return num as an integer
    //     return parseInt(num);

    // } finally {
    //     // update log with next move
    //     console.log('getPasswordOptions calling now...')
    //     // debug - still a string?  Why?
    //     // this is the ONLY place that this log will log too
    //     console.log(`num typeOf: ${typeof (num)}`)
    //     // call function after return
    //     getPasswordOptions()
    // }
    // try {
    //     // update log with next move
    //     console.log('getPasswordOptions calling now...')
    //     // debug - still a string?  Why?
    //     // this is the ONLY place that this log will log too
    //     console.log(`num typeOf: ${typeof (num)}`)
    //     // call function after return
    //     getPasswordOptions()


    // } finally {
    //     // return num as an integer
    //     return parseInt(num);
    // }
}

// function to confirm the boolean options 
function getPasswordOptions() {

    // USER PROMPTS
    let lower = confirm('Do you want lowercase characters?')
    let upper = confirm("Do you want uppercase characters?")
    let special = confirm("Do you want special characters?")
    let numeric = confirm("Do you want numeric characters?")

    // conditional to control booleans selected 
    if (lower) {
        // add lowercase chars to the new array 
        optionsArray = optionsArray.concat(lowerCasedCharacters);
        // debug
        console.log('current option1', optionsArray)
        // add type to types array
        typesSelected.push('lower');
        // debug
        console.log(typesSelected)
        // debug: check array size 
        console.log(optionsArray.length)
    } if (upper) {
        // add uppercase chars to new array 
        optionsArray = optionsArray.concat(upperCasedCharacters);
        // debug
        console.log('current option2', optionsArray)
        // add type to types array
        typesSelected.push('upper');
        // debug
        console.log(typesSelected)
        // debug: check array size 
        console.log(optionsArray.length)
    } if (special) {
        // add special chars to new array
        optionsArray = optionsArray.concat(specialCharacters);
        // debug
        console.log('current option3', optionsArray)
        // add type to types array
        typesSelected.push('special');
        // debug
        console.log(typesSelected)
        // debug: check array size 
        console.log(optionsArray.length)
    } if (numeric) {
        // add numerical chars to new array
        optionsArray = optionsArray.concat(numericCharacters);
        // debug
        console.log('current option4', optionsArray)
        // add type to types array
        typesSelected.push('numeric');
        // debug: types selected
        console.log(typesSelected)
        // debug: check array size 
        console.log(optionsArray.length)

    } else {
        // invoked if NO TYPES == TRUE (0)
        // restart
        recallOptions()
    }

    // if OK, call optionsOK
    optionsOK()
}

// function to re-call getPasswordOptions: 

function recallOptions() {
    // IF no types are selected 
    if (optionsArray.length === 0) {
        // debug 
        console.log('Array is empty; please select at least 1 type')
        console.log(`getPasswordOptions function re-called: ${optionsArray}`)
        // alert user at the appropriate point
        alert("You must choose at least 1 type of character.")
        // re-call options function -if array empty
        getPasswordOptions()
    }
}

// 'options OK' function -force user feedback once selected types OK
function optionsOK() {
    // update the user with choices
    alert(`Awesome! You have selected ${optionsArray.length} possible characters.\nYou selected types: ${typesSelected}.`)
    // update user with chosen types (for fun, why not!)
    alert('You can now hit the GENERATE button below.  Good work!')
    // // debug: testing getRandom
    // getRandom()

}

// generate a random password (random + generate code merge) 
function generatePassword() {

    // // store the randomArray LOCALLY
    // let randomPassword = [];

    // iterate through i, 10 times
    for (let i = 0; i < pwLength; i++) {
        // TODO: swap 'r' for more useful naming convention
        // generate a SINGLE random digit 10 times: stored to r
        let r = Math.floor(Math.random() * optionsArray.length);
        // add a value to randomPassword each pass 
        randomPassword += optionsArray[r];
        // debug
        // print the single random char 10 times 
        console.log('new random logged:', optionsArray[r]);
        // console the array only 
        // contains 10 string chars - OK
        console.log('current array:', randomPassword)

    }
    // debug: update result to console 
    console.log('randomPassword array:', randomPassword);
    // check type: (string of chars)
    console.log(`randomPassword type: ${typeof (randomPassword)}`)
    // get string length (ok)
    // console.log('randomPassword length:', randomPassword.length)

    // must return here else the array is empty
    return randomPassword;

}

// Write password to the #password input
function writePassword() {
    // ASSIGNS AND CALLS genPW here 
    let password = generatePassword();
    // var text sent to textfield (#password element)
    let passwordText = document.querySelector('#password');
    // assign that value to var password 
    passwordText.value = password;
    // debugs
    console.log('password string', password);
    // check type: (string)
    console.log(`password type: ${typeof (password)}`)
    // get string length
    // this claims its UNDEFINED IF return is used
    // console.log('password length:', password.length)

    // return password;

}

