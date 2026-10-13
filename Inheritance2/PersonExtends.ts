interface HumanDetails {
    fullName: string;
    humanAge: number;
}

interface CollegeStudent extends HumanDetails {
    studentId: number;
}

const collegeStudentData: CollegeStudent = {
    fullName: "Rajani",
    humanAge: 25,
    studentId: 101
};

console.log(collegeStudentData);