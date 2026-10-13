let x = 9875;
let max = 0;

while (x > 0) {
    let d = x % 10;   

    if (d > max) {
        max = d;      
    }

    x = (x / 10) | 0; 
}

console.log("Largest digit is:", max);