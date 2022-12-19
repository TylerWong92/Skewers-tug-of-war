////////////////////////////////////////////////////////////////
//Game parameters

let score = 0;
const winScoreP1 = 10; // player 1 range 0~10 "win" at 10
const winScoreP2 = -10; // player 2 range 0~ -10 "win" at -10
const scoreDisplay = document.querySelector("h3"); // display current the score
//End
////////////////////////////////////////////////////////////////
//Game logic
//Function that listen to user input of player1 pressing "space" and player2 pressing ""up arrow""
//stop the loop if user input reach "winScoreP1" or "winScoreP2"

const gameLogic = document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && score < winScoreP1 && score > winScoreP2) {
    score++;
    console.log(score);
    scoreDisplay.innerText = score;
    //Player 1 Game logic
  } else if (
    event.code === "ArrowUp" &&
    score < winScoreP1 &&
    score > winScoreP2
  ) {
    score--;
    console.log(score);
    scoreDisplay.innerText = score;
    //Player 2 Game logic
  }
  if (score === winScoreP1) {
    scoreDisplay.innerText = "player 1 win!";
  } else if (score === winScoreP2) {
    scoreDisplay.innerText = "player 2 win!";
  }
});
//End
////////////////////////////////////////////////////////////////
//Create Computer if there no player 2

function setLevel() {
  setInterval(comInput, 1000);
}
// Execute the comInput function every 1000 milliseconds level 1

function comInput() {
  // computer press the up arrow key
  const event = new KeyboardEvent("keydown", {
    code: "ArrowUp",
  });
  document.dispatchEvent(event);
}
// prevent "space" from activate button
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
  }
});
//End
////////////////////////////////////////////////////////////////
