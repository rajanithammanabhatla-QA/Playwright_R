class AdvancedCalculator {
    calculate(firstNumber: number, secondNumber: number): number;
    calculate(
        firstNumber: number,
        secondNumber: number,
        operationType: string
    ): number;

    calculate(
        firstNumber: number,
        secondNumber: number,
        operationType?: string
    ): number {

        if (operationType === undefined) {
            return firstNumber + secondNumber;
        }

        switch (operationType) {
            case "add":
                return firstNumber + secondNumber;

            case "sub":
                return firstNumber - secondNumber;

            case "mul":
                return firstNumber * secondNumber;

            case "div":
                if (secondNumber === 0) {
                    throw new Error("Cannot divide by zero");
                }

                return firstNumber / secondNumber;

            default:
                throw new Error("Invalid operation type");
        }
    }
}

const advancedCalculatorObject = new AdvancedCalculator();

console.log(advancedCalculatorObject.calculate(10, 20));

console.log(advancedCalculatorObject.calculate(10, 20, "add"));
console.log(advancedCalculatorObject.calculate(20, 10, "sub"));
console.log(advancedCalculatorObject.calculate(10, 5, "mul"));
console.log(advancedCalculatorObject.calculate(20, 5, "div"));