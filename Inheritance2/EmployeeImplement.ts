interface EmployeeDetails {
    employeeName: string;
    employeeAge: number;
    employeeSalary: number;
}

class EmployeeRecord implements EmployeeDetails {

    employeeName: string;
    employeeAge: number;
    employeeSalary: number;

    constructor(
        employeeName: string,
        employeeAge: number,
        employeeSalary: number
    ) {
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
        this.employeeSalary = employeeSalary;
    }
}

const employeeRecord = new EmployeeRecord(
    "Rajani",
    25,
    50000
);

console.log(employeeRecord);