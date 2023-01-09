// build a password generator app

// trying to use readline to build the app entirely within the console, before using the browser

// user chooses a password length

// let num = prompt("Please choose a password length (10-64):")
// // debug
// console.log(` You chose ${num}`)

// if (num < 10); {
//     console.log("Try again!")
//     let num = prompt("Please choose a password length (10-64):")
// }

// allow input via console (nodeJS)
const readline = require("readline");

// create interface to access read and write line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// take user input and log the output
rl.question("What is your name? ", function (answer) {
    console.log(`Oh, so your name is ${answer}`);
    // close the interface 
    rl.close();
});


// call via 'node filename.js'