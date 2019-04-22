/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
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
                phrase: 'Treehouse is awesome'
            },
            {
                phrase: 'vampires and werewolves'
            },
            {
                phrase: 'Alice in Wonderland'
            },
            {
                phrase: 'Hundred days of code'
            }
        ];
    }
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return new Phrase(this.phrases[randomPhrase]);
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        $('#overlay').hide();
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Handles onscreen keyboard & physical computer keyboard button clicks & keyup's
     * @param (letter) letter - actual letter that was clicked/released
     */
    handleInteraction(letter) {

        $(`.key:contains(${letter})`).attr('disabled', 'disabled');

        if (game.activePhrase.checkLetter(letter) === false) {
            $(`.key:contains(${letter})`).attr('class', 'wrong');
            this.removeLife();
        } else if (game.activePhrase.checkLetter(letter) === true) {
            $(`.key:contains(${letter})`).attr('class', 'chosen');
            game.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        // checking if <li> elements have a class 'hide letter'
        if ($('li').hasClass('hide letter')) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */

    removeLife() {

        this.missed++;
        if (this.missed == 1) {
            $('.tries').eq(0).find('img').attr('src', 'images/lostHeart.png');
        } else if (this.missed == 2) {

            $('.tries').eq(1, 0).find('img').attr('src', 'images/lostHeart.png');
        } else if (this.missed == 3) {

            $('.tries').eq(2, 1, 0).find('img').attr('src', 'images/lostHeart.png');
        } else if (this.missed == 4) {

            $('.tries').eq(3, 2, 1, 0).find('img').attr('src', 'images/lostHeart.png');
        } else if (this.missed >= 5) {
            this.gameOver(false);
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */

    gameOver(gameWon) {
        if (gameWon) {
            $('#overlay').show().attr('class', 'win');
            $('#game-over-message').text(`I'm thinking of a word for you that starts with "C" and ends in "ongratulations."`);
        } else {
            $('#overlay').show().attr('class', 'lose');
            $('#game-over-message').text('Better luck next time! 😿');
        }
    }
}