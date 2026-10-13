const arr14: number[] = [30, 10, 50, 20, 40];
const ascending = arr14.slice().sort(function(a, b) 
{  return a - b;
});
const descending = arr14.slice().sort(function(a, b) 
{  return b - a;
});
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);