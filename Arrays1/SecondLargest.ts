const arr14: number[] = [10, 25, 5, 40, 15];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < arr14.length; i++) 
    {  if (arr14[i] > largest) 
        {  secondLargest = largest;
    largest = arr14[i];
  } 
  else if (arr14[i] > secondLargest && arr14[i] !== largest) 
    {    secondLargest = arr14[i];
  }
}
console.log("Second largest element:", secondLargest);