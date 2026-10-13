let originalNumber: number = 12345; 
let num1 = originalNumber;
let reversed = 0;
while (num1 > 0) 
{    let digit = num1 % 10;          
    reversed = reversed * 10 + digit; 
    num1 = (num1 / 10) | 0;          
}
console.log("Original Number:", originalNumber);
console.log("Reversed Number:", reversed);
