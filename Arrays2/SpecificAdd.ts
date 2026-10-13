const arr12: number[] = [10, 20, 30, 40, 50];
const elementToAdd: number = 25;
const position: number = 2; 
arr12.splice(position, 0, elementToAdd);
console.log("Updated array:", arr12);