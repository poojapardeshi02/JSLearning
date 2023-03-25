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

let arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`----- Step 1 --------`);
console.log(`--Sort 'arrayEmployees'in ascending order of Employee Id's--`);
const arrayEmployeesFilterId = arrayEmployees.filter((employee) => {
 return employee.emp_id;
});
const arrayEmployeesSort = arrayEmployeesFilterId.sort((emp1,emp2) => {
    return  emp1.emp_id>emp2.emp_id ? 1 : -1;
});
arrayEmployeesSort.forEach((employee) => {
    console.log(`Employee Id:${employee.emp_id},Employee Name:${employee.emp_name},Employee Department:${employee.emp_dep}`);
})

console.log(`----- Step 2 --------`);
console.log(`--Sort 'arrayEmployees'in ascending order of Employee Department--`);
const arrayEmployeesfilterDep = arrayEmployees.filter((employee) => {
    return employee.emp_dep;
});
const arrayEmployeesDepSort = arrayEmployeesfilterDep.sort((emp1,emp2) => {
    return emp1.emp_dep > emp2.emp_dep ? 1 : -1;
});
arrayEmployeesDepSort.forEach((employee) => {
    console.log(`Employee Id:${employee.emp_id},Employee Department:${employee.emp_dep},Employee Name:${employee.emp_name}`);
});

console.log(`----- Step 3 --------`);
console.log(`--Sort 'arrayEmployees'in descending order of Employee Salary--`);
const arrayEmployeesFilterSalary = arrayEmployees.filter((employee) => {
    return employee.emp_salary;
   });
   const arrayEmployeesFilterSalSort = arrayEmployeesFilterSalary.sort((emp1,emp2) => {
       return emp1.emp_salary>emp2.emp_salary ? 1 : -1;
   });
   arrayEmployeesFilterSalSort.forEach((employee) => {
       console.log(`Employee Name:${employee.emp_name},Employee Salary:${employee.emp_salary},Employee Company:${employee.emp_company}`);
   })
      
