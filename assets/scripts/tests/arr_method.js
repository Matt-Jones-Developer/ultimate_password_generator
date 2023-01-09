// I had issues with getting arr to work - I found a better solution by including 
// the single line from getRandom within the generate function 

// test arrays

let num = [1,2,3,4];
let l = ['a','b','c'];
let s = ['$','%','&'];

let options = num.concat(l,s);
console.log('options:',options);

let pwLength = 10;
console.log('pwlength:', pwLength)

// test getRandom()
getRandom()

function getRandom(arr) {

    // just cannot seem to get arr to work - stuck!

    // use arr 
    // let arr = [];
    let randChar = arr[Math.floor(Math.random() * arr.length)];
    // return 
    // console.log(randChar)
    return randChar;
}

function genPW() {

    // declare empty arr
    let arr = [];

    // concat the options 
    // options = arr.concat(num, l, s)
    // console.log(options)

    //
    let password = '';
    for (let i = 0; i < options.length; i++) {
        // add the values to the password via getRandom
        password = password.concat(getRandom(arr));
    }

    // return
    console.log(password)
    return password;
}

// write password function 
function writePassword() {
    let password = genPW()
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
    
}

// btn handler
let genBtn = document.querySelector('#generate');
genBtn.addEventListener('click', writePassword)