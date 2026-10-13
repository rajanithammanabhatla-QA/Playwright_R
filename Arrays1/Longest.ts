const arr21: string[] = ["apple", "banana", "kiwi", "strawberry", "grapes"];
let longest = arr21[0];
for (let i = 1; i < arr21.length; i++) 
    {  if (arr21[i].length > longest.length) 
        {    longest = arr21[i];
  }
}
console.log("Longest word:", longest);