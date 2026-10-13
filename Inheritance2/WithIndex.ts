interface SubjectMarks {
    [subjectName: string]: number;
}

const studentMarks: SubjectMarks = {
    Maths: 90,
    Science: 85,
    English: 88,
    Computer: 95
};

console.log("Maths:", studentMarks.Maths);
console.log("Science:", studentMarks.Science);
console.log("Computer:", studentMarks.Computer);