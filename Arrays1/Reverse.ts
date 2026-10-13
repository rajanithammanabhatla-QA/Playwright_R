const arr11: number[] = [10, 20, 30, 40, 50];
const reversedArray: number[] = new Array(arr11.length);
let k4 = 0;
for (let i = arr11.length - 1; i >= 0; i--) 
    {  reversedArray[k4] = arr11[i];
  k4++;
}
console.log("Reversed array:");
for (let i = 0; i < k4; i++) 
    {  console.log(reversedArray[i]);
}