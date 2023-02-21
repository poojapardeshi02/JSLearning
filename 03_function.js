// Function with no arguments and no return value
function showFullName(){
    console.log("My Full Name is:Pooja Pardeshi")
}
showFullName(); // Function call or invoke

//Funtion with arguments and no return value
function showAge(age){
    console.log("My age is:",age);
}
showAge(32);

//Funtion with no arguments and  return value
function fullName(){
    var name="Pooja Pardeshi";
    return name;
}
var fName=fullName();
console.log(fName);

//Funtion with arguments and  return value
function sunOfNumbers(num1,num2,num3){
 var sum=num1+num2+num3;
 return sum;
}
var sumResult = sunOfNumbers(10,45,79);
console.log(sumResult);

var num1=100;
var num2=200;

var str1="Sweety";
var str2="Cutey";

var name1="Purva";
var name2="Krisha";

function swapVariables(value1,value2){
   console.log("Before Swap:",value1,value2);
   var temp=value1;
   value1=value2;
   value2=temp;
   console.log("After Swap:",value1,value2);
   return "Swapping variables successfully completed";
}
var swapResult=swapVariables(num1,num2);
console.log(swapVariables);

var swapResult2=swapVariables(str1,str2);
console.log(swapVariables);

var swapResult3=swapVariables(name1,name2);
console.log(swapVariables);