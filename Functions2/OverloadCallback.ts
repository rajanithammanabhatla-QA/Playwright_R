function Input(value: number, callback: (n: number) => number): number;
function Input(value: string, callback: (s: string) => string): string;
function Input(value: any, callback: any): any 
{    return callback(value);
}
console.log(Input(5, (n) => n * n));
console.log(Input("hello World", (s) => s.toUpperCase()));