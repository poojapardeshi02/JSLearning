const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(arrayNumbers);

console.log('---------- Step 1 ------------');
const arrayGreaterNumBy50 = arrayNumbers.filter((num) => {
     return num > 50;
});
console.log(`All numbers which  greater than 50 are: ${arrayGreaterNumBy50}`);

console.log('---------- Step 2 ------------');
const evenNumArray = arrayNumbers.filter((num) => {
    return num%2 == 0;
});
console.log(`All even numbers:${evenNumArray}`);

console.log('--------- Step 3 -------------');
const oddNumArray = arrayNumbers.filter((num) => {
    return num%2 == 1;
});
console.log(`All odd numbers:${oddNumArray}`);

console.log('--------- Step 4 -------------');
const multipleOf5 = arrayNumbers.filter((num) => {
    return num%5 == 0; // Also we use if condition 
});
console.log(`All multiple of 5 numbers:${multipleOf5}`);

console.log('--------- Step 4 -------------');
const numBetween20And50 = arrayNumbers.filter((num) => {
    if (num > 20 &&  num < 50) {
        return num;
    }
});
console.log(`All numbers between 20 to 50:${numBetween20And50}`);