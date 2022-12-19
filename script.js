////////////////////////////////////////////////////////////////
//Game parameters
let score = 0;
const winScoreP1 = 10; // player 1 range 0~10 "win" at 10
const winScoreP2 = -10; // player 2 range 0~ -10 "win" at -10
const scoreDisplay = document.querySelector("h3"); // display current the score

//Function that listen to user input of player1 pressing "space" and player2 pressing ""up arrow""
//stop the loop if user input reach "winScoreP1" or "winScoreP2"
const gameLogic = document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && score < winScoreP1 && score > winScoreP2) {
    score++;
    console.log(score);
    result.innerText = score;
  } else if (
    event.code === "ArrowUp" &&
    score < winScoreP1 &&
    score > winScoreP2
  ) {
    score--;
    console.log(score);
    result.innerText = score;
  }
  if (score === winScoreP1) {
    result.innerText = "player 1 win!";
  } else if (score === winScoreP2) {
    result.innerText = "player 2 win!";
  }
});
//End
////////////////////////////////////////////////////////////////
