interface AnimalBehavior {
    animalName: string;

    makeSound(): void;
}

class DogAnimal implements AnimalBehavior {

    animalName: string = "Dog";

    makeSound(): void {
        console.log("Dog barks");
    }
}

class CatAnimal implements AnimalBehavior {

    animalName: string = "Cat";

    makeSound(): void {
        console.log("Cat meows");
    }
}

const dogAnimal = new DogAnimal();
const catAnimal = new CatAnimal();

dogAnimal.makeSound();
catAnimal.makeSound();