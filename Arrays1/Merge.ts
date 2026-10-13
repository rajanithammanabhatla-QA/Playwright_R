const arra15: number[] = [10, 20, 30];
const arr15: number[] = [40, 50, 60];
const mergedArray: number[] = new Array(arra15.length + arr15.length);
let k3 = 0;
for (let i = 0; i < arra15.length; i++) 
    {  mergedArray[k3] = arra15[i];
  k3++;
}
for (let i = 0; i < arr15.length; i++) 
    {  mergedArray[k3] = arr15[i];
  k3++;
}
console.log("Merged array:", mergedArray);