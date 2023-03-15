class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.accountNo= accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}
console.log("==== By Creating Object from class ======");
const axis_bank = new Bank("Axis Bank","Pune",1234567890,'UTIB00000437','9%');
console.log(`Bank:`,axis_bank);
const sbi_bank = new Bank("SBI Bank","Mumbai",2345678910,'SBIN0000452','8.8%');
console.log(`Bank:`,sbi_bank);
const icici_bank = new Bank("ICICI Bank","Nashik",3456789120,'ICIC0000027','9.2%');
console.log(`Bank:`,icici_bank);
const kotak_bank = new Bank("Kotak Bank","Satara",4567891230,'KKBK0001986','9.1%');
console.log(`Bank:`,kotak_bank);
const hdfc_bank = new Bank("HDFC Bank","Solapur",5678912340,'HDFC0000635','8.9%');
console.log(`Bank:`,hdfc_bank);
const panjab_bank = new Bank("Panjab Bank","Nagpur",6789123450,'PUBN0000312','9.3%');
console.log(`Bank:`,panjab_bank);

console.log("===== Object adeed to in Set =======");
const bankSet = new Set();
bankSet.add(axis_bank);
bankSet.add(sbi_bank);
bankSet.add(icici_bank);
bankSet.add(kotak_bank);
bankSet.add(hdfc_bank);
bankSet.add(panjab_bank);
console.log(bankSet);

console.log("===== Set traverse using for of loop  =======");
for (const bank of bankSet) { // Instead of element we use bank 
    console.log(`Bank Name:${bank.bankName},Location:${bank.location}`); 
}