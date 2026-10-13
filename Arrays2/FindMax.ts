const arr2: number[] = [10, 25, 5, 40, 30];
const max = arr2.reduce(function(maxValue, current) 
{  if (current > maxValue) 
    {    return current;
  } 
  else 
    {    return maxValue;
  }
}, arr2[0]);
console.log("Maximum value:", max);
const min = arr2.reduce(function(minValue, current) 
{  if (current < minValue) 
    {    return current;
  } 
  else 
    {    return minValue;
  }
}, arr2[0]);
console.log("Manimum value:", min);