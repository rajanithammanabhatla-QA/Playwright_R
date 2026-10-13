interface StudentBase {
    studentName: string;
    studentAge: number;
}

interface UniversityStudent extends StudentBase {
    rollNumber: number;
    degreeName: string;
}

const universityStudentData: UniversityStudent = {
    studentName: "John",
    studentAge: 22,
    rollNumber: 101,
    degreeName: "Computer Science"
};

console.log("Name:", universityStudentData.studentName);
console.log("Age:", universityStudentData.studentAge);
console.log("Roll Number:", universityStudentData.rollNumber);
console.log("Degree:", universityStudentData.degreeName);