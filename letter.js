// **** © George  Ramirez 2016 - Hangman written for Node.js ****

// ---------------File Notes---------------------------
// CONSTRUCTOR
// RIGHT OR WRONG ANSWER
// prints to screen
// ----------------------------------------------------
// CONSTRUCTOR
function InWord(){

    this.check = function (userGuess, wordArray) {

            for (var i = 0; i < wordArray.length; i++) {
                
                    if(wordArray[i] == userGuess){
                        // console.log(wordArray[i])
                    return true;
                    }
            } 
            return false;
    }
};

// new CONSTRUCTOR
var LetterCheck = new InWord();

// export an object with the new constructor
exports.Letters={
    LetterCheck: LetterCheck
}