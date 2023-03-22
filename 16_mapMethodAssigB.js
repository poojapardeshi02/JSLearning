class Employee {
    constructor(emp_id, emp_name, emp_dep, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dep = emp_dep;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi= new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "AMahesh", "HR", 85000, "Infy");

let arrayOfEmp = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log('---------- Step 1 ------------');
console.log('All employees names list:');
let allEmployeeNameList = arrayOfEmp.map((employee) => {
    console.log(`Employee Name:${employee.emp_name}`);
})

console.log('---------- Step 2 ------------');
console.log('All employees departments list:');
let allEmployeeDepList = arrayOfEmp.map((employee) => {
    console.log(`Department Name:${employee.emp_dep}`);
})

console.log('---------- Step 3 ------------');
console.log('All employees ID list:');
let allEmployeeIdList = arrayOfEmp.map((employee) => {
    console.log(`Employee Id:${employee.emp_id}`);
})

console.log('---------- Step 4 ------------');
console.log('List of employees working in TCS:');
let employeeInTCS = arrayOfEmp.map((employee) => {
    if (employee.emp_company=="TCS") {
        console.log(`Employee Name:${employee.emp_name}`);  
    }
})