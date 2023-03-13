class Vehicle{
    constructor(name,color,model,prize,mileage){
        this.name = name,
        this.color = color,
        this.model = model,
        this.prize = prize,
        this.mileage = mileage
    }

    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}
console.log("==== Step 1 ====");
const maruti = new Vehicle("Maruti","White","Baleno","7 lakh","22km/l");
console.log(maruti);


const hyundai = new Vehicle("Hyundai","Gray","Creta","10.84 lakh","21km/l");
console.log(hyundai);

const mahindra = new Vehicle("Mahindra","Maroon","Thar","10 lakh","19km/l");
console.log(mahindra);

const honda = new Vehicle("Honda","Blue","BalenoHonda City","6lakh","20km/l");
console.log(honda);

const toyota = new Vehicle("Toyota","Black","Fortuner","32 lakh","10km/l");
console.log(toyota);

console.log("==== Travese array");
const arrayofVehicle = [maruti,hyundai,mahindra,honda,toyota];
for (const element of arrayofVehicle) {     //Using for of loop
    console.log(`Vehicle Details:${element.name}, ${element.color}, ${element.model}, ${element.prize},${element.mileage}`);
}

console.log('==== Step 2 ====');
class College{
    constructor(name,city,university,departments,placements){
        this.name = name,
        this.city = city,
        this.university = university,
        this.departments = departments,
        this.placements = placements
    }
}
const sinhgad = new College("Sinhgad college","Pandharpur","Solapur","4",":90%");
console.log(sinhgad);

const coep = new College("College of Engineering","Phaltan","Lonare","5","80%");
console.log(coep);

const kbp = new College("K.B.P College","Satara","Kolhapur","3","85%");
console.log(kbp);

const walchand = new College("Walchand college","Sangli","Kolhapur","4","90%");
console.log(walchand);

console.log('==== Step 3 ====');
function traverseObject(arg){
    console.log(`College information:`);
    for (const key in arg) {     //  Using for in loop
        if (Object.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            console.log(key,":", element);
        }
    }
}
traverseObject(sinhgad);
console.log('-------------------------');
traverseObject(coep);
console.log('-------------------------');
traverseObject(kbp);
console.log('-------------------------');
traverseObject(walchand);
