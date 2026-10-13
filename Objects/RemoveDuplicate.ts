    class Students6 
{   name: string;
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
let student6: Students6[] = [
    new Students6("Raj", 20, "A", "raj@gmail.com"),
    new Students6("Anu", 22, "B", "anu@gmail.com"),
    new Students6("Kiran", 21, "A", "kiran@gmail.com"),
    new Students6("Anu", 22, "B", "anu@gmail.com"), 
    new Students6("Raj", 20, "A", "raj@gmail.com")  
];
console.log("Before Removing Duplicates:");
for (let s of student6) 
{    console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}
let uniqueStudents: Students6[] = [];
for (let s of student6)
 {   let isDuplicate = false;
    for (let u of uniqueStudents) 
{       if (
            s.name === u.name &&
            s.age === u.age &&
            s.grade === u.grade &&
            s.email === u.email
        ) 
{            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) 
{        uniqueStudents.push(s);
    }
}
console.log("After Removing Duplicates:");
for (let s of uniqueStudents) 
{    console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}