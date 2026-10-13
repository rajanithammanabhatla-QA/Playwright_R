const arra16: number[] = [10, 20, 30, 40];
const arr16: number[] = [30, 40, 50, 60];
const common: number[] = new Array(arra16.length);
let k = 0;
for (let i = 0; i < arra16.length; i++) 
  {  let foundInArr2 = false;
  let alreadyAdded = false;
  for (let j = 0; j < arr16.length; j++) 
    {    if (arra16[i] === arr16[j]) 
      {      foundInArr2 = true;
      break;
    }
  }
  for (let m = 0; m < k; m++) 
    {    if (common[m] === arra16[i]) 
      {      alreadyAdded = true;
      break;
    }
  }
  if (foundInArr2 && !alreadyAdded) 
    {    common[k] = arra16[i];
    k++;
  }
}
console.log("Common elements:");
for (let i = 0; i < k; i++) 
  {  console.log(common[i]);
}