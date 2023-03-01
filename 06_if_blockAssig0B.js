console.log(`** Step 1 **`);
function greaterNumber(num1, num2){
    if (num1>num2) {
        console.log(` The greater number is ${num1} `);
    } else {
        console.log(` The greater number is ${num2} `);
    }
 }
 greaterNumber(10, -10);
 greaterNumber(800, 899);
 


console.log(`** Step 2 **`);
function isEvenOrOddNum(num) {
    if ((num % 2) == 0) {
        console.log(`The given number ${num} is: Even`);
    } else {
        console.log(`The given number ${num} is: Odd`);
    } 
}
isEvenOrOddNum(45);
isEvenOrOddNum(67);
isEvenOrOddNum(70);
isEvenOrOddNum(98);

console.log(`** Step 3 **`);
function voteAge(age){
    if (age>=18) {
        console.log(`Person having age ${age}:You are eligible for voting`);
    } else {
        console.log(`Person having age ${age}:You are not eligible for voting`);
    }
}
voteAge(18);
voteAge(20);
voteAge(17);
voteAge(40);

console.log(`** Step 4 **`);
function givenString(string){
    var result2=string.length;
    if (result2 > 10) {
        console.log(`Is the lengthof string ${string} more than 10:Yes`);
    } else {
        console.log(`Is the lengthof string ${string} more than 10:No`);
    }
}
givenString(`"JavaScript-ES-6"`);

console.log(`** Step 5 **`);
