// pwLength
let pwLength;

// PROMPTS

// call getPassword function 
getPasswordOptions()

// // Function to prompt user for password options
function getPasswordOptions() {
    // store the prompt entry as a variable 
    let num = Number(prompt("Please choose a password length (10-64):"))
    // debug
    console.log(num)
    console.log(typeof(num)) //number
    // so adding Number catches NaN - YES 
    // expression to determine whether correct number entered
    if (num < 10 || num > 64 || !Number.isInteger(+num)) {
        // alert and debug
        console.log("ERROR: must be a number between 10 and 64")
        alert("ERROR: must be a number between 10 and 64")
        // retry:recall f
        getPasswordOptions()
    }

    else {
        // assign num entry to pwLength variable 
        // alert and debug
        pwLength += num;
        console.log(typeof(num)) // still a number
        console.log(typeof(pwLength)) // NUMBER !!
        // BUG: I receive NaN as the number accepted now??
        console.log(`Your selected pw length is ${pwLength}.`)
        alert(`Great! Your password length will be ${pwLength}.`)
        console.log(`Your selected pw length is ${toString(pwLength)}.`)
        alert(`Great! Your password length will be ${toString(pwLength)}.`) // object undefined 
        alert(pwLength) // prints as NaN ??
        alert(`Great! Your password length will be ${parseInt(pwLength)}.`) // object undefined 
    }
}

console.log(typeof(pwLength)) // number 