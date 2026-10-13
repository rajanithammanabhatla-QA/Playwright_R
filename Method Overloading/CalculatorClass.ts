class Calculator {
    add(firstNumber: number, secondNumber: number): number;
    add(firstNumber: number, secondNumber: number, thirdNumber: number): number;

    add(firstNumber: number, secondNumber: number, thirdNumber?: number): number {
        if (thirdNumber !== undefined) {
            return firstNumber + secondNumber + thirdNumber;
        }

        return firstNumber + secondNumber;
    }
}

const calculatorObject = new Calculator();

console.log(calculatorObject.add(10, 20));
console.log(calculatorObject.add(10, 20, 30));