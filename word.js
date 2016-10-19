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
                       blanks[i] = userGuess;
                    //    blanks.splice(i,1,userGuess)//this works fine, but the line above is easier to follow
                    //    console.log(blanks.join(""));
                    
                    }
            }return blanks.join(""); 
            
    },

    this.alreadyGuessed = function(userGuess, two){
        for (var i = 0; i < two.length; i++){
            if (userGuess === two[i]){
                
                return true;
            }
        }
        return false;
    }
};

// new CONSTRUCTOR
var UpdatedBlanks = new CorrectGuess();

// export an object with the new constructor
exports.blanks={
    UpdatedBlanks: UpdatedBlanks
}