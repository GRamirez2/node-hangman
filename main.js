// **** © George  Ramirez 2016 - Hangman written for Node.js ****

// ---------------File Notes---------------------------
// Logic for the game
// Running it will start the game
// App should END when you guess the word correct
// ----------------------------------------------------

var inquirer = require('inquirer');
var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');
var time = new Date().toDateString();

function startGame (){

    // Print instructions on screen
    console.log('\n***** Hello and welcome to HANGMAN 10.16.GR, today is '+time+' *****\n\nThe words you will be trying to guess in this game are under the topic:\n\n"NAMES AND NICKNAMES FOR A RUSTIC OR COUNTRIFIED PERSON"\n(from the Dictionary of American Regional English)\n\n');
    // Print blanks on screen
    game.
    // Print number of guesses left
    // Print wrong guesses

    // replace blank with correct guess
    // Message you loose if your count gets to 10
    // Message you win if all your guesses match the word selected 




}; /* END of startGame function */
startGame();