console.log("*** Step 1 ***");
function voteEligibility(age){
    if (age < 0 || age==0 || age > 120 || age==undefined ||age==null) {
        var result=`In valid data`;
        return result;
    } 
    if (age < 18) {
        var result=`Valid  but not Eligible`;
        return result;
    } 
     if (age > 18) {
        var result=`Your age ${age} is:Eligible for voting`;
        return result;
    } else {
        var result=`Your age ${age} is:Not eligible for voting`;
        return result;
    }
}
var result=voteEligibility(45);
console.log(result);
var result=voteEligibility(17);
console.log(result);
var result=voteEligibility(8);
console.log(result);
var result=voteEligibility(20);
console.log(result);
var result=voteEligibility(-10);
console.log(result);
var result=voteEligibility(200);
console.log(result);
var result=voteEligibility(0);
console.log(result);
var result=voteEligibility(undefined);
console.log(result);
var result=voteEligibility(null);
console.log(result);

console.log("*** Step 2 ***");
function gradeCalculation(marks){
    // if marks is 0 or less than 0 or greater than 100 or not in valid number format
    //ex."56" or "Seventy" then log the msg - Please provide the valid marks
if (marks<=0 || marks > 100 || (typeof marks != "number") || marks == null || isNaN(marks) ) {
    console.log("Please provide the valid marks");
}else{
  if (marks>=90) {
    console.log(`Funtastic Mraks:${marks}, Youe grade is A++`);
  }
 if (marks >= 75 && marks < 90) {
    console.log(`Excellent Mraks:${marks}, Youe grade is A`);
 }
 if (marks >= 50 && marks < 75) {
    console.log(`Good Mraks:${marks}, Youe grade is B`);
 }
 if (marks >= 35 && marks < 50){
    console.log(`Mraks is:${marks}, Youe grade is c,Need improvement`);
 }
}
}
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("91");
gradeCalculation("Seventy One");
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);

