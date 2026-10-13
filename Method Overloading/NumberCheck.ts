class NumberChecker {
    check(singleNumber: number): string;
    check(firstValue: number, secondValue: number): number;

    check(firstValue: number, secondValue?: number): string | number {
        if (secondValue !== undefined) {
            return firstValue > secondValue ? firstValue : secondValue;
        }

        return firstValue % 2 === 0 ? "Even" : "Odd";
    }
}

const numberCheckerObject = new NumberChecker();

console.log(numberCheckerObject.check(15));
console.log(numberCheckerObject.check(25, 40));