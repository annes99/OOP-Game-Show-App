/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click', ()=>{
    game = new Game();
    game.startGame();
});
// $('#btn__reset').on('click', () => {
//     game = new Game();
//     game.startGame();
// });