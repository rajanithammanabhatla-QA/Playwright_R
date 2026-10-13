interface CalculationFunction {
    (valueOne: number, valueTwo: number): number;
}

const multiplicationOperation: CalculationFunction = function (
    valueOne: number,
    valueTwo: number
): number {
    return valueOne * valueTwo;
};

console.log(multiplicationOperation(5, 4));