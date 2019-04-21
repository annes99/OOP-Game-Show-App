/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
// when 'Start Game' button is clicked it resets the gameboard and starts new Game

$('#btn__reset').on('click', () => {
    $('#phrase ul').empty();
    $('.keyrow button').attr('disabled', false).attr('class', 'key');
    $('img').attr('src', 'images/liveHeart.png');
    game = new Game();
    game.startGame();
});
// when button element is clicked, game.handleInteraction() method is triggered

$('.keyrow').on('click', 'button', function (event) {
    event.preventDefault();
    game.handleInteraction(this);
});


/* ** Add physical computer keyboard functionality **
 * Checking if there's a element with class="key" with current keyup value
 * if it's NOT undefined means the element exists and can be selected
 * if it IS undefined (empty collection) means the element, whith those attributes, doesn't exist
 * (has already class 'wrong' or 'chosen' and can't be selected)
 */
$(document).on('keyup', function (event) {
    if ($(`.key:contains(${event.key})`).val() !== undefined) {
        game.handleKeyboard(event.key);
        console.log(event.key);
    } else {
        event.preventDefault();
    }
});