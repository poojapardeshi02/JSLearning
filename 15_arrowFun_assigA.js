console.log('---------- Step 1 ---------');
let show = () => console.log("Good Morning ,Today is Monday");
show();

console.log('---------- Step 2 ---------');
let mulFun = (num1,num2,num3=1) =>   num1*num2*num3;
console.log(`Multiplication of numbers 5,5,2 is:${mulFun(5,5,2)}`);
console.log(`Multiplication of numbers 10,4 & num3=1 is:${mulFun(10,4)}`);

console.log('---------- Step 3 ---------');
let addition = (num1,num2,num3,num4,num5) => num1+num2+num3+num4+num5;
console.log(`Addition of 5 numbers:${addition(100,100,200,349,756)}`);
console.log(`Addition of "I am","learning","ES6",'Features',"in depth" is:${addition("I am"," learning"," ES6",' Features'," in depth")}`);
