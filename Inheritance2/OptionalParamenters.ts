interface WelcomeFunction {
    (customerName: string, customerAge?: number): string;
}

const welcomeMessage: WelcomeFunction = function (
    customerName: string,
    customerAge?: number
): string {

    if (customerAge !== undefined) {
        return `Hello ${customerName}, you are ${customerAge} years old.`;
    }

    return `Hello ${customerName}.`;
};

console.log(welcomeMessage("Rajani"));
console.log(welcomeMessage("John", 30));