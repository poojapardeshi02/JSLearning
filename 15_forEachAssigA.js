const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(arrayNumbers);
console.log("------- Step 1 ---------");
console.log("Array element with it's index using forEach loop");
arrayNumbers.forEach((element,index) => {
    console.log(`index:${index},Element:${element}`);
});

console.log("------- Step 2 ---------");
console.log("Positive Numbers from array:");
arrayNumbers.forEach(element => {
    if (element > 0) {
        console.log(element);
    }
});

console.log("------- Step 3 ---------");
console.log("Negative Numbers from array add in to new array:");
let arrayNew = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        arrayNew.push(element);
       
    }
  
});
console.log(`New Array`,arrayNew);


console.log("------- Step 4 ---------");
console.log("Even Numbers from array:");
arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log(element);
    }
});

console.log("------- Step 5  ---------");
let sum = 0
arrayNumbers.forEach(element => {
    sum = element + sum;
});
console.log(`Sum of all elements from array:${sum}`);

console.log("------- Step 6  ---------");
arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(`Even indexed ${index}, array value:${element}`);
    }
});


