let numbers1 = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = numbers1.filter((value, index) => 
    {
  return numbers1.indexOf(value) === index;
});
console.log(uniqueNumbers);