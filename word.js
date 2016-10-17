// **** © George  Ramirez 2016 - Hangman written for Node.js ****

// ---------------File Notes---------------------------
// * Needs to be a CONSTRUCTOR
// contain all the MEHTODS to check the letters guessed against the random word
// ----------------------------------------------------
// CONSTRUCTOR
function CorrectGuess(){

    this.newBlanks = function (userGuess, blanks, wordArray) {

            for (var i = 0; i < wordArray.length; i++) {
                
                    if(userGuess === wordArray[i]){
                       blanks.splice(i,1,userGuess)
                    //    console.log(blanks.join(""));
                    
                    }
            }return blanks.join(""); 
            
    }
};

// new CONSTRUCTOR
var UpdatedBlanks = new CorrectGuess();

// export an object with the new constructor
exports.blanks={
    UpdatedBlanks: UpdatedBlanks
}