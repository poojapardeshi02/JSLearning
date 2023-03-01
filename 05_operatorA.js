console.log(`** Step 1 **`);
function squareOfWordLength(word){
  
   console.log(`Length of ${word} is: ${word.length}`);
   var square=word.length**2;
   return square;
}
var square=squareOfWordLength("JavaScript");
console.log(`The square of "JavaScript" length is:${square}`);
console.log(`----------------------------`);

var square=squareOfWordLength("Google Chrome");
console.log(`The square of "Google Chrome" length is:${square}`);
console.log(`----------------------------`);

var square=squareOfWordLength("Developer Smart");
console.log(`The square of "Developer Smart" length is:${square}`);

console.log(`** Step 2 **`);
function String(){
    var givenString=`I am Angular Developer`;
    var givenStringLength=givenString.length;
    console.log(`The String length is: ${givenStringLength}`);
    var totalNumberOfWords=givenString.split(` `);
    var totalNumberOfWordsLength=totalNumberOfWords.length;
    console.log(`The total number of words available in string is: ${totalNumberOfWords.length}`);
    var result1=givenStringLength/totalNumberOfWordsLength;
    console.log(`String length divide by total number of words is: ${result1}`);

    var result2=givenStringLength*totalNumberOfWordsLength;
    console.log(`String length multiple by total words available in string is: ${result2}`)
}
 String();

