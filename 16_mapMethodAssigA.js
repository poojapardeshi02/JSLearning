// Assignment A:map():
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log((arrayNumbers));

console.log('-------- Step 1 ----------');
const arrayNew = arrayNumbers.map( (element) => {
    return element + 10;
 } )
 console.log(`By adding 10 into each element then new array:${arrayNew}`);

 console.log('-------- Step 2 ----------');
const newSquArray = arrayNumbers.map( (element) => {
    return element ** 2;
 } )
 console.log(`By squareing each array element:${newSquArray}`);

 console.log('-------- Step 3 ----------');
 console.log(`By adding index value into its corresponding each array element:`);
 const AddIndexValueInCorr = arrayNumbers.map(element => {
    return element + arrayNumbers.indexOf(element);
 });
 console.log(AddIndexValueInCorr);