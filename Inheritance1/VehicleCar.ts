class Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    displayInfo(): string {
        return `Brand: ${this.brand}, Speed: ${this.speed} km/h`;
    }
}

class Car extends Vehicle {
    fuelType: string;

    constructor(brand: string, speed: number, fuelType: string) {
        super(brand, speed);
        this.fuelType = fuelType;
    }

    carInfo(): string {
        return `${this.displayInfo()}, Fuel Type: ${this.fuelType}`;
    }
}

const car = new Car("Toyota", 180, "Petrol");

console.log(car.carInfo());