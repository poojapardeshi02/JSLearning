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

let arrayOfEmp = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi] 

console.log("------- Step 1 -----------");
console.log(`Employees in TCS`);
arrayOfEmp.forEach(element => {
    if (element.emp_company == "TCS") {
        console.log(`Employee Name:`,element.emp_name);
    }
});

console.log("-------- Step 2 ---------");
console.log(`Employees with salary greater than or equal 50000`);
arrayOfEmp.forEach(element => {
    if (element.emp_salary >= 50000) {
        console.log(`Employee Details:`,element);
    }
});

console.log("-------- Step 3 ---------");
    let addSalary = 0;
    arrayOfEmp.forEach(element => {
     let employeesalary = element.emp_salary;
        addSalary = addSalary + employeesalary;
    });
    console.log(`Sum of all employees salary:${addSalary}`);

console.log("-------- Step 4 ---------");  
let numOfAllEmployees = arrayOfEmp.length;
function avgSalary() {
    let avg =  addSalary/numOfAllEmployees;
    console.log(`Average Salary of employees:${avg}`);
}
avgSalary();

console.log("-------- Step 5 ---------");  
arrayOfEmp.forEach(element => {
    if ((element.emp_dep == "IT" || element.emp_dep == "HR")) {
         //if(element.emp_salary >= 75000)  {
            console.log(`Employee Details:`,element); 
        //}
        
    }
});