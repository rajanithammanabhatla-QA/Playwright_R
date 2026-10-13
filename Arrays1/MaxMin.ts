const arr4: number[] = [10, 25, 5, 40, 15];
let max = arr4[0];
let min = arr4[0];
for (let i = 1; i < arr4.length; i++) 
    {  if (arr4[i] > max) 
        {    max = arr4[i];
  }
  if (arr4[i] < min) 
    {    min = arr4[i];
  }
}
console.log("Maximum", max);
console.log("Minimum", min);

  