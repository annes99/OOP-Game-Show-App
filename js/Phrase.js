/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
       // $('ul').attr('class', 'ul');
        for(let i = 0; i < this.phrase.length; i++){

            if(this.phrase.charAt(i) !== ' '){
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
 }
