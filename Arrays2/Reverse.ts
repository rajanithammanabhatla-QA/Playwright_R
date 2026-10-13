const arr8: number[] = [10, 20, 30, 40, 50];
const reversed: number[] = new Array(arr8.length);
for (let i = 0; i < arr8.length; i++) 
    {  reversed[i] = arr8[arr8.length - 1 - i];
}
console.log("Reversed array:", reversed);