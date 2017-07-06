function calculateResult(){
  var firstNumber = parseInt(document.getElementById("first-number").value);
  var secondNumber = parseInt(document.getElementById("second-number").value);
  var operator = document.getElementById("operator").value;

  console.log(firstNumber+operator+secondNumber);

  switch(operator){
    case "+":
      return firstNumber + secondNumber;
      break;
    case "-":
      return firstNumber - secondNumber;
      break;
    case "*":
      return firstNumber * secondNumber;
      break;
    case "/":
      return firstNumber / secondNumber;
      break;
  }
}

function displayResult(number){
  document.getElementById("result").innerText = number;
}

var button = document.getElementById("calculate");

button.addEventListener("click", function(){
  var result = calculateResult();
  displayResult(result);
})