let x = 1231;        
let original = x;   
let reverse = 0;

while (x > 0) 
    {let d = x % 10;                 
    reverse = reverse * 10 + d;     
    x = (x / 10) | 0;               
}

if (original === reverse) 
    {    console.log("Palindrome Number");
} 
else 
    {    console.log("Not a Palindrome");
}