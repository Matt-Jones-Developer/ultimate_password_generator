// simple simple 

// must be 10 iterations 
let pwLength = 10;

const special = ["£", "%", "&", "/", "@"];

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// concat the two arrays

let chosenChars = special.concat(nums)
// we have the chosen newArray! 
console.log(chosenChars)

// generate a SINGLE random digit 
let r = Math.floor(Math.random() * chosenChars.length);
// prints the single random char 
console.log('new randomchar is a log:', chosenChars[r]);

// put into a new var called randomChar
let randomChar2 = chosenChars[r];
console.log('new randomchar2:', randomChar2);


// loop it, add each to the randomPW array - DONE!
// illogical and not thinking about what the code is doing at all :(
// this doesn't need .length (its an int not an array)
for (let i = 0; i < pwLength.length; i++) {
    // this is just default garbage
    const element = chosenChars[i];
    // why create another array and map it while already in a loop??
    let randomPW = chosenChars.map(function (element) {
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


// this adds randomly, and increments by 1 - but the numbers added dont make any sense

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


// this one adds all zeros, but increments correctly 
// define the new array
// const pwArray = []
// // loop over pwLength times 
// for (let i = 0; i < pwLength; i++) {
//     // grab a single random digit 

//     // and push each loop to pwArray
//     pwArray.push(Math.floor(Math.random()))
//     // debug: successfully adding each loop - OK
//     console.log('new char added:', pwArray)
// }

// so the above loop is preferred since we want it to increment by 1 each loop, NOT 10 at once? 

// let randomPassword = chosenChars.map(function(pwLength) {
//     // new array to store random seq
//     // let randomArray = [Math.floor(Math.random() * char.length)]
//     const randomChars = [Math.floor(Math.random() * pwLength.length)];

//      // take the newArr[random] and add it to the new array
//      // this creates an array 14 times (not 10)
//      // AND they are all the same!
//     return randomArray = randomChars[randomChar];
// })


// console.log('here is a 10 char password:',randomPassword)

// 2 loops? WHY?? Again, think about what we are trying to achieve 
// return 10 random digits between 0-9 hmm??

// iterate through i, 10 times, add 1 to i each pass 
for (let i = 0; i < pwLength; i++) {
    // var to add results to
    let count = 0;
    // second loop to get a random digit from chosenChars
    for (let x = 0; x < Math.floor(Math.random()); x++) {
        count++;
    }
    console.log(count);
}

// WE GOT THERE! ... AT LAST!!!

// global random array 
// empty array to store result in
// let randomPW = [];
// console.log('randomPW array:', randomPW);

// // iterate through i, 10 times
// for (let i = 0; i < pwLength; i++) {
//     // generate a SINGLE random digit 10 times stored to r
//     let r = Math.floor(Math.random() * chosenChars.length);
//     // add each iteration result to randomPW array
//     // add 1 value to i each pass 
//     randomPW += chosenChars[r];
//     // prints the single random char 10 times 
//     console.log('new randomchar logged:', chosenChars[r]);
    
// }


// // contains a string of 10 random digits!
// console.log('randomPW array:', randomPW);

// // check type: (string)
// console.log(`ranPW typeOf: ${typeof (randomPW)}`)

// great! BUT why does it return as a string?  
// I mean, that's exactly what we want but It should be an array?

// genBtn: references the #generate element
let genBtn = document.querySelector('#generate');

// testing generatePassword function 
// global random array 
// empty array to store result in
let randomPW = [];

// call generatePassword (test)
// generatePassword()

// my ultimate getRandom + generatePassword string function!

// I had this working, copied to main.js - it failed
// messed around with this, instead of saving a copy - now it wont print to the textfield either!

// huge lesson learnt :(

function generatePassword() {

    // iterate through i, 10 times
    for (let i = 0; i < pwLength; i++) {
        // generate a SINGLE random digit 10 times: stored to r
        let r = Math.floor(Math.random() * chosenChars.length);
        // add a value to randomPW each pass 
        randomPW += chosenChars[r];
        // debug
        // print the single random char 10 times 
        // console.log('new randomchar logged:', chosenChars[r]);
        // console the array only 
        console.log(randomPW)

    }
    // debug: update result to console 
    // contains a string of 10 random digits
    console.log('randomPW array:', randomPW);
    // check type: (string)
    console.log(`ranPW typeOf: ${typeof (randomPW)}`)

}

// so, why is writePassword printing UNDEFINED ??

// Write password to the #password input
function writePassword() {
    // this var ASSIGNS AND CALLS genPW here 
    let password = generatePassword();
    // var text sent to textfield (#password element)
    let passwordText = document.querySelector('#password');
    // assign that value to var password 
    passwordText.value = password;

    return password;

}

// Add event listener to generate button
genBtn.addEventListener('click', writePassword);