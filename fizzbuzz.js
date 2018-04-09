// FizzBuzz in JS
// Author: Rod Elliott

// Vars
let fizzCount = 0;
let buzzCount = 0;
let fizzbuzzCount = 0;
let totalCount = 0;

// Prints all numbers from 1 to 100
// Print Fizz for all nums divisible by 3
// Print Buzz for all nums divisible by 5
// Print FizzBuzz for all nums divisible by 3 and 5
for (let i = 1; i < 101; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        fizzbuzzCount += 1;
    }
    else if(i % 3 === 0){
        console.log("Fizz");
        fizzCount += 1;
    }
    else if(i % 5 === 0){
        console.log("Buzz");
        buzzCount += 1;
    }
    else
        console.log(i);
}

// Getting counts to make sure it is correct
console.log("FizzBuzz Count: " + fizzbuzzCount);
console.log("Fizz Count: " + fizzCount);
console.log("Total Nums Divisible by 3: " + (fizzCount + fizzbuzzCount));
console.log("Buzz Count: " + buzzCount);
console.log("Total Nums Divisible by 5: " + (buzzCount + fizzbuzzCount));
totalCount = fizzbuzzCount + buzzCount + fizzCount + fizzbuzzCount;
console.log("Total Count: " + totalCount);