function computerChoice(){
  var options = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random()*3);
  return options[randomNumber];
}

function showResult(winner){
  if (winner === -1){
    alert("It's a draw!");
  } else {
    alert(resultOptions[winner] + " wins!");
  }
}

var resultOptions = ["player", "computer"];

var userNewGame = prompt("Do you want to play? (Y/N)");

while(userNewGame === "Y"){

  var computer = computerChoice();

  var winner = -1;

  var userChoice = prompt("Choose rock, paper or scissors.");

  switch(computer){
  case "rock":
    if(userChoice === "scissors"){
      var winner = 1;
    }
    else(userChoice.toLowerCase() === "paper"){
      var winner = 0;
    }
  break;
  case "scissors":
    if(userChoice === "paper"){
      var winner = 1;
    }
    else(userChoice.toLowerCase() === "rock"){
      var winner = 0;
    }
  break;
  case "paper":
    if(userChoice === "scissors"){
      var winner = 1;
    }
    else(userChoice.toLowerCase() === "rock"){
      var winner = 0;
    }
  break;
  }

  showResult(winner);

  var userNewGame = prompt("Do you want to play again (Y/N)");
}
