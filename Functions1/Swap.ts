function Swap(s1:number, s2:number) 
{let tem=s1;
    s1=s2;
    s2=tem;
    return [s1,s2];
}
  let n1 = 10;
  let n2 = 25;
  console.log('Numbers before Swap :',n1, n2)
  let [newNum1, newNum2] = Swap(n1, n2);
  console.log('Numbers after Swap :', newNum1, newNum2);