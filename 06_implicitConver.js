// Implicit conversion to string
// *** numeric string used with + gives string type
var result;

result='3' + 2;
console.log(result);

result='3' + true;
console.log(result);

result='3' + undefined;
console.log(result);

result='3' + null;
console.log(result);

// Implicit boolean conversion to number
// If boolean is used, true is 1, false is 0
var result;

result='4' - true;  // 4 - 1 = 3
console.log(result);

result=4 + true;
console.log(result); // 4 + 1 = 5

result=4 - false;
console.log(result); // 4 - 0 = 4

result=4 +  false;
console.log(result); // 4 + 0 = 4

//Implicit string conversion to number
// numeric string used with - , / , * results number type
result = '4' - '2';
console.log(result); // 4 - 2 = 2

result = '4' - 2;
console.log(result); // 4 - 2 = 2

result = '4' * '2';
console.log(result); // 4 * 2 = 8

result = '4' / 2;
console.log(result); // 4 / 2 = 2

//Undefined used with number,boolean or null given NaN
// Arithmatic operation of undefined with number, boolean or null gives NaN
result = 4 + undefined;
console.log(result); // NaN

result = 4 - undefined;
console.log(result); // NaN

result = true + undefined;
console.log(result); // NaN

result = null + undefined;
console.log(result); // NaN