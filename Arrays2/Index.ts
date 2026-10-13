const arr10: number[] = [10, 20, 30, 40, 50];
const searchElement: number = 30;
const index = arr10.indexOf(searchElement);
if (index !== -1) 
    {  console.log(searchElement + " is found at index:", index);
} 
else 
    {  console.log(searchElement + " is not available in the array");
}