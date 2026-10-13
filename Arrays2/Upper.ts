const arr6: string[] = ["apple", "BANANA", "mango", "GRAPES"];
const upperArray = arr6.map(function(item) 
{  return item.toUpperCase();
});
const lowerArray = arr6.map(function(item) 
{  return item.toLowerCase();
});
console.log("Uppercase array:", upperArray);
console.log("Lowercase array:", lowerArray);