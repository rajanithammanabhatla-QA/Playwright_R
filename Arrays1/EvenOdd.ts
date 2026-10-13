const arr5: number[] = [10, 15, 20, 25, 30, 35];
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr5.length; i++) 
    {  if (arr5[i] % 2 === 0) 
        {    evenCount++;
  } 
  else 
    {    oddCount++;
  }
}
console.log("Even count", evenCount);
console.log("Odd count", oddCount);