interface IndividualDetails {
    individualName: string;
    individualAge: number;
}

interface CourseStudent extends IndividualDetails {
    studentNumber: number;
    courseName: string;
    collegeName: string;
}

const courseStudentData: CourseStudent = {
    individualName: "Rajani",
    individualAge: 25,
    studentNumber: 101,
    courseName: "TypeScript",
    collegeName: "ABC College"
};

console.log(courseStudentData);