// Function to generate password with user input
function generatePassword() {

    // {...}
  
    // check array content - should return an array of values 
    console.log('array:', generatedPassword); // empty
    // check type: should return a string
    console.log(`generatedPassword datatype: ${typeof (generatedPassword)}`) // object
    // get string length - should return length
    console.log('length of generatedPassword:', generatedPassword.length) // 0 or undefined syntax error
  
    // NOT adding a return here, means that the generatedPassword string array
    // is never initialised and remains an UNDEFINED object!
    return generatedPassword;
  
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  
    // adding a return here means that the array from generatePassword remains empty
    // ...instead of being an array of random values!
    // return password;
  }