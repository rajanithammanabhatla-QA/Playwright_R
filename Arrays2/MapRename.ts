const arr15: number[] = [10, 15, 20, 25, 30];
const result = arr15
  .filter(function(num) 
  {    return num % 2 === 0;
  })
  .map(function(num) 
  {    return num * num;
  })
  .reduce(function(total, current) 
  {    return total + current;
  }, 0);
console.log("Result:", result);