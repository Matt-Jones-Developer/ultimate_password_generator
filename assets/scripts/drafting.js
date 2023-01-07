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

c
// PROMPTS

// call getPassword function 
getPasswordOptions()

// // Function to prompt user for password options
function getPasswordOptions() {
    // store the prompt entry as a variable 
    // use Number to catch NaN
    let num = Number(prompt("Please choose a password length (10-64):"))
    // debug
    // console.log(num)
    // console.log(typeof (num)) //number
    // expression to determine whether correct number entered
    if (num < 10 || num > 64 || !Number.isInteger(+num)) {
        // alert and debug
        console.log("ERROR: must be a number between 10 and 64")
        alert("ERROR: must be a number between 10 and 64")
        // retry:recall f
        // bad practice - create another function that re-calls this one!
        // or use a while loop!
        getPasswordOptions();
    }

    else {
        // assign num entry to pwLength variable
        pwLength = num;
        // alert and debug
        // console.log(typeof(num)) // still a number
        // console.log(typeof(pwLength)) // number
        console.log(`Your selected pw length is ${pwLength}.`)
        alert(`Great! Your password length will be ${pwLength}.`)

    }
}

// global scope debug
// console.log(typeof(pwLength)) // number 

// a do while is better for this, plus it catches the NaNs
// BUT, how do we add an ELSE here to alert for wrong input??
// const loopy = () => {
//     let number = 0
//     do {
//         number = prompt('Please enter a password length (10-64):')
//     } while (number < 10 || number > 64 || !Number.isInteger(+number));

//     return loopy(number);
// }

// improving the while loop


// const pwLoop = () => {
//     let num = 0
//     do {
//         num = prompt('Please enter a password length (10-64):')
//         if(num<10){
//                 alert("password must be more than 10 characters")
//         }else if(num>64){
//                 alert("password must be less than 64 characters")
//         }
//     } while (num < 10 || num > 64 || !Number.isInteger(+num));
//     return parseInt(num);
// }

// console.log(loopy())

// call other options 
getOtherOptions()

function getOtherOptions() {

    let optionsArray = [];
    // request boolean prompts
    let special = confirm("Do you want special characters?")
    let lower = confirm("Do you want lowercase?")
    let upper = confirm("Do you want uppercase?")
    let numeric = confirm("Do you want numeric characters?")

    if (special) {
        optionsArray = optionsArray.concat(specialCharacters);
        console.log('current options', optionsArray)
    }
    else if (lower) {
        optionsArray = optionsArray.concat(lowerCasedCharacters);
        console.log('current options+', optionsArray)
    }
    else if (upper) {
        optionsArray = optionsArray.concat(upperCasedCharacters);
        console.log('current options+', optionsArray)
    }
    else if (numeric) {
        optionsArray = optionsArray.concat(numericCharacters);
        console.log('current options+', optionsArray)
    }
    else {
        alert("You must have at least 1 type")
    }

}

// revised - but still has a bug!

// call getPasswordOptions
getPasswordOptions()

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


    } else {
        // this must ONLY be run IF NO TYPES ARE TRUE (0)
        console.log('empty array - no types selected', optionsArray)
        alert("You must choose at least 1 type of character.")
        // call the caller Function!
        callOptions()
    }
}

// call extra options 
// getOtherOptions()

// get random 
// getRandom(specialCharacters, lowerCasedCharacters, upperCasedCharacters, numericCharacters)
// Function for getting a random element from an array
function getRandom(arr) {
    // empty arr to store all the available chars (will be USER CHOSEN EVENTUALLY)
    let newArray = specialCharacters + lowerCasedCharacters + upperCasedCharacters + numericCharacters.concat();
    console.log(newArray)
    // pick a char from newArray pwLength times ??

    // picks a single char
    let singleChar = newArray[Math.floor(Math.random() * newArray.length)];
    console.log(singleChar);

    // add another (for loop until pwLength === value)
    // repeat until === pwLength 
    // for (let i = 0; i < pwLength; i++) {
    //     const element = singleChar++;
    // }
    // console.log(element)
}

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


// use an array to generate a pw length determined by a length
//. this length would be PWLENGTH variable 

let practicePassword = "";
  for (let i = 0; i < 100; i++) {
    
    practicePassword += "j"
    
  }


  return practicePassword;

  // using math to randomIndex 

  let randomIndex = Math.floor(Math.random()*arrayName.length)

  // concatenate using concat()

  bigArray = bigArray.concat(exampleArray)