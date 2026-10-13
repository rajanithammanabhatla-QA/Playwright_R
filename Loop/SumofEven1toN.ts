let N = 20;  
  let sum1 = 0;

  for (let i = 1; i <= N; i++) 
    {    if (i % 2 === 0) 
        {      sum1 += i;
    }
  }

  console.log(`Sum of even numbers from 1 to ${N}:`, sum1);