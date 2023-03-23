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

console.log('---- Step 1 ---------');
let employeesOfTCS = arrayOfEmp.filter((employee) => {
    if (employee.emp_company == "TCS") {
        console.log(`Company Name:${employee.emp_company},Employee Name:${employee.emp_name}`); 
    }
});

console.log('---- Step 2 ---------');

let employeesOfWipro = arrayOfEmp.filter((employee) => {
    if (employee.emp_company == "Wipro") {
      return employee;
    }
});
//console.log(employeesOfWipro);
let add = 0;
employeesOfWipro.filter(employee => add = add + employee.emp_salary);
let avg = add/employeesOfWipro.length;
console.log(`The average salary of employees which are working in Wipro:${avg}`);

console.log('---- Step 3 ---------');

let employeesOfWiproAndInfy = arrayOfEmp.filter((employee) => {
    if (employee.emp_company == "Wipro" || employee.emp_company == "Infy") {
       
      return employee;
    }
});
//console.log(employeesOfWiproAndInfy);
let add1 = 0;
employeesOfWiproAndInfy.filter(employee => add1 = add1+ employee.emp_salary);
let avg1 = add1/employeesOfWiproAndInfy.length;
console.log(`The average salary of employees which are working in Wipro and Infy:${avg1}`);
