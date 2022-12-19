////////////////////////////////////////////////////////////////
//1.Create a function that calculate 0-10 pressing "spacebar"

let dmgCount = 0;
const maxHealth = 10;
//Function that listen to user input of pressing "space"
//stop the loop if user input reach "maxHealth"
const dmgCounter = document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && dmgCount < maxHealth) {
    dmgCount++;
    console.log(dmgCount);
    printResult(dmgCount);
  }
});

// Function logic of the game

function printResult(dmgCount) {
  if (dmgCount === maxHealth) {
    console.log("you win!");
    dmgCount = 0;
  }
}

// // Game
// Const startPoint = 50;
// Const player1win = 0;
// Const player2win = 100;

// Let dmg = 1
// Event listener set space to dmg++

// Function dmgInput (player1, player2, com){
// player1.dmg++
// Player2.dmg- -
// com.dmg(var )//with case and break// create multiples

// }
