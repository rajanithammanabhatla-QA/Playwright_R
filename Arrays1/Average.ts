const arr3: number[] = [10, 20, 30, 40, 50];
let sum1 = 0;
for (let i = 0; i < arr3.length; i++) 
    {sum1 += arr3[i];
}
const average = sum1 / arr3.length;
console.log('Average of array elements:', average)