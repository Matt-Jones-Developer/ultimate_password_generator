// random user chosen pw length

let pwLength = 10;
console.log("pwLength:", pwLength)
// random from array test

let testArray = [1,2,3,4]
let testArray2 = ['a','b','c']

// concat them 

let newArray = testArray.concat(testArray2)

// this is the random char options array
console.log("concatenated array:", newArray)

// make singleChar global 
// let singleChar = [];
// let singleChar = newArray[Math.floor(Math.random() * newArray.length)];
// this works, but occasional get 'undefined' ? return?
// console.log("A random digit:", newArray[singleChar])

// next, we map ? or a for loop that iterates over newArray
// each iteration, pick a random digit from it and add it to ANOTHER ARRAY?

// this still spits out an undefined 
// let mappedArray = newArray.map(function(digit) {

//     // debug
//     // maps each item in the array
//     // console.log("this is digit", digit)
//     // random digit added to new array x pwlength 
//     // accept its only doing it mappedArray length (7)
//     singleChar = newArray[Math.floor(Math.random() * pwLength)];
//     // debug
//     console.log("this is singleChar: ", singleChar)
// })

// console.log("this is mappedArray: ", mappedArray)

// console.log("this is newArray: ",newArray)
// console.log("this is singleChar: ",singleChar)

// get random 
// getRandom(specialCharacters, lowerCasedCharacters, upperCasedCharacters, numericCharacters)
// Function for getting a random element from an array
// function getRandom(arr) {
//     // empty arr to store all the available chars (will be USER CHOSEN EVENTUALLY)
//     let newArray = specialCharacters + lowerCasedCharacters + upperCasedCharacters + numericCharacters.concat();
//     console.log(newArray)
//     // pick a char from newArray pwLength times ??

//     // picks a single char
//     let singleChar = newArray[Math.floor(Math.random() * newArray.length)];
//     console.log(singleChar);

//     // add another (for loop until pwLength === value)
//     // repeat until === pwLength 
//     // for (let i = 0; i < pwLength; i++) {
//     //     const element = singleChar++;
//     // }
//     // console.log(element)
// }

// build this into a proper function + catch occasional 'undefined'
// for single digit = this works perfectly

// call getRandom
// getRandom(newArray)

// function getRandom(arr) {
//     // catch 'undefined' selected
//     if (Array.isArray(newArray) === true) {
//         // then pick random
//         // console.log(newArray)
//         // return getRandom(newArray[Math.floor(Math.random() * newArray.length)]);
//         let randomDigit = newArray[Math.floor(Math.random() * newArray.length)];
//         // log
//         console.log("Here is your random digit:", randomDigit)
//         // should I return here??
//         return;
        
//     }
// }

// this time, we'll add a map or a for loop that iterates to give us the correct length of random digits 

// call getRandom
// getRandom(newArray) // better naming than 'newArray' ? that applies to what the array is

function getRandom(arr) {
    // catch 'undefined' selected
    if (Array.isArray(newArray) === true) {
        // then pick random
        // console.log(newArray)
        // return getRandom(newArray[Math.floor(Math.random() * newArray.length)]);
        let randomDigit = newArray[Math.floor(Math.random() * newArray.length)];
        // log -OK 
        console.log("Here is your random digit:", randomDigit)

        // within this function (?) generate a new array made up of these random digits * pwLength

        // issue is, this code is simply adding the next item in the original array?
        // we want it to add from randomDigit each pass 

        //  create the empty array 
        let randomPassword = [];
        // map or for loop 
        for (let i = 0; i < newArray.length; i++) {
            // randomPassword.push(newArray[i] * pwLength); // not * 10!
            // each iteration, what are we pushing? JUST random digit
            // but this causes 'undefined' again ?
            let randomDigit = newArray[Math.floor(Math.random() * pwLength)];
            // still getting undefined!
            console.log("Here is your random digit:", randomDigit)
            // push the result to the randomPassword array?
            randomPassword.push(newArray[i]);
            // debug 
            console.log("each iteration:", randomPassword)
        }
        console.log("this is the new randomPassword:", randomPassword)
        // should I return here??
        return;
    }
}


// OK, so put the if INSIDE the loop?

// this time, we'll add a map or a for loop that iterates to give us the correct length of random digits 

// call getRandom
getRandom(newArray) // better naming than 'newArray' ? that applies to what the array is

function getRandom(arr) {

    //  create the empty array 
    let randomPassword = [];
    // map or for loop 
    for (let i = 0; i <= pwLength; i++) {
        // randomPassword.push(newArray[i] * pwLength); // not * 10!
        // each iteration, what are we pushing? JUST random digit
        // but this causes 'undefined' again ?
        // let randomDigit = newArray[Math.floor(Math.random() * pwLength)];
        // // still getting undefined!
        // console.log("Here is your random digit:", randomDigit)
        // // push the result to the randomPassword array?
        // randomPassword.push(newArray[i]);
        // // debug 
        // // this is only pushing first element in the newArray
        // console.log("each iteration:", randomPassword)

        // add the if inside loop
        // catch 'undefined' selected
        if (Array.isArray(newArray) === true) {
            // then pick random
            // console.log(newArray)
            // return getRandom(newArray[Math.floor(Math.random() * newArray.length)]);
            let randomDigit = newArray[Math.floor(Math.random() * newArray.length)];
            // log -OK 
            console.log("Here is your random digit:", randomDigit)

            // add the digits to password var
            randomPassword += newArray[randomDigit];

            // within this function (?) generate a new array made up of these random digits * pwLength
                    // // push the result to the randomPassword array?
            // randomPassword.push(newArray[i]);

            console.log("this is the new randomPassword:", randomPassword)
            // should I return here??
            return;
    }}
}