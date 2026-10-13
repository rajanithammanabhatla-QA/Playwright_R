const arr8: number[] = [10, 20, 30, 20, 40, 20, 50];
const occur: number = 20;
let count = 0;
let found1 = false
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] === occur) 
    {    count++;
        found1 = true
  }
}
if (found1) 
    {  console.log("Number exists in array");
} 
else 
    {  console.log("Number does not exist in array");
}