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
var letterFunc = letter.Letters.LetterCheck
var arrayFunc = word.blanks.UpdatedBlanks

var time = new Date().toDateString();

// globals
var blanks = [];
var count = 15;
var wordToGuess;
var wordLength = 0;
var showBlanks;
var wordArray = [];
var wrongGuess = []

// // constructor for gamedata
// function GameData(wordToGuess, blanks, userGuess){
//     this.word = wordToGuess;
//     this.showBlanks = showBlanks;
//     this.userGuess = userGuess 
// };

// function that runs game
function startGame (){

    // Print instructions on screen
    console.log('\n***** Hello and welcome to HANGMAN 10.16.GR, today is '+time+' *****\n\nThe words you will be trying to guess in this game are under the topic:\n\n"NAMES AND NICKNAMES FOR A RUSTIC OR COUNTRIFIED PERSON"\n(from the Dictionary of American Regional English)\n');
    // Print blanks on screen
    wordToGuess = game.wordList.wordChoice();
    console.log(wordToGuess)
    wordLength = wordToGuess.length
    // console.log(wordLength);
    // console.log('The word you are trying to guess has '+wordLength+' letters. Good Luck!')
    wordArray = wordToGuess.split("");
    // console.log(wordArray);

   for (var i = 0; i<wordToGuess.length; i++){
       blanks.push(" _ ");
   }
    // wordLength.forEach(blanks.push('_'));
    showBlanks = blanks.join("");
       
    // console.log(blanks)
    // console.log('\n'+showBlanks+'\n');

userguess();
}; /* END of startGame function */

function userguess(){
                            
            inquirer.prompt({

                name : "guess",
                message : "The word you are trying to guess has "+wordLength+" letters.\n\n"+showBlanks+"\n\n\nGUESS A LETTER"

            }).then(function(answer){

                        var userGuess = answer.guess.toLowerCase();
                        // console.log(userGuess);
                        var test = letterFunc.check(userGuess,wordArray);
                        // console.log(test);
                             if (test){
                                    count --;
                                    showBlanks = arrayFunc.newBlanks(userGuess,blanks,wordArray); 
                                    // console.log(showBlanks)
                                    console.log(count + " Tries remaining.")
                                 
                                //  print new array to screen
                                // check to see if they won
                                // pring how many turns remaining
                                // check to see if they have turn remaining
                                userguess();
                             }else{
                                 count --;
                                 wrongGuess.push(userGuess);
                                 console.log("");
                                 console.log("Try again")
                                 console.log("");
                                 console.log("Wrong guesses include: "+ wrongGuess)
                                 console.log(count + " Tries remaining.")
                                 userguess();
                                }
                                // if not print how many turn remaining
                                // print a list of worng guesses


                        })

                    // else {
                    //     console.log("\n\nYOU LOST THIS GAME BECAUSE YOU ARE OUT OF TURNS. BETTER LUCK NEXT TIME")
                    //     return;
                    // }
            
            // if (count > 13){ 
            // }else{
            //     console.log("\nCareful, your selection was not a letter. That cost you a turn.\n")
            //     count --;
            //      userguess();
            // }

}/**end of userguess */


startGame();