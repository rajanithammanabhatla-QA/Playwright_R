interface BasicPerson {
    personName: string;
    personAge: number;
}

interface JobDetails {
    jobId: number;
    jobSalary: number;
}

interface ManagerDetails extends BasicPerson, JobDetails {
    departmentName: string;
}

const managerData: ManagerDetails = {
    personName: "Rajani",
    personAge: 25,
    jobId: 101,
    jobSalary: 60000,
    departmentName: "Testing"
};

console.log(managerData);