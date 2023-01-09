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
    let typesSelected = [];
    // request boolean prompts
    let special = confirm("Do you want special characters?")
    let lower = confirm("Do you want lowercase?")
    let upper = confirm("Do you want uppercase?")
    let numeric = confirm("Do you want numeric characters?")

    // conditional to control booleans selected 
    // would a switch statement be better here?
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
  
  // simple simple generate section 
  
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
  
  
  // I feel that this function isn't required and the generatePassword function 
  // will cater for both getRandom and generatePassword as a string 
  
  // let stringChar = '';
  
  // // get a random element from chosenOptions array
  // function getRandom() {
  //     // pick a character from optionsArray
  //     let singleChar = Math.floor(Math.random() * optionsArray.length);
  //     // debug: it prints a single character each time
  //     console.log('random char was picked:', optionsArray[singleChar]);
  //     stringChar = optionsArray[singleChar];
  //     // debug; yes, it's the same char as this function picks
  //     console.log(stringChar)
  // }
  
  // generatePassword()
  
  // Function to generate password with user input
  // function generatePassword() {
  //     // debug - calls
  //     // console.log('accessed generatePassword OK')
  //     // create the empty STRING to hold the password
  //     let passwordArray = "";
  //     // iterate pwLength times 
  //     for (let i = 0; i < pwLength; i++) {
  //         // can we even call a function within an expression?
  //         // call it to get each random digit 
  //         // getRandom()
  //         // why are we using random here?? We have already randomised
  //         // passwordArray.push(Math.floor(Math.random() * getRandom()));
  //         // what do we want to do??
  //         // add the generated random to pwArray, each pass
  //         // passwordArray.push(stringChar)
  //         passwordArray += "Hello!";
  //     }
  //     // once finished, show the generated password string 
  //     // console.log(passwordArray)
  //     // an essential return 
  //     return passwordArray;
  // }
  
  
  
  // my ultimate getRandom + generatePassword string function!
  
  function generatePassword() {
  
    // iterate through i, 10 times
    for (let i = 0; i < pwLength; i++) {
        // generate a SINGLE random digit 10 times: stored to r
        let r = Math.floor(Math.random() * chosenChars.length);
        // add a value to randomPW each pass 
        randomPW += chosenChars[r];
        // debug
        // print the single random char 10 times 
        console.log('new randomchar logged:', chosenChars[r]);
  
    }
    // debug: update result to console 
    // contains a string of 10 random digits
    console.log('randomPW array:', randomPW);
    // check type: (string)
    console.log(`ranPW typeOf: ${typeof (randomPW)}`)
  
  }
  
  
  // // Get references to the #generate element - included ABOVE 
  // let genBtn = document.querySelector('#generate');
  
  // their logic is actually:
  // -> hit the genBtn -> invoke writePassword -> which assigns var 'password' = generatePW
  // AND calls generatePassword function
  // the passwordText var then adds the pw to the textfield 
  
  // Write password to the #password input
  function writePassword() {
    // this var ASSIGNS AND CALLS genPW here 
    let password = generatePassword();
    // var text sent to textfield (#password element)
    let passwordText = document.querySelector('#password');
    // assign that value to var password 
    passwordText.value = password;
  
  }
  
  // my ultimate getRandom + generatePassword + printPassword as string function!
  
  function generatePassword() {
  
    // iterate through i, 10 times
    for (let i = 0; i < pwLength; i++) {
        // generate a SINGLE random digit 10 times: stored to r
        let r = Math.floor(Math.random() * optionsArray.length);
        // add a value to randomPW each pass 
        randomPassword += optionsArray[r];
        // debug
        // log the array only 
        console.log(randomPassword)
  
    }
    // debug: update result to console 
    // contains a string of 10 random digits
    console.log('randomPassword array:', randomPassword); // empty?
    // check type: (string)
    console.log(`randomPassword datatype: ${typeof (randomPassword)}`) // object ??
    // get string length
    console.log('length of randomPassword:', randomPassword.length) // 0 :(
  
    // return it
    // return randomPassword; // do we need to return here?
  
  }
  
  
  function writePassword() {
    // this var ASSIGNS AND CALLS genPW here 
    let password = generatePassword();
    // var text sent to textfield (#password element)
    let passwordText = document.querySelector('#password');
    // assign that value to var password 
    passwordText.value = password;
  
    // return it
    return password;
  
  }
  
  
  