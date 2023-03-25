const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumbers);
console.log(`------- Step 1 -------`);
let reverseArray = arrayRollNumbers.reverse();
console.log(`By reversing array:${reverseArray}`);

console.log(`------- Step 2 -------`);
let sortArray = arrayRollNumbers.sort();
console.log(`Sort array without custom sorting:${arrayRollNumbers}`);

console.log(`------- Step 3 -------`);
arrayRollNumbers.sort((a,b) => {
    return a>b ? 1 : -1 ;
});
console.log(`Sort array by ascending order:${arrayRollNumbers}`);

console.log(`------- Step 4 -------`);
const greatestNum = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`Grestest number from array:${greatestNum}`);

console.log(`------- Step 5 -------`);
const smallestNum = arrayRollNumbers[0];
console.log(`Grestest number from array:${smallestNum}`);

console.log(`------- Step 6 -------`);
/*console.log(`By removing duplicates from array`);//filtr
const duplicateArray=arrayRollNumbers.filter((element,index) => {
   return  arrayRollNumbers.indexOf(element) === index;
});
console.log(duplicateArray);*/

const removefun = [...new Set(arrayRollNumbers)];
console.log(removefun);