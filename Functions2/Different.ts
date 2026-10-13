function different(value: number, callback: (n: number) => number): number;
function different (value: string, callback: (s: string) => string): string;

function different (value: any, callback: any): any {
return callback(value);
}
console.log(different (4, (n) => n + 10)); 
console.log(different ("hi", (s) => s.repeat(3)));
