class Students4 
{  name: string;
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
let student4: Students4[] = [
    new Students4("Raj", 20, "B", "raj@gmail.com"),
    new Students4("Anu", 22, "A", "anu@gmail.com"),
    new Students4("Kiran", 21, "C", "kiran@gmail.com"),
    new Students4("Ravi", 23, "A", "ravi@gmail.com"),
    new Students4("Meena", 19, "B", "meena@gmail.com")
];
console.log("Students with Grade A:");
for (let s of student4)
 {    if (s.grade === "A")
 {    console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
    }
}