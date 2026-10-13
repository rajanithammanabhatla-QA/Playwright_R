const arr7: number[] = [10, 20, 30, 20, 40, 10, 50, 30];
const searchElement: number = 20; 
const countMap = arr7.reduce(function(acc: Record<number, number>, current) 
{  if (acc[current] === undefined) 
    {    acc[current] = 1;
  } 
  else 
    {    acc[current] = acc[current] + 1;
  }
  return acc;
}, {} );
if (countMap[searchElement] === undefined) 
    {  console.log(searchElement + " is not available");
} 
else 
    {  console.log(searchElement + " occurs " + countMap[searchElement] + " times");
}