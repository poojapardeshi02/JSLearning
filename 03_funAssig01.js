console.log("** Step 1**");//With no argus & no return
function myIdealPerson() {
    console.log("My Ideal Person:Dr.Abdul Kalam")
}
myIdealPerson();

function myDreamJob() {
    console.log("My Dream Job::UI Developer");
}
myDreamJob();

console.log("** Step 2**"); //With argus
 function personalDetails(firstName, lastName, collegeName) {
    console.log("Personal Details:" ,"First Name:",firstName,"Last Name:",lastName,"College Name:",collegeName);
}
personalDetails("Pooja,","Pardeshi,","Sinhgad");

console.log("** Step 3**"); //fun with args & no return
function swapValuesDude(name1,name2){
   console.log("Before Swap:",name1,name2);
   var temp=name1;
   name1=name2;
   name2=temp;
   console.log("After Swap:",name1,name2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);

console.log("** Step 4**");// with argus & return
function addThreeValues(value1,value2,value3){
    var add=value1+value2+value3;
    return add;
}
var addResult1=addThreeValues(10.23,600,40);
console.log("Addition:",addResult1);

var addResult2=addThreeValues("Hello  ","Good  ","Morning");
console.log("Addition:",addResult2);





