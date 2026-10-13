const arr5: number[] = [10, 15, 20, 25, 30, 35, 40];
const evenNumbers = arr5.filter(function(num) 
{  return num % 2 === 0;
});
const OddNumbers = arr5.filter(function(num1)
{  return num1 % 2 !== 0;
});
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", OddNumbers);