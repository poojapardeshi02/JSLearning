const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log("==== Step 1 ====");
console.log(`Total elements available or Length is:${arrayNumbers.length}`);

console.log("==== Step 2====");
console.log(`First element & Last element is:${arrayNumbers[0]},${arrayNumbers[arrayNumbers.length-1]}`);

console.log("==== Step 3====");
let thirdLastElement=arrayNumbers[arrayNumbers.length-3];
console.log(`The 3rd last element is:${thirdLastElement}`);

console.log("==== Step 4====");// Even Numbers in array
const array=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element=arrayNumbers[index];
    if ((element%2) == 0) {
       array.push(element);
    }
}
console.log("Array of even numbers:",array);

console.log("==== Step 5====");// Odd  Numbers in array
let array1=[] // Empty array
for (let index = 0; index < arrayNumbers.length; index++) {
    if ((arrayNumbers[index]%2) == 1) {
        array1.push(arrayNumbers[index]);
    }
}
console.log("Array of odd numbers:",array1);

console.log("==== Step 6====");
let array3=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element=arrayNumbers[index];
    if (index%2 == 0) {
        array3.push(element);
    }   
}
console.log("Even positioned elements from array:",array3);
let sum=0;
for (let index = 0; index < array3.length; index++) {
    const element = array3[index];
    sum = sum + element;
}
console.log("Sum of even positioned elements:",sum);

console.log("==== Step 7 ====");
let array4=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element=arrayNumbers[index];
    if (index%2 == 1) {
        array4.push(element);
    } 
}
console.log("Odd positioned elements from array:",array4);
 let sum1= 0;
for (let index = 0; index < array4.length; index++) {
    const element = array4[index];
    sum1 = sum1 + element;
}
console.log("Sum of odd positioned elements:",sum1);

console.log("==== Step 08 ====");
//sum2=sum+sum1;
//console.log(sum2);
let sum2 = 0; 
for (let index = 0; index < arrayNumbers.length; index++) {//1
    const element = arrayNumbers[index];
   sum2 = sum2 + element;// 
}
console.log(`Sum of an Array element is: ${sum2}`);

console.log("==== Step 09 ====");
let array2=[]
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5 == 0) {
        array2.push(element);
    }
    
}
console.log("The numbers which are muliple of 5:",array2);


console.log("==== Step 10 ====");
const is115Available = arrayNumbers.includes(115);
console.log(`Is 115 available in arrayNumbers: ${is115Available} `);


console.log("==== Step 11 ====");
const is23Available = arrayNumbers.includes(23);
console.log(`Is 23 available in arrayNumbers: ${is23Available} `);

console.log("==== Step 12 ====");
arrayNumbers.splice(3,0,55,66);
console.log("By inserting numbers 55,66 before index 3 then array is:",arrayNumbers);
//console.log(`By inserting numbers 55,66 before index 3 then array is:${arrayNumbers}`);

console.log("==== Step 13 ====");
arrayNumbers.splice(4,3);
console.log("Delete 3 elements starting from index 4 then array is:",arrayNumbers);
