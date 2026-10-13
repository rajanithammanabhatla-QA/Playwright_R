const arr20: string[] = ["apple", "banana", "avocado", "blueberry", "cherry"];
const letters: string[] = [];      
const groups: string[][] = [];     
for (let i = 0; i < arr20.length; i++) 
    {  const firstLetter = arr20[i][0];
  let index = letters.indexOf(firstLetter);
  if (index === -1) 
    {      letters.push(firstLetter);
    groups.push([arr20[i]]);
  } 
  else 
    {      groups[index].push(arr20[i]);
  }
}
for (let i = 0; i < letters.length; i++) 
    {  console.log(letters[i], ":", groups[i]);
}