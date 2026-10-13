class Students7
{   name: string;
    age: number;
    grade: string;
    email: string;
    constructor(name: string, age: number, grade: string, email: string) 
{      this.name = name;
        this.age = age;
        this.grade = grade;
        this.email = email;
    }
}
let student7: Students7[] = [
    new Students7 ("Raj", 20, "A", "raj@gmail.com"),
    new Students7 ("Anu", 22, "B", "anu@gmail.com"),
    new Students7 ("Kiran", 21, "A", "kiran@gmail.com"),
    new Students7 ("Ravi", 23, "C", "ravi@gmail.com"),
    new Students7 ("Meena", 19, "B", "meena@gmail.com")
];
console.log("Students details before sorting:");
for (let s of student7) 
    {console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}
student7.sort((a, b) => a.age - b.age);
console.log("Students sorted by Age:");
for (let s of student7) 
    {console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}