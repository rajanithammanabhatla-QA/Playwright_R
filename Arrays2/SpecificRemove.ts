const arr11: number[] = [10, 20, 30, 40, 50];
const elementToRemove: number = 30;
const index = arr11.indexOf(elementToRemove);
if (index !== -1) 
    {  arr11.splice(index, 1);
  console.log("Updated array:", arr11);
} 
else 
    {  console.log(elementToRemove + " is not available in the array");
}