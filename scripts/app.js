const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guess');
let game1 



window.addEventListener("keypress", function(e){
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    renderGame();
});


const renderGame = () => {
  puzzleEl.innerHTML = ""
  guessEl.textContent = game1.statusMessage;
  game1.Puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  })
  

}

const startGame = async () => {
  const puzzle = await getPuzzle();
  console.log(puzzle);
  game1 = new Hangman(puzzle, 10);
  renderGame();
}

document.querySelector('#reset').addEventListener('click', startGame);


startGame()

