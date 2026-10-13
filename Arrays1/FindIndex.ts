const arr7: number[] = [10, 20, 30, 40, 50];
const find: number = 40;
let index = -1;
for (let i = 0; i < arr7.length; i++) 
    {  if (arr7[i] === find) 
        {    index = i;
    break;
  }
}
if (index !== -1) 
    {  console.log("Element found at index", index);
} 
else 
    {  console.log("Element not found");
}