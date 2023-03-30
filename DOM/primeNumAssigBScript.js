console.log("To check number is prime or not");
const isPrimeButton = document.querySelector("#isPrime");
isPrimeButton.addEventListener('click',() => {
    const inputPrime = prompt("Please enter number to check..",0);
    //console.log(inputPrime);
    const  tocheck = function(){
    for (let index = 2; index < inputPrime; index++) {
        if (inputPrime%index == 0) {
            console.log(`The number ${inputPrime} is not a prime`);
            return alert(`The number ${inputPrime} is not a prime`);
        }
    }
    console.log(`The number ${inputPrime} is  a prime`);
    return alert(`The number ${inputPrime} is  a prime`);
   }
 tocheck();
 
});
  