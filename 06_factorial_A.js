
function factorialOfNum(num){
    let factorial = 1;
   
    if (num == null || num == undefined ) {
       factorial="Invalid"
    
   }else{
   for (let index = num; index >= 1; index--) {
      
    factorial = factorial * index ;
    
   }
}
   return factorial;
}
var result=factorialOfNum(5);
console.log(`Factorial of 5 is:${result}`);

var result=factorialOfNum(3);
console.log(`Factorial of 3 is:${result}`);

var result=factorialOfNum(null);
console.log(`Factorial of null is:${result}`);

var result=factorialOfNum(8);
console.log(`Factorial of 8 is:${result}`);

var result=factorialOfNum(undefined);
console.log(`Factorial of undefined is:${result}`);

var result=factorialOfNum(9);
console.log(`Factorial of 9 is:${result}`);

var result=factorialOfNum(0);
console.log(`Factorial of 0 is:${result}`);