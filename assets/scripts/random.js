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

// define the new array
const pwArray = []
// loop over pwLength times 
for (let i = 0; i < pwLength; i++) {
    // grab a single random digit 

    // and push each loop to pwArray
    pwArray.push(Math.floor(Math.random()))
    // debug: successfully adding each loop - OK
    console.log('new char added:', pwArray)
}

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
