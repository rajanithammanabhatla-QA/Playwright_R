function calculator(a: number, b: number, operation: (x: number, y: number) => number): number;
function calculator(a: number, operation: (x: number) => number): number;
function calculator(a: number, operation: any, op?: any): number 
{ if (typeof operation === "function") 
{ return operation (a);
} 
else
 { return op(a, operation);
}
}
console.log(calculator(5, 3, (x, y) => x + y)); 
console.log(calculator(5, (x) => x * x)); 
console.log(calculator(5, 3, (x, y) => x - y));
console.log(calculator(5, 3, (x, y) => x / y));
console.log(calculator(5, 3, (x, y) => x % y));
