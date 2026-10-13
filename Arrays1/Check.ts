const arr6: number[] = [10, 20, 30, 40, 50];
const target: number = 80;
let found = false;
for (let i = 0; i < arr6.length; i++) 
    {  if (arr6[i] === target) 
        {    found = true;
    break;
  }
}
if (found) 
    {  console.log("Number exists in array");
} 
else 
    {  console.log("Number does not exist in array");
}