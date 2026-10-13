function checkNumber(n:number) 
{  if (n > 0) 
    { return 'Positive number';
  } 
  else if (n < 0) 
    { return 'Negative number';
  } 
  else { return 'Zero';
  }
}
let number = 5;  
  let result = checkNumber(number);
  console.log(result);