// If else Asingnment 

function maleMarriageEligibility(gender,age,boyName){
    if (gender=="Male" && age>=21) {
       var result2="You are eligible";
       return result2;
    } else {
       result2="Not eligible";
       return result2;
}
}
var result2=maleMarriageEligibility("Male",22,"Billgate");
console.log(`Hey Billgate:${result2}`);
var result2=maleMarriageEligibility("Male",18,"Stew Jobs");
console.log(`Hey Stew Jobs:${result2}`);

function femaleMarriageEligibility(gender,age,boyName){
    if (gender=="Female" && age>=18) {
        var result3="You are eligible for Marriage";
        return result3;
    } else {
        var result3="Not eligible for Marriage";
        return result3;
    }
}
var result3=femaleMarriageEligibility("Female",22,"Genifer");
console.log(`Hey Genifer:${result3}`);
var result3=femaleMarriageEligibility("Female",17,"Jenny");
console.log(`Hey Jenny:${result3}`);
