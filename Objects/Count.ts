class Students8
{    name: string;
    age: number;
    grade: string;
    email: string;
    constructor(name: string, age: number, grade: string, email: string) 
{       this.name = name;
        this.age = age;
        this.grade = grade;
        this.email = email;
    }
}
let student8: Students8[] = [
    new Students8 ("Raj", 20, "A", "raj@gmail.com"),
    new Students8 ("Anu", 22, "B", "anu@gmail.com"),
    new Students8 ("Kiran", 21, "A", "kiran@gmail.com"),
    new Students8 ("Ravi", 23, "C", "ravi@gmail.com"),
    new Students8 ("Meena", 19, "B", "meena@gmail.com")
];
console.log("Student Details :");
for (let s of student8) 
{   console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}
let total = student8.length;
console.log("Total number of students: " + total);