interface UserInformation {
    userName: string;
    userAge: number;
    userCity: string;
    emailAddress?: string;
}

const userInformation: UserInformation = {
    userName: "Rajani",
    userAge: 25,
    userCity: "Hyderabad",
    emailAddress: "rajani@example.com"
};

console.log(userInformation);