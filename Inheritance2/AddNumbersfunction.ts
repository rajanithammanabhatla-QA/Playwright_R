interface AdditionFunction {
    (firstNumber: number, secondNumber: number): number;
}

const additionOperation: AdditionFunction = function (
    firstNumber: number,
    secondNumber: number
): number {
    return firstNumber + secondNumber;
};

console.log(additionOperation(10, 20));