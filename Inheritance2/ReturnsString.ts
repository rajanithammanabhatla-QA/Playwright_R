interface FullNameFunction {
    (firstName: string, lastName: string): string;
}

const fullNameCreator: FullNameFunction = function (
    firstName: string,
    lastName: string
): string {
    return firstName + " " + lastName;
};

console.log(fullNameCreator("Rajani", "Thammanabhatla"));