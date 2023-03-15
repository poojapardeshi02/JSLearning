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

console.log("=== Create Map =====");
const mapOfBank = new Map();
mapOfBank.set("Axis Bank:",axis_bank);
mapOfBank.set("SBI Bank:",sbi_bank);
mapOfBank.set("ICICI Bank:",icici_bank);
mapOfBank.set("Kotak Bank:",kotak_bank);
mapOfBank.set("HDFC Bank:",hdfc_bank);
mapOfBank.set("Panjab Bank:",panjab_bank);
console.log(mapOfBank);


console.log("==== Traverse the map =====");

const element = mapOfBank.get();
const keyOfMap = mapOfBank.keys();
for (const key of keyOfMap) {
    const element = mapOfBank.get(key)
    console.log(`Bank Name:${element.bankName} , Account Number:${element.accountNo},Intrest Rate:${element.interestRate}`);
}






