const arr19: number[] = [10, 20, 30, 20, 40, 10, 50, 30];
const visited: number[] = new Array(arr19.length);
let k2 = 0;
for (let i = 0; i < arr19.length; i++) 
  {  let alreadyVisited = false;
  for (let v = 0; v < k2; v++) 
    {    if (visited[v] === arr19[i]) 
      {      alreadyVisited = true;
      break;
    }
  }
  if (alreadyVisited) 
    {    continue;
  }
  let count = 1;
  for (let j = i + 1; j < arr19.length; j++) 
    {    if (arr19[i] === arr19[j]) 
      {      count++;
    }
  }
  console.log(arr19[i], "occurs", count, "times");
  visited[k2] = arr19[i];
  k2++;
}