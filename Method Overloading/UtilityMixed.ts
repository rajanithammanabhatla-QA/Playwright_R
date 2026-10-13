class Utility {
    combine(firstNumber: number, secondNumber: number): number;
    combine(firstText: string, secondText: string): string;
    combine(firstArray: string[], secondArray: string[]): string[];

    combine(
        firstValue: number | string | string[],
        secondValue: number | string | string[]
    ): number | string | string[] {

        if (
            typeof firstValue === "number" &&
            typeof secondValue === "number"
        ) {
            return firstValue + secondValue;
        }

        if (
            typeof firstValue === "string" &&
            typeof secondValue === "string"
        ) {
            return firstValue + secondValue;
        }

        if (
            Array.isArray(firstValue) &&
            Array.isArray(secondValue)
        ) {
            return [...firstValue, ...secondValue];
        }

        throw new Error("Invalid combination");
    }
}

const utilityObject = new Utility();

console.log(utilityObject.combine(10, 20));

console.log(utilityObject.combine("Hello ", "World"));

console.log(
    utilityObject.combine(
        ["Apple", "Mango"],
        ["Orange", "Banana"]
    )
);