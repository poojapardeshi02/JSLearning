const sbiBank = {
    bankName : "SBI Bank",
    location : "Pune",
    accountNo : 1234567890,
    ifsc : 'SBIN00000452',
    intrestRate : 8.10,
    showDeatails:function(){
        console.log(`Details of SBI bank:bankName-${this.bankName}, location-${this.location},accountNo-${this.accountNo}, ifsc-${this.ifsc},intrestRate-${this.intrestRate}`);
    }
}    
sbiBank.showDeatails()

const axisBank = {
    bankName : "Axis Bank",
    location : "Mumbai",
    accountNo : 1234598760,
    ifsc : 'UTIB0000004',
    intrestRate : 8.15,
    showDeatails:function(){
        console.log(`Details of AXIS bank:bankName-${this.bankName}, location-${this.location},accountNo-${this.accountNo}, ifsc-${this.ifsc},intrestRate-${this.intrestRate}`);
    }
}    
axisBank.showDeatails();

const hdfcBank = {
    bankName : "HDFC Bank",
    location : "Benglore",
    accountNo : 1324576890,
    ifsc : 'HDFCN00000452',
    intrestRate : 8.20,
    showDeatails:function(){
        console.log(`Details of HDFC bank:bankName-${this.bankName}, location-${this.location},accountNo-${this.accountNo}, ifsc-${this.ifsc},intrestRate-${this.intrestRate}`);
    }
}    
hdfcBank.showDeatails();

const yesBank = {
    bankName : "Yes Bank",
    location : "Hydrabad",
    accountNo : 9876543210,
    ifsc : 'YESB0000021',
    intrestRate : 8.25,
    showDeatails:function(){
        console.log(`Details of YES bank:bankName-${this.bankName}, location-${this.location},accountNo-${this.accountNo}, ifsc-${this.ifsc},intrestRate-${this.intrestRate}`);
    }
}    
yesBank.showDeatails();


