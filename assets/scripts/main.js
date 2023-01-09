// |----------------------------------|
// |*** password generator program ***|
// |----------------------------------|

// Globals - do any of these need to be global?? NO

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

// store password length globally
let pwLength = 0;

// new array to store user options 
let optionsArray = [];

// provide user with options they selected
let typesSelected = [];

// options accessed switch
let optionsAccessed = 0;

// Buttons

// user login btn
let loginBtn = document.querySelector('#btn-user');
// button to heading selector
let welcomeHeading = document.querySelector('div.header-welcome #user');

// choose options button feature 
let setOptionsBtn = document.querySelector('#btn-options');

// the generatePassword btn
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
        // debug
        console.log('user set a username')
        // provide feedback (user proof)
        alert(`Great ${myName}!\nNow you can hit the 'Choose Options' button below.`)

    } else {
        // a catch for if the user just wants to cancel; not re-assign username
        if (!myName) {
            // alert - boolean
            let ask = confirm("Do you want to cancel change of username?")
            // if Y: return to app
            if (!ask) {
                // recall
                recallUserName()
            }
        } else {
            // re-call function
            recallUserName()
        }
    }
}

// USER PROMPTS START:

// allow user a choice when to start receiving prompts (user UX helper)
setOptionsBtn.onclick = () => {
    getPasswordLength();
}

// setting a password length 
function getPasswordLength() {
    // while
    let num = 0;
    // 'do' this
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
    console.log(`chosen length: ${num}`) // chosen length
    // update the user 
    alert(`OK!\nYour password length will be ${num}.`)

    // try, catch, finally to call another function after return 
    try {
        // assign num to pwLength
        pwLength = num;
        // return pwLength;
        return pwLength;

    } finally {
        // update log with next move
        console.log('getPasswordOptions calling now...')
        // check pwLength is a Number
        console.log(`pwLength typeOf: ${typeof (pwLength)}`)
        // call function after return
        getPasswordOptions()
    }
}

// function to confirm boolean options 
function getPasswordOptions() {

    // debug
    console.log('options prompts invoked')

    // options switch ON
    optionsAccessed = 1;
    // debug
    console.log('optionsAccessed switch:', optionsAccessed)
    // if user restarts - reset the arrays to empty
    optionsArray = [];
    typesSelected = [];

    // user prompts
    let lower = confirm('Do you want lowercase characters?')
    let upper = confirm("Do you want uppercase characters?")
    let special = confirm("Do you want special characters?")
    let numeric = confirm("Do you want numeric characters?")

    // conditional to control booleans selected 
    if (lower) {
        // add lowercase chars to the new array 
        optionsArray = optionsArray.concat(lowerCasedCharacters);
        // debug
        console.log('option1:lower', optionsArray)
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
        console.log('option2:upper', optionsArray)
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
        console.log('option3:special', optionsArray)
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
        console.log('option4:nums', optionsArray)
        // add type to types array
        typesSelected.push('numeric');
        // debug: types selected
        console.log(typesSelected)
        // debug: check array size 
        console.log(optionsArray.length)

    } else {
        // invoked if NO TYPES == TRUE (0)
        recallOptions()
    }
    // debug switch
    // // reset options switch
    // optionsAccessed = 0;
    // debug
    console.log('options chosen OK')
    // if options OK, call optionsOK
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

// 'options OK'- user feedback once selected types OK
function optionsOK() {
    // debug
    console.log('optionsOK func invoked, alerting user')
    // ready to generate log
    console.log('ready to generate')
    // update the user with choices
    alert(`Awesome!\nYou have selected ${optionsArray.length} possible characters.\nYou selected types: ${typesSelected}.`)
    // update user with chosen types (for fun, why not!)
    alert('You can now hit the GENERATE button below, or start over.')

}

// generate a random password (random + generate code merge) 
function generatePassword() {

    // catch user pressing generate first 
    //if generatePassword (genBtn pressed):
    if (optionsAccessed === 1) {
        // change the copied text to 'copy to clipboard' should user press generate again
        copy_notice.innerHTML = 'Copy to clipboard';

    } else {
        // alert
        // ONLY called if optionsAccessed === 1
        alert("Hey!\nYou haven't chosen any options yet.\nHit the 'Choose Options' button first.")
    }

    // store randomArray LOCALLY
    let randomPassword = [];

    // iterate through i, pwLength times
    for (let i = 0; i < pwLength; i++) {
        // generate a random char 10 times: stored to r
        let r = Math.floor(Math.random() * optionsArray.length);
        // add a value to randomPassword each pass 
        randomPassword += optionsArray[r];
        // debug
        // print the single random char 10 times 
        // console.log('new random logged:', optionsArray[r]);
        // // console the array only 
        // console.log('current array:', randomPassword)
    }
    // debug: update result to console 
    console.log('randomPassword array generated:', randomPassword);
    // check type: (string of chars)
    console.log(`randomPassword type: ${typeof (randomPassword)}`)
    // get string length (ok)
    console.log('randomPassword length:', randomPassword.length)

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
    console.log('password length:', password.length)
    console.log('successfully generated a password')

}

// copy to clipboard button feature 

function copyText() {

    /* Select text area by id*/
    let copyText = document.getElementById("password");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // user feedback - element change to 'password copied!'
    copy_notice.innerHTML = 'Password copied!';
}


