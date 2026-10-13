const arr13: number[] = [10, 15, 20, 25, 30];
const result1 = arr13.find(function(num) 
{  return num > 20;
});
if (result1 !== undefined) 
    {  console.log("First matching element:", result1);
} 
else 
    {  console.log("No matching element found");
}