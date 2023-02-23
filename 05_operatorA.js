console.log(`** Step 1 **`);
function squareOfWordLength1(word1){
   console.log(`The word1 is:${word1}`);
   console.log(`Length of word1 is: ${word1.length}`);
   var square1=word1.length**2;
   console.log(`The square of word1 length is:${square1}`);

}
squareOfWordLength1(`JavaScript`);
console.log(`----------------------------`);

function squareOfWordLength2(word2){
    console.log(`The word2 is:${word2}`)
    console.log(`Length of word2 is: ${word2.length}`); 
    var square2=word2.length**2;
    console.log(`The square of word2 length is:${square2}`);
 }
 squareOfWordLength2(`Google Chrome`);
 console.log(`----------------------------`);

 function squareOfWordLength3(word3){
    console.log(`The word3 is:${word3}`)
    console.log(`Length of word3 is: ${word3.length}`);
    var square3=word3.length**2;
    console.log(`The square of word1 length is:${square3}`);
 }
 squareOfWordLength3(`Developer Smart`);
 console.log(`----------------------------`);

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

