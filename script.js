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
img = document.getElementById("myImage"); //move image
let x = 0;
//End
////////////////////////////////////////////////////////////////
//Game logic
//Function that listen to user input of player1 pressing "space" and player2 pressing ""up arrow""
//stop the loop if user input reach "winScoreP1" or "winScoreP2"
//Add button function to delay 3 second
function main() {
  const gameLogic = document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && score < winScoreP1 && score > winScoreP2) {
      score++;
      x -= 100;
      img.style.marginLeft = x + "px";
      console.log(score);
      scoreDisplay.innerText = score;
      //Player 1 Game logic
    } else if (
      event.code === "ArrowUp" &&
      score < winScoreP1 &&
      score > winScoreP2
    ) {
      score--;
      x += 100;
      img.style.marginLeft = x + "px";
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
}

function pvpBut() {
  setTimeout(function () {
    main();
  }, 3000);
  //!TODO add a count down gif popup
  console.log("count down start 3sec to game begin!");
}
//End
////////////////////////////////////////////////////////////////
//Create Computer if there no player 2
//Add a delay of 3 sec delay before running setInterval(comInput, str);
function computerBut(comInput, str) {
  setTimeout(function () {
    main();
    setInterval(comInput, str);
  }, 3000);
  //!TODO add a count down gif popup
  console.log("count down start 3sec to game begin!");
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
      str = 1000;
      console.log(`${str} case 1000`);
      break;
    case 1:
      str = 800;
      console.log(`${str} case 800`);
      //!TODO add a finish popup win1
      break;
    case 2:
      str = 600;
      console.log(`${str} case 600`);
      //!TODO add a finish popup win2
      break;
    case 3:
      str = 400;
      console.log(`${str} case 400`);
      //!TODO add a finish popup win3
      break;
    case 4:
      str = 200;
      console.log(`${str} case 200`);
      //!TODO add a finish popup win4
      break;
    case 5:
      str = 100;
      console.log(`${str} case 100`);
      //!TODO add a finish popup win5
      break;
    default:
      console.log(str);
      console.log(win);
      console.log(score + "what is current score");
      console.log(winScoreP1 + "winScoreP1");
  }
  score = 0;
  x = 0;
};
// End
////////////////////////////////////////////////////////////////
///Add a reset function in to the next level in my game
//test
