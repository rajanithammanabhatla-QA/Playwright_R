interface EmployeeRecordDetails {
    employeeName: string;
    employeeAge: number;
    departmentName: string;
}

class EmployeeInformation implements EmployeeRecordDetails {

    employeeName: string;
    employeeAge: number;
    departmentName: string;

    constructor(
        employeeName: string,
        employeeAge: number,
        departmentName: string
    ) {
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
        this.departmentName = departmentName;
    }
}

const employeeInformation = new EmployeeInformation(
    "Rajani",
    25,
    "Testing"
);

console.log(employeeInformation);