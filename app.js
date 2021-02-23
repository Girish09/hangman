const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guess');
const game1 = new Hangman('car parts', 2);
puzzleEl.textContent = game1.Puzzle;
guessEl.textContent = game1.statusMessage;

console.log(game1.status);



window.addEventListener("keypress", function(e){
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.Puzzle;
    guessEl.textContent = game1.statusMessage;
    console.log(game1.status)
});


getPuzzle().then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(`Error: ${err}`);
});
