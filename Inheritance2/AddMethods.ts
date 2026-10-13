interface StaffDetails {
    staffName: string;
    staffSalary: number;

    getStaffDetails(): string;
}

class StaffRecord implements StaffDetails {

    staffName: string;
    staffSalary: number;

    constructor(
        staffName: string,
        staffSalary: number
    ) {
        this.staffName = staffName;
        this.staffSalary = staffSalary;
    }

    getStaffDetails(): string {
        return `Staff Name: ${this.staffName}, Salary: ${this.staffSalary}`;
    }
}

const staffRecord = new StaffRecord(
    "John",
    60000
);

console.log(staffRecord.getStaffDetails());