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
 console.log('------Step 1 --------');
 console.log("All Employees working in 'TCS':");
 for (const element of arrayOfEmp) {
    if (element.emp_company == "TCS") {
        console.log(`Employee Name:${element.emp_name} & Company Name:${element.emp_company}`);
    }
 }

 console.log('------Step 2 --------');
 console.log("Finance department employees:");
 for (const element of arrayOfEmp) {
    if (element.emp_dep == "Finance") {
        console.log(`Department Name:${element.emp_dep} & Employee Name:${element.emp_name}`);
    }
 }

 console.log('------Step 3 --------');
 console.log("Employees whose name start with 'R'");
 for (const element of arrayOfEmp) {
    if (element.emp_name.startsWith('R')) {
        console.log("Employee Details:",element);
    }
 }

console.log('------Step 4 --------');
console.log("Whose salary greater than 75000:");
for (const element of arrayOfEmp) {
    if (element.emp_salary > 75000) {
        console.log(`Employee Name:${element.emp_name},Company:${element.emp_company},Saray:${element.emp_salary}`);
    }
}

console.log('------Step 5  --------');
console.log("Whose salary >=50,0000 & from 'IT' department: ");
for (const element of arrayOfEmp) {
    if (element.emp_salary >= 50000 && element.emp_dep == 'IT') {
        console.log("Employee Details:",element);
    }
}

console.log('------Step 6  --------');
console.log("Who is from company'Infy':");
for (const element of arrayOfEmp) {
    if (element.emp_company == 'Infy') {
        console.log("Employee Details:",element);
    }
}