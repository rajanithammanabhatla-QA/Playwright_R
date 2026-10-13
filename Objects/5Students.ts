class Students2 
{name: string;
   	 age: number;
    	grade: string;
   	 email: string;
constructor(name: string, age: number, grade: string, email: string) 
{this.name = name;
        this.age = age;
        this.grade = grade;
        this.email = email;
    }
}
let student2: Students2[] = [
    new Students2("Raj", 20, "A", "raj@gmail.com"),
    new Students2("Anu", 22, "B", "anu@gmail.com"),
    new Students2("Kiran", 21, "A", "kiran@gmail.com"),
    new Students2("Ravi", 23, "C", "ravi@gmail.com"),
    new Students2("Meena", 19, "B", "meena@gmail.com")
];
console.log("Student List:");
for (let s of student2) 
{    console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}