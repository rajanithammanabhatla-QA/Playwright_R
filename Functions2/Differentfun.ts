function compute(a: number): number;
function compute(a: number, b: number): number;
function compute(a: number, b?: number): number 
{
return b !== undefined ? a + b : a * a;
}
console.log(compute(5)); 
console.log(compute(5, 3));
