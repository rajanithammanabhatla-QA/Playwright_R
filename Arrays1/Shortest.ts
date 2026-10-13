const arr22: string[] = ["apple", "banana", "kiwi", "strawberry", "fig"];
let shortest = arr22[0];
for (let i = 1; i < arr22.length; i++) 
    {  if (arr22[i].length < shortest.length) 
        {    shortest = arr22[i];
  }
}
console.log("Shortest word:", shortest);