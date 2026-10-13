let num = 8;
let i = 2;
let isPrime = true;
if (num <= 1) 
    {    isPrime = false;
} 
else
 {while (i < num)
 {   if (num % i === 0) 
{   isPrime = false;
            break;
        }
        i++;
    }
}

if (isPrime)
 {    console.log(num + " is a Prime Number");
} 
else 
{    console.log(num + " is not a Prime Number");
}

