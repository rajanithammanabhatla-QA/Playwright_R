class Shape {
    calculateArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    override calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }

    override calculateArea(): number {
        return this.length * this.width;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log("Circle Area:", circle.calculateArea());
console.log("Rectangle Area:", rectangle.calculateArea());