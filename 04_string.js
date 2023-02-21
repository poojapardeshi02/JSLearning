var greet="Good Morning";
console.log(typeof greet);

console.log(" Total number chars available into this string variable - greet ");
var greetLength=greet.length;
console.log("Total char:",greetLength);

console.log("Find the chatacter by index value");
var charAtIndex3=greet.charAt(3);
console.log("character available at index 3 is",charAtIndex3);

console.log("Find the last character");
var charAtLastIndex=greet.charAt(greetLength-1);
console.log("Last char is:",charAtLastIndex);

console.log("Find the index by character value");
var indexOfM=greet.indexOf('M');
console.log("Index of char M is",indexOfM);

console.log("Index of char which is not available in string:",greet.indexOf('z'));
//var indexOfO=greet.indexOf('z');

//first occurence of o
console.log("Index of o char:",greet.lastIndexOf('o'));//Last ouccurence of o

var replaceResult=greet.replace("Morning","Evening");// Morning is search & Evening is replace value
console.log(replaceResult);// Replaced
console.log(greet);//original

console.log("Upper Case:",replaceResult.toUpperCase());
console.log("Lower Case:",replaceResult.toLowerCase());

var myName="   Pooja Paardeshi  ";//Removing extra spaces from srting
var myNameAfterTrim=myName.trim();
console.log("Removing extra start and end spacesusing trim():",myNameAfterTrim,myName.length,myNameAfterTrim.length);

// Find the total extra spaces removed from the string - myName
var count=myName.length-myNameAfterTrim;
console.log(count)

console.log("My name after trim start:",myName.trimStart());//start trim
var myNameTrimEnd=myName.trimEnd();//End trim 
console.log("My Name after trim end:",myNameTrimEnd)
console.log("Count after end trim:",myNameTrimEnd.length);//  count after end trim //total 20

console.log("includes()");//Include
console.log("Is substring Mor includes in the greet or not:",greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not:",greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not:",greet.includes("o"));

console.log("slice() method");//This is slice  (same as substrim) 
var sliceResult=greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,6));//written 2,3,4,5 not 6

console.log("split() method");// Split Method
var greet="Good Morning my dear friend";
var splitResult=greet.split(" ");
console.log(splitResult,typeof splitResult);
console.log("Total words:",splitResult.length);

var myFriendList="Billgates, Stew Job, Elon Musk, Ratan TaTa, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frdList=myFriendList.split(",");// Split by ,
console.log(frdList);
console.log(frdList.length)
//console.log("My Friends:",myFriendList.split(","));// written By Me

var frdList=myFriendList.split(" ");// Split by space
console.log("Total number of words:",frdList.length);


