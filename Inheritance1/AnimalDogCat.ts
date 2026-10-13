class Animal {
    makeSound(): string {
        return "Animal makes a sound";
    }
}

class Dog extends Animal {
    override makeSound(): string {
        return "Bark";
    }
}

class Cat extends Animal {
    override makeSound(): string {
        return "Meow";
    }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makeSound());
console.log(cat.makeSound());