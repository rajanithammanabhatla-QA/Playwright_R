const arr9: string[] = ["apple", "BANANA", "mango", "GRAPES"];
const upperArray: string[] = new Array(arr9.length);
const lowerArray: string[] = new Array(arr9.length);
for (let i = 0; i < arr9.length; i++) 
    {  upperArray[i] = arr9[i].toUpperCase();
  lowerArray[i] = arr9[i].toLowerCase();
}
console.log("Uppercase array:");
for (let i = 0; i < upperArray.length; i++) 
    {  console.log(upperArray[i]);
}
console.log("Lowercase array:");
for (let i = 0; i < lowerArray.length; i++) 
    {  console.log(lowerArray[i]);
}