console.log(`** Step 1 **`);
function greaterNumber(num1, num2){
    var result = num1>num2 ? num1 : num2;
     console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
 }
 greaterNumber(10, -10);
 greaterNumber(800, 899);
 


console.log(`** Step 2 **`);
function isEvenOrOddNum(num) {
    var result1 = ((num % 2) == 0) ? `The value ${num} is even:true` : `The value ${num} is odd:false`;
    return result1;
}
var result1 = isEvenOrOddNum(29);
console.log(result1);
var result1 = isEvenOrOddNum(44);
console.log(result1);
var result1 = isEvenOrOddNum(0);
console.log(result1);
var result1 = isEvenOrOddNum(101);
console.log(result1);

console.log(`** Step 3 **`);
function wordLength(string) {
    var wordLengthFind = string.length
    var result2 = (wordLengthFind % 2) == 0 ? "Even" : "odd";
    return result2;
}
var result2 = wordLength("Javascript");
console.log(`The Word "JavaScript"  has ${result2} length `);

var result2 = wordLength("Developer");
console.log(`The Word "Developer" has ${result2} length`);

var result2 = wordLength("Google");
console.log(`The Word "Google" has ${result2} length`);
