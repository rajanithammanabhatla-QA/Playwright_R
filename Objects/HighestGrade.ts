class Students3
 {name: string;
         age: number;
        grade: string;
       email: string;
       constructor(name: string, age: number, grade: string, email: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.email = email;
    }
}
let student3: Students3[] = [
    new Students3("Raj", 20, "B", "raj@gmail.com"),
    new Students3("Anu", 22, "A", "anu@gmail.com"),
    new Students3("Kiran", 21, "C", "kiran@gmail.com"),
    new Students3("Ravi", 23, "B", "ravi@gmail.com"),
    new Students3("Meena", 19, "D", "meena@gmail.com")
];
console.log("All Students Details :");
for (let s of student3) 
{    console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}
let topStudent = student3[0];
for (let s of student3) 
{ if (s.grade < topStudent.grade) 
{  topStudent = s;
    }
}
console.log("Top Student:", ", Name: " + topStudent.name, ", Age: " + topStudent.age, ", Grade: " + topStudent.grade,", Email: " + topStudent.email);