// **** © George  Ramirez 2016 - Hangman written for Node.js ****

// ---------------File Notes---------------------------
// Selects the WORD for the user
// ----------------------------------------------------

exports.wordList = {
    wordBank : ['hillbilly','hick','hayseed','clodhopper','yokel','bumpkin','redneck','countryman','mossback','creole'],


    wordChoice : function (){

            var target = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
            // console.log(target)
            return target;
        }
}


