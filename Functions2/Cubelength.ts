function transform(value: number): number;
function transform(value: string): number;

function transform(value: any): number 
{
if (typeof value === "number") 
{
return value * value * value;
} else {
return value.length;
}
}

console.log(transform(3)); 
console.log(transform("hello"));
