console.log(`** Step 1 **`);
function maleMarriageEligibility(gender, age, boyName) {
    var result = (gender == "Male" && age >= 21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    return result;
}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);

console.log(`** Step 2 **`);
function femaleMarriageEligibility(gender, age, girlName) {
    var result1 = (gender == "Female" && age >= 18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    return result1;
}
var result1 = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result1);
var result1 = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result1);
