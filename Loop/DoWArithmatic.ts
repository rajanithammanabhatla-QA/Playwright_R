import * as readline from "readline-sync";
let choice: number = 0;
while (choice !== 5) 
{  console.log("\n--- Simple Calculator ---");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");
  choice = readline.questionInt("Enter your choice: ");
  if (choice >= 1 && choice <= 4) 
{    let num1 = readline.questionFloat("Enter first number: ");
    let num2 = readline.questionFloat("Enter second number: ");
    let result: number;
    switch (choice) 
{      case 1:
        result = num1 + num2;
        console.log("Sum of two Numbers :", result);
        break;
      case 2:
        result = num1 - num2;
        console.log("Subtraction of two Numbers :", result);
        break;
      case 3:
        result = num1 * num2;
        console.log("Multiplication of two Numbers :", result);
        break;
      case 4:
        if (num2 === 0) 
{  console.log("Error: Division by zero is not allowed.");
        }
 else
 {  result = num1 / num2;
          console.log("Division of two Numbers :", result);
        }
        break;
    }
  } 
else if (choice !== 5)
 {    console.log("Invalid choice. Please try again.");
  }
}
