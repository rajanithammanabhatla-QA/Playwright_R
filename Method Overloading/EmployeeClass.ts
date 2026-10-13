class Employee {
    calculateSalary(baseAmount: number): number;
    calculateSalary(baseAmount: number, bonusAmount: number): number;
    calculateSalary(
        baseAmount: number,
        bonusAmount: number,
        taxAmount: number
    ): number;

    calculateSalary(
        baseAmount: number,
        bonusAmount?: number,
        taxAmount?: number
    ): number {

        if (bonusAmount !== undefined && taxAmount !== undefined) {
            return baseAmount + bonusAmount - taxAmount;
        }

        if (bonusAmount !== undefined) {
            return baseAmount + bonusAmount;
        }

        return baseAmount;
    }
}

const employeeObject = new Employee();

console.log(employeeObject.calculateSalary(50000));
console.log(employeeObject.calculateSalary(50000, 5000));
console.log(employeeObject.calculateSalary(50000, 5000, 3000));