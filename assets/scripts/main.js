// password generator program

// add user login name 
// create vars for button and heading 
let loginBtn = document.querySelector('button');
let welcomeHeading = document.querySelector('div.header-welcome #user');

// ** THIS WILL BE CHANGED TO USE THE LOG-IN BUTTON OR A TAG IN THE NAVBAR!! ** 

// create setUserName() function
//func     // name
function setUserName() {
    // constant var myName which prompts on load
    const myName = prompt('Please enter your username.');

    // conditional
    if (!myName) {
        // run again 
        setUserName();
    } else {
        // store new value
        localStorage.setItem('name', myName);
        // on which element?
        // welcomeHeading.textContext = `Welcome, ${myName}!`;
        welcomeHeading.innerHTML = 'Welcome,  ' + myName + '!';
    }
}

// call the expression on-load (todo: make it a function)
// if localstorage has name - call setUserName()
if (!localStorage.getItem('name')) {
    // update user with welcome alert
    // Display anti-boomer welcome message!
    alert('Welcome to Ultimate Password Generator!\nPlease login to get started.');
    
} else {
    // else retrieve stored name and display it
    let storedName = localStorage.getItem('name');
    welcomeHeading.innerHTML = 'Welcome,  ' + storedName + '!';
}

// on-click event handler 
loginBtn.onclick = () => {
    setUserName();
}

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

// create a variable to store pw length
let pwLength = 0;

// create a new array to store user options 
let optionsArray = [];

// additional tracker array to store types - for fun!
let typesSelected = [];

// we need another button to 'start generation' - else the login isn't allowed!
// PROMPTS

// call it
// getPasswordLength()

// the function
function getPasswordLength() {

    // create a while loop 
    let num = 0
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
    // update the user 
    console.log(`chosen length: ${num}`)
    alert(`Great! Your password length will be ${num}.`)
    // return num as an integer 
    return parseInt(num);
}

// call getPasswordOptions
// getPasswordOptions()

// create another function for the boolean options (unless I can merge?)
function getPasswordOptions() {
    // conditional to control booleans selected 
    // ask for confirms:
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
        console.log(typesSelected)
        // logic flaw: IF user doesn't select (cancels) on ANY type, else invoked!
        // So why? 
        // 1. A cancel was chosen (so not ALL ABOVE were TRUE!)
        // 2. Program jumps to callOptions ELSE - else alert is presented, yet program continues to run as expected post this:
        // ... "Awesome you selected x possible chars" message from callOptions ELSE 
        // ... PLUS "You selected types..." correct array from same ELSE
        // 3. THEN it REPEATS the ELSE from callOptions AGAIN ??! (x poss chars/selected types...)

        // How do we say: IF 'type' TRUE; ADD TO ARRAY. BUT IF any are FALSE, IGNORE THIS ELSE??

        // HINT: If we cancel all but the LAST IF (numbers) - the program runs as expected since there are no further statements to check so else is ignored correctly!
        // But if cancel any of the others - OR JUST THE LAST (!!) it bugs.

        // explicitly command else if to ignore? not? numeric! The last IF
    } else {
        // this must ONLY be run IF NO TYPES ARE TRUE (0)
        console.log('empty array - no types selected', optionsArray)
        // NEW BUG! Now we have the alert failing when numeric selected - since its !numeric!
        // alert("You must choose at least 1 type of character.")
        // call the caller Function!
        callOptions()
    }
    // } else {
    //     // this works, but console still 'warns' that getOptions has been re-called (it hasn't)
    //     // also ANY other type FALSE causes this unwanted message - as before!
    //     alert("You must choose at least 1 type of character.")
    // }
}

// create a function to re-call the last: IF no types are selected 

function callOptions() {
    if (optionsArray.length === 0) {
        console.log('Array is empty; please select at least 1 type')
        // So we move the alert to the appropriate place
        alert("You must choose at least 1 type of character.")
        // re-call options function if array empty
        getPasswordOptions()
        //debug
        console.log(`getOptions function re-called £{optionsArray}`)
    } else {
        // update the user with chosen types (for fun, why not!)
        alert(`Awesome! You have selected ${optionsArray.length} possible characters!`)
        alert(`You selected types: ${typesSelected}.`)
        // stop execution - removing this does nothing 
        // return;
    }
    // return; not required ?
}

// call main
// callOptions()


// get random 
// getRandom()
// Function for getting a random element from an array
function getRandom() {
    // pick a char from newArray pwLength times
    let singleChar = optionsArray[Math.floor(Math.random() * pwLength)];
    console.log(singleChar);

    // add another (for loop until pwLength === value)
    // repeat until === pwLength 
    // for (let i = 0; i < pwLength; i++) {
    //     const element = singleChar++;
    // }
    // console.log(element)
}

// get random digit from optionsArray - iterate over it - put into a new array
// use map or for loop

// call it
// getRandom()

// function getRandom() {
//     let randomIndex = Math.floor(Math.random() * optionsArray.length)
//     let newPwFromMap = optionsArray.map(function (digit) {
//         // return an array of digits * pwLength  
//         // return digit * 2; // this *2 - we need to 'pick 10 random'
//         // picks a single random character
//         return digit + randomIndex;
//         // console.log(digit)
//         // using math to randomIndex 

//     })

//     // debug
//     console.log(randomIndex) // returns a random char 
//     console.log(`Here is your new mapped array: ${newPwFromMap}`)
// }



// call generate 

// dummy pwLength 
// let pwLengthDummy = 4;

// console.log(pwLength)
// console.log(typeof (pwLength))

// generatePassword()

// // Function to generate password with user input
// function generatePassword() {
//     let genPw = "";
//     for (let i = 0; i < parseInt(pwLength); i++) {

//         genPw +=
//             console.log(genPw)
//     }

//     return genPw;
// }


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


// let practicePassword = "";
// for (let i = 0; i < 100; i++) {

//     practicePassword += "j"

// }


// return practicePassword;


