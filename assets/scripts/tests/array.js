// array of numbers we want to loop over 

// map allows us to loop over an array and create a new one

// starting array
let numbers = [1,2,3,4,5]

// give our map a new array to go to

// 'numbers' is the array we want to map
// 'number' is the element from the array we want to give the function to the map

let newArrayFromMap = numbers.map(function(number) {
    // new array to store random seq

    let randomArray = [Math.floor(Math.random() * number.length)]

    // return randomIndex;
    console.log(`num typeOf: ${typeof (number)}`)
    console.log(`randomIndex typeOf: ${typeof (randomArray)}`)

     // add 10 to each number and add it to the new array
    return number + 10
})


console.log(newArrayFromMap)


// non map alternative 

let newNoMapArray = [];

for (let i = 0; i < numbers.length; i++) {
    newNoMapArray.push(numbers[i] + 10);
    
}

// console.log(newNoMapArray)