////////////////////////////////////////////////////////////////
//Gauge GUI TEST REMOVE AFTER

// End
////////////////////////////////////////////////////////////////
//Game parameters

let score = 0;
const winScoreP1 = 10; // player 1 range 0~10 "win" at 10
const winScoreP2 = -10; // player 2 range 0~ -10 "win" at -10
const scoreDisplay = document.querySelector("h3"); // display current the score
let str = 1000; // lower the number mean higher str
let win = 0; // count user winning streak
// let count = 0;

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
    nextLevel(); // Change to next level
  } else if (score === winScoreP2) {
    scoreDisplay.innerText = "player 2 win!";
  }
});
//End
////////////////////////////////////////////////////////////////
//Create Computer if there no player 2

function setLevel(comInput, str) {
  setInterval(comInput, str);
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
//Create parameters of the different level of the game. Var "strength",
//Create a counter function that count how many times a player 1 wins and increase the counter

const nextLevel = () => {
  win++;
  switch (win) {
    case 0:
      str = str;
      console.log(`${str} case 1000`);
      break;
    case 1:
      str = 800;
      console.log(`${str} case 800`);
      break;
    case 2:
      str = 600;
      console.log(`${str} case 600`);
      break;
    case 3:
      str = 400;
      console.log(`${str} case 400`);
      break;
    case 4:
      str = 300;
      console.log(`${str} case 300`);
      break;
    case 5:
      str = 200;
      console.log(`${str} case 200`);
      break;
    default:
      console.log(win);
      console.log(score + "what is current score");
      console.log(winScoreP1 + "winScoreP1");
  }
  score = 0;
};
// End
////////////////////////////////////////////////////////////////
///Add a reset function in to the next level in my game
