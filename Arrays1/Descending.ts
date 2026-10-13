const arr13: number[] = [40, 10, 30, 20, 50];
for (let i = 0; i < arr13.length; i++) 
    {  for (let j = 0; j < arr13.length - i - 1; j++) 
        {    if (arr13[j] < arr13[j + 1]) 
            {  let temp = arr13[j];
      arr13[j] = arr13[j + 1];
      arr13[j + 1] = temp;
    }
  }
}
console.log("Sorted array (Ascending):", arr13);