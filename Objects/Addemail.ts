class Students5 
{  name: string;
    age: number;
    grade: string;
    email: string;
   constructor(name: string, age: number, grade: string) 
{      this.name = name;
        this.age = age;
        this.grade = grade;
        this.email = ""; 
    }
}
let students5: Students5[] = [
    new Students5("Raj", 20, "A"),
    new Students5("Anu", 22, "B"),
    new Students5("Kiran", 21, "A"),
    new Students5("Ravi", 23, "C"),
    new Students5("Meena", 19, "B")
];
console.log("Students before adding email:");
for (let s of students5) 
{    console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade );
}
for (let s of students5)
 {    s.email = s.name.toLowerCase() + "@gmail.com";
}
console.log("Students after adding email:");
for (let s of students5) 
{    console.log("Name: " + s.name + ", Age: " + s.age + ", Grade: " + s.grade + ", Email: " + s.email);
}
