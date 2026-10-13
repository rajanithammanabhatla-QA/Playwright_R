let arr6 = [1, 2, 5];
console.log("Elements before :", arr6);
arr6.splice(2, 0, 3, 4);
console.log("Elements after Insert :",arr6);
arr6.splice(1, 2); 
console.log("Elements after Delete :" , arr6);