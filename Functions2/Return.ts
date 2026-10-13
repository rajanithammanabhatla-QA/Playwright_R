function operate(a: number): number;
function operate(a: number, b: number): number;

function operate(a: number, b?: number): number
{
return b !== undefined ? a * b : a * 2;
}

console.log(operate(5)); 
console.log(operate(5, 4));
