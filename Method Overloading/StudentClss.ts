class Student {
    getDetails(studentId: number): string;
    getDetails(studentId: number, studentName: string): string;
    getDetails(
        studentId: number,
        studentName: string,
        studentGrade: string
    ): string;

    getDetails(
        studentId: number,
        studentName?: string,
        studentGrade?: string
    ): string {

        if (studentName !== undefined && studentGrade !== undefined) {
            return `ID: ${studentId}, Name: ${studentName}, Grade: ${studentGrade}`;
        }

        if (studentName !== undefined) {
            return `ID: ${studentId}, Name: ${studentName}`;
        }

        return `ID: ${studentId}`;
    }
}

const studentObject = new Student();

console.log(studentObject.getDetails(101));
console.log(studentObject.getDetails(101, "Rajani"));
console.log(studentObject.getDetails(101, "Rajani", "A"));