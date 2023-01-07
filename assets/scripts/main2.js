
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

// add user login name btn
let loginBtn = document.querySelector('#btn-user');
// button to heading selector
let welcomeHeading = document.querySelector('div.header-welcome #user');

// get started button feature 
let getStartedBtn = document.querySelector('#btn-start');

// function CALLS

// set up a username
function setUserName() {
  // constant myName which prompts on btn press
  const myName = prompt('Please enter your username.');

  // if myName === true;
  if (!myName) {
    // run f again - hmm thats not good practice - [TODO]
    setUserName();
  } else {
    // store new value
    localStorage.setItem('name', myName);
    // update the welcome element
    welcomeHeading.innerHTML = 'Welcome,  ' + myName + '!';
  }
}


// getPasswordOptions PROMPT
let num = prompt("Please choose a password length (10-64):")
console.log(num)

alert(`You chose a password length of ${num}`)

//Function to prompt user for password options
function getPasswordOptions() {
  // prompt("Please choose a password length (10-64):")
  // store the entry as a variable 
  let num = prompt("Please choose a password length (10-64):")
  // print value entered to console 
  console.log(num)
  // if (num < 10) {
  //   // alert 
  //   console.log("ERROR: must be a number between 10 and 64")
  //   alert("ERROR: must be a number between 10 and 64")
  //   // retry
  //   getPasswordOptions()
}

//call getPassword function 
getPasswordOptions()


// get other boolean options

// // call getPasswordOptions
// getPasswordOptions()

// define a new function that calls the 

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
    // check array size 
    console.log(optionsArray.length)
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

// create a function to re-call the last: original code 

function callOptions() {
  // IF no types are selected 
  if (optionsArray.length === 0) {
    console.log('Array is empty; please select at least 1 type')
    // alert user at the appropriate point
    alert("You must choose at least 1 type of character.")
    //debug
    console.log(`getOptions function re-called: ${optionsArray}`)
    // re-call options function if array empty
    getPasswordOptions()

  } else {
    // MAJOR ISSUE BUG HERE ::: remove this else that was crap anyway! SOLVED haha
    // created a new function to handle optionsOK logic (user feedback)
    // If user selects false on ANY except Numeric, it will update the user TWICE (line )
    // since adding the 'get started' button; this else FAILS ??
    // update the user
    alert(`Awesome! You have selected ${optionsArray.length} possible characters!`)
    // update user with chosen types (for fun, why not!)
    alert(`You selected types: ${typesSelected}.`)
    // stop execution - removing this does nothing 
    // return;
  }
  // return; not required ?
}

// call main
// callOptions()

// random SINGLE solved!

// Function for getting a random element from an array
function getRandom() {
  // debug 
  console.log("Accessed getrandom!")
  // pick a char from newArray pwLength times
  // no. Returns undefined because its an array
  // let singleChar = optionsArray[Math.floor(Math.random() * pwLength)];
  // console.log(singleChar);
  let singleChar = Math.floor(Math.random() * optionsArray.length);
  console.log(optionsArray[singleChar]);

//     // add another (for loop until pwLength === value)
//     // repeat until === pwLength 
//     // for (let i = 0; i < pwLength; i++) {
//     //     const element = singleChar++;
//     // }
//     // console.log(element)
//     // call generate?
//     generatePassword()
}

// get random digit (for pwLength times) return a new array
// getRandom()
// Function for getting a random element from an array
// function getRandom() {
//     // debug 
//     console.log("Accessed getrandom!")
//     // pick a char from newArray pwLength times
//     let singleChar = optionsArray[Math.floor(Math.random() * pwLength)];
//     console.log(singleChar);

//     // add another (for loop until pwLength === value)
//     // repeat until === pwLength 
//     // for (let i = 0; i < pwLength; i++) {
//     //     const element = singleChar++;
//     // }
//     // console.log(element)
//     // call generate?
//     generatePassword()
// }

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

// simple simple 

// must be 10 iterations 
let pwLength = 10;

const special = ["£", "%", "&", "/", "@"];

const nums = [1,2,3,4,5,6,7,8,9]

// concat the two arrays

let chosenChars = special.concat(nums)
// we have the chosen newArray! 
console.log(chosenChars)

// generate a SINGLE random digit 
let r = Math.floor(Math.random() * chosenChars.length);
// prints the single random char 
console.log('new randomchar is a log:',chosenChars[r]);

// put into a new var called randomChar
let randomChar2 = chosenChars[r];
console.log('new randomchar2:', randomChar2);


// loop it, add each to the randomPW array - DONE!
// illogical and not thinking about what the code is doing at al :(
                // this doesn't need .length (its an int not an array)
for (let i = 0; i < pwLength.length; i++) {
    // this is just default garbage
    const element = chosenChars[i];
    // why create another array and map it while already in a loop??
    let randomPW = chosenChars.map(function(element) {
        // what?!
        let r = Math.floor(Math.random() * element.length);
        // returns the same array as before
        // return length;
        console.log(randomPW, r);
        // return element + 10;
    })
}

// // define the new array
// const randomArray = []
// // loop over pwLength times 
// for (let i = 0; i < pwLength; i++) {
//     // and apply the random to this array directly 
//     //- using push to add each value to new array
//     randomArray.push(Math.floor(Math.random()))
//     // debug: successfully adding each loop - OK
//     console.log('new char added:', randomArray)
// }

// // prints 10 0's
// console.log(randomArray)

// // well, at least we're printed 10 instead of 14 now!

// // this is HOW we were generating a single random value!
// Math.floor(Math.random() * chosenChars.length);

// define the new array
const passwordArray = []
// loop over pwLength times 
for (let i = 0; i < pwLength; i++) {
    // and apply the random to this array directly 
    //- using push to add each value to new array
    // + adding the calc that actually generates a random
    // OK, but what are these random nums? 13?? why?
    // why aren't any other chars being picked from chosenChars?
    passwordArray.push(Math.floor(Math.random() * chosenChars.length));
    // debug: successfully adding each loop - OK
    console.log('new char added:', passwordArray)
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