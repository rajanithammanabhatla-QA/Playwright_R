class Students1 
{   name: string;
    age: number;
    grade: string;
    email: string;
    constructor(name: string, age: number, grade: string, email: string) 
    {   this.name = name;
        this.age = age;
        this.grade = grade;
        this.email = email;
    }
}
    let student1 = new Students1("Raj", 20, "A", "raj@gmail.com");
console.log("Student Details:");
console.log("Name: " + student1.name);
console.log("Age: " + student1.age);
console.log("Grade: " + student1.grade);
console.log("Email: " + student1.email);