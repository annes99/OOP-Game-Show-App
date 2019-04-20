/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        // $('ul').attr('class', 'ul');
        for (let i = 0; i < this.phrase.length; i++) {

            if (this.phrase.charAt(i) !== ' ') {
                const elementLi = document.createElement('LI');
                elementLi.setAttribute('class', `hide letter ${this.phrase.charAt(i)}`);

                document.querySelector("ul").appendChild(elementLi);
                elementLi.textContent = `${this.phrase.charAt(i)}`;

            } else {
                const elementLi = document.createElement('LI');
                elementLi.setAttribute('class', 'hide space');
                document.querySelector("ul").appendChild(elementLi);

                elementLi.textContent = ' ';
            }
        }
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

    checkLetter(letter) {

        if (this.phrase.includes(letter) === true) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */

    showMatchedLetter(letter) {
        $(`.${letter}`).attr('class', `show letter ${letter}`);
    }
}
