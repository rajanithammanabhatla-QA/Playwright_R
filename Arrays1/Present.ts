const arra17: number[] = [10, 20, 30, 40];
const arr17: number[] = [30, 40, 50, 60];
const result: number[] = new Array(arra17.length);
let k5 = 0;
for (let i = 0; i < arra17.length; i++) 
    {  let found = false;
  for (let j = 0; j < arr17.length; j++) 
    {    if (arra17[i] === arr17[j]) 
        {      found = true;
      break;
    }
  }
  if (!found) 
    {    result[k5] = arra17[i];
    k5++;
  }
}
console.log("Elements in arr1 but not in arr2:");
for (let i = 0; i < k5; i++) 
    {  console.log(result[i]);
}
const result1: number[] = new Array(arr17.length);
let k6 = 0;
for (let i = 0; i < arr17.length; i++) 
    {  let found = false;
  for (let j = 0; j < arra17.length; j++) 
    {    if (arr17[i] === arra17[j]) 
        {      found = true;
      break;
    }
  }
  if (!found) 
    {    result1[k6] = arr17[i];
    k6++;
  }
}
console.log("Elements in arr2 but not in arr1:");
for (let i = 0; i < k6; i++) 
    {  console.log(result1[i]);
}