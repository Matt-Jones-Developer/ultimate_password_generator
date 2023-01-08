// a simple if if if else that causes a bug IF
// not ALL statements are true ??

// let a = 'true';
// let b = 'false';
// let c = 'true';
// let d = 'true';

// the if else 

// basic - will return true (unless a === 'false')
// if (a === 'true') {
//     console.log('true')
// }

// else {
//     console.log('false')
// }

// multiple BUT 1 has been set to 'false'
// obvs returns 'false' since B = false

// if (b === 'true') {
//     console.log('true')
// }

// else {
//     console.log('false')
// }

// lets mix it up 

// if (a === 'true') {
//     console.log('true')
// }

// if (b === 'false') {
//     console.log('true')
// }

// // the ELSE cannot execute here; because both statements are TRUE 

// else {
//     console.log('false')
// }

// in our problem, we are saying:
// IF 'lower' is TRUE: do this(1)
// IF 'upper' is TRUE: do this(2)
// IF 'special' is TRUE: do this(3)
// IF 'numeric' is TRUE: do this(4)

// ELSE: 'if not ALL of these are TRUE' -> do THIS

// we need it to say 'only do this IF NONE are TRUE!'

// let lower = 'true';
// let upper = 'true';
// let special = 'true';
// let numeric = 'true';

// if (lower === 'false') {
//     console.log('true')
// }

// if (upper === 'false') {
//     console.log('true')
// }

// if (special === 'false') {
//     console.log('true')
// }

// if (numeric === 'false') {
//     console.log('true')
// }

// // the ELSE executes, since ALL statements are FALSE 

// else {
//     console.log('false')
// }

// let lower = 'true';
// let upper = 'true';
// let special = 'true';
// let numeric = 'true';

// if (lower === 'true') {
//     console.log('true')
// }

// if (upper === 'true') {
//     console.log('true')
// }

// if (special === 'true') {
//     console.log('true')
// }

// if (numeric === 'false') {
//     console.log('true')
// }

// // the ELSE executes, since IF 4 statement IS FALSE 

// else {
//     console.log('false')
// }


// let lower = 'true';
// let upper = 'true';
// let special = 'true';
// let numeric = 'false';

// if (lower === 'true') {
//     console.log('lower true')
// }

// if (upper === 'true') {
//     console.log('upper true')
// }

// if (special === 'true') {
//     console.log('special true')
// }

// // the last if can be TRUE or FALSE, nothing else follows it, so code works 
// if (numeric === 'true') {
//     console.log('numeric true')
// }

// // the ELSE executes, since IF 4 statement IS FALSE 

// else {
//     console.log('false found, so do this')
// }

// CONCLUSION !!?

// change any of these first 3 to FALSE - they are ignored and the ELSE is not run!
// let lower = 'true';
// let upper = 'false';
// let special = 'false';
// // if LAST IF is false, finally the ELSE is invoked 
// let numeric = 'false';

// // this is IGNORED (unless true!)
// if (lower === 'true') {
//     console.log('lower true')
// }

// // this is IGNORED 
// if (upper === 'true') {
//     console.log('upper true')
// }

// // this is IGNORED 
// if (special === 'true') {
//     console.log('special true')
// }

// if (numeric === 'true') {
//     console.log('numeric true')
// }

// // the else DOES NOT execute, even though we have a false!
// else {
//     console.log('false found, so do this')
// }


// still not twigging?? OK... try IF ELSE IF
// hint: we don't want this!

// if else if should manage them in a heirachy - 
// printing ONLY 1 of the 4 statements  - whichever is closest to the top

// let lower = 'false';
// let upper = 'true';
// let special = 'false';
// // if LAST IF is false, finally the ELSE is invoked 
// let numeric = 'false';

// // this is IGNORED (unless true!)
// if (lower === 'true') {
//     console.log('lower true')
// }

// // this is IGNORED (unless true!)
// else if (upper === 'true') {
//     // this time only the TRUE 1 gets printed (not all)
//     console.log('upper true')
// }

// // this is IGNORED 
// else if (special === 'true') {
//     // `IGNORED EVEN THOUGH ITS TRUE'
//     console.log('special true')
// }

// else if (numeric === 'true') {
//     console.log('numeric true')
// }

// // the else DOES NOT execute, even though we have a false!
// else {
//     console.log('false found, so do this')
// }

let lower = 'true';
let upper = 'false';
let special = 'true';
// if LAST IF is false ONLY, finally the ELSE is invoked 
let numeric = 'false';

// this is IGNORED (unless true!)
if (lower === 'true') {
    console.log('lower true')
}

// this is IGNORED 
if (upper === 'true') {
    console.log('upper true')
}

// this is IGNORED 
if (special === 'true') {
    console.log('special true')
}
// the last will ALWAYS invoke ELSE if FALSE!
if (numeric === 'true') {
    console.log('numeric true')
}

// ONLY execute else IF ALL VARS ARE FALSE ??
// looks hacky AF but it works! - better solution??
else if (lower && upper && special && !numeric === 'false') {
    console.log('false found, so do this')
}


