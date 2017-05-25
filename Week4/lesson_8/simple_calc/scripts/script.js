alert("Welcome to the simple calculator.")

var a = parseInt(prompt("Give me your first number."));
var b = parseInt(prompt("Give me your second number."));
var operand = prompt("Do you want to add, subtract, multiply or divide?");

// if (operand === "add" || operand === "+") {
//   var result = a + b;
// } else if (operand === "subtract" || operand === "-") {
//   var result = a - b;
// } else if (operand === "multiply" || operand === "*") {
//   var result = a * b;
// } else if (operand === "divide" || operand === "/") {
//   var result = a / b;
// }

switch (operand) {
  case "+":
  case "add":
    var result = a + b;
    break;
  case "-":
  case "subtract":
    var result = a - b;
    break;
  case "*":
  case "multiply":
    var result = a * b;
    break;
  case "/":
  case "divide":
    var result = a / b;
    break;
}

alert("result is = " + result);