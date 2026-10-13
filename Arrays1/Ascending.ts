const arr12: number[] = [40, 10, 30, 20, 50];
for (let i = 0; i < arr12.length; i++) 
    {  for (let j = 0; j < arr12.length - i - 1; j++) 
        {    if (arr12[j] > arr12[j + 1]) 
            {  let temp = arr12[j];
      arr12[j] = arr12[j + 1];
      arr12[j + 1] = temp;
    }
  }
}
console.log("Sorted array (Ascending):", arr12);