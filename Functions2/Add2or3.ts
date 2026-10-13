function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number 
{return c !== undefined ? a + b + c : a + b;
}
console.log(add(2, 3)); 
console.log(add(2, 3, 4));
