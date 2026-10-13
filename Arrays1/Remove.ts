const arr10: number[] = [10, 20, 30, 20, 40, 10, 50];
const uniqueArray: number[] = new Array(arr10.length);
let k7 = 0;
for (let i = 0; i < arr10.length; i++) 
    {  let alreadyExists = false;
  for (let j = 0; j < k7; j++) {
    if (uniqueArray[j] === arr10[i]) 
        {      alreadyExists = true;
      break;
    }
  }
  if (!alreadyExists) 
    {    uniqueArray[k7] = arr10[i];
    k7++;
  }
}
console.log("Array after removing duplicates:");
for (let i = 0; i < k7; i++) 
    {  console.log(uniqueArray[i]);
}