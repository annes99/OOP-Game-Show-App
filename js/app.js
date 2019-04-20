/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

$('#btn__reset').on('click', () => {
    $('#phrase ul').empty();
    $('.keyrow button').attr('disabled', false).attr('class', 'key');
    $('img').attr('src', 'images/liveHeart.png');
    game = new Game();
    game.startGame();
});

$('.keyrow').on('click', 'button', function( event ) {
    event.preventDefault();
    game.handleInteraction(this);
});
