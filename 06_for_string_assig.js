console.log('**** Step 1 ****');
var countVowel=function(str){
    var count=0;
    for (let index = 0; index < str.length; index++) {
       var char=str.charAt(index);
       if (char=='a' || char=='e' || char == 'i' || char=='o' || char=='u' || char=='A' || char=='E' || char == 'I' || char=='O' || char=='u' || char=='U') {
        count=count+1;
    }
        
    }
 
    return count;
}
var result=countVowel("JavaScript is the language of Internet");
console.log(`Total number of vowels in "JavaScript is the language of Internet":${result}`);
var result=countVowel("I am Angular Developer");
console.log(`Total number of vowels in "I am Angular Developer":${result}`);
var result=countVowel("Hard work and commitment is the key of success");
console.log(`Total number of vowels in "Hard work and commitment is the key of success":${result}`);

console.log('**** Step 2 ****');
 function lastWordCharsCount(str){ 
    var reverse = ""; 
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);
       if(char == " "){
            break;
       }
       reverse = reverse + char; 
    }
    return reverse;
}
var result2=lastWordCharsCount("JavaScript is the language of Internet");
var totalCharOfLastWord=result2.length
console.log(`Given String:"JavaScript is the language of Internet" `);
console.log(`Total number of char in last word:${totalCharOfLastWord}`);

var result2=lastWordCharsCount("I am Angular Developer");
var totalCharOfLastWord=result2.length
console.log(`Given String:"I am Angular Developer"`);
console.log(`Total number of char in last word:${totalCharOfLastWord}`);

var result2=lastWordCharsCount("Hard work and commitment is the key of success");
var totalCharOfLastWord=result2.length
console.log(`Given String:"Hard work and commitment is the key of success"`);
console.log(`Total number of char in last word:${totalCharOfLastWord}`);