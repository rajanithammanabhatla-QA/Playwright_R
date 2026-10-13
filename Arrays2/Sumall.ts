const arr1: number[] = [10, 20, 30, 40, 50];
const sum = arr1.reduce(function(total, current) 
{  return total + current;
}, 0);
console.log("Sum of all elements:", sum);