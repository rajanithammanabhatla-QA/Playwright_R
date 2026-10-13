class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getStudentDetails(): string {
        return `${this.getDetails()}, Grade: ${this.grade}`;
    }
}

class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    getTeacherDetails(): string {
        return `${this.getDetails()}, Subject: ${this.subject}`;
    }
}

const student = new Student("Rahul", 16, "10th");
const teacher = new Teacher("Priya", 35, "Mathematics");

console.log(student.getStudentDetails());
console.log(teacher.getTeacherDetails());