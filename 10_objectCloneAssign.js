console.log('===== Step 1 Shallow clone ======');
const arrayNums =[20,3,4,56,90,400,49];
console.log(`Original Array:${arrayNums}`);
const newArrayNums = arrayNums;  // Shallow clone
console.log(`Cloned Array:${newArrayNums}`);
newArrayNums.push(55,66);
console.log(`Updated cloned array with value 55,66:${newArrayNums}`);

console.log('===== Step 2 Deep clone ======');
const clonedArrayNum = [...arrayNums] // Deep cloning
console.log(`Using spread operator deep cloned array:${clonedArrayNum}`);
arrayNums.push(10,25); //update original array by add 10,25 at last position
console.log(`Update Original array by adding 10,25 at last position:${arrayNums} `);

console.log('====== Step 3  Merge Array operation =======');
const arrayEven = [2,30,14,8];
console.log(`Array even:${arrayEven}`);
const merge = [...arrayEven,...arrayNums]; //Merge using spread operator
console.log(`After merge arrayEven & arrayNum:${merge}`);

console.log('===== Step 4 Create employee_info object ======');
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,00,000INR",
        aug_month : "50,00,000INR",
        jun_month : "65,00,000INR"
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli,431202"
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}
console.log(`Employee Information:`,employee_info);

console.log('===== Step 5 =====');
console.log(`a. Employee Details:- Address:Locality:`,employee_info.address.locality );
console.log(`City:${employee_info.address.city},State:${employee_info.address.state},Country:${employee_info.address.country}`);

console.log(`b. Mobile Numbers :${employee_info.mobiles}`);

console.log('===== Step 6 ===== ');
const newEmployee_info = JSON.parse(JSON.stringify(employee_info));
console.log(`Cloning by JSON.stringify():`,newEmployee_info);
newEmployee_info.salary.july_month = "80,00,000INR";
console.log(`Original 'july_month' salary:${employee_info.salary.july_month}`);
console.log(`In cloned object updated 'july_month' salary:${newEmployee_info.salary.july_month}`);
employee_info.address.country ='United Kingdom';
console.log(`Update property 'country' to 'United Kingdom':${employee_info.address.country }`);