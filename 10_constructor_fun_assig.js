function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName,
    this.location = location,
    this.ifscCode = ifscCode,
    this.branchCode = branchCode,
    this.show = function(){
        console.log(`Bank details: ${this.bankName} ${this.location},${this.ifscCode},${this.branchCode}`);
    }
}
console.log(`==== Bank Details ====`);
const yesBank = new Bank("Yes bank","Kolhapur",'YESB0000043',000043);
yesBank.show();

const sbiBank = new Bank("SBI Bank","Pune",'SBIN00000452',000452);
sbiBank.show();

const mahBank = new Bank("Maharashtra Bank","Mumbai",'MAHB0000002',000002);
mahBank.show();

const axisBank = new Bank("Axis Bank","Satara",'UTIB0004304',004304);
axisBank.show();

console.log("--------- By Adding data members using prototype  -------------");
Bank.prototype.openTime = "9 AM IST"; // add data member

Bank.prototype.closeTime = "6 PM IST"; // add one more data member closeTime 

console.log(`SBI Bank:- Open Time:${sbiBank.openTime},Close Time:${sbiBank.closeTime}`);

console.log(`${axisBank.bankName}:-Close Time:${axisBank.closeTime}`);

console.log(`Bank Name:-${yesBank.bankName}, Branch Code:-${yesBank.branchCode},Open Time:-${yesBank.openTime}`);