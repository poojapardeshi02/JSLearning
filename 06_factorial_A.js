
function factorialOfNum(num){
    
   
    if (num == null || num == undefined || num==NaN ) {
       console.log(`The factorial of ${num} is invalid`);
    
   }else{
      let factorial = 1;
   for (let index = num; index >= 1; index--) {
     
      factorial = factorial * index ;
      
   }
   console.log(`Factorial of ${num} is:${factorial}`);
}
   
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
