// ********************** MAJOR BUG ISSUE ************************ 

// If I change pwLength to a number globally (say 10) the issue is solved
// When trying to return num here (either via parseInt() or Number input - both fail)

// Issue 1: 'prompt' will be a string - not a number
// SOLVE: make it a number!! Number(prompt("...")) [DONE]

// Issue 2: cannot call getPasswordOptions() AFTER return parseInt(num)
// SOLVE: added a try, catch, finally -> makes no difference ? [VOID]


// SOLVED: schoolboy error - never assigned num to pwLength!

// ***************************************************************

// variable to store password length
let pwLength = 0;

// new array to store user options 
let optionsArray = [1,2,3,4,'a','b','c'];

// log the fake optionsArray
console.log('optionsarray:', optionsArray)

// global random password array - does this NEED to be global also??
// let randomPassword = [];

// initialize BEFORE adding selector
// genBtn: references the #generate element
let genBtn = document.querySelector('#generate');

// Add event listener to generate button
genBtn.addEventListener('click', writePassword);

getPasswordLength()

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

    // // // olde way
    // getPasswordOptions()
    console.log(`num: ${num}`)
    // // this will log number 
    console.log(`num typeOf: ${typeof (num)}`)

    // assign num to pwLength
    pwLength += num;
    // return parseInt(num);
    return pwLength;
    // // return;

    // // try to fix issue with try, catch and finally?? No.
    // try {
    //     // return num as an integer
    //     // return parseInt(num);
    //     return num;

    // } finally {
    //     // update log with next move
    //     // console.log('getPasswordOptions calling now...')
    //     // number `IS':
    //     console.log(`num: ${num}`)
    //     // debug - its now a number
    //     // this is the ONLY place that this log will log too
    //     console.log(`num typeOf: ${typeof (num)}`)
    //     // // call function after return
    //     // getPasswordOptions()
    // }
}


// re add the code to test why it doesn't work

// generate a random password (random + generate code merge) 
function generatePassword() {

    // // store the randomArray LOCALLY
    let randomPassword = [];

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
    console.log('password length:', password.length)

}