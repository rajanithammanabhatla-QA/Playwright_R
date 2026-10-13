interface StudentRecord {
    studentId: number;
    studentName: string;
    studentAge: number;
}

const studentRecords: StudentRecord[] = [

    {
        studentId: 1,
        studentName: "Rajani",
        studentAge: 25
    },

    {
        studentId: 2,
        studentName: "John",
        studentAge: 30
    },

    {
        studentId: 3,
        studentName: "Priya",
        studentAge: 24
    }
];

console.log(studentRecords);

for (const studentRecord of studentRecords) {
    console.log(studentRecord.studentName);
}