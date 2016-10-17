// **** © George  Ramirez 2016 - Hangman written for Node.js ****

// ---------------File Notes---------------------------
// Logic for the game
// Running it will start the game
// App should END when you guess the word correct
// ----------------------------------------------------

var inquirer = require('inquirer');
var fs = require('fs')

var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');
var time = new Date().toDateString();
var blanks = [];
var count = 15;
var wordToGuess;
var wordLength = 0;
var showBlanks;

function startGame (){

    // Print instructions on screen
    console.log('\n***** Hello and welcome to HANGMAN 10.16.GR, today is '+time+' *****\n\nThe words you will be trying to guess in this game are under the topic:\n\n"NAMES AND NICKNAMES FOR A RUSTIC OR COUNTRIFIED PERSON"\n(from the Dictionary of American Regional English)\n');
    // Print blanks on screen
    wordToGuess = game.wordList.wordChoice();
    // console.log(wordToGuess)
    wordLength = wordToGuess.length
    // console.log(wordLength);
    // console.log('The word you are trying to guess has '+wordLength+' letters. Good Luck!')

   for (var i = 0; i<wordToGuess.length; i++){
       blanks.push(" _ ");
   }
    // wordLength.forEach(blanks.push('_'));
    showBlanks = blanks.join("");
       
    // console.log(blanks)
    // console.log('\n'+showBlanks+'\n');

userguess(count);
}; /* END of startGame function */

function userguess(count){
    if (count > 0){

        inquirer.prompt({

            name : "guess",
            message : "The word you are trying to guess has "+wordLength+" letters.\n\n"+showBlanks+"\n\n\nGUESS A LETTER"

        })
        
    };

    if (count == 0){
        console.log("SORRY MY FRIEND YOU ARE OUT OF TURNS. BETTER LUCK NEXT TIME")
        return;
    }

}/**end of userguess */


startGame();