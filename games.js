var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var gameWins = 0;
var gameLosses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var secretLetter;


var newLetter = function() {
   
secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

};

var guessesLeft = function() {

document.getElementById("left").innerHTML = "Guesses Left: " + left;

};

var soFar = function() {
    
document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guessesSoFar.join(",");

};

document.onkeyup = function(event) {
    
var userGuess = event.key;
    
soFar();
    
left--;

guessesSoFar.push(userGuess);
    
guessesLeft();

if (left > 0) {

if (userGuess == secretLetter) {

gameWins++;
document.getElementById("gameWins").innerHTML = "Wins:" + gameWins;     
reset();

}

} 

else if (left == 0) {

gameLosses++;
document.getElementById("gameLosses").innerHTML = "Losses:" + gameLosses; reset();

}

};

var reset = function() {
    
guessedLetters = [];
left = 9;
newLetter();
guessesLeft();
soFar();

}