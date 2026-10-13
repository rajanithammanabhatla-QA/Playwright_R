const arr18: number[] = [10, 20, 30, 20, 40, 10, 50, 30];
const duplicates: number[] = new Array(arr18.length);
let k1 = 0;
for (let i = 0; i < arr18.length; i++) 
  {  let isDuplicate = false;
  let alreadyAdded = false;
  for (let j = i + 1; j < arr18.length; j++) 
    {    if (arr18[i] === arr18[j]) 
      {      isDuplicate = true;
      break;
    }
  }
  for (let m = 0; m < k1; m++) 
    {    if (duplicates[m] === arr18[i]) 
      {      alreadyAdded = true;
      break;
    }
  }
  if (isDuplicate && !alreadyAdded) 
    {    duplicates[k1] = arr18[i];
    k1++;
  }
}
console.log("Duplicate elements:");
for (let i = 0; i < k1; i++) 
  {  console.log(duplicates[i]);
}