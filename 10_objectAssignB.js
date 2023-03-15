const bankSBI = {
    bankName : "SBI Bank",
    ifscCode : 'SBIN0000452',
    accountNo : 1234567890,
    branchCode : 000452,
    
}
console.log(`Bank Info:`,bankSBI);
const bankLocation = {
    street : "Ring Road",
    city : "Phaltan",
    pinCode : 445523,
   
}
console.log(`Bank Location:`,bankLocation);

console.log("===== By cloning ======");
const newBankSBI = {...bankSBI}; // Using spread operator
console.log(`By Cloning bankSBI:`,newBankSBI);

const newBankLocation = {...bankLocation}; // Using spread operator
console.log(`By Cloning bankLocation:`,newBankLocation);

console.log("===== Merge by using object.assign() ======");
const concatBankSBIBankLocation = Object.assign(newBankSBI,newBankLocation);
console.log(`Merge:-`,concatBankSBIBankLocation);

const rateOfIntrest = {
    homeLoanIntrest : '8.20%',
    personalLoanIntrest : '9%',
    dueIntrest : '4.25%'
}
console.log('====== Create new object rateOfIntrest');
console.log(`Rate of Intrest:`,rateOfIntrest);

console.log('===== Merge 3 objects =========');
const mergeObjects = Object.assign(bankSBI,bankLocation,rateOfIntrest);
console.log(`SBI Deatails after merging`,mergeObjects);

console.log('======== Traverse=====');
for (const key in mergeObjects) {
    if (Object.hasOwnProperty.call(mergeObjects, key)) {
        const element = mergeObjects[key];
        console.log(key,element);
    }
}





