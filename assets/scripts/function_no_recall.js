// ok to assign it as number 
let numCharacters = 0;

// create a new function to re-call the function needed!
function userOptions() {
  numCharacters = Number(prompt("Please choose a password length (10-64):"))
  console.log(numCharacters)
}


function mainFunction() {
  while (numCharacters < 10 || numCharacters > 64){
    userOptions() // redefining the global num characters in here(for example)

  }

}
mainFunction()