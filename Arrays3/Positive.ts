let numbers = [2, 5, -3, 10];
let hasNegative = numbers.some(num => num < 0);
if (hasNegative) 
    {  console.log("Array contains a negative number");
} 
else 
    {  console.log("No negative numbers in the array");
}