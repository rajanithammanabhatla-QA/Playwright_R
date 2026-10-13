function findLargest(l1:number, l2:number, l3:number) 
{ if (l1 >= l2 && l2 >= l3) 
    {    return l1;
  } 
  else if (l2 >= l1 && l2 >= l3) 
    { return l2;
  } 
  else 
    { return l3;
  }
}
  let num1 = 10;
  let num2 = 25;
  let num3 = 15;
  let largest = findLargest(num1, num2, num3);
  console.log('Largest number is :', largest);
