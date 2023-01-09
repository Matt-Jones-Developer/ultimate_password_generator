// lets figure out what went wrong with the write function

// must be 10 iterations 
let pwLength = 10;

const special = ["£", "%", "&", "/", "@"];

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// concat the two arrays

let optionsArray = special.concat(nums)
// we have the chosen newArray! 
console.log(optionsArray)

// generate a SINGLE random digit 
let r = Math.floor(Math.random() * optionsArray.length);
// prints the single random char 
console.log('new random char logged:', optionsArray[r]);


// generate button code 

// genBtn: references the #generate element
let genBtn = document.querySelector('#generate');

// // Add event listener to generate button
genBtn.addEventListener('click', writePassword);


// getRandom function (required since ...???)
// empty array to store random results in (post loop)
let randomPassword = [];

// Function for getting a random element from an array - unused??
function getRandom(arr) {

    // iterate through i, 10 times
    for (let i = 0; i < pwLength; i++) {
        // generate a SINGLE random digit 10 times: stored to r
        let r = Math.floor(Math.random() * optionsArray.length);
        // add a value to randomPassword each pass 
        randomPassword += optionsArray[r];
        // debug
        // print the single random char 10 times 
        console.log('new random logged:', optionsArray[r]);
        // console the array only 
        console.log(randomPassword)

    }
    // debug: update result to console 
    // contains a string of 10 random digits
    console.log('randomPassword array:', randomPassword);
    // check type: (string)
    console.log(`randomPassword type: ${typeof (randomPassword)}`)
    // get string length
    console.log('randomPassword length:', randomPassword.length)

}
    
// test call
// generatePassword()

// generate loop 
function generatePassword() {

    // // store the randomArray LOCALLY ? Or globally ?
    // let randomPassword = [];

    // iterate through i, 10 times
    for (let i = 0; i < pwLength; i++) {
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
    // contains a string of 10 random digits
    console.log('randomPassword array:', randomPassword);
    // check type: (string)
    console.log(`randomPassword type: ${typeof (randomPassword)}`)
    // get string length
    console.log('randomPassword length:', randomPassword.length)

    // FIXED !! 
    return randomPassword;

}

// Write password to the #password input
function writePassword() {
    // this var ASSIGNS AND CALLS genPW here 
    let password = generatePassword();
    // var text sent to textfield (#password element)
    let passwordText = document.querySelector('#password');
    // assign that value to var password 
    passwordText.value = password;

    console.log('password string', password);
    // check type: (string)
    console.log(`password type: ${typeof (password)}`)
    // get string length

    // this claims its UNDEFINED
    // console.log('password length:', password.length)

    // removing the return stops array being EMPTY - GOOD!
    // return password;

    // so we now have the function working correctly 
    // randomPassword is putting each digit into the array
    // but it's STILL printing UNDEFINED to the textfield when using main.js
    // WHY? the array 'randomPassword' is now a string 'password' ??
    // - but we never assigned num to pwLength (should never of been global scope)

    // JavaScript interpreter returns undefined when 
    //accessing a variable or object property that is not yet initialized

}
