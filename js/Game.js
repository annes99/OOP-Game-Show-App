/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase(); 
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */

    createPhrases() {
        return [{
            phrase: 'Life is like a box of chocolates'
        }, 
        {
            phrase: 'Caught with your hand in the cookie jar'
        },
        {
            phrase: 'Stephen Hawking'
        },
        {
            phrase: 'vampires and werewolves'
        },
        {
            phrase: 'Alice in Wonderland'
        }];
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase(){
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        $('#overlay').hide();
        const phrase = new Phrase(this.activePhrase.phrase); // to lower case ???? step 7
        phrase.addPhraseToDisplay();
        
    }
}