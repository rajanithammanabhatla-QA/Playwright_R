interface UserProfile {
    username: string;
    age: number;
    location: string;
}

const userData: UserProfile = {
    username: "John",
    age: 30,
    location: "Bangalore"
};

console.log("Username:", userData.username);
console.log("Age:", userData.age);
console.log("Location:", userData.location);