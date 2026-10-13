const arr3: number[] = [10, 25, 5, 40, 30, 50];
const uniqueSorted = Array.from(new Set(arr3)).sort(function(a, b) 
{  return b - a;
});
const secondLargest = uniqueSorted[1];
console.log("Second largest number:", secondLargest);