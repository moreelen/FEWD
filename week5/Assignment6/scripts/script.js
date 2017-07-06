window.onload = function(){
  // Makes sure the computer reads the html first before reading the javascript file.

  var player = "X";

  var winner = null;

  var turns = 0;

  var winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];
  // Arrays within arrays that contains all the winning combinations.

  function displayPlayerTurn(){
    document.getElementById("message").innerText = player + "'s turn to play!";
  }

  function checkWinner(){
    for (var i = 0; i < winning_combinations.length; i++){
      var combination = winning_combinations[i];
      // Grabs how many numbers there are in the array.
      // Eg. winning_combinations[0] returns [0,1,2].

      var values = [];
      // Every time we go through an array of 3 elements, this array will reset to empty.

      for (var j = 0; j < combination.length; j++){
        // Run through the arrays inside the arrays.

        // Plan is to check every cell and see waht value is in it.
        var value = document.getElementById("cell_" + combination[j]).innerText;

        values.push(value);
        // Fills the empty array values with the current value.
      }

      // console.log(combination, values);
      // Shows that the array values stores what value is in what box compared to all the winning combinations.

      if(values[0] === "X" && values[1] === "X" && values[2] === "X"){
        winner = "X";
      }
      else if(values[0] === "0" && values[1] === "0" && values[2] === "0"){
        winner = "0";
      }
      else if (turns === 9){
        document.getElementById("message").innerText = "It's a draw!"
      }
      // Seeks if there is a row of Xs or 0s in the array.

    }

    if (winner !== null){
      document.getElementById("message").innerText = "Player " + winner + " wins!";
      // Changes the text to who won.

      document.getElementById("restart").style.display = "block";
      // Display the restart button.
    }
    // At the end of checkWinner it checks to see if the value winner has changed from 0 and displays the winner.

  }

  var cells = document.querySelectorAll("#grid li")
  // Selects all cells inside #grid of type li and creates them as an array.

  for (var i = 0; i < cells.length; i++){
    // console.log(cells[i]);
    // Runs through each cell and prints the array on the console each time.
    // To check that the computer can detect each.
    
    var cell = cells[i];
    // Define a variable that stores the number of the current cell.

    cell.addEventListener("click", function(){
      // Turns that cell into a listener waiting for a click. Then executes the following:
      
      // console.log(player + " turn's");
      // Logs to console who is the player.

      if(this.innerText === "" && winner === null){
        // Checks to see if the inside of the cell clicked is empty.

        this.innerText = player;
        // Chanes the inside text of the cell clicked to the variable player. Aka who the current player is.
        // the tag this selects only the element that has been clicked.

        turns++;
        // Adds a turn every time the player clicks on a cell.
    
        player = player === "X" ? "0" : "X";
        // Ternary operator! Condition ? true : false;
        // True in this case is if. False is else. player = is assigning that value to the var player.
        // This flips the variable player from X to O. Alternating the player turns.

        displayPlayerTurn();

        checkWinner();
        // Checks winner every time there is a click. Function defined above.
      }

      

    });
  }

  document.getElementById("restart").addEventListener("click", function(){
    // Restart button is waiting for a click. When clicked execute the following fuction.

    turns = 0;
    player = "X";
    winner = null;
    // Reset all the variables defined at the start.

    var cells = document.querySelectorAll("#grid li")
    for (var i = 0; i < cells.length; i++){
      var cell = cells[i];
      cell.innerText = "";
    }
    // Resets the grid.

    displayPlayerTurn();
    // Resets the display message.

    document.getElementById("restart").style.display = "none";
    // Hides the restart button again.
  })

  displayPlayerTurn();
}