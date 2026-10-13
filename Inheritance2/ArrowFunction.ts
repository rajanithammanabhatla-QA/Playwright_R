interface SumFunction {
    (numberOne: number, numberTwo: number): number;
}

const sumCalculator: SumFunction = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};

console.log(sumCalculator(15, 25));