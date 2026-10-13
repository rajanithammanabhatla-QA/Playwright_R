class Shape {
    calculateArea(squareSide: number): number;
    calculateArea(rectangleLength: number, rectangleWidth: number): number;

    calculateArea(radius: number): number;

    calculateArea(firstDimension: number, secondDimension?: number): number {
        if (secondDimension !== undefined) {
            return firstDimension * secondDimension;
        }

        // For one parameter, calculate square area.
        return firstDimension * firstDimension;
    }
}

const shapeObject = new Shape();

console.log("Square Area:", shapeObject.calculateArea(5));
console.log("Rectangle Area:", shapeObject.calculateArea(10, 5));