function factorialOfWordsCount(str){
    
   
    if (str == null || str == undefined || isNaN(str) && typeof str=="number") {
       console.log(`Given string is ${str} invalid`);
    
   }else{
      let splitOfStr=str.split(" ");
      let countOfStr=splitOfStr.length
      //console.log(countOfStr);

      let factorial = 1;
   for (let index = countOfStr; index >= 1; index--) {
      
    factorial = factorial * index ;
    
    
   }
   console.log(`The factorial of total number of words available in string "${str}" is:${factorial}`);
}
  
}
factorialOfWordsCount("Revision is mother of success");
factorialOfWordsCount(NaN);
factorialOfWordsCount("We never fail, we always learn");
factorialOfWordsCount(null);
factorialOfWordsCount("");
factorialOfWordsCount("Pooja Vikram Pardeshi");
factorialOfWordsCount(undefined);

