class Employee {
    name: string;
    employeeId: number;

    constructor(name: string, employeeId: number) {
        this.name = name;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Name: ${this.name}, Employee ID: ${this.employeeId}`;
    }
}

class Manager extends Employee {
    department: string;

    constructor(
        name: string,
        employeeId: number,
        department: string
    ) {
        super(name, employeeId);
        this.department = department;
    }

    getManagerDetails(): string {
        return `${this.getEmployeeDetails()}, Department: ${this.department}`;
    }
}

class SeniorManager extends Manager {
    region: string;

    constructor(
        name: string,
        employeeId: number,
        department: string,
        region: string
    ) {
        super(name, employeeId, department);
        this.region = region;
    }

    displayFullDetails(): string {
        return `${this.getManagerDetails()}, Region: ${this.region}`;
    }
}

const manager = new SeniorManager(
    "Ravi",
    101,
    "IT",
    "South India"
);

console.log(manager.displayFullDetails());