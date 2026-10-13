interface VehicleDetails {
    vehicleBrand: string;

    startVehicle(): void;
}

interface CarDetails extends VehicleDetails {
    numberOfDoors: number;

    driveCar(): void;
}

const carInformation: CarDetails = {

    vehicleBrand: "Toyota",

    numberOfDoors: 4,

    startVehicle(): void {
        console.log("Vehicle started");
    },

    driveCar(): void {
        console.log("Car is driving");
    }
};

console.log("Brand:", carInformation.vehicleBrand);
console.log("Doors:", carInformation.numberOfDoors);

carInformation.startVehicle();
carInformation.driveCar();