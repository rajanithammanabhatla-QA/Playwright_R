class Greeter {
    greet(personName: string): void;
    greet(personName: string, personAge: number): void;

    greet(personName: string, personAge?: number): void {
        if (personAge !== undefined) {
            console.log(`Hello ${personName}, you are ${personAge} years old.`);
        } else {
            console.log(`Hello ${personName}, welcome!`);
        }
    }
}

const greeterObject = new Greeter();

greeterObject.greet("Rajani");
greeterObject.greet("Rajani", 25);