alert("Welcome to the game!");

var age = parseInt(prompt("But first, how old are you?"));
var colourRange = ["white", "black", "red", "yellow", "orange", "green", "blue", "purple"];
var randomNumber = Math.floor(Math.random()*colourRange.length);
var computerChoice = colourRange[randomNumber];

if( age <= 18 ){
  alert("You're way too young for this game.");
}
else{
  var colour = prompt("What colour am I thinking of?");
  while ( colour.toLowerCase() != computerChoice ) {
    colour = prompt("Wrong. What colour am I thinking of?")
  }
  else {
    alert("You've won! " + computerChoice + " is correct.")
  }
}